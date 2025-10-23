# 🔀 Forking Guide: Adapting This Calculator for New Prospects

This guide will help you quickly and cleanly adapt this CAC calculator for a new prospect without making common mistakes or leaving behind old company references.

## 📋 Pre-Flight Checklist

Before you start, gather this information about your prospect:

- [ ] Company name (exact capitalization)
- [ ] Industry/product category
- [ ] 4 customer personas with descriptive names
- [ ] Realistic unit economics for each persona (AOV, margins, costs, etc.)
- [ ] Industry-specific terminology
- [ ] Company website/research materials

## 🚀 Step-by-Step Forking Process

### Step 1: Create New Repository

```bash
# Clone this repository
git clone https://github.com/dustydean/findlay-subaru-prescott-cac-calculator.git
cd findlay-subaru-prescott-cac-calculator

# Rename the directory to match your new prospect
cd ..
mv findlay-subaru-prescott-cac-calculator [prospect-name]-cac-calculator
cd [prospect-name]-cac-calculator

# Remove existing git history and start fresh
rm -rf .git
git init

# Clean up previous prospect's files
rm -rf correspondence/
mkdir correspondence

# Remove previous prospect's pitch documents
rm FINDLAY SUBARU PRESCOTT_Personas.md
rm FINDLAY SUBARU PRESCOTT_Pitch_and_Overview.md

# Remove previous prospect's root cause analysis (optional - keep for reference if desired)
rm ROOT-CAUSE-ANALYSIS.md

# Remove previous prospect's fork readiness analysis (optional)
rm FORK-READINESS-ANALYSIS.md

# Create new repository on GitHub
# Then connect it:
git remote add origin https://github.com/dustydean/[prospect-name]-cac-calculator.git
```

**Important:** These cleanup steps remove Findlay Subaru Prescott-specific files that shouldn't be carried forward to your new prospect. You'll create new versions of these files (personas, pitch docs, correspondence) specific to your new company.

### Step 2: Global Find & Replace Operations

**CRITICAL:** Use your code editor's "Find in Files" feature to replace ALL instances:

```bash
# Replace company name (case-sensitive!)
FINDLAY SUBARU PRESCOTT → [PROSPECT_NAME]
Findlay Subaru Prescott → [Prospect_Name]
netrition → [prospect_name]
findlay-subaru-prescott-cac-calculator → [prospect-name]-cac-calculator

# Replace industry terms
automotive dealership → [prospect_product]
sink → [product_short_name]
```

**Files to check manually after find/replace:**
- `README.md`
- `cac-calculator.html`
- `test-personas.html`
- `kpi-dashboard-demo.html`
- `verify-math.js`
- `research/README.md`
- `CONTRIBUTING.md`
- `GITHUB_ISSUES.md`
- `SETUP.md`
- `package.json` (update name, description)

### Step 3: Update Persona Data

**CRITICAL:** Update persona data in all three places to avoid inconsistencies:

#### 3A. Main Calculator (`cac-calculator.html`)

**Lines 1378-1427** - Update the `personaData` object:

```javascript
const personaData = {
    'persona-1-key': {
        name: 'Persona 1 Name',
        aov: 000,              // Average Order Value
        returnRate: 0,         // Return rate %
        cosPercent: 00,        // Cost of Sales %
        fulfillmentCost: 00,   // Fulfillment cost $
        gaPercent: 00,         // G&A %
        returningCustomers: 00, // Returning customer %
        repeatOrderRate: 0.0,  // Repeat order rate
        targetNetMargin: 00,   // Target net margin %
        taxRate: 0             // Tax rate %
    },
    // ... repeat for all 4 personas
};
```

**Lines 940-959** - Update persona card HTML:

```html
<div class="persona-card" data-persona="persona-1-key">
    <h3>Persona 1 Name</h3>
    <p>Detailed description of this persona's buying behavior and characteristics.</p>
</div>
```

**Lines 975-1026** - Update HTML form default values to match your "blended" or primary persona

