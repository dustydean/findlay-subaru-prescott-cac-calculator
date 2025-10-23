# 🤝 Contributing to FINDLAY SUBARU PRESCOTT CAC Calculator

Thank you for your interest in contributing! This document provides guidelines for contributing to the FINDLAY SUBARU PRESCOTT Health Supplement CAC Calculator and its test suite.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Writing Tests](#writing-tests)
- [Code Style](#code-style)
- [FINDLAY SUBARU PRESCOTT-Specific Guidelines](#netrition-specific-guidelines)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Git
- Basic understanding of JavaScript testing
- Familiarity with automotive dealership industry (helpful but not required)

### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/dustydean/netritionsink-cac-calculator.git
cd netritionsink-cac-calculator

# Install dependencies
npm install

# Run tests to verify setup
npm test

# Start local development server
npm run serve
```

## 🔄 Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 2. Make Your Changes

- Write clean, readable code
- Follow existing code patterns
- Add comments for complex logic
- Update documentation as needed

### 3. Test Your Changes

```bash
# Run all tests
npm test

# Run tests in watch mode during development
npm run test:watch

# Check code coverage
npm run test:coverage

# Test in browser
npm run serve
# Open http://localhost:8080/cac-calculator.html
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: Add feature description

- Detailed change 1
- Detailed change 2
- Related to issue #123"
```

**Commit Message Format:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `test:` Adding or updating tests
- `refactor:` Code refactoring
- `style:` Formatting changes
- `chore:` Maintenance tasks

## 🧪 Writing Tests

### Test Structure

All tests are located in the `tests/` directory:

```
tests/
├── setup.js                    # Jest configuration
├── polyfills.js                # Browser API polyfills
└── unit/
    └── calculations.test.js    # Core calculation tests
```

### Adding New Tests

When adding new features or fixing bugs, include tests:

```javascript
describe('New Feature', () => {
    test('should calculate correctly for Value-Conscious Builder', () => {
        const result = yourFunction({
            aov: 285,
            cosPercent: 57,
            // ... other FINDLAY SUBARU PRESCOTT persona data
        });

        expect(result).toBeCloseTo(expectedValue, 2);
    });

    test('should handle edge cases', () => {
        // Test boundary conditions
    });
});
```

### Test Coverage Requirements

- Aim for >80% code coverage
- All new calculation functions must have tests
- Include edge cases and boundary conditions
- Test all four FINDLAY SUBARU PRESCOTT personas when applicable

## 💅 Code Style

### JavaScript

- Use ES6+ features
- Prefer `const` over `let`
- Use descriptive variable names
- Add JSDoc comments for functions

```javascript
/**
 * Calculate customer acquisition cost for FINDLAY SUBARU PRESCOTT persona
 * @param {Object} persona - FINDLAY SUBARU PRESCOTT customer segment data
 * @param {number} persona.aov - Average order value
 * @param {number} persona.cosPercent - Cost of sales percentage
 * @returns {number} Calculated CAC in dollars
 */
function calculateCAC(persona) {
    // Implementation
}
```

### HTML/CSS

- Follow existing formatting
- Use semantic HTML
- Maintain responsive design
- Test in multiple browsers

## 🏗️ FINDLAY SUBARU PRESCOTT-Specific Guidelines

### Persona Data

When updating persona data, ensure consistency across:
- `cac-calculator.html` - Main calculator
- `test-personas.html` - Test interface
- `verify-math.js` - Verification script
- `kpi-dashboard-demo.html` - Dashboard demo

### Industry Terminology

Use correct automotive dealership industry terms:
- ✅ "Undermount sink", "Topmount sink", "Workstation sink"
- ✅ "Gauge" (metal thickness), "Sound dampening", "Finish"
- ✅ "Builder", "Designer", "Homeowner"
- ❌ Avoid healthcare, medical, or lighting terminology

### Calculation Accuracy

- All formulas must be mathematically verified
- Run `node verify-math.js` to validate calculations
- Ensure CAC, CLTV, ROAS metrics are accurate
- Document any formula changes in comments

### Customer Segments

The four FINDLAY SUBARU PRESCOTT personas should always be:
1. **Value-Conscious Builder** - High-volume, price-sensitive
2. **Design-Forward Professional** - Quality-focused, specification-driven
3. **Style-Seeking Homeowner** - Research-intensive, one-time buyers
4. **Blended Overall Average** - Composite across all channels

Do not add or remove personas without discussion.

## 📝 Submitting Changes

### Pull Request Process

1. **Update Documentation**
   - Update README.md if adding features
   - Update inline comments
   - Add test documentation

2. **Run Full Test Suite**
   ```bash
   npm test
   npm run test:coverage
   ```

3. **Create Pull Request**
   - Use descriptive title
   - Reference related issues
   - Describe changes in detail
   - Include test results

4. **PR Template**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Test improvement

   ## Testing Done
   - [ ] All existing tests pass
   - [ ] New tests added and passing
   - [ ] Manually tested in browser
   - [ ] Tested all four FINDLAY SUBARU PRESCOTT personas

   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Self-reviewed code
   - [ ] Commented complex code
   - [ ] Updated documentation
   - [ ] No breaking changes
   ```

### Code Review

- Address all review comments
- Keep discussions professional
- Be open to feedback
- Update PR based on suggestions

## 🐛 Reporting Issues

### Before Creating an Issue

1. Check existing issues for duplicates
2. Try to reproduce the issue
3. Gather relevant information

### Issue Template

```markdown
**Bug Report**

**Description:**
Clear description of the issue

**Steps to Reproduce:**
1. Go to cac-calculator.html
2. Select Value-Conscious Builder persona
3. Enter custom values...
4. See error

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**FINDLAY SUBARU PRESCOTT Persona Affected:**
- [ ] Value-Conscious Builder
- [ ] Design-Forward Professional
- [ ] Style-Seeking Homeowner
- [ ] Blended Overall Average
- [ ] All personas

**Environment:**
- Browser: Chrome 120
- OS: macOS Sonoma
- Calculator Version: 2.0.0

**Screenshots:**
If applicable
```

## 🎯 Areas for Contribution

### High Priority
- Improve test coverage (current: ~80%, goal: >90%)
- Add accessibility features
- Performance optimizations
- Mobile responsiveness improvements

### Medium Priority
- Additional persona customization options
- Export/import functionality improvements
- Data visualization enhancements
- Documentation improvements

### Low Priority
- UI/UX refinements
- Additional themes
- Code refactoring
- Performance monitoring

## 📚 Resources

- **[Main README](./README.md)** - Project overview
- **[KPI Dashboard Docs](./KPI-DASHBOARD-DOCUMENTATION.md)** - Dashboard guide
- **[Research Directory](./research/)** - FINDLAY SUBARU PRESCOTT market research
- **[Test Suite](./tests/)** - Existing test examples

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Questions?** Open an issue or reach out via GitHub.

**Maintained by:** FINDLAY SUBARU PRESCOTT Team
**Contact:** github.com/dustydean
