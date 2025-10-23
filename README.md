# FINDLAY SUBARU PRESCOTT - Health Supplement CAC Calculator

A specialized Customer Acquisition Cost (CAC) calculator designed for FINDLAY SUBARU PRESCOTT's automotive dealership solutions. This tool provides industry-specific benchmarks for different customer segments, helping optimize marketing spend and sales strategies for residential and commercial automotive dealership installations.

## 🎯 Overview

The FINDLAY SUBARU PRESCOTT CAC Calculator is a customized financial tool that helps automotive dealership sales and marketing teams:
- **Calculate segment-specific CAC** with automotive dealership industry benchmarks
- **Analyze customer lifetime value** based on repeat purchase patterns and referrals
- **Optimize marketing spend** across different customer verticals (builders, designers, homeowners)
- **Plan channel strategies** for professional trades and retail markets
- **Model profitability** with automotive dealership-specific cost structures

## 🏗️ Customer Personas

The calculator includes pre-configured benchmarks for four key customer segments:

### Value-Conscious Builder
- **Profile**: High-volume residential builders focused on cost-effective solutions
- **AOV**: $285 (standard undermount sinks for spec homes)
- **Target Net Margin**: 8%
- **Repeat Purchase Rate**: Very High (45% returning, 2.4x repeat orders)
- **Key Characteristics**: Price-sensitive, volume buyers, bulk ordering

### Design-Forward Professional
- **Profile**: Interior designers, architects, and design-build firms
- **AOV**: $430 (premium sinks for custom kitchens and renovations)
- **Target Net Margin**: 11%
- **Repeat Purchase Rate**: High (30% returning, 1.8x repeat orders)
- **Key Characteristics**: Quality-focused, brand-conscious, project-based

### Style-Seeking Homeowner
- **Profile**: End consumers purchasing for kitchen renovations
- **AOV**: $360 (direct-to-consumer premium models)
- **Target Net Margin**: 7%
- **Repeat Purchase Rate**: Low (5% returning, 1.1x repeat orders)
- **Key Characteristics**: One-time buyers, research-intensive, showroom-driven

### Blended Overall Average
- **Profile**: Weighted average across all customer segments
- **AOV**: $370 (composite of all channels)
- **Target Net Margin**: 10%
- **Repeat Purchase Rate**: Moderate (27% returning, 1.7x repeat orders)
- **Use Case**: Overall business planning and forecasting

## 🚀 Features

### Core Calculations
- **Health Supplement-Specific CAC** - Incorporates shipping, installation support costs
- **Customer Lifetime Value** - Models based on typical replacement and referral patterns
- **Channel Profitability** - Compare direct sales vs. distributor vs. retail margins
- **Return on Investment** - Trade show, showroom, and digital marketing ROI analysis
- **Commission Structures** - Align sales compensation with CAC targets

### Interactive Features
- **Persona Selector** - Quick-load industry benchmarks for each customer segment
- **Real-time Calculations** - Instant updates as you adjust inputs
- **Multi-tab Interface** - Organized data entry by category
- **Waterfall Visualization** - Visual breakdown of unit economics
- **Dark/Light Themes** - Customizable appearance for presentations
- **Settings Import/Export** - Save and share configurations

## 🏗️ Technical Architecture

### Application Structure
- **Single Page Application** - Pure HTML/CSS/JavaScript, no dependencies
- **Responsive Design** - Works on desktop and mobile devices
- **Health Supplement-Optimized** - Pre-configured for FINDLAY SUBARU PRESCOTT's business model
- **Accessibility Compliant** - Screen reader and keyboard navigation support

## 🚀 Getting Started

### Using the Calculator