**Line 1967** - Update auto-select to match your primary persona key:

```javascript
const blendedCard = document.querySelector('[data-persona="your-primary-persona-key"]');
```

**Lines 1832-1840** - Update resetForm() values to match default persona

#### 3B. Test Interface (`test-personas.html`)

Search for `const testPersonas = {` and update all persona data to match `cac-calculator.html`

#### 3C. Dashboard Demo (`kpi-dashboard-demo.html`)

Search for `const personaData = {` and update all persona data to match `cac-calculator.html`

### Step 4: Update Industry Terminology

**Critical files to review for industry-specific language:**

#### `README.md`
- [ ] Replace all automotive dealership terminology
- [ ] Update use cases to match prospect's industry
- [ ] Update example metrics and values
- [ ] Replace industry benchmarks

#### `research/README.md`
- [ ] Update market size/growth data
- [ ] Replace competitive landscape
- [ ] Update channel distribution
- [ ] Modify product mix insights

#### `CONTRIBUTING.md`
- [ ] Update industry terminology section
- [ ] Replace example commit messages
- [ ] Update customer segment descriptions

#### `GITHUB_ISSUES.md`
- [ ] Customize feature requests for prospect's industry
- [ ] Update use cases in issue templates

### Step 5: Update Research Materials

```bash
# Remove old research PDF
rm research/netrition-research.pdf

# Add new prospect research PDF
cp ~/path/to/[prospect]-research.pdf research/[prospect]-research.pdf

# Update research/README.md with new company info
```

### Step 6: Update Package Metadata

Edit `package.json`:

```json
{
  "name": "[prospect-name]-cac-calculator",
  "description": "Customer Acquisition Cost calculator for [PROSPECT] [product/service] solutions",
  "keywords": [
    "[prospect]",
    "[industry]",
    "cac-calculator",
    "customer-acquisition-cost"
  ]
}
```

### Step 7: Verification Checklist

Run through this checklist to catch common mistakes:

#### Code Search Verification
```bash
# Search for leftover company names (should return 0 results)
grep -r "FINDLAY SUBARU PRESCOTT" . --exclude-dir=node_modules --exclude-dir=.git
grep -r "Findlay Subaru Prescott" . --exclude-dir=node_modules --exclude-dir=.git
grep -r "netrition" . --exclude-dir=node_modules --exclude-dir=.git

# Search for leftover industry terms (should return 0 results except in this guide)
grep -r "automotive dealership" . --exclude-dir=node_modules --exclude-dir=.git --exclude="FORKING-GUIDE.md"
```

#### Manual Testing Checklist
- [ ] Open `cac-calculator.html` - does it show new prospect name in header?
- [ ] Are default form values appropriate for prospect?
- [ ] Is correct persona pre-selected on load?
- [ ] Do all 4 persona cards have new names and descriptions?
- [ ] Click each persona - does data load correctly?
- [ ] Click "Reset" button - does it reset to correct defaults?
- [ ] Open `kpi-dashboard-demo.html` - correct company name and metrics?
- [ ] Open `test-personas.html` - all personas updated?
- [ ] Check browser console for errors

#### Documentation Checklist
- [ ] README.md uses new company name throughout
- [ ] No references to old company in any .md files
- [ ] SETUP.md has correct repository URLs
- [ ] research/README.md matches new industry
- [ ] CONTRIBUTING.md has industry-specific examples

### Step 7A: Create Pitch Documents (OPTIONAL BUT RECOMMENDED)

Create pitch documents to use when presenting the calculator to your prospect on a call or in person.

#### Create `[PROSPECT]_Personas.md`

**Purpose:** Quick reference guide for the 4 customer personas used in the calculator.

