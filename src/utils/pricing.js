/**
 * AssurMyBike - Pricing Logic
 * 
 * Core business logic for premium calculation.
 * 
 * @module Pricing
 * @author AssurMyBike Team
 */
/**
 * Calculate Insurance Premium
 * 
 * Formula (Standard Industry Logic):
 * Base Annual Rate = Bike Value * 4%
 * Age Factor:
 * - < 1 year: 1.0
 * - 1-2 years: 1.1
 * - 2-3 years: 1.2
 * - > 3 years: 1.5
 * 
 * @param {number} bikeValue - Purchase price of the bike in Euros
 * @param {string} purchaseDate - Date string YYYY-MM-DD
 * @returns {object} { annual: number, monthly: number }
 */
export const calculatePremium = (bikeValue, purchaseDate) => {
    if (!bikeValue || !purchaseDate) return { annual: 0, monthly: 0 };

    const value = parseFloat(bikeValue);
    const date = new Date(purchaseDate);
    const now = new Date();

    // Calculate Age in Years
    const ageInMilliseconds = now - date;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    let ageFactor = 1.0;
    if (ageInYears > 1 && ageInYears <= 2) ageFactor = 1.1;
    else if (ageInYears > 2 && ageInYears <= 3) ageFactor = 1.2;
    else if (ageInYears > 3) ageFactor = 1.5;

    // Base Rate 4%
    let annualPremium = (value * 0.04) * ageFactor;

    // Minimum premium
    if (annualPremium < 50) annualPremium = 50;

    return {
        annual: parseFloat(annualPremium.toFixed(2)),
        monthly: parseFloat((annualPremium / 12).toFixed(2))
    };
};
