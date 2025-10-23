// Mathematical verification for NETRITION CAC Calculator
// This script validates all calculations for each persona

const personaData = {
    'value-builder': {
        name: 'Value-Conscious Builder',
        aov: 285,
        returnRate: 2.5,
        cosPercent: 57,
        fulfillmentCost: 42,
        gaPercent: 11,
        returningCustomers: 45,
        repeatOrderRate: 2.4,
        targetNetMargin: 8,
        taxRate: 0
    },
    'design-professional': {
        name: 'Design-Forward Professional',
        aov: 430,
        returnRate: 4,
        cosPercent: 53,
        fulfillmentCost: 38,
        gaPercent: 14,
        returningCustomers: 30,
        repeatOrderRate: 1.8,
        targetNetMargin: 11,
        taxRate: 0
    },
    'style-homeowner': {
        name: 'Style-Seeking Homeowner',
        aov: 360,
        returnRate: 6,
        cosPercent: 56,
        fulfillmentCost: 30,
        gaPercent: 16,
        returningCustomers: 5,
        repeatOrderRate: 1.1,
        targetNetMargin: 7,
        taxRate: 0
    },
    'blended-average': {
        name: 'Blended Overall Average',
        aov: 370,
        returnRate: 4,
        cosPercent: 55,
        fulfillmentCost: 36,
        gaPercent: 13,
        returningCustomers: 27,
        repeatOrderRate: 1.7,
        targetNetMargin: 10,
        taxRate: 0
    }
};

console.log('='.repeat(80));
console.log('NETRITION CAC CALCULATOR - MATHEMATICAL VERIFICATION');
console.log('='.repeat(80));