**Template:**
```markdown
# [PROSPECT] Customer Personas (for Profit CAC Calculator)

## 1. [Persona 1 Name]
- [Brief description of who they are and what they buy]
- [Key buying behavior or frequency]
- [Known/preferred brands if applicable]
- **Motivator:** [Primary driver for purchase]

## 2. [Persona 2 Name]
- [Description]
- [Behavior]
- [Brands/preferences]
- **Motivator:** [Driver]

## 3. [Persona 3 Name]
- [Description]
- [Behavior]
- [Brands/preferences]
- **Motivator:** [Driver]

## 4. [Persona 4 Name]
- [Description]
- [Behavior]
- [Brands/preferences]
- **Motivator:** [Driver]
```

**What to Include:**
- Short, punchy descriptions (2-4 bullet points each)
- Focus on WHO they are, WHAT they buy, and WHY
- Use language from your research about the prospect
- Keep it to 1 page for quick reference during calls

#### Create `[PROSPECT]_Pitch_and_Overview.md`

**Purpose:** Comprehensive pitch document explaining the prospect's business, why the calculator fits, and the value proposition.

**Sections to Include:**

**1. Condensed One-Pager**
- Category, founding info, headquarters, sales channels
- Brand positioning (where they fit in the market)
- Product & pricing strategy
- Customer segments overview
- Digital experience highlights
- Marketing & channels summary
- Competitive landscape table
- Opportunities for pitch (why they need this calculator)

**2. Full Pitch Script**
- **Context:** Their business situation and complexity
- **Credibility:** Similar work you've done or relevant experience
- **What We Built:** What the calculator does specifically
- **Why It Fits [PROSPECT]:** How it solves their specific challenges
- **Example Insight:** A concrete example using their data
- **Close:** The value proposition in one sentence

**3. Customer Persona Deep Dive** (Optional but recommended)
- Detailed profile for each persona
- Shopping behavior patterns
- Pain points and motivations
- Why they choose this company
- Complete financial profile (AOV, margins, retention, etc.)

**4. Strategic Insights & Recommendations** (Optional)
- Key findings from the calculator
- Budget allocation strategy by persona
- Channel strategy recommendations
- Common pitfalls to avoid with their specific business

**Where to Get Information:**
- Your research PDF/materials in the `research/` folder
- Prospect's website (About page, product pages, blog)
- Competitor research and market analysis
- Customer reviews and testimonials
- Social media presence and content

**Pro Tips:**
1. **Use Their Language:** Mirror terminology from their website and industry
2. **Be Specific:** Reference their actual products, not generic examples
3. **Show You Did Homework:** Include specific details that prove you researched them
4. **Keep Credibility Section Honest:** Only reference truly relevant experience
5. **Example Insight Must Be Real:** Use actual numbers from your calculator, not made-up data

#### Checklist for Pitch Documents
- [ ] Created `[PROSPECT]_Personas.md` with all 4 personas
- [ ] Created `[PROSPECT]_Pitch_and_Overview.md` with complete sections
- [ ] Removed any references to old company/industry from templates
- [ ] Used prospect-specific language and terminology throughout
- [ ] Included actual financial data from your persona research
- [ ] Proofread for consistency with calculator persona names
- [ ] Added both files to git repository

**Time Estimate:** 45-90 minutes depending on depth of research available

### Step 7B: Enable Automatic System Theme Detection (OPTIONAL BUT RECOMMENDED)

The calculator now includes automatic detection of the user's system theme preference (light/dark mode). This feature is already built into the forked code, but you should verify it works correctly.

**What It Does:**
- Automatically detects user's system preference (`prefers-color-scheme: dark/light`)
- Applies theme immediately on page load (no flash of wrong theme)
- Listens for real-time system theme changes
- Works alongside the manual theme toggle button

**Verification Steps:**

1. **Test on macOS/Windows:**
   ```bash
   # Open calculator in browser
   open cac-calculator.html
   ```
   - Set your OS to dark mode → Calculator should load in dark mode
   - Set your OS to light mode → Calculator should load in light mode
   - Change OS theme while calculator is open → Theme should update instantly

