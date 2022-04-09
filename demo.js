var msg = "welcome to reactjs";
console.log(msg);

/*
    //for loop
    for(let i=0;i<5;i++){
        
    }
    console.log(i);
    //let : ReferenceError: i is not defined
    //var : 5
*/


/*
    //global variable
    let data = 10;

    {
        //local variable
        let data = 20;
    }
    console.log( data );


    //var : 20   let : 10
    //Global Polluting Issue
*/


/*
    //print variable

    //1) declare the variable
    //2) initilize the variable
    //3) print the variable (console)
    console.log( data );
    let data = 100;
    //var : undefined
    //let : ReferenceError: Cannot access 'data' before initialization
    //variable hoisting
*/


/*
    const data = 100;
    data = 200;
    //TypeError: Assignment to constant variable.
*/


const arr = [10,20,30,40,50];
//arr = [];                   //TypeError: Assignment to constant variable.
arr[0] = 100;
arr[1] = 200;
arr[4] = 500;
arr[5] = 600;
console.log( arr );         //[ 100, 200, 30, 40, 500, 600 ]



//json
//java script object notation
//objects --- {}
//arrays  --- []
//data    --- key & value pairs
let obj = {
    "sub_one" : "ReactJS",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
};
console.log( obj.sub_one, obj.sub_two, obj.sub_three );
//ReactJS NodeJS MongoDB


const obj1 = {
    "key1" : "Hello_1",
    "key2" : "Hello_2",
    "key3" : "Hello_3"
};
//obj1 = {};
//TypeError: Assignment to constant variable.

obj1.key1 = "welcome_1";
obj1.key2 = "welcome_2";
obj1.key3 = "welcome_3";
console.log( obj1 );
//{ key1: 'welcome_1', key2: 'welcome_2', key3: 'welcome_3' }














































































