# Pull Request

## Description
<!-- Provide a clear and concise description of your changes -->

## Type of Change
<!-- Mark the relevant option with an "x" -->
- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📝 Documentation update
- [ ] 🎨 Style/UI update (CSS, design changes)
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvement
- [ ] ✅ Test updates
- [ ] 🔧 Configuration change
- [ ] 🔒 Security update

## Changes Made
<!-- List the specific changes made in this PR -->
-
-
-

## Testing Checklist
<!-- Mark completed items with an "x" -->
- [ ] Code follows project style guidelines (`npm run lint` passes)
- [ ] TypeScript types are correct (`npm run typecheck` passes)
- [ ] Unit tests pass (`npm run test:unit`)
- [ ] E2E tests pass (`npm run test:e2e`)
- [ ] Tested locally in development mode
- [ ] Tested production build (`npm run build`)
- [ ] Manual testing completed
- [ ] Accessibility checked (keyboard navigation, screen reader)
- [ ] Mobile responsive design verified

## Accessibility
<!-- If this PR affects UI/UX, describe accessibility considerations -->
- [ ] N/A - No UI changes
- [ ] Keyboard navigation works correctly
- [ ] Screen reader tested
- [ ] Color contrast meets WCAG AA standards
- [ ] Focus indicators are visible
- [ ] ARIA labels are appropriate

## Performance Impact
<!-- If this PR affects performance, describe the impact -->
- [ ] N/A - No performance impact
- [ ] Lighthouse scores maintained (≥90)
- [ ] Bundle size checked (no significant increase)
- [ ] Images optimized

## Screenshots/Videos
<!-- If applicable, add screenshots or videos demonstrating the changes -->

## Related Issues
<!-- Link related issues using keywords: Fixes #123, Closes #456, Related to #789 -->
Fixes #

## Deployment Notes
<!-- Any special deployment considerations? Environment variables? Database migrations? -->
- [ ] No special deployment steps required
- [ ] Environment variables need updating (documented below)
- [ ] Requires Vercel redeploy
- [ ] Sanity schema changes need deployment

### Environment Variables Required
<!-- List any new or changed environment variables -->
```bash
# Example:
# NEW_ENV_VAR=value
```

## Checklist for Reviewer
<!-- Items the reviewer should focus on -->
- [ ] Code is readable and well-commented
- [ ] No security vulnerabilities introduced
- [ ] No sensitive data exposed
- [ ] Error handling is appropriate
- [ ] No console.log statements left in production code
- [ ] Git history is clean (no WIP commits, squashed if needed)

## Additional Notes
<!-- Any additional context, decisions made, or things to watch out for -->

