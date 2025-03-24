document.getElementById("principal").addEventListener("input", clearResults);
document.getElementById("rate").addEventListener("input", clearResults);
document.getElementById("time").addEventListener("input", clearResults);
document.getElementById("compound").addEventListener("change", clearResults);

function calculateInterest() {
    // Get input values
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);
    let compound = parseInt(document.getElementById("compound").value);

    // Check if inputs are valid
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Simple Interest Calculation
    let simpleInterest = (principal * rate * time) / 100;
    let totalSimpleAmount = principal + simpleInterest;

    // Compound Interest Calculation
    let compoundInterest = principal * (Math.pow((1 + (rate / (100 * compound))), (compound * time))) - principal;
    let totalCompoundAmount = principal + compoundInterest;

    // Display results with better formatting
    document.getElementById("simple-interest").innerHTML = `Simple Interest: ₹${simpleInterest.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("compound-interest").innerHTML = `Compound Interest: ₹${compoundInterest.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById("total-amount").innerHTML = `Total Amount (CI): ₹${totalCompoundAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

// Function to clear results when user modifies input
function clearResults() {
    document.getElementById("simple-interest").innerHTML = "Simple Interest: ₹0.00";
    document.getElementById("compound-interest").innerHTML = "Compound Interest: ₹0.00";
    document.getElementById("total-amount").innerHTML = "Total Amount (CI): ₹0.00";
}