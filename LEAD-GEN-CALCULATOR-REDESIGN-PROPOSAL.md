# Lead-Gen Calculator Redesign Proposal
## Findlay Subaru Prescott CAC Calculator

**Date:** October 23, 2025
**Repository:** https://github.com/dustydean/findlay-subaru-prescott-cac-calculator
**Current Calculator:** https://dustydean.github.io/findlay-subaru-prescott-cac-calculator/cac-calculator.html

---

## Executive Summary

The current calculator was forked from an **e-commerce template** designed for businesses that sell products directly online with immediate transactions. However, **Findlay Subaru Prescott operates a lead-generation model** where the goal is to drive qualified prospects to the dealership for in-person vehicle sales.

This fundamental business model mismatch means that while the calculator is functional, **it doesn't address the metrics that automotive marketing directors actually care about**.

This proposal presents **3 redesign options** ranging from light adaptation to complete rebuild, with recommendations based on your goals and timeline.

---

## The Problem: E-Commerce vs. Lead-Gen

### Current Calculator Assumes:
- ✅ Direct online purchase (add to cart, checkout)
- ✅ Immediate ROAS calculation
- ✅ High-frequency repeat purchases (monthly/quarterly)
- ✅ Average Order Value in hundreds of dollars
- ✅ Shopping cart abandonment concerns

### Findlay Subaru Prescott Reality:
- ❌ No online transactions - leads only
- ❌ Multi-week sales cycle (lead → appointment → test drive → sale)
- ❌ Infrequent repeat purchases (5-7 years between vehicles)
- ❌ Average Vehicle Price in tens of thousands of dollars
- ❌ Showroom visit / appointment no-shows are the concern

**Result:** The calculator works mathematically, but answers the wrong questions for your business.

---

## What Automotive Marketing Directors Actually Care About

Based on Findlay's research and automotive industry standards, here are the KPIs that matter:

### Top-of-Funnel Metrics:
1. **Cost Per Lead (CPL)** - What does each inquiry cost?
2. **Lead Source Performance** - Which channels (Google, Meta, organic) drive quality leads?
3. **Lead Quality Score** - Hot leads vs. tire-kickers

### Mid-Funnel Metrics:
4. **Lead-to-Appointment Rate** - % of leads that schedule showroom visits
5. **Appointment Show-Up Rate** - % that actually arrive
6. **Test Drive Conversion Rate** - % that take a test drive

### Bottom-Funnel Metrics:
7. **Showroom Visit-to-Sale Rate** - % of visits that result in vehicle purchase
8. **Days to Sale** - Average time from lead to signed deal
9. **Close Rate by Lead Source** - Which channels convert best?

### Financial Metrics:
10. **Average Vehicle Selling Price** - By model/segment
11. **Gross Profit Per Vehicle** - Front-end profit (vehicle sale)
12. **Back-End Profit** - Financing, warranties, add-ons
13. **Service Lifetime Value** - Maintenance/repair revenue over vehicle ownership

### ROI Metrics:
14. **Cost Per Appointment** - CPL ÷ lead-to-appointment rate
15. **Cost Per Sale** - Total marketing cost ÷ vehicles sold
16. **Return on Ad Spend (ROAS)** - But measured in weeks/months, not real-time
17. **Profit Per Marketing Dollar** - True profitability after all costs

---

## Option 1: Light Adaptation (Quick Fix)

**Approach:** Keep e-commerce structure, relabel fields, add lead-gen context

### Changes:
- Rename "Average Order Value" → "Average Vehicle Selling Price"
- Rename "Repeat Order Rate" → "Repurchase Rate (7-year horizon)"
- Add explanatory text: "Note: Repeat purchases in automotive happen every 5-7 years"
- Add "Service LTV" field to capture maintenance revenue
- Keep all existing calculations

### Pros:
- ✅ **Fast** - 2-3 hours of work
- ✅ **Low risk** - No structural changes
- ✅ Provides *some* automotive context
- ✅ Calculator still functions

### Cons:
- ❌ Still fundamentally answers e-commerce questions
- ❌ Doesn't address lead funnel stages
- ❌ No Cost Per Lead calculations
- ❌ Missing key automotive metrics (appointment rates, showroom conversion)
- ❌ May confuse users with misleading terminology

### Recommendation: ⚠️ **Only if time-constrained**

Use this if you need to present something tomorrow, but plan for Option 2 or 3 soon after.

**Time Estimate:** 2-3 hours
**Complexity:** Low

---

## Option 2: Hybrid Model (Recommended)

**Approach:** Keep calculator framework, add lead-gen funnel tracking alongside e-commerce metrics

### Changes:

