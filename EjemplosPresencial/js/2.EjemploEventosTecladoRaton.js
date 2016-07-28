window.onload = function(){
        // boleano que sabe si eres o no IE
        var soy_ie = navigator.userAgent.toLowerCase().indexOf('msie') == -1;
        
        // Parte del teclado
        document.onkeypress = function(infoEvento){
          var infoEvento = infoEvento || window.event;
          var tecla = null;
          if (soy_ie){
            tecla = String.fromCharCode(infoEvento.keyCode);
            console.log(infoEvento.keyCode)
          }
          else{
            tecla = String.fromCharCode(infoEvento.charCode);
            console.log(infoEvento.keyCode);
          }
          console.log("Se ha pulsado la tecla: " + tecla);
        }

        // Parte del raton
        document.onclick = function(infoEvento){
          var infoEvento = infoEvento || window.event;
          var x = null;
          var y = null;
          if (soy_ie){
            x = infoEvento.clientX + document.body.scrollLeft;
            y = infoEvento.clientY + document.body.scrollTop;
          }
          else {
            x = infoEvento.pageX;
            y = infoEvento.pageY;
          }
          console.log("el raton estaba en: (" + x +","+y+")");

        }
      }