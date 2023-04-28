"use strict";

// gather inputs

const loanAmountEl = document.getElementById('loanAmount');
const interestRateEl = document.getElementById('interestRate');
const loanTermEl = document.getElementById('loanTerm');
const monthlyPaymentEl = document.getElementById('monthlyPayment');
const totalCostEl = document.getElementById('totalCost');
const calculateBtnEl = document.getElementById('calculateBtn');
calculateBtnEl.onclick = onCalculateBtnClicked;




// perform calculation

function onCalculateBtnClicked() {
    
    const loanAmountValue = +loanAmountEl.value;
    const interestRateValue = +interestRateEl.value;
    const loanTermValue = +loanTermEl.value;

    const interestRatePercentage = +interestRateEl.value / 100;

    const monthlyInterestAmount = (loanAmountValue * interestRatePercentage) / 12;

    const monthlyPaymentOutput = loanAmountValue * loanTermValue / 12 + monthlyInterestAmount;

    const totalCostOutput = loanAmountValue * interestRatePercentage * loanTermValue
    
   const monthlyPaymentEl = document.getElementById('monthlyPayment')
    monthlyPaymentEl.innerHTML = monthlyPaymentOutput.toFixed(2);

   const totalCostEl = document.getElementById('totalCost')
    totalCostEl.innerHTML = totalCostOutput.toFixed(2);
}