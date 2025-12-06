# Contributing to Neymar Stats Dashboard

Thank you for considering contributing to this project! Here are some guidelines to help you get started.

## How to Contribute

### Reporting Bugs
- Use GitHub Issues to report bugs
- Include detailed steps to reproduce the issue
- Include screenshots if applicable
- Mention your browser and OS

### Suggesting Features
- Open a GitHub Issue with the "enhancement" label
- Clearly describe the feature and its benefits
- Include mockups or examples if possible

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`

3. **Make your changes**
   - Follow the existing code style
   - Use TypeScript for type safety
   - Add comments for complex logic
   - Test your changes locally

4. **Commit your changes**
   \`\`\`bash
   git commit -m "Add: brief description of changes"
   \`\`\`

5. **Push to your fork**
   \`\`\`bash
   git push origin feature/your-feature-name
   \`\`\`

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Include screenshots for UI changes

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow the existing component structure
- Use Tailwind CSS utility classes
- Keep components focused and reusable

### Component Guidelines
- Place reusable components in `/components`
- Use descriptive component names
- Include TypeScript interfaces for props
- Add proper error handling

### Data Updates
- When updating statistics, maintain data consistency
- Update all relevant charts and tables
- Verify calculations (Goals/90, averages, etc.)

### Testing
- Test on multiple screen sizes
- Verify chart interactions work correctly
- Check for console errors
- Test in different browsers

## Questions?

Feel free to open an issue for any questions about contributing!
