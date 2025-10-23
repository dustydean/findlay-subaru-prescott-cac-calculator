# Lead-Gen Adaptation Notes for Findlay Subaru Prescott

## Critical Business Model Difference

**Current Calculator:** Built for e-commerce (direct online sales, immediate ROAS, repeat orders)

**Findlay Subaru Prescott:** Lead generation for in-dealership sales
- No online transactions
- Multi-step funnel: Lead → Appointment → Test Drive → Sale
- Long sales cycle (weeks/months)
- Metrics focus on CPL (Cost Per Lead), not CPR (Cost Per Order)

## Temporary Solution (Fork Completion)

For this initial fork, I'm adapting the e-commerce calculator with automotive-appropriate values:
- AOV = Average Vehicle Selling Price (~$28k-$35k for Subaru)
- "Repeat Orders" = Future vehicle purchases (every 5-7 years = very low repeat rate)
- COS = Dealer acquisition cost + financing costs (~8-12% of vehicle price)
- Fulfillment = Minimal (vehicle prep, delivery = $500-$1000)

## Personas Created (Temporary E-Commerce Model)

1. **Budget/Used Vehicle Buyer** - Used cars $15k-$22k
2. **New Subaru SUV Buyer** - Outback/Forester/Ascent $30k-$38k
3. **Hybrid/EV Early Adopter** - Crosstrek Hybrid/Solterra $35k-$45k
4. **Blended Average** - Mix of all segments ~$28k

## Recommended Redesign (Post-Fork)

See full redesign proposal in separate document. Key changes needed:
- Replace "AOV" with "Average Vehicle Sale Price"
- Add lead funnel stages and conversion rates
- Replace "Repeat Order Rate" with "Service Revenue LTV"
- Add "Cost Per Lead" and "Lead-to-Sale" conversion tracking
- Focus on showroom visit metrics, not cart abandonment

---

**Status:** Fork completed with e-commerce structure. Redesign proposal to follow.
