 
     //porfolio
     var imagen  =[
      "img/imagen1.png",
      "img/imagen2.png",
      "img/imagen3.png",
      "img/imagen4.png",
    ]
     window.onload = function(){
      var i = 0;
      setInterval(function(){
        document.getElementById("trabajo_realizado").innerHTML =' <img src="'+imagen[i]+'" alt="imagen" class="img-fluid" id="img_porfolio">';
        i++;
        if(i >= imagen.length){
          i = 0;
        }
      }, 3000);
    }

    //fin porfolio

    //inicio de la funcion de la barra de navegacion
    $(document).ready(function(){
      $('.abri_cerra').click(function(){
         //fin de la funcion de la barra de navegacion
      $('.menu_nav').toggle("slow");
        $('#abri_menu').hide();
        });
        $('#cerra_menu').click(function(){
          $('#abri_menu').show();
          $('.menu_nav').css(
            //poner el div ala izquierda
            
          )

        }
        );
        function ancho(){
          var ventana_ancho = document.documentElement.clientWidth;
            if(ventana_ancho < 800){
              document.getElementById("menu_nav").style.display = "block";
            }
        }
        ancho();

      





        });
