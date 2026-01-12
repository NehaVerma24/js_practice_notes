/* IIFE -  Immediately Invoked Functions Expressions */

/* basic way */
(function basic_iife(name){
    console.log(`use of iife : ${name}`);
})('Hello Everyone');


/* arrow function way */
((name)=>{
    console.log(`use of advance iife : ${name}`);
})('Hello Everyone');
