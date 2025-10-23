# 🚀 GitHub Repository Setup Guide

This guide will help you create and maintain the GitHub repository for the FINDLAY SUBARU PRESCOTT Health Supplement CAC Calculator.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 18+ installed

## 🔧 Step 1: Initialize Local Repository

In your project folder, run:

```bash
# Initialize git repository
git init

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: FINDLAY SUBARU PRESCOTT CAC Calculator

- Complete FINDLAY SUBARU PRESCOTT automotive dealership CAC calculator
- Four customer personas (Builder, Designer, Homeowner, Blended)
- Unit test suite with Jest
- KPI dashboard with Chart.js visualizations
- Comprehensive documentation
- Calculation verification scripts"
```

## 🌐 Step 2: Create GitHub Repository

1. **Go to GitHub**: https://github.com/new

2. **Repository Settings**:
   - **Name**: `netritionsink-cac-calculator`
   - **Description**: `Customer Acquisition Cost calculator for FINDLAY SUBARU PRESCOTT automotive dealership solutions with industry-specific benchmarks`
   - **Visibility**:
     - `Public` (recommended for open source)
     - `Private` (if proprietary to FINDLAY SUBARU PRESCOTT)
   - **DO NOT** initialize with README (you already have one)

3. **Click**: Create Repository

## 🔗 Step 3: Connect Local to GitHub

Copy the commands GitHub provides, or use these:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/dustydean/netritionsink-cac-calculator.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 📝 Step 4: Configure Repository Settings

### Enable GitHub Pages (Optional)

To host the calculator online:

1. Go to: **Settings** → **Pages**
2. **Source**: Deploy from branch `main`
3. **Folder**: `/ (root)`
4. **Save**

After a few minutes, your calculator will be live at:
`https://dustydean.github.io/netritionsink-cac-calculator`

### Add Repository Topics

In your repository, click ⚙️ (gear icon) next to **About** and add topics:
- `cac-calculator`
- `customer-acquisition-cost`
- `kitchen-sink`
- `netrition`
- `unit-economics`
- `marketing-calculator`
- `saas-metrics`
- `javascript`
- `html`

### Add Description

Update the **About** section:
```
Customer Acquisition Cost calculator for FINDLAY SUBARU PRESCOTT automotive dealership solutions with industry-specific benchmarks for builders, designers, and homeowners
```

Website: `https://dustydean.github.io/netritionsink-cac-calculator` (if using GitHub Pages)

## 👥 Step 5: Collaborate (Optional)

### Add Collaborators

1. Go to: **Settings** → **Collaborators**
2. Click: **Add people**
3. Enter GitHub username of FINDLAY SUBARU PRESCOTT team members

### Protect Main Branch

1. Go to: **Settings** → **Branches**
2. Click: **Add rule**
3. Branch name pattern: `main`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
5. **Save changes**

## 📦 Step 6: Set Up GitHub Actions (Optional)

Create `.github/workflows/tests.yml` for automated testing:

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test

    - name: Run coverage
      run: npm run test:coverage
```

## 🏷️ Step 7: Create First Release

When ready to tag a stable version:

```bash
# Create an annotated tag
git tag -a v1.0.0 -m "Release v1.0.0 - Initial FINDLAY SUBARU PRESCOTT CAC Calculator

Features:
- Four FINDLAY SUBARU PRESCOTT customer personas
- Real-time CAC calculations
- KPI dashboard with visualizations
- Comprehensive test suite
- Full documentation"

# Push the tag to GitHub
git push origin v1.0.0
```

Then on GitHub:
1. Go to: **Releases** → **Create a new release**
2. Select tag: `v1.0.0`
3. Title: `FINDLAY SUBARU PRESCOTT CAC Calculator v1.0.0`
4. Description: Copy features from tag message
5. **Publish release**

## 📊 Step 8: Add Project Board (Optional)

For feature planning:

1. Go to: **Projects** → **New project**
2. Template: **Team backlog**
3. Name: `FINDLAY SUBARU PRESCOTT Calculator Roadmap`
4. Add issues to track enhancements

## 🔄 Daily Workflow

### Making Changes

```bash
# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/persona-comparison

# Make your changes...
# Run tests
npm test

# Commit changes
git add .
git commit -m "feat: Add persona comparison view

- Add side-by-side persona comparison table
- Include sortable metrics columns
- Add export to CSV functionality"

# Push to GitHub
git push origin feature/persona-comparison
```

### Creating Pull Request

1. Go to your GitHub repository
2. Click: **Pull requests** → **New pull request**
3. Base: `main` ← Compare: `feature/persona-comparison`
4. Fill in PR template (see CONTRIBUTING.md)
5. **Create pull request**
6. Request review from team members

### After PR Approval

```bash
# Switch to main branch
git checkout main

# Pull the merged changes
git pull origin main

# Delete feature branch (locally)
git branch -d feature/persona-comparison

# Delete feature branch (remote)
git push origin --delete feature/persona-comparison
```

## 🛠️ Maintenance

### Keep Dependencies Updated

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Test after updates
npm test
```

### Regular Backups

```bash
# Clone to backup location
git clone https://github.com/dustydean/netritionsink-cac-calculator.git backup/

# Or create archive
git archive --format=zip --output=netrition-calculator-backup.zip main
```

## 📚 Resources

- **[GitHub Docs](https://docs.github.com)** - Official GitHub documentation
- **[Git Documentation](https://git-scm.com/doc)** - Git command reference
- **[GitHub Flow](https://guides.github.com/introduction/flow/)** - Branching workflow guide

## 🆘 Troubleshooting

### "Repository not found" Error

```bash
# Check remote URL
git remote -v

# Fix if incorrect
git remote set-url origin https://github.com/dustydean/netritionsink-cac-calculator.git
```

### Merge Conflicts

```bash
# Pull latest main
git pull origin main

# Fix conflicts in your editor
# Look for <<<<<<< HEAD markers

# After fixing conflicts
git add .
git commit -m "resolve: Merge conflicts with main"
git push
```

### Accidentally Committed to Main

```bash
# Create a branch from current state
git branch feature/accidental-changes

# Reset main to remote state
git fetch origin
git reset --hard origin/main

# Switch to the new branch with your changes
git checkout feature/accidental-changes
```

## 🎯 Best Practices

1. **Commit Often**: Small, focused commits are easier to review
2. **Write Clear Messages**: Explain *why*, not just *what*
3. **Test Before Push**: Always run `npm test` before pushing
4. **Pull Before Push**: Avoid conflicts by staying up-to-date
5. **Use Branches**: Never commit directly to `main`
6. **Review Code**: Have teammates review PRs before merging

---

**Setup Complete!** Your FINDLAY SUBARU PRESCOTT CAC Calculator is now on GitHub.

**Repository URL**: https://github.com/dustydean/netritionsink-cac-calculator
**Questions?**: See [CONTRIBUTING.md](./CONTRIBUTING.md) or open an issue