for (const [key, persona] of Object.entries(personaData)) {
    console.log('\n' + '='.repeat(80));
    console.log(`PERSONA: ${persona.name}`);
    console.log('='.repeat(80));

    // Step 1: AOV after tax and returns
    const aovPostTaxReturns = persona.aov / (1 + persona.taxRate/100) * (1 - persona.returnRate/100);
    console.log('\n1. AOV (Post-Tax/Returns):');
    console.log(`   Formula: AOV ÷ (1 + Tax Rate) × (1 - Return Rate)`);
    console.log(`   Calculation: $${persona.aov} ÷ (1 + ${persona.taxRate}%) × (1 - ${persona.returnRate}%)`);
    console.log(`   = $${persona.aov} × ${(1 - persona.returnRate/100).toFixed(4)}`);
    console.log(`   = $${aovPostTaxReturns.toFixed(2)}`);

    // Step 2: Gross Margin
    const grossMarginPercent = (1 - persona.cosPercent/100) * 100;
    const grossMarginDollar = aovPostTaxReturns * (1 - persona.cosPercent/100);
    console.log('\n2. Gross Margin:');
    console.log(`   Formula: (1 - Cost of Sales %)`);
    console.log(`   Calculation: (1 - ${persona.cosPercent}%)`);
    console.log(`   = ${grossMarginPercent.toFixed(2)}% or $${grossMarginDollar.toFixed(2)}`);

    // Step 3: Contribution Margin (before ad spend)
    const contributionMargin = aovPostTaxReturns * (1 - persona.cosPercent/100) - persona.fulfillmentCost;
    const contributionMarginPercent = (contributionMargin / aovPostTaxReturns) * 100;
    console.log('\n3. Contribution Margin (Before Ad Spend):');
    console.log(`   Formula: AOV × (1 - CoS%) - Fulfillment Cost`);
    console.log(`   Calculation: $${aovPostTaxReturns.toFixed(2)} × ${(1 - persona.cosPercent/100).toFixed(3)} - $${persona.fulfillmentCost}`);
    console.log(`   = $${grossMarginDollar.toFixed(2)} - $${persona.fulfillmentCost}`);
    console.log(`   = $${contributionMargin.toFixed(2)} (${contributionMarginPercent.toFixed(2)}% of AOV)`);

    // Step 4: Operating Profit per Order
    const operatingProfit = aovPostTaxReturns * (1 - persona.cosPercent/100 - persona.gaPercent/100) - persona.fulfillmentCost;
    console.log('\n4. Operating Profit per Order:');
    console.log(`   Formula: AOV × (1 - CoS% - G&A%) - Fulfillment Cost`);
    console.log(`   Calculation: $${aovPostTaxReturns.toFixed(2)} × (1 - ${persona.cosPercent}% - ${persona.gaPercent}%) - $${persona.fulfillmentCost}`);
    console.log(`   = $${aovPostTaxReturns.toFixed(2)} × ${(1 - persona.cosPercent/100 - persona.gaPercent/100).toFixed(3)} - $${persona.fulfillmentCost}`);
    console.log(`   = $${operatingProfit.toFixed(2)}`);

    // Step 5: Average Orders per Customer
    const avgOrders = 1 + (persona.returningCustomers/100 * persona.repeatOrderRate);
    console.log('\n5. Average Orders per Customer:');
    console.log(`   Formula: 1 + (Returning % × Repeat Order Rate)`);
    console.log(`   Calculation: 1 + (${persona.returningCustomers}% × ${persona.repeatOrderRate})`);
    console.log(`   = 1 + ${(persona.returningCustomers/100 * persona.repeatOrderRate).toFixed(4)}`);
    console.log(`   = ${avgOrders.toFixed(4)} orders per customer`);

    // Step 6: Customer Lifetime Value (CLTV)
    const cltv = aovPostTaxReturns * avgOrders;
    console.log('\n6. Customer Lifetime Value (CLTV):');
    console.log(`   Formula: AOV (Post-Tax/Returns) × Average Orders`);
    console.log(`   Calculation: $${aovPostTaxReturns.toFixed(2)} × ${avgOrders.toFixed(4)}`);
    console.log(`   = $${cltv.toFixed(2)}`);

    // Step 7: Customer Lifetime Profit
    const lifetimeProfit = operatingProfit * avgOrders;
    console.log('\n7. Customer Lifetime Profit:');
    console.log(`   Formula: Operating Profit × Average Orders`);
    console.log(`   Calculation: $${operatingProfit.toFixed(2)} × ${avgOrders.toFixed(4)}`);
    console.log(`   = $${lifetimeProfit.toFixed(2)}`);

    // Step 8: Profit-Driven CAC
    const profitDrivenCAC = lifetimeProfit - (cltv * persona.targetNetMargin/100);
    console.log('\n8. Profit-Driven CAC:');
    console.log(`   Formula: Lifetime Profit - (CLTV × Target Net Margin %)`);
    console.log(`   Calculation: $${lifetimeProfit.toFixed(2)} - ($${cltv.toFixed(2)} × ${persona.targetNetMargin}%)`);
    console.log(`   = $${lifetimeProfit.toFixed(2)} - $${(cltv * persona.targetNetMargin/100).toFixed(2)}`);
    console.log(`   = $${profitDrivenCAC.toFixed(2)}`);

    // Step 9: Break-Even CAC
    const breakEvenCAC = lifetimeProfit;
    console.log('\n9. Break-Even CAC:');
    console.log(`   Formula: Customer Lifetime Profit`);
    console.log(`   = $${breakEvenCAC.toFixed(2)}`);

    // Step 10: LTV:CAC Ratio
    const ltvCacRatio = cltv / profitDrivenCAC;
    console.log('\n10. LTV:CAC Ratio:');
    console.log(`    Formula: CLTV ÷ Profit-Driven CAC`);
    console.log(`    Calculation: $${cltv.toFixed(2)} ÷ $${profitDrivenCAC.toFixed(2)}`);
    console.log(`    = ${ltvCacRatio.toFixed(2)}x`);

    // Step 11: Target ROAS
    const targetROAS = aovPostTaxReturns / profitDrivenCAC;
    console.log('\n11. Target ROAS (First Order):');
    console.log(`    Formula: AOV (Post-Tax/Returns) ÷ Profit-Driven CAC`);
    console.log(`    Calculation: $${aovPostTaxReturns.toFixed(2)} ÷ $${profitDrivenCAC.toFixed(2)}`);
    console.log(`    = ${targetROAS.toFixed(2)}x`);

    // Validation checks
    console.log('\n' + '-'.repeat(40));
    console.log('VALIDATION CHECKS:');
    console.log('-'.repeat(40));

    // Check 1: Operating margin should be less than gross margin
    const operatingMarginPercent = (operatingProfit / aovPostTaxReturns) * 100;
    console.log(`✓ Operating Margin (${operatingMarginPercent.toFixed(2)}%) < Gross Margin (${grossMarginPercent.toFixed(2)}%): ${operatingMarginPercent < grossMarginPercent ? 'PASS' : 'FAIL'}`);

    // Check 2: Break-even CAC should be greater than Profit-driven CAC
    console.log(`✓ Break-Even CAC ($${breakEvenCAC.toFixed(2)}) > Profit-Driven CAC ($${profitDrivenCAC.toFixed(2)}): ${breakEvenCAC > profitDrivenCAC ? 'PASS' : 'FAIL'}`);

    // Check 3: LTV:CAC ratio should be positive
    console.log(`✓ LTV:CAC Ratio (${ltvCacRatio.toFixed(2)}) > 0: ${ltvCacRatio > 0 ? 'PASS' : 'FAIL'}`);

    // Check 4: Target ROAS should be greater than 1 for profitable CAC
    console.log(`✓ Target ROAS (${targetROAS.toFixed(2)}) > 1: ${targetROAS > 1 ? 'PASS' : 'FAIL'}`);
}

console.log('\n' + '='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));
console.log('\nKey Insights:');
console.log('1. Design-Forward Professional has highest AOV ($430) and strong margins (11% target)');
console.log('2. Value-Conscious Builder has lower AOV ($285) but highest repeat rate (2.4x)');
console.log('3. All personas show positive LTV:CAC ratios, indicating viable unit economics');
console.log('4. Target ROAS > 1 for all personas, confirming profitable customer acquisition possible');