2. **Check the code is present in `cac-calculator.html`:**

   **In `<head>` section (lines ~7-16):**
   ```html
   <script>
     // Set theme immediately to prevent flash of wrong theme
     (function() {
       const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
       if (prefersDark) {
         document.documentElement.setAttribute('data-theme', 'dark');
       } else {
         document.documentElement.setAttribute('data-theme', 'light');
       }
     })();
   </script>
   ```

   **In `<script>` section near end of file (lines ~1999-2006):**
   ```javascript
   // Listen for system theme changes
   if (window.matchMedia) {
     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
       isDarkMode = e.matches;
       document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
       if (themeToggle) themeToggle.textContent = isDarkMode ? '🌙' : '☀️';
     });
   }
   ```

**If It's Not Working:**

Common issues and fixes:
- **Flash of wrong theme:** IIFE must be in `<head>` before `<style>` tags
- **Theme not applying:** Must use `document.documentElement`, not `document.body`
- **Manual toggle conflicts:** Ensure `toggleDarkMode()` function also uses `document.documentElement`

**Checklist:**
- [ ] Verified theme detection works on your OS
- [ ] Tested switching OS theme while calculator is open
- [ ] Manual theme toggle button still works
- [ ] No flash of wrong theme on page load

**Time Estimate:** 5-10 minutes for verification

### Step 7C: Set Up Correspondence Folder (OPTIONAL BUT RECOMMENDED)

Create an organized structure for storing call transcripts, follow-up emails, and other prospect communications.

**Why This Matters:**
- Keeps pre-call materials (root level) separate from post-call communications
- Provides audit trail of prospect interactions
- Makes it easy to reference past conversations
- Date-stamped files for chronological tracking

**Setup:**

```bash
# Create correspondence directory
mkdir correspondence

# File naming convention: YYYY-MM-DD-[prospect-name]-[document-type]
# Examples:
# - 2025-10-22-acme-corp-call-transcript.txt
# - 2025-10-22-acme-corp-follow-up.md
# - 2025-10-25-acme-corp-second-call-notes.md
```

**What Goes in `/correspondence/`:**
- Call transcripts (`.txt`)
- Follow-up emails (`.md`)
- Meeting notes
- Email exchanges
- Any post-call communications

**What Stays in Root:**
- `[PROSPECT]_Personas.md` (pre-call reference)
- `[PROSPECT]_Pitch_and_Overview.md` (pre-call pitch)
- Calculator files (`.html`)
- Documentation files

**Directory Structure:**
```
/your-prospect-calculator/
├── cac-calculator.html
├── [PROSPECT]_Personas.md
├── [PROSPECT]_Pitch_and_Overview.md
├── correspondence/
│   ├── 2025-10-22-prospect-call-transcript.txt
│   ├── 2025-10-22-prospect-follow-up.md
│   └── 2025-10-25-prospect-second-meeting-notes.md
└── research/
```

**Checklist:**
- [ ] Created `/correspondence/` directory
- [ ] Documented file naming convention for team
- [ ] Added `.gitignore` entry if transcripts should stay private (optional)

**Time Estimate:** 2-3 minutes

### Step 7D: Create Follow-Up Email Template (OPTIONAL BUT RECOMMENDED)

After your initial call with the prospect, you'll want to send a quick follow-up email while the conversation is fresh. Having a template speeds this up significantly.

**When to Use:**
- Immediately after cold call or discovery call
- Within 1-2 hours of call completion
- Before prospect meets with their team/stakeholders

**Template Structure:**

Create `correspondence/YYYY-MM-DD-[prospect-name]-follow-up.md`:

