console.log("prueba de coneccion");
//******tipo de variables******
//const para variables constantes
//const son variables finales,valores que no cambian pero se usan en ejercicios 
const pi = 3.14;
const pulgada = 2.54;
const name = "valentina prado sarabia";
//var para variables globales,esta variable si puede cambiar
var cal_days = 20;
//let para variables de bloque o locales,b¿van en bloques como un if
let j=0;
let count =1;

//forma de impresion

//alert sirve para imprimir variables
//alert(name);

//consola
console.log(name);
console.log(cal_days);
console.log("15");
console.log(true);

//pantalla - body
// get es capturar
document.write(name);
//document.getElementById("box_one").innerHTML = "<h1> valentina prado </h1>";
//document.getElementById("box_two").innerText= "<h1>valentina prado</h1>";

//librerias
 
Swal.fire({
    icon : 'info',
    title:'valentina',
    text:name,
    footer : name,
    showConfirmButton :false,
    timer :2000,
    position :'center-end'
})
//swal.fire(name)


//*******TIPOS DE DATOS*******
//numericos
var number_one =10;
var number_two =2.5;
//string
var text = "soy un texto";
//boolean
var boolean = true; //false
//array
let array_num =[1,2,3,4,5,6];
let array_tex =["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
let array_mix = [1,"a",2.5,"c"];
let array_mul=[
    {name:"valentina",last_name:"prado",age:"31"},
    {name:"pepe",last_name:"perez",age:"21"},
    {name:"ana",last_name:"osorio",age:"11"},
    {name:"juan",last_name:"prada",age:"41"}
];

//****operadores basicos****

//suma
var suma = number_one+number_two;
console.log("suma =" + suma);

//resta
var resta = number_one-number_two;
console.log("resta =" + resta);

//multiplicacion
var multi = number_one*number_two;
console.log("multiplicacion =" + multi);

//division
var division = number_one/number_two;
console.log("division =" + division);

//modulo
var modulo = number_one%number_two;
console.log("modulo =" + modulo);

console.log(
    "suma =" + suma +"\n"+
    "resta =" + resta +"\n"+
    "multiplicacion =" + multi +"\n"+
    "division =" + division +"\n"+
    "modulo =" + modulo.toFixed(2) +"\n"
);
//tofixed(2) sirve para mostar los decimales que se nombren

var respuesta = "suma =" + suma +"<br>"+
"resta =" + resta +"<br>"+
"multiplicacion =" + multi +"<br>"+
"division =" + division +"<br>"+
"modulo =" + modulo ;

 
Swal.fire(respuesta);
Swal.fire({
    showConfirmButton:false,
    background:'#000',
    icon :'success',
    title : 'respuesta',
    html : respuesta,
});

// ·················operadores logicos y estructuras condicionales(inverse,)·············
// and y con if
var bool = true;
var numeric = 7;
//!= contraroio,negacion,o inverso= se le da inverso a la respuesta si es verdadero pasa a falso,y si es falso pasa a verdadero
// = asignacion del valor,== igual de la comparacion,compara el valor,=== compara valor y tipo de dato
if(!bool && numeric === 7){ //bool==true !bool==false
    console.log("entra if")
}
else{
    console.log("entra else1")
}

// or | | con if
// el or es si uno de los dos valores son verdaderos entonces entra al if,pero si ninguno de los dos es verdadero entonces entra al else
var age = 31;

if(age==32  || numeric===7 ){ //flase o true
    console.log("entra if2")
    age+=2;
}
else{
    console.log("entra else")
    age--;
}
console.log(age);

// for 
console.log(array_tex.length);
for(let i=0;i<array_tex.length;i++){ 
    console.log(array_tex[i]+(i+1));
}

// WHILE
let position = 0; 
while (position < array_tex.length) {
    console.log(array_tex[position]+" "+(position+1));
    position++;
}

// DO WHILE 
let w = 0;
do {
    console.log(array_tex[w]+" "+(w+1));
    w++;
} while (w < array_tex.length);

//eventos y funciones{}
//pagina 100 productos,estan catagorizados 20 zapatos,20 zapatos, si muestra imagenes mas zapatos que antes que otros

function load_page(){
    // ejm();
    // ejm2();
}
function ejm(){
    alert("bienvenido 1")
}
function ejm2(){
    alert("bienvenido 2")
}
function box_onblur(){
    const box_onblur = document.querySelector("#box_onblur");
    if(box_onblur.ariaValueMax.length<=2){
       // alert("problemas con el texto");
    }
}
//selecciona el id del boton cambiar de color
const btn_chanceColor = document.querySelector("#chance_color");
// addEventListener es un escuchador que indica al navegador que este atento a la interacción del usuario.
btn_chanceColor.addEventListener("click",() => {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";

});
 const form = document.querySelector("form_register");
 const nombres = document.querySelector("nombres");
 const apellidos = document.querySelector("apellidos");
 const validation = document.querySelector("validation");
// submir solo para formularios
//  form.addEventListener("submit",name_event =>{

//  });
 function load_page(){
    //focus() pone el puntero en el nombres
    //
    document.getElementById("nombres").focus();
    //Si estableces disabled = true , el elemento estará deshabilitado; 
    //si estableces disabled = false , el elemento estará habilitado.
    document.getElementById("apellidos").disabled= true;
    let date = new Date;
    //getMonth imprime el mes
    console.log(date.getMonth());

    //imprime solamente los nombres del array mul
    for(let i=0;i<array_mul.length;i++){
        console.log(array_mul[i].name);

    }
 }
 //funcion validar
 function validate(){
    let nombres = document.getElementById("nombres").value;
    console.log(nombres);
    //lastIndexOf ("e")= encontrar valores de izquierda a derecha
    alert(nombres.concat(" Prado"))
    if(nombres.length>2){
        document.getElementById("apellidos").disabled= false;
        document.getElementById("apellidos").focus();
        document.getElementById("nombres").value=" ";
    }
 }