#### New Section 1: Lead Funnel Metrics
- **Cost Per Lead (CPL)** input field
- **Monthly Lead Volume** input
- **Lead-to-Appointment Rate** (%)
- **Appointment Show-Up Rate** (%)
- **Test Drive Rate** (% of appointments)
- **Showroom-to-Sale Conversion** (%)

#### New Section 2: Vehicle Economics
- **Average Vehicle Selling Price** (replaces AOV)
- **Front-End Gross Profit** (vehicle sale margin)
- **Back-End Profit** (F&I, warranties, add-ons)
- **Service Lifetime Value** (maintenance over 5-7 years)

#### New Calculations:
- **Cost Per Appointment** = CPL ÷ Lead-to-Appointment Rate
- **Cost Per Showroom Visit** = Cost Per Appt ÷ Show-Up Rate
- **Cost Per Sale** = Cost Per Visit ÷ Conversion Rate
- **Total Customer Value** = Front-End + Back-End + Service LTV
- **Profit Per Sale** = Total Customer Value - Cost Per Sale - Vehicle Costs
- **Break-Even CPL** = Max CPL to achieve target profit margin

#### Keep From E-Commerce Model:
- Persona selector (4 customer segments)
- Presentation mode toggle
- Dark/light theme
- Calculation transparency (show formulas)
- Print/export functionality

#### Add New Visualizations:
- **Funnel Visualization** - Lead → Appt → Visit → Test Drive → Sale
- **Lead Source Comparison** - Compare CPL and conversion rates by channel
- **Time-to-Sale Chart** - Show sales cycle timeline
- **Profitability Waterfall** - Visual breakdown of where profit comes from

### Pros:
- ✅ **Best of both worlds** - Keeps working calculator, adds lead-gen specificity
- ✅ Answers automotive-specific questions
- ✅ Tracks full funnel (not just final sale)
- ✅ Maintains familiar UI/UX
- ✅ Provides actionable insights for marketing directors
- ✅ Moderate complexity - doable in 1-2 weeks

### Cons:
- ❌ More complex UI (more input fields)
- ❌ Requires user to understand full funnel
- ❌ May overwhelm users with too many metrics

### Recommendation: ✅ **RECOMMENDED**

This provides the most value with reasonable complexity. It respects the work already done while making the calculator truly useful for Findlay's business model.

**Time Estimate:** 12-20 hours (1-2 weeks part-time)
**Complexity:** Medium

---

## Option 3: Complete Rebuild (Nuclear Option)

**Approach:** Start fresh with lead-gen-first design, no e-commerce legacy

### Changes:

#### Clean Slate Redesign:
- Completely new UI focused on automotive lead funnel
- No "Average Order Value" or repeat purchase concepts
- Pure lead-gen metrics from top to bottom
- Industry-standard automotive terminology throughout

#### Primary Interface:
**Funnel Builder**
1. Enter lead source (Google Ads, Meta, Organic, etc.)
2. Enter CPL for that source
3. Enter conversion rates at each funnel stage
4. System calculates cost-per-sale and ROI

**Multi-Source Comparison**
- Side-by-side comparison of up to 5 lead sources
- Visual funnel drop-off chart
- Automatic identification of best-performing channels

**Scenario Planning**
- "What if" modeling: "If I improve appointment show-up rate by 10%, what happens to cost-per-sale?"
- Goal seeking: "What CPL do I need to hit $1000 cost-per-sale?"

#### Advanced Features:
- **Seasonal Adjustment** - Account for Q4 vs. Q1 sales variations
- **CRM Integration Simulation** - Model impact of better follow-up
- **Service LTV Calculator** - Detailed maintenance revenue projections
- **Trade-In Value Impact** - How trade-ins affect front-end gross profit
- **Financing Penetration** - Model back-end profit from F&I products

### Pros:
- ✅ **Purpose-built** for automotive lead-gen
- ✅ No confusing legacy terminology
- ✅ Most powerful and flexible
- ✅ Industry-leading tool for automotive marketing

### Cons:
- ❌ **Significant development time** - 40-60 hours (1-2 months)
- ❌ Throws away existing work
- ❌ High complexity and testing requirements
- ❌ Longer before you can use it

### Recommendation: ⚠️ **Only for long-term investment**

Choose this if you want a best-in-class tool and have the timeline/budget. Not recommended for immediate pitch needs.

**Time Estimate:** 40-60 hours (1-2 months part-time)
**Complexity:** High

---

## Detailed Comparison Matrix

