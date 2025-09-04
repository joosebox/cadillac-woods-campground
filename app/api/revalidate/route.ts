import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// This should match your webhook secret from Sanity or other CMS
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || 'your-secret-key';

interface RevalidateRequest {
  secret?: string;
  path?: string;
  tag?: string;
  type?: 'path' | 'tag';
}

export async function POST(request: NextRequest) {
  try {
    const body: RevalidateRequest = await request.json();
    
    // Verify the secret to ensure the request is legitimate
    if (body.secret !== REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      );
    }

    // Determine what to revalidate based on the request type
    if (body.type === 'tag' && body.tag) {
      // Revalidate by tag (useful for content types like blog posts, events, etc.)
      revalidateTag(body.tag);
      
      return NextResponse.json({
        revalidated: true,
        type: 'tag',
        tag: body.tag,
        now: Date.now(),
      });
    } 
    
    if (body.type === 'path' && body.path) {
      // Revalidate specific path
      revalidatePath(body.path);
      
      return NextResponse.json({
        revalidated: true,
        type: 'path',
        path: body.path,
        now: Date.now(),
      });
    }

    // Default: revalidate common pages when no specific type is provided
    const commonPaths = [
      '/',
      '/stays',
      '/amenities',
      '/gallery',
      '/policies',
      '/contact',
    ];

    commonPaths.forEach(path => revalidatePath(path));
    
    return NextResponse.json({
      revalidated: true,
      type: 'multiple',
      paths: commonPaths,
      now: Date.now(),
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    
    return NextResponse.json(
      { 
        message: 'Error revalidating',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Also support GET requests for manual testing
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const path = searchParams.get('path');
  const tag = searchParams.get('tag');
  
  if (secret !== REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: 'Invalid secret' },
      { status: 401 }
    );
  }

  try {
    if (tag) {
      revalidateTag(tag);
      return NextResponse.json({
        revalidated: true,
        type: 'tag',
        tag,
        now: Date.now(),
      });
    }
    
    if (path) {
      revalidatePath(path);
      return NextResponse.json({
        revalidated: true,
        type: 'path',
        path,
        now: Date.now(),
      });
    }

    // Default revalidation
    const commonPaths = ['/', '/stays', '/amenities', '/gallery', '/policies', '/contact'];
    commonPaths.forEach(p => revalidatePath(p));
    
    return NextResponse.json({
      revalidated: true,
      type: 'multiple',
      paths: commonPaths,
      now: Date.now(),
    });

  } catch (error) {
    console.error('Revalidation error:', error);
    
    return NextResponse.json(
      { 
        message: 'Error revalidating',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}