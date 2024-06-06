
const yearInput = document.getElementById('yearInput');
const monthInput = document.getElementById('monthInput');
const dayInput = document.getElementById('dayInput');
const Calc = document.getElementById('clac')
const yearOut = document.getElementById('yearOut');
const monthOut = document.getElementById('monthOut');
const dayOut = document.getElementById('dayOut');

let date = new Date();

const currentDAy = date.getDay();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

console.log(currentDAy,currentMonth,currentYear)

let dayResult = 0 ;
let monthResult = 0 ;
let yearResult = 0 ;

function clacYear(){
    yearResult = currentYear - yearInput.value -1 ;
    
    console.log(yearResult)
}

function clacMonth(){
    
    let monthSub = currentMonth - monthInput.value ;
    console.log(monthSub);

    if(monthSub < 0 ){
        monthSub = monthSub *-1 ;
        console.log(monthSub);

    }

    monthResult = 12 - monthSub ;

    if(monthResult === 12){
        monthResult = 0 ;
        yearResult ++ ;
    }
    console.log(monthResult)

}



function calcDay(){
    dayResult = currentDAy - dayInput.value  ; 
    console.log(dayResult)
    if(dayResult < 0 ){
        dayResult = dayResult *-1 ;
        console.log(dayResult)

    }
}


Calc.addEventListener('click' , function(e){
    e.preventDefault();
    clacYear();
    clacMonth(); 
    calcDay()
    yearOut.innerHTML=`${yearResult} y` ;
    monthOut.innerHTML= `${monthResult} m`;
    dayOut.innerHTML= `${dayResult} d`;

})