| Feature | Current (E-Comm) | Option 1 (Light) | Option 2 (Hybrid) | Option 3 (Rebuild) |
|---------|------------------|------------------|-------------------|-------------------|
| **Time to Complete** | Done | 2-3 hrs | 12-20 hrs | 40-60 hrs |
| **Complexity** | N/A | Low | Medium | High |
| **Lead Funnel Tracking** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Cost Per Lead** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Appointment Metrics** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Showroom Conversion** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Multi-Source Compare** | ❌ No | ❌ No | ⚠️ Limited | ✅ Yes |
| **Automotive Terminology** | ❌ No | ⚠️ Partial | ✅ Yes | ✅ Yes |
| **Service LTV** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **Scenario Planning** | ❌ No | ❌ No | ⚠️ Basic | ✅ Advanced |
| **Funnel Visualization** | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| **User Confusion Risk** | High | Medium | Low | Very Low |
| **Pitch Ready** | ⚠️ Sorta | ⚠️ Sorta | ✅ Yes | ✅ Yes |
| **Long-Term Value** | Low | Low | High | Very High |

---

## My Recommendation: Option 2 (Hybrid Model)

### Why Option 2?

**1. Addresses Real Business Needs**
- Tracks the full lead funnel (not just final sale)
- Calculates Cost Per Lead, Cost Per Appointment, Cost Per Sale
- Provides insights marketing directors actually use

**2. Reasonable Timeline**
- 12-20 hours of focused work
- Can be completed in 1-2 weeks part-time
- Fast enough for pitch timelines

**3. Leverages Existing Work**
- Keeps the calculator framework that already works
- Reuses persona selector, theme detection, responsive design
- Adds value without throwing away progress

**4. Proven Pattern**
- This "progressive enhancement" approach is common in software
- Reduces risk vs. complete rebuild
- Easier to test and debug

**5. Future-Proof**
- Can always evolve to Option 3 later if needed
- But Option 2 will serve Findlay well for years

---

## Implementation Roadmap (Option 2)

### Phase 1: Core Lead-Gen Metrics (6-8 hours)

**Week 1, Days 1-2:**

✅ Add new input section: "Lead Funnel Metrics"
- Cost Per Lead (CPL)
- Monthly Lead Volume
- Lead-to-Appointment Rate (%)
- Appointment Show-Up Rate (%)
- Showroom-to-Sale Conversion (%)

✅ Add new calculations:
- Cost Per Appointment = CPL ÷ Lead-to-Appt %
- Cost Per Showroom Visit = Cost Per Appt ÷ Show-Up %
- Cost Per Sale = Cost Per Visit ÷ Conversion %

✅ Update output panel with lead-gen KPIs

### Phase 2: Vehicle Economics (4-6 hours)

**Week 1, Days 3-4:**

✅ Rename/restructure vehicle pricing section:
- "Average Vehicle Selling Price" (not AOV)
- "Front-End Gross Profit" ($)
- "Back-End Profit" (F&I, warranties)
- "Service Lifetime Value" (5-7 year horizon)

✅ Update profitability calculations:
- Total Customer Value = Front + Back + Service
- Profit Per Sale = Total Value - Cost Per Sale - Vehicle Costs
- Break-Even CPL calculator

### Phase 3: Visualizations (4-6 hours)

**Week 2, Days 1-2:**

✅ Add funnel visualization using Chart.js:
- Bar chart showing drop-off at each stage
- Lead → Appointment → Visit → Test Drive → Sale

✅ Add lead source comparison table:
- Compare multiple channels side-by-side
- Highlight best/worst performers

✅ Add profitability waterfall chart:
- Visual breakdown of where money comes/goes

### Phase 4: Polish & Documentation (2-4 hours)

**Week 2, Days 3-4:**

✅ Update all helper text and descriptions
✅ Create new persona descriptions (if needed)
✅ Update README with lead-gen focus
✅ Test all calculations
✅ Mobile responsiveness check
✅ Update GitHub Pages

---

## Automotive-Specific Metrics Deep Dive

For reference, here are typical automotive dealership benchmarks to use in the calculator:

### Lead-to-Sale Funnel (Typical Conversion Rates):

| Stage | Conversion Rate | Industry Benchmark |
|-------|----------------|-------------------|
| **Leads Generated** | 100% | Starting point |
| **Appoint**ment Scheduled** | 20-30% | 1 in 3-5 leads |
| **Appointment Shows Up** | 60-75% | 3 in 4 appointments |
| **Takes Test Drive** | 70-85% | Most showroom visits |
| **Purchases Vehicle** | 20-30% | 1 in 3-5 test drives |
| **Overall Lead-to-Sale** | 2-5% | 1 sale per 20-50 leads |

### Cost Benchmarks (Automotive Industry):

