// var text=document.getElementById("su");
// text.addEventListener("keydown",keydown);
// function keydown(event){
//     if(event.keyCode === 13){
//         alert("clicked");
//     }
// }
function clicked(){
    // alert('clicked');
    var lu=document.createElement('li');
var li=document.createElement('label');
//console.log(lu,li);
var s=document.getElementById("su").value;
//console.log(s);
var a=document.createTextNode(s);
// console.log(a);
var ul=document.getElementById("ulid");
var hr=document.createElement('hr');
var input=document.createElement('input');
input.type="submit";
console.log(hr);
lu.appendChild(hr);

ul.appendChild(lu);
lu.appendChild(li);
li.appendChild(a);

lu.appendChild(input);
localStorage.setItem("store",textbx);
var e=localStorage.getItem("store");
li.appendChild(e);
console.log(e);


}