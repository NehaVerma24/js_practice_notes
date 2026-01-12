const new_object = {
    name : "object_name",
    features : "object_behaviour"
}

function to_print_sum(num1, num2){

    return console.log('sum function',num1+num2);   //output :sum function 15
}

to_print_sum(10,5);

console.log(new_object);  //output: { name: 'object_name', features: 'object_behaviour' }
