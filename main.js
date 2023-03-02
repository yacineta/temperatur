let colciusInput =document.querySelector('#colcius > input');
let fahrenheitInput =document.querySelector('#fahrenheit > input');
let keivinInput =document.querySelector('#keivin > input');

let btn = document.querySelector('.button button');
 function roundNumber(number){
    return Math.round(number*100)/100
 }

 colciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(colciusInput.value)
    let ftemp = (cTemp*(9/5)) + 32
    let ktemp = cTemp + 273.15

    fahrenheitInput.value = roundNumber(ftemp)
    keivinInput.value = roundNumber(ktemp)
 })

 fahrenheitInput.addEventListener('input',function(){
    let ftemp = parseFloat(fahrenheitInput.value)
    let cTemp = (ftemp - 32) * (5/9)
    let ktemp = (ftemp - 32) * (5/9) + 273.15

    colciusInput.value = roundNumber(cTemp)
    keivinInput.value = roundNumber(ktemp)
 })

 keivinInput.addEventListener('input',function(){
    let ktemp = parseFloat(keivinInput.value)
    let cTemp = ktemp - 273.15
    let ftemp = (ktemp - 273.15) * (9/5) + 32

    colciusInput.value = roundNumber(cTemp)
    fahrenheitInput.value = roundNumber(ftemp)
 })

 btn.addEventListener('click', ()=>{
    colciusInput.value =""
    fahrenheitInput.value = ""
    keivinInput.value = ""
 })