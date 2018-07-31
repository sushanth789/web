
var addbutton=document.getElementById('add');
addbutton.addEventListener("click",function(){
   var val1=document.getElementById('val1').value;
   var val2=document.getElementById('val2').value;
   var res=Number(val1)+Number(val2);
   var resfield=document.getElementById('res');
   resfield.value=res;

});
