var i = document.getElementById("list");
var count=i.childElementCount;
//alert(count);
var ins = document.getElementById("inputBox");
// console.log(ins);
ins.addEventListener("keydown",keydown);
function keydown(){
    if(event.keyCode === 13){
        alert('keypressed');
    }
}