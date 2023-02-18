//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 

var recargo_propiedad = 0.35; // 35%
var recargo_salario = 0.05 // 5%

var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%F

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%



// variable estado
var estado  = "inicio";
//noprotect

// Se agregaran los registros hasta que el usuario ingrese salir
while(estado != "SALIR") { 

  //Se inicializan las variables para cada cotizacion
  var recargo = 0
  var recargo_conyugue = 0;
  var recargo_hijos = 0;
  var recargo_total = 0
  var recargo_por_propiedad = 0;
  var recargo_por_salario = 0;
  
   
  
  //Precio final 
  var precio_final = 0


//Mensajes de alerta para ingresar datos  
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")


// Si el usuario no cumple con la edad minima no se iniciara la cotizacion

 if (edad > 18 ) {


  

var salario = prompt("Ingrese su Salario Por favor: ")
var propiedades = prompt("Ingrese la cantidad de propiedades que tiene: ")


// convirtiendo salario y No. de propiedades a numeros

var salario_num = parseInt(salario);
var propiedaes_num = parseInt(propiedades);
 
var casado = prompt("¿Está casado actualmente?" )
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?"   )
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad) 

 
//convirtiendo la edad del cónyuge si se esta casado/a
var edad_conyuge_numero;
  
edad_conyuge_numero = parseInt(edad_conyuge); 

var hijos = prompt("¿Tiene hijos o hijas?  si/no")

//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
if ("SI" == hijos.toUpperCase()){
     cantidad_hijos = prompt("¿Cuantos Hijos Tiene?")

} 
//  1. convierta la cantidad de hijos a numero

// se compruba si tiene hijos y se convierte la cantidad de hijos a numero

if ("SI" == hijos.toUpperCase()) {
  var cantidad_hijos_numero = parseInt(cantidad_hijos)
}
 
 
//Aplicando el recarga segun la edad del asegurado

if (edad_numero >=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18;
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
} else if (edad_numero > 24 && edad_numero <50 ){

    recargo = precio_base*edad_25;
    recargo_total = recargo_total + recargo;

} else if (edad_numero > 50  ){

    recargo = precio_base * edad_50;
    recargo_total = recargo_total + recargo;

}   
//aqui puede colocar un else if() con el siguiente rango

// * 2. Recargo por la edad del conyuge
  
  if (edad_conyuge_numero >=18 && edad_conyuge_numero<25){
  //Calculamos el recargo en base a la edad 

   
  recargo_conyugue = precio_base * casado_18 ; 

} else if (edad_conyuge_numero > 24 && edad_conyuge_numero <50 ){

    recargo_conyugue = precio_base*casado_25; 

} else if (edad_conyuge_numero > 50  ){

    recargo_conyugue = precio_base * casado_50 ; 

}  
  

 
 // 3. Recargo por la cantidad de hijos
 //Si tiene hijos se multiplica la cantidad de estos por su recargo correspondiente 
 
 if ("SI" == hijos.toUpperCase()) {
  recargo_hijos = precio_base * cantidad_hijos_numero * hijos_recargo;
}
   
 
// Recargo POR PROPIEDAD

recargo_por_propiedad = recargo_propiedad * propiedaes_num * precio_base   ;
 
// Recargo POR SALARIO
recargo_por_salario = precio_base * recargo_salario;

// PRECIO FINAL

precio_final = precio_base + recargo +recargo_conyugue + recargo_hijos + recargo_por_propiedad + recargo_por_salario;


//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo es de:  "+recargo )


 // Muestra el recargo para su conyugue
if ("SI" == casado.toUpperCase() ){


  alert ("El recargo para su  conyugue es de: " + recargo_conyugue)
  
}

// muestra el recargo para sus hijos
if ( "SI" == hijos.toUpperCase()) {
  alert ("el recargo para los hijos es de: " + recargo_hijos)

} {

  alert ("El recargo por propiedad es de : "+ recargo_por_propiedad )
  alert ("El recargo por salario es de: " + recargo_por_salario) 
 
  alert ("El precio Final es de: "+ precio_final)


}
 
 




 } else {

    alert("No cumple con la edad minima")
 }

 estado = prompt("Escriba SALIR si ya no desea AGAREGAR MAS REGISTROS ","Continuar" )
  estado = estado.toUpperCase();
   
}