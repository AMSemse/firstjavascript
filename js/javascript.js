var number1 = 1;
var number2 = 2;
var number3 = 3;
var stringnumber1 = '1';

//alert(number1 + number2 + number3 + stringnumber1);

//console.log('www');
//console.error('Oops');
//console.warn('Hups');

document.querySelector("#button1").onclick = function(){

    const h1 = document.querySelector('#mainheading');
    const underline = document.createElement("u");
    underline.innerText = "Good Morning!";
    h1.innerText = "";
    h1.append(underline);

    const p = document.querySelectorAll("#mainpara");
    //p[0].innerText = "Whoaaa!";
    p.forEach(element => element.innerText = "Yippee!");
}