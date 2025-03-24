let chart; // Variable to store the chart instance

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
    let years = [];
    let amounts = [];

    if (type === "simple") {
        interest = (principal * rate * time) / 100;
        amount = principal + interest;

        for (let i = 1; i <= time; i++) {
            let yearlyAmount = principal + (principal * rate * i) / 100;
            years.push(i);
            amounts.push(yearlyAmount);
        }

    } else {
        amount = principal * Math.pow((1 + rate / 100), time);
        interest = amount - principal;

        for (let i = 1; i <= time; i++) {
            let yearlyAmount = principal * Math.pow((1 + rate / 100), i);
            years.push(i);
            amounts.push(yearlyAmount);
        }
    }

    document.getElementById("result").innerHTML = 
        `Interest: <strong>${currency}${interest.toFixed(2)}</strong><br>
         Total Amount: <strong>${currency}${amount.toFixed(2)}</strong>`;

    updateChart(years, amounts, currency);
}

function updateChart(years, amounts, currency) {
    let ctx = document.getElementById("interestChart").getContext("2d");

    if (chart) {
        chart.destroy(); // Destroy the old chart before creating a new one
    }

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: years,
            datasets: [{
                label: "Total Amount Over Time",
                data: amounts,
                borderColor: "#4facfe",
                backgroundColor: "rgba(79, 172, 254, 0.2)",
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return currency + value.toFixed(2);
                        }
                    }
                }
            }
        }
    });
}
