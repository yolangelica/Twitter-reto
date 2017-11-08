
window.onload = function() {
    /*el primero de sus elementos que retorna porque 
    sabemos que existe al menos uno*/
    var sendButton = document.getElementsByName("butt")[0];
    var thinkInput = document.getElementsByName("texto")[0];
    var timeLine = document.getElementsByName("lineaDeTiempo")[0];
    var cont = document.getElementById("cont");
   
    sendButton.onclick = function() {/*al hacer click*/
        if (thinkInput.value == "" || thinkInput.value.length >140) {/*si no escribe y da click*/
            sendButton.disabled =false;/*desabilita boton al llegar a los 140 caracteres*/

        } else {/*si escribe algo y da click*/
            var tuitDiv = document.createElement("div");/*crea div*/
            var nameSpan = document.createElement("span");/*da nombre usuario*/
            var dateSpan = document.createElement("span");/*fecha */
            var tuitP = document.createElement("p");/*crea parrafo*/
            tuitDiv.appendChild(nameSpan);/*en el div creado agrega nombre usuario*/
            tuitDiv.appendChild(dateSpan);/*en el div agrega fecha*/
            tuitDiv.appendChild(tuitP);
            tuitDiv.className = "twitt"
            nameSpan.textContent = "Usuario ";
            dateSpan.textContent = new Date();
            tuitP.textContent = thinkInput.value;

            /* Usamos timeLine.children para obtener los hijos
             del nodo,
              insertBefore recibe dos parámetros y
             el segundo es opcional, si, el primer nodo no existe en 
             el arreglo children, entonces nos dará undefined. Y eso hará 
             que insertBefore agregue el nodo al último */
            timeLine.insertBefore(tuitDiv, timeLine.children[0]);
        }
    }

    /*____________CONTADOR CARACTERES______________________________*/

thinkInput.onkeyup=function(){
    var textMax = 140;/*DEFINE MAXIMO de caracteres donde comienza el contador*/
    var resta = "";
    var obs= thinkInput.value.length;/*largo del contendido de textArea o de comentario escrito*/
    resta = textMax-obs;/*resta el maximo de caracteres definido 140 - la longitud del texto escrito*/

    cont.value=resta;

   if(resta < 0){/*si el total de caracteres escritos es menor a cero*/
            sendButton.disabled = true;/*desabilitar boton de comentarios*/
            cont.style.color='red';/*numeros de contador(input) en rojo*/
            sendButton.style.backgroundColor = 'turquoise';/*cambia color de boton*/
        }
        if (resta>=0){/*si la longitud  escrita es mayor o igual a cero*/
            sendButton.disabled = false;/*habilita el boton comentar*/
            cont.style.color='green';/*numeros pasaran a color verde*/
            ;

      }  if (resta<=20 && resta >10){/*si la longitud del texto escrito es menor o igual a 20 y mayor a 10*/
            sendButton.disabled = false;/*habilita boton comentar*/
            cont.style.color='orange';/*cambia numero a color naranjo*/
            ;
        }
        if (resta<=10 && resta >=0){/*si la longitud del texto escrito es menor o igual a 10 y mayor o igual a cero*/
            sendButton.disabled = false;/*habilitar boton*/
            cont.style.color='red';/*numeros en rojo*/
           ;
        }
}
}
 

 /* AUTOEXPANDING TEXTAREA */
var textarea = document.getElementById("comentario");
var heightLimit = 300; /* Maximum height: 200px */

textarea.oninput = function() {
  textarea.style.height = ""; /* Reset the height*/
  textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};