```markdown
# Follow-Up Email to [Contact Name] - [PROSPECT]

---

**Subject:** [PROSPECT] CAC Calculator + Free Audit Offer

---

Hi [Name],

Thank you so much for taking the time to meet with me today. I really appreciated [specific thing they shared about their business/challenges].

## 🧮 [PROSPECT] Profit-Driven CAC Calculator

**Live Calculator:**
https://[your-github-username].github.io/[prospect]-cac-calculator/cac-calculator.html

**How It Works:**
[Brief explanation of the calculator and its purpose]

**4 Customer Personas Pre-Loaded:**
1. **[Persona 1]** – [Brief description] (AOV $X, X% retention, Xx repeats)
2. **[Persona 2]** – [Brief description] (AOV $X, X% retention, Xx repeats)
3. **[Persona 3]** – [Brief description] (AOV $X, X% retention, Xx repeats)
4. **[Persona 4]** – [Brief description] (AOV $X, X% retention, Xx repeats)

All the math is transparent—click the "+" icons to see exactly how every number is calculated.

## 💡 Key Topics We Discussed

[3-5 specific references to your conversation:]

**1. [Topic from call]**
[Your thoughts and potential solution]

**2. [Another topic]**
[Follow-up insights or ideas]

## 🎁 Free Audit Offer

I'd like to offer you a free audit of your choice:
- **Analytics Setup Audit** – Review tracking and attribution
- **Meta/Google Ads Account Audit** – Campaign structure and performance review
- **Promo Performance Audit** – Analyze historical promo data

No strings attached. Just want to be helpful and share what I see.

## 🚀 What's Next

I'm here as a resource whenever you need:
- Gut checks on campaign ideas
- Help modeling whether promos are worth running
- Technical questions
- Just someone to vent to about Q4 chaos 😅

Feel free to loop in [stakeholder name] on any of this.

## 📊 Quick Wins to Consider Right Now

Based on our conversation:
1. [Specific actionable item from call]
2. [Another specific recommendation]
3. [Third recommendation]

Wishing you a strong Q4.

Best,
**[Your Name]**
[Your Title]
[Your Contact Info]
```

**Key Elements:**
- ✅ Express gratitude early (first paragraph)
- ✅ Direct link to calculator with persona summary
- ✅ Reference 3-5 specific topics from the call
- ✅ Offer free audit (analytics/ads/promo)
- ✅ Include 3-5 quick wins they can act on
- ✅ Helpful tone, not pushy

**Pro Tips:**
1. **Send within 1-2 hours of call** – Strike while iron is hot
2. **Reference their exact words** – Shows you listened carefully
3. **Offer value before asking for business** – Builds trust
4. **Keep it scannable** – Use headers, bullets, bold text
5. **Save call transcript in `/correspondence/`** – Reference it when writing email

**Checklist:**
- [ ] Created follow-up template in `/correspondence/` folder
- [ ] Customized with prospect-specific details from call
- [ ] Included direct link to live calculator
- [ ] Referenced 3-5 specific call topics
- [ ] Offered free audit
- [ ] Proofread for typos and prospect name accuracy

**Time Estimate:** 20-30 minutes to draft after call

### Step 8: Initial Commit

```bash
# Stage all changes
git add .

# Create initial commit
git commit -m "Initial commit: [PROSPECT] CAC Calculator

- Complete CAC calculator for [PROSPECT] [product/service] solutions
- Four customer personas: [Persona 1], [Persona 2], [Persona 3], [Blended]
- Unit test suite with Jest
- KPI dashboard with Chart.js visualizations
- Comprehensive documentation
- Calculation verification scripts

Adapted from findlay-subaru-prescott-cac-calculator template.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to new repository
git branch -M main
git push -u origin main
```

## 🚨 Common Pitfalls to Avoid

### 1. **Inconsistent Persona Data**
- ❌ **Problem:** Persona data differs between cac-calculator.html, test-personas.html, and kpi-dashboard-demo.html
- ✅ **Solution:** Update all three files simultaneously, copy-paste the exact same values

### 2. **Wrong Default Values**
- ❌ **Problem:** Form loads with old company's default values
- ✅ **Solution:** Update BOTH the HTML input `value=""` attributes AND the `resetForm()` function

### 3. **Wrong Auto-Selected Persona**
- ❌ **Problem:** Wrong persona pre-selected on page load
- ✅ **Solution:** Update the `data-persona` selector in the auto-select code (line ~1967)

