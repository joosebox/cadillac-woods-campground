export const dynamic = 'force-static';

export function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="#0f1a16"/>
    <path d="M32 10 18 37h8l-5 12h22l-5-12h8L32 10Z" fill="#d89a4d"/>
    <path d="M32 16 23 34h6l-4 9h14l-4-9h6L32 16Z" fill="#f7faf7"/>
  </svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
