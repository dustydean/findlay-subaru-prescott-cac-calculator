# 🚗 Findlay Subaru Prescott - Lead Gen ROI Calculator

A laser-focused digital marketing calculator designed specifically for automotive dealership marketing directors. This tool answers the #1 question every marketing director needs to know: **"What's my target CPL, and am I hitting it?"**

**Live Calculator:** https://dustydean.github.io/findlay-subaru-prescott-cac-calculator/

---

## 🎯 What This Calculator Does

This is **NOT** a full business model calculator. This is a **digital marketing command center** that helps dealership marketing teams:

- ✅ **Calculate your Target CPL** based on profitability and funnel conversion rates
- ✅ **Know instantly if you're overspending** with traffic-light color coding
- ✅ **Reverse plan your budget** ("I need 50 sales → What's my required budget?")
- ✅ **Compare channel ROI** (Google vs. Meta vs. Cars.com vs. Autotrader)
- ✅ **Model scenarios** ("What if I improve close rate by 5%?")

---

## 🎭 Who This Is For

**Marketing Directors at automotive dealerships** who need to:
- Track daily: Cost per lead, lead volume, conversion rates
- Answer weekly: "What's our cost per sale this month?"
- Plan monthly: "What budget do I need to hit 50 sales?"
- Optimize quarterly: "Which channel gives me the best ROI?"

**NOT for:**
- CFOs (use a full P&L model)
- Sales Managers (they focus on close rates, not ad spend)
- Service Managers (different revenue stream)

---

## 📊 Key Metrics

### The Hero Metric: Target CPL

**Formula:**
```
Allowable Cost Per Sale = Gross Profit × Marketing %
Overall Conversion = Lead-to-Appt % × Show Rate % × Close Rate %
Target CPL = Allowable Cost Per Sale × Overall Conversion
```

**Example (Findlay Subaru Prescott defaults):**
- Gross Profit Per Sale: $4,800
- Acceptable Marketing Investment: 25%
- Allowable Cost Per Sale: $1,200
- Overall Conversion: 4.4% (28% × 68% × 23%)
- **Target CPL: $52.80**

### Status Indicators

- 🟢 **ON TARGET** - Current CPL ≤ Target CPL (room to spend more)
- 🟡 **CLOSE** - Current CPL 1-15% over target (minor optimization)
- 🔴 **OVERSPENDING** - Current CPL >15% over target (major optimization needed)

---

## 🚀 Quick Start

### For Marketing Directors

1. **Set Profitability Once** (ask your GM/Sales Manager):
   - Gross Profit Per Sale: ~$4,000-$6,000 for Subaru (includes front-end + F&I)
   - Acceptable Marketing %: 20-30% typical for dealerships

2. **Enter Your Lead Funnel** (what you track daily/weekly):
   - Cost Per Lead: Your actual CPL from ad platforms
   - Monthly Lead Volume: Total leads across all sources
   - Lead-to-Appointment %: BDC conversion rate
   - Show-Up Rate %: % of appointments that arrive
   - Close Rate %: % of showroom visits that buy

3. **Click Calculate**

4. **Get Your Answer:**
   - Giant display of your Target CPL
   - Instant red/yellow/green status
   - Clear recommendations: "Reduce CPL to $X OR improve close rate to Y%"

### For Developers

```bash
# Clone the repository
git clone https://github.com/dustydean/findlay-subaru-prescott-cac-calculator.git
cd findlay-subaru-prescott-cac-calculator

# Open in browser
open cac-calculator.html
```

That's it. Pure HTML/CSS/JavaScript. No dependencies, no build process.

---

## 🛠️ Features

### 1. Target CPL Calculator (The Hero)
- Calculates your maximum allowable CPL based on profitability
- Giant, bold display with traffic-light colors
- Current vs. Target comparison
- Smart recommendations for optimization

### 2. Lead Funnel Performance
12 key metrics displayed:
- Cost per lead → appointment → showroom visit → sale
- Monthly volumes at each funnel stage
- Overall conversion rate (industry benchmark: 2-5%)
- Monthly marketing spend and gross profit
- Actual ROAS

