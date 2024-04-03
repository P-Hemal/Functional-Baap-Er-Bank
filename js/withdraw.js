/*
1. add withdraw button event handler.
2. get withdraw amount by using getInputFieldValueById function.
3. get previous withdraw amount by using getTextElementValueById function.
4. calculate a new withdraw total and set the value.
4.5 . set new withdraw total by using setTextElementValueById function.
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal)
})