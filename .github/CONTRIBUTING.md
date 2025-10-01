# Contributing to Cadillac Woods Campground

Thank you for contributing! This guide will help you follow best practices.

## Development Workflow

### 1. Branch Strategy

We use **Git Flow** with feature branches:

```bash
main (production)
└── feat/your-feature-name
└── fix/bug-description
└── chore/maintenance-task
```

**Never commit directly to `main`!**

### 2. Starting New Work

```bash
# Make sure you're on main and up to date
git checkout main
git pull origin main

# Create a new feature branch
git checkout -b feat/your-feature-name

# Make your changes...

# Commit with conventional commit format
git commit -m "feat(scope): description"

# Push your branch
git push -u origin feat/your-feature-name

# Open a Pull Request on GitHub
```

### 3. Branch Naming Conventions

- `feat/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `chore/task-name` - Maintenance (deps, config)
- `docs/update-name` - Documentation only
- `test/test-description` - Test additions/updates
- `refactor/description` - Code refactoring
- `perf/optimization-name` - Performance improvements

### 4. Commit Message Format

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short description>

<optional longer description>

<optional footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```bash
feat(booking): add availability calendar component
fix(header): resolve mobile menu z-index issue
docs(readme): update installation instructions
chore(deps): upgrade Next.js to v15.5.3
test(booking): add unit tests for BookNowButton
```

### 5. Before Committing

Always run these checks:

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Format code
npm run format

# Run unit tests
npm run test:unit

# Run E2E tests (if applicable)
npm run test:e2e
```

### 6. Pull Request Process

1. **Create PR** - Use the PR template (auto-populated)
2. **Fill out template** - Complete all relevant sections
3. **Request review** - Assign a reviewer (if team)
4. **Address feedback** - Make requested changes
5. **CI passes** - Ensure all GitHub Actions pass
6. **Merge** - Squash and merge when approved

### 7. Code Review Guidelines

**As an Author:**
- Keep PRs small and focused (< 400 lines if possible)
- Write clear descriptions
- Include screenshots for UI changes
- Test thoroughly before requesting review
- Respond to feedback promptly

**As a Reviewer:**
- Be constructive and respectful
- Check for security issues
- Verify test coverage
- Test locally if needed
- Approve only when confident

## Code Standards

### TypeScript
- Always use types (no `any` unless absolutely necessary)
- Export types when shared across files
- Use interfaces for object shapes
- Use type for unions/intersections

### React Components
- Functional components with hooks
- Extract complex logic to custom hooks
- Use TypeScript for props
- Include JSDoc comments for complex components
- Follow single responsibility principle

### Styling
- Use Tailwind CSS utility classes
- Use shadcn/ui components where possible
- Follow mobile-first responsive design
- Maintain WCAG 2.1 AA accessibility

### File Naming
- Components: `PascalCase.tsx` (e.g., `BookNowButton.tsx`)
- Utilities: `camelCase.ts` (e.g., `analytics.ts`)
- Pages: `kebab-case` folders with `page.tsx`
- Types: `types.ts` or inline with component

### Accessibility Requirements
- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Alt text on images
- ✅ Color contrast WCAG AA
- ✅ Screen reader testing

### Performance Guidelines
- ✅ Lighthouse scores ≥ 90
- ✅ Optimize images (WebP, responsive)
- ✅ Lazy load components when appropriate
- ✅ Use Next.js Image component
- ✅ Minimize bundle size
- ✅ Use ISR for static content

## Testing Requirements

### Unit Tests (Vitest)
- Test all business logic
- Test React components
- Aim for >80% coverage on critical paths
- Mock external dependencies

### E2E Tests (Playwright)
- Test critical user flows
- Test booking journey
- Test navigation
- Test forms and validation

### Manual Testing
- Test in multiple browsers (Chrome, Firefox, Safari)
- Test on mobile devices
- Test keyboard navigation
- Test with screen reader (VoiceOver, NVDA)

## Environment Setup

### Required Environment Variables
```bash
# Copy example file
cp .env.example .env.local

# Fill in actual values
NEXT_PUBLIC_CAMPSPOT_BASE_URL=your-booking-url
NEXT_PUBLIC_GA4_ID=your-ga4-id
# ... etc
```

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
/app                    # Next.js App Router pages
  /(marketing)/        # Marketing pages group
  /api/                # API routes
/components            # Reusable React components
/lib                   # Utilities and helpers
/sanity/schemas        # Sanity CMS schemas
/tests                 # Test files
  /unit               # Vitest unit tests
  /e2e                # Playwright E2E tests
/public               # Static assets
```

## Common Issues

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### TypeScript Errors After Pull
```bash
# Clean build cache
rm -rf .next
npm run typecheck
```

### Lint Errors
```bash
# Auto-fix most issues
npm run lint -- --fix
npm run format
```

## Need Help?

- 📖 Read [CLAUDE.md](../CLAUDE.md) - Project operating guide
- 📋 Check [TASKS.md](../TASKS.md) - Current project status
- 🐛 Open an issue on GitHub
- 💬 Ask in team chat (if applicable)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Sanity CMS](https://www.sanity.io/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Remember:** Quality over speed. Take time to do it right! 🚀
