
/**
 * @param JUEGO_PALETSTILO
 * 
 * CONSISTE EN CAMBIAR LOS COLORES DE LAS PALETAS Y LOS COJINES PARA 
 * CREAR TU PROPIO PALETSTILO PERSONALIZADO
 */

        
    // Cierre Tapiz Anakena

    let url =  './imgShowrun/robleOscuro/'
    let nombreCombinacion = 'Roble Oscuro'
    //paletas
        
        document.getElementById("pintura1").addEventListener("click", function displayImg() {
            
            colorDePintura = document.querySelector("#pintura1")
            color = colorDePintura.children
            pintar = color[0].id
            //agregar text
            agregarNombreDecombinaciones('Tu elección: Roble Oscuro', 1)
            document.getElementById("paletstilo").src = 'imgShowrun/sillon/' + pintar + '.png'
            return url = 'imgShowrun/' + pintar + '/'

        });

        document.getElementById("pintura2").addEventListener("click", function displayImg() {
            colorDePintura = document.querySelector("#pintura2")
            color = colorDePintura.children
            pintar = color[0].id
            //agregar text
            agregarNombreDecombinaciones('Tu elección: Alerce', 1)
            document.getElementById("paletstilo").src = 'imgShowrun/sillon/' + pintar + '.png'
            return url = 'imgShowrun/' + pintar + '/'

        });
        document.getElementById("pintura3").addEventListener("click", function displayImg() {
            colorDePintura = document.querySelector("#pintura3")
            color = colorDePintura.children
            pintar = color[0].id
            //agregar text
            agregarNombreDecombinaciones('Tu elección: Caoba', 1)
            document.getElementById("paletstilo").src = 'imgShowrun/sillon/' + pintar + '.png'
            return url = 'imgShowrun/' + pintar + '/'

        });
        document.getElementById("pintura4").addEventListener("click", function displayImg() {
            colorDePintura = document.querySelector("#pintura4")
            color = colorDePintura.children
            pintar = color[0].id
            //agregar text
            agregarNombreDecombinaciones('Tu elección: Cedro', 1)
            document.getElementById("paletstilo").src = 'imgShowrun/sillon/' + pintar + '.png'
            return url = 'imgShowrun/' + pintar + '/'

        });
        document.getElementById("pintura5").addEventListener("click", function displayImg() {
            colorDePintura = document.querySelector("#pintura5")
            color = colorDePintura.children
            pintar = color[0].id
            //agregar text
            agregarNombreDecombinaciones('Tu elección: Cerezo', 1)
            document.getElementById("paletstilo").src = 'imgShowrun/sillon/' + pintar + '.png'
            return url = 'imgShowrun/' + pintar + '/'

        });
        document.getElementById("pintura6").addEventListener("click", function displayImg() {
            colorDePintura = document.querySelector("#pintura6")
            color = colorDePintura.children
            pintar = color[0].id
            //agregar text
            agregarNombreDecombinaciones('Tu elección: Maple', 1)
            document.getElementById("paletstilo").src = 'imgShowrun/sillon/' + pintar + '.png'
            return url = 'imgShowrun/' + pintar + '/'

        });
        document.getElementById("pintura7").addEventListener("click", function displayImg() {
            colorDePintura = document.querySelector("#pintura7")
            color = colorDePintura.children
            pintar = color[0].id
            //agregar text
            agregarNombreDecombinaciones('Tu elección: Natural', 1)
            document.getElementById("paletstilo").src = 'imgShowrun/sillon/' + pintar + '.png'
            return url = 'imgShowrun/' + pintar + '/'
        });
        document.getElementById("pintura8").addEventListener("click", function displayImg() {
            colorDePintura = document.querySelector("#pintura8")
            color = colorDePintura.children
            pintar = color[0].id
            //agregar text
            agregarNombreDecombinaciones('Nogal Claro', 1)
            document.getElementById("paletstilo").src = 'imgShowrun/sillon/' + pintar + '.png'
            return url = 'imgShowrun/' + pintar + '/'
        });
        document.getElementById("pintura9").addEventListener("click", function displayImg() {
            colorDePintura = document.querySelector("#pintura9")
            color = colorDePintura.children
            pintar = color[0].id
            //agregar text
            agregarNombreDecombinaciones('Tu elección: Roble', 1)
            document.getElementById("paletstilo").src = 'imgShowrun/sillon/' + pintar + '.png'
            return url = 'imgShowrun/' + pintar + '/'
        });
    // Cierre paleta

    // TAPIZ
        document.getElementById("tapiz1").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz1")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Amarillo', 0)
            url += tapizar + '.png'
            img = document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz2").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz2")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Amarillo Fluor', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz3").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz3")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Azulino', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz4").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz4")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Azul Marino', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz5").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz5")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Blanco', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz6").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz6")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Gris Oscuro', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz7").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz7")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Gris Acero', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz8").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz8")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Mantequilla', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz9").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz9")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Verde Musgo', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz10").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz10")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Naranjo', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz11").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz11")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Naranjo Fluor', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz12").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz12")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Negro', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz13").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz13")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Rojo', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz14").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz14")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Anak. Rojo', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz15").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz15")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Anak. Turqueza', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz16").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz16")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Anak. Pistacho', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz17").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz17")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Anak. Naranjo', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz18").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz18")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Anak. Marengo', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz19").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz19")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Anak. Gris Medio', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz20").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz20")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Anak. Canela', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });

        document.getElementById("tapiz21").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz21")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Imper. Beige', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
        document.getElementById("tapiz22").addEventListener("click", function displayImg() {
            let colorDeTapiz = document.querySelector("#tapiz22")
            let color = colorDeTapiz.children
            let tapizar = color[0].id
            let urlPintura = url
            //agregar text
            agregarNombreDecombinaciones('Tapíz Anak. Arena', 0)
            url += tapizar + '.png'
            document.getElementById("paletstilo").src = url
            return url =  urlPintura
        });
    // CIERRE TAPIZ
        
        
   


    


    // display de las listas de los cojines

        // Botones para seleccionar tipo de tela 
            document.getElementById("tipo-impermeable-movil").addEventListener("click", function displayImg() {
                document.getElementById('lista-cojin-impermeable-movil').style = "display:block;"
                document.getElementById('lista-cojin-anakena-movil').style = "display:none;"
                document.getElementById('tipo-impermeable-movil').classList.add("active")
                document.getElementById('tipo-anakena-movil').classList.remove("active")
                return
            });

            document.getElementById("tipo-anakena-movil").addEventListener("click", function displayImg() {
                document.getElementById('lista-cojin-impermeable-movil').style = "display:none"
                document.getElementById('lista-cojin-anakena-movil').style = "display:block"
                document.getElementById('tipo-anakena-movil').classList.add("active")
                document.getElementById('tipo-impermeable-movil').classList.remove("active")
                return
            });
        // Cierre Botones para seleccionar tipo de tela 

        

        // Funciones helper
        const subtraerTexto = texto => {
            let textoListo = texto.slice(0,texto.length - 10)
            return textoListo + '.png'
        }


        //agregar nombres de las combinaciones
        const agregarNombreDecombinaciones = (nombre, accion) => {
            if (accion == 1) {
                //texto PINTURA
                let com = document.querySelector("#nombreDeCombinacion")
                let combi = com.children
                nombreCombinacion = combi[0].innerHTML = `${nombre}`
            }else{
                 // texto TAPIZ    
                let com = document.querySelector("#nombreDeCombinacion")
                let combi = com.children
                combi[0].innerHTML = `${nombreCombinacion} / ${nombre}`
            }
        }

// CODIGO PARA CAMBIA IMAGENES
// document.getElementById("myImage").src = "landscape.jpg";