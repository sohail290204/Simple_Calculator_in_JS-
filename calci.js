let a = "";
let operation = "";

function one(){
    a = a+"1";
    document.getElementById("output_window").innerHTML = a;
}
function two(){
    a = a+"2";
    document.getElementById("output_window").innerHTML = a;
}
function three(){
    a = a+"3";
    document.getElementById("output_window").innerHTML = a;
}
function four(){
    a = a+"4";
    document.getElementById("output_window").innerHTML = a;
}
function five(){
    a = a+"5";
    document.getElementById("output_window").innerHTML = a;
}
function six(){
    a = a+"6";
    document.getElementById("output_window").innerHTML = a;
}
function seven(){
    a = a+"7";
    document.getElementById("output_window").innerHTML = a;
}
function eight(){
    a = a+"8";
    document.getElementById("output_window").innerHTML = a;
}
function nine(){
    a = a+"9";
    document.getElementById("output_window").innerHTML = a;
}
function zero(){
    a = a+"0";
    document.getElementById("output_window").innerHTML = a;
}
function clearr(){
    a = "";
    document.getElementById("output_window").innerHTML = a ;
} 

function plus(){
    a = a+"+";
    
    operation = "+";
    document.getElementById("output_window").innerHTML = a;
}
function minus(){
    a = a+"-";
    operation = "-";
    document.getElementById("output_window").innerHTML = a ;
}
function multiply(){
    a = a+"*";
    operation = "*";
    document.getElementById("output_window").innerHTML = a ;
}
function divide(){
    a = a+"/";
    operation = "/";
    document.getElementById("output_window").innerHTML = a ;
}



let pluss;
function equal(){
   if(operation == "+"){
    pluss = eval(a);
    document.getElementById("output_window").innerHTML = pluss ;
   }else if(operation == "-"){
    pluss = eval(a);
    document.getElementById("output_window").innerHTML = pluss ;
   }else if(operation == "*"){
    pluss = eval(a);
    document.getElementById("output_window").innerHTML = pluss ;
   }else if(operation == "/"){
    pluss = eval(a);
    document.getElementById("output_window").innerHTML = pluss ;
   }
    
}