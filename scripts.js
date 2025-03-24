function calculateInterest() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value);
    let time = parseFloat(document.getElementById("time").value);
    let type = document.getElementById("type").value;
    let currency = document.getElementById("currency").value; // Get selected currency

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        document.getElementById("result").innerHTML = "<strong>Please enter valid inputs!</strong>";
        return;
    }

    let interest, amount;

    if (type === "simple") {
        interest = (principal * rate * time) / 100;
        amount = principal + interest;
    } else {
        amount = principal * Math.pow((1 + rate / 100), time);
        interest = amount - principal;
    }

    document.getElementById("result").innerHTML = 
        `Interest: <strong>${currency}${interest.toFixed(2)}</strong><br>
         Total Amount: <strong>${currency}${amount.toFixed(2)}</strong>`;
}
