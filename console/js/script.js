//to see the result open chrome rightclick inspect console


//1.print hello in console
//console.log("HELLO WORLD!!!");


//2.print sumof two numbers
//console.log(10+25);


//3.print 1-10 numbers
// for(var i=0;i<=10;i++)
// {
//     console.log(i)
// }



//4.print even numbers 
//  for(i=11;i<=21;i++)
// {
//     var eve=i%2;
//     if(eve==0)
//     {
//     console.log(i)
// }
// }



//5.print odd numbers 
// for(i=10;i<=22;i++)
// {
//     if((i%2)==1)
//     {
//     console.log(i)
// }
// }


//6.write prgram to find length of a string
// var a="sushanth";
// console.log(a.length);


//7.program to store letters of string in array
// var array = [];
// var a="amithabh";
// for(i=0;i<a.length;i++)
// {
//     array[i]=a[i];
   
// }
// console.log(array);

//factorial of a number
// var n=5;
// var fact=1;
// for(i=1;i<=n;i++){
//     fact=fact*i;
// }
// console.log(fact);

//to check palindrome or not
// var a="malayalamh";
// var b = [];



//     for(j=a.length-1;j>=0;j--)
//     {
//         b+=a[j];
        //     }
// if(a == b)
// {
//     console.log("palindrome");
// }
// else{
//     console.log("not a palindrome");
// }



//function using
// var a=5;
// var b=6;
// var c=add(a,b);
// console.log(c);
// function add(x,y){
//     var z=x+y;
//     return z;
// }

//factorial of a number using A FUNCTION
// var n=5;
// var fact=factorial(n);
// console.log(fact);
// function factorial(x){
//     var y=1;
// for(i=1;i<=x;i++){
//     y=y*i;
    
// }
// return y;
// }



//using function print odd numbers
// for(i=11;i<=22;i++)
// {
//    var odd=numbers(i);
//    console.log(odd);
// }
// function numbers(x){
//     if((x%2)==1)
//     {
//    return x;
// }
// }


//using function print odd numbers
// var a=10;
// var b=22;
// odd(a,b);
// function odd(a,b){
//     for(i=a;i<b;i++)
//     {
//         if(i%2==1){
//             console.log(i);
//         }
//     }
// }



// write prgrm to store even numbers in array

// var a=[];
// var j=0;
// for(i=11;i<21;i++){
//     if(i%2==0){
//         a[j]=i;
//         j++;
//     }
// }
// console.log(a);

//JavaScript Methods

//var a=["a","k","l","j","h","y"];
// console.log(a.slice(2,4));//it will print from postion 2 to 4 but not including 4
 //console.log(a);

//console.log(a.splice(2,3));//it will print 3 words from position 2


//var a="mangalore";
//console.log(a.substring(2,5));
//console.log(a.split(''));

//var a=["a","k","l","j","h","y"];
//console.log(a.reverse());//to reverse
//console.log(a.join(''));// join the string

//var a="       mangalore     ";
//console.log(a.trim());//to remove the space

//  var a=["a","k","l","j","h","y"];
//  console.log(a.indexOf("h"));

 //var s="hp mangalore"
 //console.log(s.toUpperCase());
 //console.log(s.toLowerCase());

// var a="mangalore";
//  console.log(a.charAt(0));

// var a=["a","k","l","j","h","y"];
// console.log(a.toString());
// console.log(a.join('').toString());


// var a=9.456732;
// console.log(a.toPrecision(3));
// console.log(a.toPrecision(2));
// console.log(a.toPrecision(4));


// var a='5';
// console.log(a+3);
// console.log(Number(a)+3);


// var a=4.4;
// var b= -6;
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(Math.round(a));
// console.log(Math.abs(b));
// console.log(Math.random());

// var a=["w","e","r","t","s","u"];
// //a.push("postgreSQL");
// a.pop();
// console.log(a);

var d=new Date();
console.log(d);
console.log(d.getFullYear());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getTime());




//to display random number between 1-10
   // console.log(Math.floor(Math.random() * 10)+1);


//write a prgrm to find area of given polygon
// var n=5;
// result=(n*n)+((n-1)*(n-1));
// console.log(result);

//given array of elements find the pair of adjacent that has the largest product and return that product

//  var a=[2,3,8,4,1,5,5];
// var b=[];
// for(i=0;i<a.length-1;i++)
//  {
//          result=a[i]*a[i+1];
//         b[i]=result;
//  }
//  console.log(b);
// for(i=0;i<b.length-1;i++)
//  {
//          if(b[i]>b[i+1])
//        {
//                b[i+1]=b[i];
//                var c=b[i];
//         }
//         else{
//                 c=b[i+1]
//         }
//         }
//  console.log(c);

// replace each digit in string by #

// var s="sushanth age 20";


// console.log(replac(s));
// function replac(x){
//         test=/[0-9]/g;
//         var y=x.split('');

//         for(i=0;i<y.length;i++)
// {       
//         if(y[i].match(test)){
//                 y[i]="#";       }

// }
// return y.join('');
// }



//write prgrm toprint number from 1-100 but mutiple of 3 print fizz for multiple of 5 print buzz for both print fizzbuzz

// for(i=1;i<=100;i++)
// {
//         c=i;
//         if(c%3==0 && c%5==0){
//                 c="fizzbuzz";
//         }
        
//        else if(c%3==0){
//                 c="fizz";
//         }
//         else if(c%5==0){
//                 c="buzz";
//         }
        
//         console.log(c);
// }





//logging in if attempts is greterthan 10 times account shou;d be locked


// console.log(passcodeattempts(1111,["1111","2222","3333","4444","5555","6666","7777","8888","9999","0000","7285","0000"]));
// function passcodeattempts(passcode,attempts){
//         var count=0;
//         var flag=0;
//         for(i=0;i<attempts.length;i++){
//                 if(passcode!=attempts[i]){
//                         count++;
//                 }
//                 else{
//                         count=0;
//                 }
//                 if(count==0){
//                         flag=1;
//                 }
//         }
//         return(flag==1? true:false)
// }




//wap to replace # with suitable regular expression in + - * /
// console.log(arith(4,5,9));
// console.log(arith(4,3,1));
// console.log(arith(4,5,20));
// console.log(arith(40,5,8));
// console.log(arith(40,5,90));
// function arith(a,b,c){
//         if(a/b===c){
//                 return true;
//         }
//         else if(a*b===c){
//                 return true;
//         }
//        else if(a+b===c){
//                 return true;
//         }
//        else if(a-b===c){
//                 return true;
//         }
//         else{
//                 return false;
//         }
// }




//consider u have 3 integers if two are equal print third one
// console.log(arith(5,5,5));
// function arith(a,b,c){
//         if(a===b){
//            return c;
//                }
//                else if(a===c){
//                       return b;
//               }
//              else if(b===c){
//                      return a;
//              }
//         }




//consider integer numbers from 0 to n-1 write down along the circle in such a way that distnce between two integer is same
//given n and first number find the number  which is written in radially oppossite to first number

// console.log(circlenumber(10,2));
// function circlenumber(n,firstnumber){
//         return firstnumber >= (n/2) ? (firstnumber - (n/2)) :((n/2)+firstnumber)
// }


// prgrm to,you are playing a game currently your exoerience points(xp) total is equal to "experience"
//to reach the next level your xp it should crossn thresold
// to reavh nxt level add thresold


// console.log(nxtlevel(25,10))
// function nxtlevel(xp,reward){
//         var thresold=30;
//         return xp+reward>=thresold ? true:false;
// }