### 3. Funnel Visualization
Visual chart showing drop-off at each stage:
- Leads → Appointments → Showroom Visits → Sales
- Proportional bar widths (visual impact)
- Percentage displays at each stage

### 4. Reverse Planning Calculator
- Input: "I need X sales next month"
- Output:
  - Required lead volume
  - Budget at current CPL
  - Budget at target CPL
  - Potential monthly savings

### 5. Channel ROI Comparison
Compare 4 channels side-by-side:
- Google Ads
- Meta (Facebook/Instagram)
- Cars.com
- Autotrader

Enter CPL and lead-to-appointment % for each, see:
- Cost per sale for each channel
- Status badges (✅ On Target, ⚠️ Close, ❌ Over)
- AI insights: "Google has best ROI, shift budget from Autotrader"

### 6. Scenario Modeler
**What-If Analysis:**
- "What if close rate improves to 25%?" → See new target CPL
- "What if I negotiate CPL to $60?" → See impact on cost per sale
- Real-time calculations with clear impact messaging

---

## 📁 Project Structure

```
findlay-subaru-prescott-cac-calculator/
├── cac-calculator.html              # Main lead gen ROI calculator
├── cac-calculator-backup.html       # Backup of old version (e-commerce focused)
├── research/                        # Market research
│   └── findlay-subaru-prescott-research.pdf
├── README.md                        # This file
└── CALCULATOR-REDESIGN-DOCS.md     # Complete rewrite documentation
```

---

## 🎓 Why This Design?

### The Problem with the Old Calculator

The original calculator tried to be a **full business model**:
- 15+ input fields across 4 tabs
- Tax rates, invoice costs, vehicle pricing
- Repeat purchase rates, service LTV, customer lifetime profit
- LTV:CAC ratios, payback periods, contribution margins
- E-commerce concepts applied to lead-gen business

**Result:** Marketing directors ignored 90% of it.

### The Solution: Roleplay-Driven Design

We roleplayed as Sarah Martinez, Marketing Director at Findlay Subaru Prescott:

**Her Daily Questions:**
- "What's my target CPL?" → Giant hero section
- "Am I overspending?" → Color-coded status
- "What budget for 50 sales?" → Reverse planner
- "Which channel is best ROI?" → Channel comparison

