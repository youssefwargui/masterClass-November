//iteration or loop : bech t3awed block of code for specific number of time 
// 
var i = 1
i=i+1 // i++
// for loop 
for(var i=0;i<=5;i++){
    // console.log(`the counter is : ${i}`)
}

//while loop :
/*
while(condition){
block of code
change the value of number (i) => to avoid infinite loop
}
*/ 

var number = 0
while(number<=5){
    // console.log(number)
    number++
}
// console.log(number)


/*
Function ta5ou number as param => sum of the numbers starting from 0
exemple : 6 => 0+1+2+3+4+5+6 = 21 sum(6) => 21
*/ 


// Psedo code :
//  input : number  => output sum of number 
//  exp : 6 => 0+1+2+3+4+5+6 = 21 sum(6) => 21
function sum(number){
    //  1- bech n7ather variable bech n5abbi fiha sum => bech tabda m 0
    var sum = 0 
    var sum2 = 0
    var j =0
    while(j<=number){
        sum2=sum2+j
         j++
    }
    //  2-bech na3mel for loop 
    //  for(var i = number;i==0;i--)
    //  for(var i = 0;i<=number;i++)

    for(var i = number;i>0;i--){
        //  bech nzid counter (i) lel sum kol step(sum bech na3mlelha assign kol mara )
     sum = sum + i
    console.log(sum,i)
    }
  console.log(`final sum with for loop is : ${sum}`,`final sum with while loop is : ${sum2}`)
     return sum 
}

sum(6)