### 4. **Leftover Company References**
- ❌ **Problem:** Old company name appears in comments, documentation, or console logs
- ✅ **Solution:** Use grep/search to find ALL instances, including:
  - HTML comments `<!-- -->`
  - JavaScript comments `//` and `/* */`
  - Console.log statements
  - Error messages

### 5. **Industry-Specific Terminology**
- ❌ **Problem:** Using "sink" terminology for a software company
- ✅ **Solution:** Create a terminology mapping document before starting:
  ```
  automotive dealership → software platform
  undermount → enterprise tier
  topmount → standard tier
  gauge → feature set
  finish → UI/UX
  ```

### 6. **Unrealistic Unit Economics**
- ❌ **Problem:** Using automotive dealership margins ($370 AOV, 55% COS) for SaaS product
- ✅ **Solution:** Research prospect's industry benchmarks:
  - SaaS: 70-80% gross margins, $500-5000 AOV
  - E-commerce: 30-50% gross margins, $50-500 AOV
  - B2B Services: 40-60% gross margins, $2000-20000 AOV

### 7. **Forgetting Research Documentation**
- ❌ **Problem:** Leaving old company's research PDF in the repo
- ✅ **Solution:** Replace research PDF and update research/README.md

### 8. **Package.json Still Has Old Name**
- ❌ **Problem:** npm commands show old company name
- ✅ **Solution:** Update package.json name, description, and keywords

### 9. **Missing Industry Term Variations in Find-Replace**
- ❌ **Problem:** Replaced "kitchen sink" but missed "kitchen fixture" and "Premium Kitchen Fixture Solutions"
- ✅ **Solution:** Before starting, extract ALL industry term variations:
  ```bash
  # Find all variations of industry terms
  grep -oh "\b[Kk]itchen [a-z]*" *.html | sort -u
  grep -oh "\b[Ff]ixture [a-z]*" *.html | sort -u
  ```
  Create a comprehensive find-replace list covering:
  - Primary product term (e.g., "kitchen sink")
  - Category term (e.g., "kitchen fixture")
  - Brand positioning phrases (e.g., "Premium Kitchen Fixture Solutions")
  - Industry descriptions (e.g., "fixture manufacturers serving builders")
  - Target audience descriptions (e.g., "builders, designers, and homeowners")

## 📝 Quick Reference: Files That MUST Be Updated

| File | What to Update | Critical? |
|------|----------------|-----------|
| `cac-calculator.html` | Company name, persona data (3 places), default values, resetForm(), auto-select | ⚠️ CRITICAL |
| `test-personas.html` | Company name, persona data | ⚠️ CRITICAL |
| `kpi-dashboard-demo.html` | Company name, persona data, hardcoded metrics | ⚠️ CRITICAL |
| `verify-math.js` | Company name, persona data | ⚠️ CRITICAL |
| `README.md` | Entire file - company, industry, use cases, examples | ⚠️ CRITICAL |
| `research/README.md` | Entire file - market data, personas, benchmarks | ⚠️ CRITICAL |
| `CONTRIBUTING.md` | Industry terminology, examples, personas | 🟡 Important |
| `GITHUB_ISSUES.md` | Use cases, feature requests | 🟡 Important |
| `SETUP.md` | Repository URLs, company name | 🟡 Important |
| `package.json` | name, description, keywords | 🟡 Important |
| `research/*.pdf` | Replace with new company research | 🟡 Important |
| `[PROSPECT]_Personas.md` | Create new - 4 personas with motivators | 🟢 Recommended |
| `[PROSPECT]_Pitch_and_Overview.md` | Create new - full pitch document with insights | 🟢 Recommended |
| `cac-calculator.html` (theme detection) | Verify system theme detection works | 🟢 Recommended |
| `correspondence/` folder | Create directory for post-call communications | 🟢 Recommended |
| `correspondence/[date]-[name]-follow-up.md` | Create follow-up email after call | 🟢 Recommended |

## 🎯 Time Estimate