**What She Doesn't Care About:**
- Tax rates (accounting's job)
- Invoice costs (GM's territory)
- Customer LTV 7 years out (focused on THIS quarter)
- Repeat purchases (won't be at dealership in 5-7 years)
- Service revenue (different P&L)

**Result:** Calculator she'll actually use daily.

---

## 📊 Default Values & Justification

All defaults based on Findlay Subaru Prescott research and automotive industry benchmarks:

### Profitability
- **Gross Profit Per Sale: $4,800**
  - Front-end margin: ~$2,850 (9% margin on $36,500 avg vehicle - $1,250 prep)
  - Back-end F&I: ~$1,500 (warranties, GAP, financing commission)
  - Realistic for Subaru mainstream brand

- **Acceptable Marketing %: 25%**
  - Industry standard: 20-30% of gross profit
  - Allows $1,200 max cost per sale

### Lead Funnel
- **Cost Per Lead: $70**
  - Subaru digital ads (Google, Meta, third-party sites): $50-$90 range
  - Mid-range estimate

- **Monthly Lead Volume: 280**
  - Target: 50+ vehicle sales/month for viable Subaru dealership
  - 280 leads → ~14 sales/month (conservative but realistic)

- **Lead-to-Appointment: 28%**
  - Industry: 20-30%
  - Findlay's community reputation + transparent pricing → higher end

- **Show-Up Rate: 68%**
  - Industry: 60-75%
  - Prescott smaller market + family-owned reputation → better show rates

- **Close Rate: 23%**
  - Subaru typical: 20-25%
  - Findlay's financing help + community ties → mid-high range

**Overall Conversion: 4.4%** (above industry 2-5% average)

---

## 🧮 Calculation Examples

### Example 1: ON TARGET ✅

**Inputs:**
- Gross Profit: $4,800, Marketing %: 25%
- CPL: $50, Lead-to-Appt: 30%, Show: 70%, Close: 25%

**Results:**
- Allowable Cost Per Sale: $1,200
- Overall Conversion: 5.25%
- **Target CPL: $63.00**
- Current CPL: $50
- **Status: 🟢 ON TARGET** (spending $13/lead under target)

**Recommendation:** Consider increasing CPL to $63 to capture more leads.

---

### Example 2: OVERSPENDING 🔴

**Inputs:**
- Gross Profit: $4,800, Marketing %: 25%
- CPL: $85, Lead-to-Appt: 25%, Show: 65%, Close: 20%

**Results:**
- Allowable Cost Per Sale: $1,200
- Overall Conversion: 3.25%
- **Target CPL: $39.00**
- Current CPL: $85
- **Status: 🔴 OVERSPENDING** ($46/lead over target, 118% above)

**Recommendations:**
- Reduce CPL from $85 to $39, OR
- Improve close rate from 20% to 43.6% (+23.6 points), OR
- Combination: Reduce CPL to $65 AND improve close rate to 28%

---

## 🎯 Use Cases

### Daily Operations
- Track CPL across all channels
- Monitor lead volume and funnel conversion
- Spot trends (show rate dropping? Lead quality issue?)

### Weekly Reviews
- "What's our cost per sale this week?"
- "Are we on track for monthly targets?"
- "Which channel is performing best?"

### Monthly Planning
- "I need 50 sales next month - what's my budget?"
- "Should I shift budget from Autotrader to Google?"
- "What happens if we improve our BDC lead-to-appointment rate?"

### Quarterly Strategy
- Channel performance comparison
- Scenario modeling for process improvements
- Budget allocation optimization

---

## 🔄 Changelog

### v2.0.0 - Complete Rewrite (2025-01-23)
**BREAKING CHANGE:** Complete redesign from business model calculator to lead-gen marketing tool.

**Removed:**
- All e-commerce concepts (tax rates, invoice costs, repeat purchases, LTV)
- Customer Metrics tab
- Financial Targets tab
- Business Basics tab
- Persona selector
- 15+ irrelevant input fields

**Added:**
- Target CPL hero section with traffic-light status
- Reverse planning calculator
- Channel ROI comparison table
- Scenario modeler (what-if analysis)
- Simplified 7-input interface (2 set once, 5 main focus)

**Changed:**
- From 2,500 lines to 1,300 lines (46% code reduction)
- From 4 tabs to simple scrolling interface
- From "business model" to "marketing command center"
- From CFO tool to Marketing Director tool

### v1.0.0 - Initial Fork
- Forked from Netrition e-commerce calculator
- Applied Findlay Subaru Prescott branding
- Updated personas for automotive context

---

## 🤝 Contributing

This calculator is designed for **one specific use case:** automotive dealership marketing ROI.

**Good contributions:**
- Better automotive industry benchmarks
- Additional channel types (TikTok, YouTube, etc.)
- Mobile UX improvements
- Calculation accuracy improvements

**Not a good fit:**
- Adding back e-commerce concepts
- Expanding to full business model
- Adding unrelated metrics (service revenue, parts sales, etc.)

See CALCULATOR-REDESIGN-DOCS.md for design philosophy.

---

## 📄 License

MIT License - See LICENSE file for details.

---

## 📞 Support

**For Findlay Subaru Prescott:**
- Calculator URL: https://dustydean.github.io/findlay-subaru-prescott-cac-calculator/
- Repository: https://github.com/dustydean/findlay-subaru-prescott-cac-calculator

**Technical Contact:**
- GitHub: @dustydean
- Issues: https://github.com/dustydean/findlay-subaru-prescott-cac-calculator/issues

---

**Calculator Version**: 2.0.0 - Lead Gen ROI Edition
**Last Updated**: January 2025
**Designed For**: Automotive Dealership Marketing Directors
**Specialized For**: Findlay Subaru Prescott
