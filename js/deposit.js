function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId)
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString)
    return inputFieldValue;
}

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('withdraw-field')
    console.log(newDepositAmount)
})