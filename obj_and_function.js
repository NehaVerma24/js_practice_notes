const new_object = {
    name : "object_name",
    features : "object_behaviour"
}

// Argument Passing
function to_print_sum(num1, num2){

    return console.log('sum function',num1+num2);   //output :sum function 15
}

to_print_sum(10,5);

console.log(new_object);  //output: { name: 'object_name', features: 'object_behaviour' }

//Array
function get_array(arry , index){

    console.log(`Value at index ${index} is : ${arry[index]}`); //output: Value at index 2 is : 30

    console.log(`array length : ${arry.length}`); //output: array length : 5


}

const arry = [10,20,30,40,50];

get_array(arry ,2);

