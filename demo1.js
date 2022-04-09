//array
//collection of indexed and hetrogeneous elements called as "array" 
//[]
//index starts from "0"
let arr1 = [10,20,30,40,50];
console.log( arr1[0], arr1[4], arr1[5],arr1[100],arr1[-1] );
//10 50 undefined undefined undefined


let arr2 = [];
console.log( arr2.length );         //0

arr2[0] = 10;
console.log( arr2.length );         //1

arr2[1] = 20;
console.log( arr2.length );        //2


arr2[100] = 1000;
console.log( arr2.length );         //101


arr2[1000] = 10000;
console.log( arr2.length );        //1001




let arr3 = [10,20,30,40,50];
delete arr3[0];
console.log( arr3.length );             //5
delete arr3[4];
console.log( arr3.length );             //5
console.log( arr3 );                    //[ <1 empty item>, 20, 30, 40, <1 empty item> ]


console.log(
    [10,20,30,40,50].map((element,index)=>{
        return element * 10;
    }).filter((element,index)=>{
        return element<=300;
    }).reduce((num1,num2)=>{
        return num1+num2;
    })
);
//[ 100, 200, 300, 400, 500 ]
//[ 100, 200, 300 ]
//600

























