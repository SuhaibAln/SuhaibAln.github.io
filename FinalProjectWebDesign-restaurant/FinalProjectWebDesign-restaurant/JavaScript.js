var text = ["Welcome  To Our Resturant", "We Are honerd that you  chose our resturant", "Have a great Day"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 2000);
function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
       /*clearInterval(inst);*/
    }}
//function myFunction() {
//    //var element = document.getElementById("test");
//    //element.classList.add("mystyle");
//    const ContactForm = document.getElementById("ContactForm");
//    ContactForm = addEventListener("submit", (e) => { e.preventDefault(); })
//    var Par = document.createElement("p");
//    Par.innerHTML = "Form Has been Submited";
//    var DisplayPar = document.getElementById("OK");
//    DisplayPar.appendChild(Par);
//    console.log("Form Submitted")
//}

function Add() {
    document.getElementById('myImage').src = "https://img.icons8.com/dusk/64/000000/checked--v2.gif";

}


function resize(elem, percent) {
    elem.style.fontSize = percent;
}

