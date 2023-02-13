// function getInputFieldValueById(inputFieldId) {
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldValueString);
//     inputField.value = '';
//     return inputFieldValue;
// }

// function getTextElementValueById(elementId) {
//     const textElement = document.getElementById(elementId);
//     const textElementValueString = textElement.innerText;
//     const textElementValue = parseFloat(textElementValueString);
//     return textElementValue;
// }

// function setTextElementValueById(elementId, newValue){
//     const textElement = document.getElementById(elementId);
//     textElement.innerText = newValue;
// }

//input er modde je id ta ache seta (inputId) te set korte hobe
 function getInputToAddSpan(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldString);
    return inputFieldAmount;
 }

 //span er modde je id ta ache seta (spanId) te set korte hobe 
 function getTextElementById(spanId){
    const textElement = document.getElementById(spanId);
    const textElementString = textElement.innerText;
    const textElementTotal = parseFloat(textElementString);
    return textElementTotal
 }
//span er idta hoice elementId(spanId)
// duitar jog hole variable jeta thake seta hoice newValue

 function setTextElementValueById(elementId , newVlaue){
    const setTextElement = document.getElementById(elementId);
    // setTextElement.innerText = newValue;
    setTextElement.innerText = newVlaue;

 }