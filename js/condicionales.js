    //EJEMPLO 1
/*var num1 = 3;
var num2 = 6;
if(num1 > num2){
  alert(num1 + " es mayor que "+ num2);
}else{
  alert(num1 + " es menor que "+ num2);
}
*/


    //EJEMPLO 2: mostrar un alert en el caso que un password sea menor de caracteres
/*var pass = prompt("Introduce un password (6 caracteres mínimo)");

if(pass.length < 6){
  alert("El password ha de tener mínimo 6 caracteres");
}
    //pass.length permite acceder a la propiedad length de la variable pass (por el punto) para conocer la longitud del String introducido por el usuario
*/


    //EJEMPLO 3: mostrar el mayor de dos números y también el caso de que sean iguales
/*var num1 = parseInt(prompt("Introduce un número"));
var num2 = parseInt(prompt("Introduce otro número"));
if (num1 > num2){
  alert(num1 + " es mayor");
}else if (num1 < num2){
  alert(num2 + " es mayor");
}else{
  alert("Los dos números son iguales");
}
*/

    //EJEMPLO 4: switch para escoger el horario de un curso
/*var hor = prompt("Elige el horario de un curso (mañana / tarde)");
var horario = hor.toLowerCase(); // Eslo lo añadimos para que ep promt no se vea afectado por MAY o MIN
switch (horario){
  case "mañana":
    alert("Has elegido el turno de mañana");
    break;
  case "tarde":
    alert("Has elegido el turno de tarde");
    break;
  default:
    alert("No has escogido un horario correcto");
  }
*/


    //EJEMPLO 5: alert comparando si los dos password son iguales
//var pass1 = prompt("Introduce un password");
/*var pass2 = prompt("Repite el password");
if (pass1 != pass2){
  alert("Los password no coinciden");
}*/

    //... y son de mínimo 6 caracteres
/*if (pass1 == pass2 && pass1.length >=6 ){
  alert("OK");
}else{
  alert("Los datos introducidos no son correctos");
}*/

  //otra forma menos optimizada (más para principiantes)
/*if (pass1 != pass2){
  alert("Los password no coinciden");
}else if(pass1.length < 6 || pass2.length < 6){
  alert("Algún password tiene menos de 6 caracteres");
}*/



/*
nombreDeLaVariable.length;  // nos da el tamaño del String de la variable
prompt("");  // es un alert con un campo para introducir texto pero es para trabajar con STRINGS
            // si queremos usarlo con números lo hemos de parsear -> parseInt

parseInt() -> convierte un string a número entero
nombreDeLaVariable.toLowerCase(); // Eslo lo añadimos para que ep promt no se vea afectado por MAY o MIN


SINTAXIS EN JS CON COMPARACIONES

  OPERADOR / DESCRIPCION
    ==  Igual a
    !=  Distinto a
    >    Mayor a
    <   Menor
    >=  Mayor o Igual
    <=  Menor o Igual

  PARA CONCATENAR DISTINTOS OPERADORES usamos
    &&  AND -> True si se cumplen TODAS las condiciones
    ||  OR -> True si se cumple ALGUNA de las condiciones

  Las sentencias condiciones son:
    IF
    IF-ELSE
    SWITCH (para trabajar con valores conocidos, como en un semáforo)

    SINTAXIS if:
      if(condicion){
        instrucción a ejectutar si se cumple la condición dada
      }else{
        instrucción a ejecutar si NO se cumple la condición dada
      }
            si sólo hay una instrucción me puedo ahorrar las llaves
            if(num1 > num2) alert(num1 + " es mayor que "+ num2);
            else   alert(num1 + " es menor que "+ num2);


      if(condicion){
        instrucción a ejectutar si se cumple la condición dada
      }else if{
        instrucción a ejecutar si NO se cumple la condición dada pero SI se cumple este IF
      }else if{
        instrucción a ejecutar si NO se cumplen los anteriores pero SI se comple este
      }else if{
        instrucción a ejecutar si NO se cumplen los anteriores pero SI se comple este
      }else{
        instrucción a ejecutar si NO se cumple la condición dada
      }
      break para ROMPER el IF


    SINTAXIS switch:
        switch(expression){
          case expression1: xxx;
          break;
          case expression2: xxx;
          break;
          default: xxx;
        }



*/
