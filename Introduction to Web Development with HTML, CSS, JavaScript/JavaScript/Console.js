

undefined
console.log("Hello world")
instrument.ts:124 Hello world
undefined
let num=5
undefined
1370Third-party cookie will be blocked. Learn more in the Issues tab.
let num=5
var mystr="John"
console.log(num)
console.log(mystr)
instrument.ts:124 5
instrument.ts:124 John
undefined
const pi_val=3.147
console.log(pi_val);
instrument.ts:124 3.147
undefined
function printMyInput(user_input){
    console.log("The parameter passed is "+user_input)
}
undefined
printMyInput(64)
instrument.ts:124 The parameter passed is 64
undefined
printMyInput("Kunal")
instrument.ts:124 The parameter passed is Kunal
undefined
let printMyInputES6=(user_input)=>{
console.log(user_input)
}
undefined
printMyInputES6(9)
printMyInputES6("Kunal")
instrument.ts:124 9
instrument.ts:124 Kunal
undefined
let printMyInputES6Short=user_input=>console.log(user_input)
undefined
printMyInputES6Short(9)
printMyInputES6Short("Kunal")
instrument.ts:124 9
instrument.ts:124 Kunal
undefined
console.log("5 + 3 = ",5+3)
console.log("7 - 3 = ",7-3)
console.log("8 * 3 = ",8*3)
console.log("27 / 3 =",27/3)
console.log("4 to the power of 3 = ",4**3)
console.log("19 mod 4 = ",19%4)
instrument.ts:124 5 + 3 =  8
instrument.ts:124 7 - 3 =  4
instrument.ts:124 8 * 3 =  24
instrument.ts:124 27 / 3 = 9
instrument.ts:124 4 to the power of 3 =  64
instrument.ts:124 19 mod 4 =  3
undefined
console.log("5 + 3 = ",5+3)
console.log("5 + \"3\" = ",5+"3")
instrument.ts:124 5 + 3 =  8
instrument.ts:124 5 + "3" =  53
undefined
x=5
console.log("Old value of x:",x)
x+=3
console.log("New value of x:",x)
y=5
console.log("Old value of y:",y)
y-=3
console.log("New value of y:",y)
a=6
console.log("Old value of a:",a)
instrument.ts:124 Old value of x: 5
instrument.ts:124 New value of x: 8
instrument.ts:124 Old value of y: 5
instrument.ts:124 New value of y: 2
instrument.ts:124 Old value of a: 6
undefined
a*=3
console.log("New value of a:",a)
instrument.ts:124 New value of a: 18
undefined
b=6
console.log("Old value of b",b)
b/=3
console.log("New value of b",b)
c=6
console.log("Old value of c:",c)
c%=3
console.log("New value of c:",c)
d=6
console.log("Old value of d:",d)
d**=3
console.log("New value of d:",d)
instrument.ts:124 Old value of b 6
instrument.ts:124 New value of b 2
instrument.ts:124 Old value of c: 6
instrument.ts:124 New value of c: 0
instrument.ts:124 Old value of d: 6
instrument.ts:124 New value of d: 216
undefined
console.log("5=='5'",5=='5')
console.log("5==='5'",5==='5')
console.log("5===5",5===5)
console.log("5!==5",5!==5)
console.log("5!=6",5!=6)
console.log("5!=='5'",5!=='5')
console.log("5>2",5>2)
console.log("5>7",5>7)
console.log("5>5",5>5)
console.log("5<7",5<7)
console.log("5<2",5<2)
console.log("5<5",5<5)
console.log("5>=5",5>=5)
console.log("5<=5",5<=5)
instrument.ts:124 5=='5' true
instrument.ts:124 5==='5' false
instrument.ts:124 5===5 true
instrument.ts:124 5!==5 false
instrument.ts:124 5!=6 true
instrument.ts:124 5!=='5' true
instrument.ts:124 5>2 true
instrument.ts:124 5>7 false
instrument.ts:124 5>5 false
instrument.ts:124 5<7 true
instrument.ts:124 5<2 false
instrument.ts:124 5<5 false
instrument.ts:124 5>=5 true
instrument.ts:124 5<=5 true
undefined
var raining=false
var cloudy=true
console.log("It is raining",raining)
console.log("It is cloudy",cloudy)
console.log("It is raining AND cloudy:",raining&&cloudy)
console.log("It is raining OR cloudy:",raining||cloudy)
console.log("It is not raining:",!raining)
console.log("It is not cloudy:",!cloudy)
instrument.ts:124 It is raining false
instrument.ts:124 It is cloudy true
instrument.ts:124 It is raining AND cloudy: false
instrument.ts:124 It is raining OR cloudy: true
instrument.ts:124 It is not raining: true
instrument.ts:124 It is not cloudy: false
undefined
var chocolate=true
var candy=false
console.log("This is chocolate",chocolate)
console.log("This is candy",candy)
console.log("This is candy AND chocolate",chocolate&&candy)
console.log("This is chocolate OR candy",chocolate||candy)
instrument.ts:124 This is chocolate true
instrument.ts:124 This is candy false
instrument.ts:124 This is candy AND chocolate false
instrument.ts:124 This is chocolate OR candy true
undefined
let user_input=prompt("Enter a value")
if(!user_input){
console.log("You did not input anything");
}
else if(isNaN(user_input)){
    console.log("Your input is ",user_input)
    console.log("The length of the input is ",user_input.length)
}