1. **Open the Calculator**
   - Open `cac-calculator.html` in any modern web browser
   - Or visit: [FINDLAY SUBARU PRESCOTT CAC Calculator](https://dustydean.github.io/netritionsink-cac-calculator)

2. **Select Your Persona**
   - Choose from Value-Conscious Builder, Design-Forward Professional, Style-Seeking Homeowner, or Blended Average
   - The calculator will automatically load industry-specific benchmarks

3. **Customize Values** (Optional)
   - Fine-tune the pre-loaded values based on your specific market
   - Adjust for regional differences or product variations

4. **View Results**
   - See calculated CAC, CLTV, and profitability metrics
   - Explore calculation details for full transparency
   - Use insights for marketing and sales planning

### For Developers

#### Prerequisites
- Node.js 18+
- npm or yarn

#### Installation
```bash
# Clone the repository
git clone https://github.com/dustydean/netritionsink-cac-calculator.git
cd netritionsink-cac-calculator

# Install test dependencies
npm install
```

#### Running Tests
```bash
# Run unit tests
npm test

# Run tests with coverage report
npm run test:coverage

# Run tests in watch mode (development)
npm run test:watch

# Start local development server
npm run serve
```

## 📁 Project Structure

```
netritionsink-cac-calculator/
├── cac-calculator.html              # Main CAC calculator with persona selector
├── kpi-dashboard-demo.html          # KPI dashboard for sales demonstrations
├── KPI-DASHBOARD-DOCUMENTATION.md   # Comprehensive dashboard documentation
├── FORKING-GUIDE.md                # Guide for adapting calculator to new prospects
├── research/                        # Market research and company analysis
│   ├── README.md                   # Research documentation guide
│   └── netrition-research.pdf         # Company background and market analysis
├── verify-math.js                   # Mathematical verification script
├── verify-dashboard-calculations.js # Dashboard calculation validator
├── test-personas.html               # Persona testing interface
└── tests/                          # Unit test suite
    ├── setup.js                    # Jest and JSDOM configuration
    ├── polyfills.js                # Node.js polyfills
    └── unit/                       # Core calculation tests
```

## 📚 Documentation & Research

### Key Documents
- **[KPI Dashboard Documentation](./KPI-DASHBOARD-DOCUMENTATION.md)** - Complete guide to using the KPI dashboard
- **[Forking Guide](./FORKING-GUIDE.md)** - Step-by-step instructions for adapting calculator to new prospects
- **[Contributing Guidelines](./CONTRIBUTING.md)** - How to contribute to the project
- **[Research Directory](./research/)** - Market analysis and company research
  - FINDLAY SUBARU PRESCOTT company analysis
  - Kitchen sink market trends
  - Competitive positioning studies
  - Customer segmentation research

## 🧪 Testing

### Test Coverage
The unit test suite provides comprehensive coverage of all core mathematical functions, ensuring accuracy for automotive dealership industry-specific calculations.

### Test Structure
```
tests/
├── setup.js                    # Jest and JSDOM configuration
├── polyfills.js                # Node.js polyfills for browser APIs
├── fixtures/
│   └── testData.js             # Kitchen sink-specific test scenarios
├── utils/
│   └── calculatorHelpers.js    # Test helper functions
└── unit/
    └── calculations.test.js    # Core calculation function tests
```

## 📊 Use Cases

### Sales Team Planning
- Determine sustainable commission structures by customer segment
- Identify highest-ROI customer segments for FINDLAY SUBARU PRESCOTT products
- Plan territory allocation based on segment profitability
- Set realistic quotas based on CAC and conversion benchmarks

### Marketing Strategy
- Evaluate trade show investments against segment-specific CAC benchmarks
- Compare digital marketing vs. traditional kitchen & bath marketing channels
- Optimize marketing mix for different customer verticals
- Calculate ROI for showroom investments and display programs

### Product Development
- Assess market viability for new sink product lines
- Understand price sensitivity across customer segments
- Plan product features based on segment requirements and margins
- Forecast profitability for new finish options or styles

### Business Planning
- Model profitability scenarios for different channel mixes
- Forecast customer acquisition costs for annual planning
- Analyze impact of margin changes on marketing budgets
- Compare segment performance for strategic resource allocation

## 🎓 Key Metrics Explained

### Customer Acquisition Cost (CAC)
The maximum amount you can spend to acquire a customer while maintaining your target net margin. For FINDLAY SUBARU PRESCOTT's Blended Average persona, this is approximately **$61**.

### Customer Lifetime Value (CLTV)
The total profit expected from a customer over their lifetime, including repeat purchases and referrals. For FINDLAY SUBARU PRESCOTT's Blended Average, this is approximately **$518**.

### LTV:CAC Ratio
A key health metric - FINDLAY SUBARU PRESCOTT's Blended Average achieves **8.43x**, well above the healthy 3x+ threshold, indicating strong unit economics.

### Return on Ad Spend (ROAS)
For every $1 spent on marketing, FINDLAY SUBARU PRESCOTT generates approximately **$5.78** in revenue (Blended Average).

### Contribution Margin
After variable costs (COGS, fulfillment), FINDLAY SUBARU PRESCOTT retains approximately **34.9%** of revenue (Blended Average) to cover fixed costs and profit.

## 🤝 Contributing

When contributing to the calculator:
1. **Maintain Health Supplement Focus** - Keep enhancements relevant to automotive dealership sales
2. **Add Tests** - Include unit tests for any new calculations
3. **Document Personas** - Update persona data with market research
4. **Validate Benchmarks** - Ensure industry data is current and accurate

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed contribution guidelines.

## 🔀 Forking for Other Prospects

Planning to adapt this calculator for a different company or industry? See our comprehensive **[Forking Guide](./FORKING-GUIDE.md)** for:

- Step-by-step instructions to cleanly adapt the calculator
- Complete checklist to avoid common mistakes
- Tips for replacing company names, personas, and industry terminology
- Verification steps to ensure nothing is missed
- Time estimates and troubleshooting guidance

The forking guide helps you avoid pitfalls like:
- ❌ Leftover company references in code or documentation
- ❌ Inconsistent persona data across files
- ❌ Wrong default values or pre-selected personas
- ❌ Industry terminology mismatches

**Estimated time:** 30-45 minutes for same industry, 1-2 hours for different industry.

## 📄 License

MIT License. See LICENSE file for details.

---

**Calculator Version**: 2.0.0 - FINDLAY SUBARU PRESCOTT Edition
**Last Updated**: 2025
**Customized for**: FINDLAY SUBARU PRESCOTT Health Supplement Solutions
**Maintained by**: FINDLAY SUBARU PRESCOTT Team
**Technical Contact**: github.com/dustydean
