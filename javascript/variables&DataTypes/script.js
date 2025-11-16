// variable : box with name & value
// how to declare variable in javascript
// var (keyword) name (esm variable )= (assign) value (that the variable holds)

// 1- Type String (chaine de charactére)
var firstName = "Hafnaoui"  // 'Hafnaoui'
// bech na3mlou print : console.log(firstName)
console.log(firstName)
firstName='Philips'
console.log("FirstName after second assign :",firstName)

//2-Number 
var dataNumber = 55
var dataNumber2 =12 // dataNumber = 12
console.log(dataNumber) //12

var somme = dataNumber + dataNumber2
//console.log(dataNumber + dataNumber2)
console.log(somme)
// modulo operator 
var reste = dataNumber2%2

console.log(reste)
//3-undefined (mahich defini)
var test
console.log(test)
//4-Null
var user = null
console.log(user)

// typeof :traja3 type ta3 variable {}
console.log(typeof true)

// boolean
var isActive =false
   // logic operator 
   console.log(!isActive)
   console.log(!!isActive)

// build in function (7ajet ma5douma fi js w nesta3mlouhom)

var num1 = Math.round(-2.6)
console.log(num1)
var num2 = Math.floor(2.9)
console.log(num2)

// comparaison : mabin deux variables
//1-  ==  compare only value
console.log(99=="99")
//2-  ===  : comapari type & value
console.log(99==="99")

console.log("A"==65)

console.log("ALY".charCodeAt(2)===89)

// Condition block in js 
/*
if(codition){
// block of code when its true
} else if (condition){
// 2nd block : logique 
} else {

    ken if w else if kolla mahomch verified execute this code 
    }
*/ 
var age = 10
if(age>=18 && age<100){
    console.log("You can enter the party !")
}else if(age<18) {
    console.log("Drink some milkl and sleep !!")
}else {
console.log("ur not a dinosor !!")
}
// ternary : syntax jdid l if condition 
var text =age>18?"Yes you can have ur driving L":"No ur too young "
console.log(text)
// logic operator 
var a = true
var b = false

console.log(a||b)
console.log(a&&b)


// switch statement in function 
   // function : block mta3 code =>perform a task(s)
// function declaration 
function greet(whatever){
    console.log("Hello from function !", whatever)
}   
 // function invoke 
 greet("Youssef")
 greet("Roua")
 greet("Karima")
 greet(firstName)

 function getDaysInMonth(month){
    // switch statement
    switch(month){
        case 1:
        case 3: 
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:   
        return  `the days of ${month} is 31`
        // return 31
        case 2:
            return "The days of "+ month + " is 29"
        case 4:
        case 6:
        case 9:
        case 11:
        
           return   "The days of "+ month + " is 30"
        default :
           return "There is no such month !!"       
    }
 }

 var result =getDaysInMonth(95)
 console.log(result)

var power = 2**3
console.log(power) 