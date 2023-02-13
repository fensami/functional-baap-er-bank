document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawTotalAmount = getInputToAddSpan('withdraw-field');
    const withdrawTotalSpan = getTextElementById('withdraw-total');
    const withdrawTotal = withdrawTotalAmount + withdrawTotalSpan;

    //
    setTextElementValueById('withdraw-total', withdrawTotal);

    const balanceTotal = getTextElementById('balance-total');

    const withdrawSet = balanceTotal - withdrawTotalAmount;

    //
    setTextElementValueById('balance-total' , withdrawSet)
})