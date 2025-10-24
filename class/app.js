console.log("Welcome");

function add(num1,num2){
    console.log(num1+num2); 
}
function sub(num1,num2){
    console.log(num1-num2);
}
function mul(num1,num2){
    console.log(num1*num2);
}
function div(num1,num2){
    console.log(num1/num2);
}
add(2,3);
sub(2,3);
mul(2,3);
div(2,3);



function greet(name,callback){
    console.log("Hello"+name)
    callback()
}
function callback(){
    console.log("YO");

}
greet(jk,callback);




 