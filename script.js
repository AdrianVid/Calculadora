let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");

let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let multiplicar = document.getElementById("multiplicar");
let dividir= document.getElementById("dividir");
let igual = document.getElementById("igual");
let borrar = document.getElementById("borrar");

function takeValue(x){
    document.getElementById("result").innerHTML +=x;
}
function clearInput(){
    document.getElementById("result").innerHTML ="";
}
function calculateResult(){
    let result = eval(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = result;
}

cero.addEventListener("click", function(){
    takeValue(0)
})
uno.addEventListener("click", function(){
    takeValue(1)
})
dos.addEventListener("click", function(){
    takeValue(2)
})
tres.addEventListener("click", function(){
    takeValue(3)
})
cuatro.addEventListener("click", function(){
    takeValue(4)
})
cinco.addEventListener("click", function(){
    takeValue(5)
})
seis.addEventListener("click", function(){
    takeValue(6)
})
siete.addEventListener("click", function(){
    takeValue(7)
})
ocho.addEventListener("click", function(){
    takeValue(8)
})
nueve.addEventListener("click", function(){
    takeValue(9)
})


coma.addEventListener("click", function(){
    takeValue(".")
})
sumar.addEventListener("click", function(){
    takeValue("+");
})
restar.addEventListener("click", function(){
    takeValue("-")
})
multiplicar.addEventListener("click", function(){
    takeValue("*")
})
dividir.addEventListener("click", function(){
    takeValue("/")
})


igual.addEventListener("click", function(){
calculateResult();
})
borrar.addEventListener("click", function(){
    clearInput();
    })