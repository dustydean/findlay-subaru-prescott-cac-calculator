# GitHub Issues to Create

Copy and paste these into GitHub Issues at: https://github.com/dustydean/netritionsink-cac-calculator/issues/new

---

## Issue 1: Add User Notification System

**Title:** `🚨 Add user notification system for unrealistic business scenarios`

**Body:**
```markdown
## Problem
The calculator silently sets CAC to zero when target margins are too high, leaving users confused about why their results changed.

## Solution
Implement a notification system that warns users when:
- Target net margin is too high (causing negative CAC)
- Business parameters result in unrealistic scenarios
- Calculations are automatically adjusted

## Acceptance Criteria
- [ ] Display warning when `profitDrivenCAC < 0` is set to 0
- [ ] Show notification: "Target net margin too high for current unit economics"
- [ ] Provide actionable guidance (reduce margin or improve profits)
- [ ] Visual warning indicators in the UI

## Priority
High - Affects user understanding of results

## FINDLAY SUBARU PRESCOTT Personas Affected
- [ ] Value-Conscious Builder
- [ ] Design-Forward Professional
- [ ] Style-Seeking Homeowner
- [ ] Blended Overall Average
- [x] All personas
```

---

## Issue 2: Add Data Export Functionality

**Title:** `📊 Add ability to export calculation results to CSV/PDF`

**Body:**
```markdown
## Feature Request
Allow users to export their FINDLAY SUBARU PRESCOTT CAC calculator results for sharing with sales teams, management, or analysis.

## Proposed Solution
Add export buttons to download results as:
- CSV (for Excel/analysis)
- PDF (for presentations/reporting)

## Export Should Include
- Selected persona information
- All input values (AOV, costs, margins, etc.)
- Calculated metrics (CAC, CLTV, ROAS, LTV:CAC)
- Timestamp and calculator version

## Use Cases
- **Sales Teams**: Share calculations with prospects
- **Management**: Include in business planning reports
- **Marketing**: Document CAC targets for campaign planning
- **Historical Tracking**: Compare calculations over time

## Priority
Medium - Would enhance usability for business users

## Acceptance Criteria
- [ ] CSV export with all inputs and outputs
- [ ] PDF export formatted for printing/presentation
- [ ] Filename includes persona and date
- [ ] Works across all FINDLAY SUBARU PRESCOTT personas
```

---

## Issue 3: Add Mobile Responsiveness Improvements

**Title:** `📱 Improve mobile experience for tablet and phone users`

**Body:**
```markdown
## Problem
While the calculator works on mobile devices, the experience could be optimized for smaller screens, especially for sales reps using tablets in showrooms or at trade shows.

## Proposed Improvements
- Optimize tab navigation for touch
- Improve input field sizing for mobile keyboards
- Enhance charts/waterfall visualization for small screens
- Add swipe gestures for tab switching

## Target Devices
- iPad (primary: showroom use)
- iPhone (secondary: field use)
- Android tablets (secondary)

## Acceptance Criteria
- [ ] All functionality accessible on mobile
- [ ] Touch-friendly UI elements (min 44px tap targets)
- [ ] Readable text without zooming
- [ ] Responsive charts and visualizations
- [ ] Test on iOS and Android

## Priority
Medium - Important for field sales usage

## Context
Many FINDLAY SUBARU PRESCOTT sales reps use iPads in showrooms to demonstrate value propositions to builders and designers.
```

---

## Issue 4: Add Persona Comparison View

**Title:** `📊 Add side-by-side persona comparison feature`

**Body:**
```markdown
## Feature Request
Allow users to compare multiple FINDLAY SUBARU PRESCOTT personas side-by-side to understand which customer segments offer the best unit economics.

## Proposed Solution
Add a "Compare Personas" view that shows:
- All 4 personas in a table format
- Key metrics for each (CAC, CLTV, ROAS, LTV:CAC)
- Visual indicators showing which persona performs best in each metric
- Option to export comparison table

## Use Cases
- **Strategic Planning**: Determine which segments to prioritize
- **Resource Allocation**: Allocate marketing budget by segment ROI
- **Product Development**: Identify which segments have best margins
- **Sales Training**: Show reps which personas have highest lifetime value

## Acceptance Criteria
- [ ] Table view showing all 4 FINDLAY SUBARU PRESCOTT personas
- [ ] Sortable by any metric column
- [ ] Visual highlighting of best-performing metrics
- [ ] Export comparison to CSV/PDF
- [ ] Responsive design for mobile

## Priority
Low - Nice to have, not critical

## Labels
enhancement, ux-improvement
```

---

## Issue 5: Add Historical CAC Tracking

**Title:** `📈 Add feature to track CAC changes over time`

**Body:**
```markdown
## Feature Request
Allow users to save and track their CAC calculations over time to monitor trends and measure improvements.

## Proposed Solution
- Add "Save Calculation" button to store results with date
- Create "History" view showing past calculations
- Display trend charts showing CAC, CLTV, ROAS over time
- Compare current vs. historical values

## Technical Considerations
- Use localStorage for browser-based storage
- Optional: Add backend integration for team sharing
- Include data import/export for backup

## Use Cases
- **Performance Tracking**: Monitor whether marketing efficiency is improving
- **Budget Planning**: Use historical trends for forecasting
- **Team Benchmarking**: Compare performance across different time periods
- **Reporting**: Generate quarterly/annual performance reports

## Acceptance Criteria
- [ ] Save calculation snapshots with timestamp
- [ ] View historical calculations in a list
- [ ] Charts showing metric trends
- [ ] Export historical data to CSV
- [ ] Clear/manage old calculations

## Priority
Low - Enhancement for advanced users

## Labels
enhancement, data-management
```

---

**Note**: Prioritize issues based on FINDLAY SUBARU PRESCOTT team feedback and user requests. Focus on features that improve the sales process for automotive dealership solutions.

**For Questions**: Open a discussion at https://github.com/dustydean/netritionsink-cac-calculator/discussions
