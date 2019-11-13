  //EJERCICIO 1: imprimir los numeros del 0 al 10 (ambos incluidos) con un bucle WHILE
var i = 0; //inicilizo el contador
while(i<=10){
  document.write(i+" - ");
  i++;

}

  //EJERCICIO 2: CON do-while
var pass=""; //declaramos la variable pass vacía
do{
  pass=prompt("Introduce un password(mínimo 6 caracteres)"); //pedidos introducir la contraseña
}while(pass.length < 6); //si es menor de 6 nos avisa y vuelve a pedir la contraseña
  //mientras no sea igual a 6 no dejará de dar mensajes






/*
document.write();  -> nos imprime directamente el contenido en el documento HTML



BUCLES
  WHILE (primero pregunta y luego hace)

    WHILE (condicion){
      instruccion a realizar;
    }

  DO-WHILE (primero hace y luego pregunta)

    DO{
      instruccion
    }WHILE(true);



*/
