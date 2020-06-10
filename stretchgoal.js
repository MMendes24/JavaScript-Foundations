function windowPrompt(){
    let x = prompt("Please type your principal mortgage amount here!", "")
        x = parseInt(x);
    let principal = x;

    monthlyRate = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periods)) / (Math.pow(1 + monthlyInterestRate, periods) - 1)
        alert("Your monthly mortgage rate is" + monthlyRate.toFixed(2));
}