else{

    console.log(user_input,"X 1 = ",user_input*1)
    console.log(user_input,"X 2 = ",user_input*2)
    console.log(user_input,"X 3 = ",user_input*3)
    console.log(user_input,"X 4 = ",user_input*4)
    console.log(user_input,"X 5 = ",user_input*5)
    console.log(user_input,"X 6 = ",user_input*6)
    console.log(user_input,"X 7 = ",user_input*7)
    console.log(user_input,"X 8 = ",user_input*8)
    console.log(user_input,"X 9 = ",user_input*9)
    console.log(user_input,"X 10 = ",user_input*10)
}
instrument.ts:124 Your input is  Lebnon
instrument.ts:124 The length of the input is  6
undefined
let user_input=prompt("Enter a value")
if(!user_input){
console.log("You did not input anything");
}
else if(isNaN(user_input)){
    console.log("Your input is ",user_input)
    console.log("The length of the input is ",user_input.length)
}

else{

    console.log(user_input,"X 1 = ",user_input*1)
    console.log(user_input,"X 2 = ",user_input*2)
    console.log(user_input,"X 3 = ",user_input*3)
    console.log(user_input,"X 4 = ",user_input*4)
    console.log(user_input,"X 5 = ",user_input*5)
    console.log(user_input,"X 6 = ",user_input*6)
    console.log(user_input,"X 7 = ",user_input*7)
    console.log(user_input,"X 8 = ",user_input*8)
    console.log(user_input,"X 9 = ",user_input*9)
    console.log(user_input,"X 10 = ",user_input*10)
}
instrument.ts:124 10 X 1 =  10
instrument.ts:124 10 X 2 =  20
instrument.ts:124 10 X 3 =  30
instrument.ts:124 10 X 4 =  40
instrument.ts:124 10 X 5 =  50
instrument.ts:124 10 X 6 =  60
instrument.ts:124 10 X 7 =  70
instrument.ts:124 10 X 8 =  80
instrument.ts:124 10 X 9 =  90
instrument.ts:124 10 X 10 =  100
undefined
let user_input=prompt("Enter a number between 1 to 7");
if(isNaN(user_input||user_input<1||user_input>7){
    console.log("Invalid input")
} else{
    user_input=parseInt(user_input)
    switch(user_input){
        case 1:console.log("Sunday");break;
        case 2:console.log("Monday");break;
        case 3:console.log("Tuesday");break;
        case 4:console.log("Wednesday");break;
        case 5:console.log("Thursday");break;
        case 6:console.log("Friday");break;
        case 7:console.log("Saturday");break;
        default:console.log("Invalid Entry");    
            
    }
}
VM5592:2 Uncaught SyntaxError: Unexpected token '{'
let user_input=prompt("Enter a number between 1 to 7");
if(isNaN(user_input||user_input<1||user_input>7){
    console.log("Invalid input")
} else {
    user_input=parseInt(user_input)
    switch(user_input){
        case 1:console.log("Sunday");break;
        case 2:console.log("Monday");break;
        case 3:console.log("Tuesday");break;
        case 4:console.log("Wednesday");break;
        case 5:console.log("Thursday");break;
        case 6:console.log("Friday");break;
        case 7:console.log("Saturday");break;
        default:console.log("Invalid Entry");    
            
    }
}
VM5595:2 Uncaught SyntaxError: Unexpected token '{'
let user_input=prompt("Enter a number between 1 to 7");
if(isNaN(user_input||user_input<1||user_input>7){
    console.log("Invalid input");
} else {
    user_input=parseInt(user_input)
    switch(user_input){
        case 1:console.log("Sunday");break;
        case 2:console.log("Monday");break;
        case 3:console.log("Tuesday");break;
        case 4:console.log("Wednesday");break;
        case 5:console.log("Thursday");break;
        case 6:console.log("Friday");break;
        case 7:console.log("Saturday");break;
        default:console.log("Invalid Entry");    
            
    }
}
VM5598:2 Uncaught SyntaxError: Unexpected token '{'
let user_input=prompt("Enter a number between 1 to 7");
if(isNaN(user_input)||user_input<1||user_input>7){
    console.log("Invalid input");
} 

else {
    user_input=parseInt(user_input)
    switch(user_input){
        case 1:console.log("Sunday");break;
        case 2:console.log("Monday");break;
        case 3:console.log("Tuesday");break;
        case 4:console.log("Wednesday");break;
        case 5:console.log("Thursday");break;
        case 6:console.log("Friday");break;
        case 7:console.log("Saturday");break;
        default:console.log("Invalid Entry");    
            
    }
}
instrument.ts:124 Thursday
undefined
let user_input=prompt("Enter the number")
if(!isNaN(user_input)){
    for(let i=0;i<10;i++){
        console.log(user_input," X ",i," = ",user_input*i)
    }
}
instrument.ts:124 10  X  0  =  0
instrument.ts:124 10  X  1  =  10
instrument.ts:124 10  X  2  =  20
instrument.ts:124 10  X  3  =  30
instrument.ts:124 10  X  4  =  40
instrument.ts:124 10  X  5  =  50
instrument.ts:124 10  X  6  =  60
instrument.ts:124 10  X  7  =  70
instrument.ts:124 10  X  8  =  80
instrument.ts:124 10  X  9  =  90
undefined
let user_input=prompt("Enter the number")
if(!isNaN(user_input)){
    for(let i=0;i<=10;i++){
        console.log(user_input," X ",i," = ",user_input*i)
    }
}
instrument.ts:124 10  X  0  =  0
instrument.ts:124 10  X  1  =  10
instrument.ts:124 10  X  2  =  20
instrument.ts:124 10  X  3  =  30
instrument.ts:124 10  X  4  =  40
instrument.ts:124 10  X  5  =  50
instrument.ts:124 10  X  6  =  60
instrument.ts:124 10  X  7  =  70
instrument.ts:124 10  X  8  =  80
instrument.ts:124 10  X  9  =  90
instrument.ts:124 10  X  10  =  100
undefined
let do_more=true
while(do_more){
let user_input=prompt('Enter a word')
    if(isNaN(user_input)){
        console.log("Length of the word is : ",user_input.length);
    }
    else{console.log("You have entered a number ");}
    let should_continue=prompt("Do you want to continue. Press n to stop");
    if(should_continue==="n"){do_more=false;}
}
instrument.ts:124 Length of the word is :  12
false
let myArray=["Kunal",12,"Mishra","Gaurav",true]
console.log(myArray[0]);
console.log(myArray[3]);
myArray.forEach(element=>{console.log(element)})
instrument.ts:124 Kunal
instrument.ts:124 Gaurav
instrument.ts:124 Kunal
instrument.ts:124 12
instrument.ts:124 Mishra
instrument.ts:124 Gaurav
instrument.ts:124 true
undefined
let myArray_2=[myArray,"Garima"];
undefined
myArray_2.forEach(element=>{console.log(element)})
instrument.ts:124 (5) ['Kunal', 12, 'Mishra', 'Gaurav', true]
instrument.ts:124 Garima
undefined
let myMap=new Map();
myMap.set("name","Kunal")
myMap.set("age",22)
myMap.forEach((val,key)=>{})
undefined
let myMap=new Map();
myMap.set("name","Kunal")
myMap.set("age",22)
myMap.forEach((val,key)=>{
    console.log(key," - ",val)
})
instrument.ts:124 name  -  Kunal
instrument.ts:124 age  -  22
undefined