Following this guide should take:
- **Simple fork** (same industry): 30-45 minutes
- **Different industry**: 1-2 hours
- **Complex customization**: 2-4 hours
- **Add pitch documents**: +45-90 minutes
- **Verify theme detection**: +5-10 minutes
- **Set up correspondence folder**: +2-3 minutes
- **Create follow-up email after call**: +20-30 minutes

## 💡 Pro Tips

1. **Create a branch for cold pitch improvements:**
   ```bash
   git checkout -b cold-pitch-improvements
   ```
   This lets you easily roll back presentation-specific changes.

2. **Use a checklist tracker:**
   - Print this guide or keep it in a separate window
   - Check off items as you complete them
   - Don't skip the verification steps!

3. **Test in incognito/private browsing:**
   - Clears any cached old company data
   - Shows exactly what the prospect will see

4. **Keep the methodology note:**
   - Builds credibility for cold pitches
   - Shows you did research and analysis

5. **Document your persona assumptions:**
   - Add comments in code explaining data sources
   - Include in research/README.md for reference

## 🆘 Troubleshooting

**Problem:** Calculator shows wrong default values
- Check: HTML input `value=""` attributes
- Check: `resetForm()` function values
- Check: Auto-select persona code

**Problem:** Persona data doesn't match between pages
- Search all files for `personaData = {`
- Verify all three locations have identical values

**Problem:** Old company name still appears
- Run grep commands from verification checklist
- Check HTML comments and JavaScript comments
- Check console.log statements

**Problem:** KPI Dashboard shows wrong metrics
- Check hardcoded values in `kpi-dashboard-demo.html`
- Verify persona data matches main calculator

**Problem:** Theme detection not working
- Check: IIFE is in `<head>` before `<style>` tags
- Check: Using `document.documentElement` not `document.body`
- Check: Real-time listener is present at end of script
- Test: Switch OS theme while calculator is open

### 📋 Document Issues for Continuous Improvement

If you encounter issues during the forking process, document them for future reference:

**Create `ROOT-CAUSE-ANALYSIS.md` (optional):**

```markdown
# Root Cause Analysis: [Issue Description]

## Issue Reported
[What went wrong and when it was discovered]

## Root Cause
[Why it happened - be specific about the exact cause]

## What Happened
[Step-by-step description of the issue]

## How It Was Fixed
[What steps were taken to resolve it]

## Lessons Learned
[What to do differently next time]

## Recommendation for Forking Guide
[Suggest improvements to prevent this issue in future forks]
```

**When to Create Root Cause Analysis:**
- You missed references during find-replace operations
- Features didn't work as expected after forking
- Discovery of gaps in the forking guide
- Complex issues that took significant time to debug

**Benefits:**
- Improves the forking guide over time
- Helps team members avoid same mistakes
- Documents institutional knowledge
- Shows continuous improvement mindset

**Example Issues to Document:**
- Missed industry terminology variations
- Theme detection implementation challenges
- Persona data consistency across files
- Default value mismatches
- Auto-select persona issues

## 📚 Additional Resources

- [Original FINDLAY SUBARU PRESCOTT Calculator](https://github.com/dustydean/findlay-subaru-prescott-cac-calculator)
- [CAC Calculator Best Practices](https://github.com/dustydean/findlay-subaru-prescott-cac-calculator/blob/main/README.md)
- [Industry Benchmark Sources](https://github.com/dustydean/findlay-subaru-prescott-cac-calculator/blob/main/research/README.md)

---

**Questions or issues?** Open an issue or refer to the troubleshooting section above.

**Last Updated:** October 22, 2025
**Maintained By:** Dusty Dean

## 🆕 Changelog

### October 22, 2025
- Added Step 7B: Enable Automatic System Theme Detection
- Added Step 7C: Set Up Correspondence Folder
- Added Step 7D: Create Follow-Up Email Template
- Added Common Pitfall #9: Missing Industry Term Variations in Find-Replace
- Added troubleshooting section for theme detection issues
- Added root cause analysis documentation guidance
- Updated time estimates
- Updated quick reference table with new optional features
