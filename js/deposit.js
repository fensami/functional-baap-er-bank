document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const totalDepositAmount = getInputToAddSpan('deposit-field');
    const totalDepositSpan = getTextElementById('deposit-total');
    const totalDeposit = totalDepositAmount + totalDepositSpan;
    
    //
    setTextElementValueById('deposit-total', totalDeposit);

    const balanceTotal = getTextElementById('balance-total');
    const balance = balanceTotal + totalDeposit;
    setTextElementValueById('balance-total', balance)
})