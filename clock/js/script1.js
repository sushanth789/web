
function clock(){
    var d=new Date();
    var a=d.getHours();
    var b=d.getMinutes();
     var c=d.getSeconds();
     var resfield=document.getElementById('hr');
       resfield.innerHTML=a;
       var resfield1=document.getElementById('min');
       resfield1.innerHTML=b;
       var resfield2=document.getElementById('sec');
       resfield2.innerHTML=c;
       setTimeout(clock,1000);
       var h=30*((d.getHours()%12)+d.getMinutes()/60);
       var m=6*d.getMinutes();
      var s=6*d.getSeconds();   
      setattr("s-hand",s);
    setattr("m-hand",m);
    setattr("h-hand",h);  
      function setattr(id,val){
         var v='rotate('+val+',70,70)';
        document.getElementById(id).setAttribute('transform',v);
      }
    //  document.getElementById('s-hand').setAttribute('transform','rotate('+s+',70,70)');
    //  document.getElementById('m-hand').setAttribute('transform','rotate('+m+',70,70)');
    //  document.getElementById('h-hand').setAttribute('transform','rotate('+h+',70,70)');
           var sc="pm";
    if(a >= 12)
    {
        var resfield3=document.getElementById('ref');
       resfield3.innerHTML=sc;
    }
   
    }
    window.onload = clock;
   