| Metric | Range | Notes |
|--------|-------|-------|
| **Cost Per Lead** | $25-$150 | Varies by source; Meta cheaper, Google Shopping higher |
| **Cost Per Appointment** | $100-$400 | Depends on lead quality |
| **Cost Per Sale** | $500-$2,000 | Fully-loaded marketing cost |
| **Front-End Gross** | $1,500-$4,000 | Profit on vehicle sale itself |
| **Back-End Profit** | $1,000-$2,500 | F&I products (financing, warranties) |
| **Service LTV** | $2,000-$5,000 | Maintenance over 5-7 years |
| **Total Customer Value** | $4,500-$11,500 | Front + Back + Service |

### Lead Sources (Typical CPL):

| Source | Typical CPL | Quality | Conversion |
|--------|------------|---------|-----------|
| **Google Ads (Search)** | $80-$150 | High | 4-6% |
| **Meta (Facebook/IG)** | $30-$70 | Medium | 2-4% |
| **Organic SEO** | $10-$40 | High | 5-8% |
| **Third-Party Sites** | $50-$120 | Medium | 3-5% |
| **Email/CRM** | $5-$20 | Very High | 8-12% |
| **Walk-Ins** | $0 | High | 15-25% |

---

## Success Metrics for Redesigned Calculator

How will we know Option 2 is successful?

### Quantitative Metrics:
1. **Calculator Usage** - Marketing director uses it weekly (not just once)
2. **Decision Impact** - Budget allocation changes based on calculator insights
3. **Pitch Success** - Helps win the Findlay account
4. **Sharing** - Findlay shares it with other dealerships in their group

### Qualitative Feedback:
1. "This actually makes sense for my business"
2. "I can see where my marketing dollars are going/wasted"
3. "This helps me justify budget to ownership"
4. "I wish I had this 6 months ago"

---

## Next Steps

### Immediate (Today):
1. ✅ Fork completed with e-commerce structure
2. ✅ Repository created: https://github.com/dustydean/findlay-subaru-prescott-cac-calculator
3. ✅ GitHub Pages live: https://dustydean.github.io/findlay-subaru-prescott-cac-calculator/cac-calculator.html
4. ⚠️ **Decide which option to pursue**

### Option 1 (Light Adaptation):
- Timeline: Tonight (2-3 hours)
- Ready to present: Tomorrow

### Option 2 (Hybrid Model) - RECOMMENDED:
- Timeline: 1-2 weeks (12-20 hours)
- Kick off: This week
- Beta ready: Next week
- Pitch ready: Week after next

### Option 3 (Complete Rebuild):
- Timeline: 1-2 months (40-60 hours)
- Planning phase: This month
- Development: Next month
- Beta ready: Month 3
- Pitch ready: Month 3-4

---

## Questions to Answer

Before proceeding, let's clarify:

**1. Timeline Constraints:**
- When do you plan to pitch Findlay?
- Is this for a scheduled call or ongoing relationship building?
- How quickly do you need a working calculator?

**2. Depth of Customization:**
- Do you want a quick adaptation (Option 1) to start conversations?
- Are you committed to making this best-in-class (Option 2/3)?
- Will this be used for multiple dealership pitches or just Findlay?

**3. Technical Preferences:**
- Continue with current vanilla JS approach?
- Open to using frameworks (React) for Option 3?
- Any specific visualization libraries you prefer?

**4. Content Needs:**
- Do you want me to draft pitch documents specific to lead-gen?
- Should I create automotive-specific personas for pitch deck?
- Need help with discovery questions for the call?

---

## My Proposed Action Plan

**If you agree with Option 2 (Hybrid Model):**

I can start **immediately** with Phase 1 (Core Lead-Gen Metrics). This would take 6-8 hours of focused work, which I could complete over 2-3 sessions.

**Deliverables after Phase 1:**
- Working lead funnel calculator
- Cost Per Lead, Cost Per Appointment, Cost Per Sale calculations
- Updated output panel with automotive-specific KPIs
- Functional prototype ready for internal review

**Then Phase 2-4** would complete the full hybrid model over the following week.

**Alternatively, if time is critical:**

I can do a **quick Option 1** adaptation tonight (2-3 hours) to make the current calculator more presentable, with the understanding that we'll pursue Option 2 afterward for a proper solution.

---

## Conclusion

The fork is **complete and functional**, but the current e-commerce calculator doesn't serve Findlay's lead-gen business model.

**My strong recommendation: Option 2 (Hybrid Model)** provides the best balance of timeline, functionality, and value. It transforms the calculator from "technically works" to "actually useful for automotive marketing directors."

Let me know which option you'd like to pursue, and I'll get started immediately.

---

**Ready to discuss or have questions?** Let's talk through the options and determine the best path forward for your Findlay Subaru Prescott pitch.
