function sayMagicWord() {  alert("PLEASE!"); }
/*Declarar variáveis*/

var a = 10;
var a = 20; // Não gera erro, redeclaração permitida com var
let b = 30;
// let b = 40; // Gera erro, redeclaração não permitida com let
b = 40; // Atribuição permitida, mas não redeclaração

function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName

var str = "Hello World!";  
var n = str.length; // n=12
var str = "Hello world!";
var res = str.substr(1, 4); // res=”ello”
var str = "How are you doing today?";  
var res = str.split(" "); 
//res=[How,are,you,doing,today?]
var str = "Hello world, welcome to the universe.";  
var n = str.indexOf("welcome");  //n=13
}
function saudacao() {
    console.log("Olá! Bem-vindo!" );
}