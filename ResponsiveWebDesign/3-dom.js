// DOM Manipulation

// Event Probagation

window.addEventListener("click", function() {
    console.log('Window');
},True);

document.addEventListener("click", function() {
    console.log('Document');
},True);

document.querySelector(".div2").addEventListener("click", function() {
    console.log('DIV 2');
},True);

document.querySelector(".div1").addEventListener("click", function() {
    console.log('DIV 1');
},True);

document.querySelector("button").addEventListener("click", function (e) {
    console.log(e.target.innerText = 'clicked');
},True);
