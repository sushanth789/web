var a=document.getElementById('wrapper');
a.addEventListener("click",function(){
// alert('wrapper');
var disp=document.getElementById('disp');
var odisp=document.getElementById('Odisp');
if(event.target.classList.contains('inputs')){
    var input=event.target.value;
    disp.value +=input;
}
else if(event.target.value === '='){
    disp.value=disp.value.replace("÷","/");
    disp.value=disp.value.replace("×","*");
    odisp.value = eval(disp.value);
    disp.value=disp.value.replace("/","÷");
    disp.value=disp.value.replace("*","×");
}
else if(event.target.value === 'C'){
    odisp.value=null;
    disp.value=null;
}
//     alert('inputs');
// }
// else if(event.target.value === "="){
//     alert('calculate');
// }
// else if(event.target.value === 'C'){
//     alert('clear screen');
// }
//     else{
// return null;
//     }

});