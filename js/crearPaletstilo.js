/** Constantes */
const   log = console.log,
        d = document,
        disenioInicial = "",
        urlWhatsapp = "https://wa.me/584143534569",
        URL_BASE = location.protocol + "//" + location.host + "/",
        URL_DIR = "imgShowrun/",
        preload =   `<div class="spinner-grow text-dark" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>`;
       

/** Obtener los elementos del DOM */
let cardBodyPinturas = d.getElementById('pinturas_maderas'),
    cardBodyTapices = d.getElementById('lista_tapices'),
    preload_figure = d.getElementById('preload_figure'),
    realizar_pedido_whatsapp = d.getElementById('realizar_pedido_whatsapp'),
    color_paleta = d.getElementById('color_paleta'),
    color_tapiz = d.getElementById('color_tapiz'),
    preview = d.getElementById('preview'),
    miDisenio = d.getElementById('mi_disenio'),
    nombre_tipo_tapiz = d.getElementById('nombre_tipo_tapiz'),
    link_tapices = d.querySelectorAll('.link_tapices'),
    botones = "";

/** Varables del showrun */
/** la estructura de los string dentro del array consiste en lo siguiente
 *  @dir_representa - @dir_img - @file_name_img
 */
let pinturas = [
    "pinturas-paletas-alerce", 
    "pinturas-paletas-cedro", 
    "pinturas-paletas-cerezo", 
    "pinturas-paletas-natural", 
    "pinturas-paletas-nogal_claro", 
    "pinturas-paletas-roble", 
    "pinturas-paletas-roble_oscuro", 
    "pinturas-paletas-grafito", 
    "pinturas-paletas-petroleo", 
    "pinturas-paletas-alabastro", 
    // "pinturas-paletas-caoba", 
    // "pinturas-paletas-maple", 
    ],
    tapices = [
        "tapices-algodon-arena",
        "tapices-algodon-beige",
        "tapices-algodon-gris_claro",
        "tapices-algodon-gris_oscuro",
        // "tapices-anakenas-arena",
        // "tapices-anakenas-beige",
        // "tapices-anakenas-canela",
        // "tapices-anakenas-gris_medio",
        // "tapices-anakenas-marengo",
        // "tapices-anakenas-naranjo",
        // "tapices-anakenas-pistacho",
        // "tapices-anakenas-rojo",
        // "tapices-anakenas-turquesa",
        // "tapices-impermeables-amarillo_fluor",
        // "tapices-impermeables-amarillo",
        "tapices-impermeables-azul_marino",
        // "tapices-impermeables-azulino",
        "tapices-impermeables-blanco",
        "tapices-impermeables-crudo",
        "tapices-impermeables-gris_acero",
        "tapices-impermeables-gris_oscuro",
        // "tapices-impermeables-mantequilla",
        // "tapices-impermeables-naranjo_fluor",
        // "tapices-impermeables-naranjo",
        "tapices-impermeables-negro",
        // "tapices-impermeables-rojo",
        "tapices-impermeables-musgo",
        "tapices-soft-beige",
        "tapices-soft-chocolate",
        "tapices-soft-gris_medio",
        "tapices-soft-marengo",
        "tapices-soft-petroleo",
        "tapices-soft-turquesa",
        "tapices-soft-pistacho",
    ];
  
/** Manejadores de eventos */
const hanledBotonPinturasPaletas = (e) => {
    e.preventDefault();
    let arrayFile = e.target.id.split('-');
    preload_figure.innerHTML = preload;
    // producto final: tapiz-paleta-color > soft-alerce-turquesa
    if(arrayFile[0] == "tapices"){

        let arregloImagen = arrayFile.slice(1);
        arregloImagen.splice(1,0, JSON.parse(localStorage.getItem('paleta'))[0] )

        
        
        fetch(`${URL_DIR}${arregloImagen[0]}/${arregloImagen[1]}/${arregloImagen[2]}.png`)
        .then(res => {
            log(res.status)
            if(res.status == 200){
                preview.src = `${URL_DIR}${arregloImagen[0]}/${arregloImagen[1]}/${arregloImagen[2]}.png`;
            }else{
                preview.src = `${URL_DIR}alerta.png`;
            }
        })
        
        preload_figure.innerHTML = ""
        color_tapiz.textContent = arregloImagen[2].toUpperCase();
        miDisenio.textContent = `PALETA ${arregloImagen[1].toUpperCase()} + TAPIZ ${arregloImagen[0].toUpperCase()} ${arregloImagen[2].toUpperCase()}`;

        let mensaje = `Saludos, me interesa el siguiente PALETSTILO: ${URL_BASE}${URL_DIR}${arregloImagen[0]}/${arregloImagen[1]}/${arregloImagen[2]}.png`;
        realizar_pedido_whatsapp.href = `${urlWhatsapp}?text=${mensaje}`;

    }else{
       
        localStorage.setItem('paleta', JSON.stringify(arrayFile.slice(2)) );
        preview.src = `${URL_DIR}${arrayFile[1]}/${arrayFile[2]}.png`;
        color_paleta.textContent = arrayFile[2].toUpperCase();

        miDisenio.textContent = `PALETA ${arrayFile[2].toUpperCase()} +`;
        setTimeout(()=>{
            preload_figure.innerHTML = ""
        }, 1500);
    }

};

const hanledLoad = () => {
    cardBodyPinturas.innerHTML = preload;
    cardBodyTapices.innerHTML = preload;
    setListarBotones(pinturas)
    .then(res => {
        cardBodyPinturas.innerHTML = res.result;
    
        setListarBotones(tapices, 'soft')
        .then(res => {
            cardBodyTapices.innerHTML = res.result;
            nombre_tipo_tapiz.textContent = "SOFT";
            
            botones = d.querySelectorAll('.botones_disenio_paletstilo');
            botones.forEach(boton => {
                boton.addEventListener('click', hanledBotonPinturasPaletas);
            });
        });
    });

    let mensaje_default = `Saludos, me interesa el siguiente PALETSTILO: ${URL_BASE}${URL_DIR}impermeables/alerce/gris_oscuro.png`;
    realizar_pedido_whatsapp.href = `${urlWhatsapp}?text=${mensaje_default}`;
    
   
};

// Configuramos y retornamos la lista de los tapices segun el tipo seleccionado
const hanledLinkTapices = (e) => {
    cardBodyTapices.innerHTML = preload;
    setListarBotones(tapices, e.target.id)
    .then(res =>{
        cardBodyTapices.innerHTML = res.result;

        botones = d.querySelectorAll('.botones_disenio_paletstilo');
        botones.forEach(boton => {
            boton.addEventListener('click', hanledBotonPinturasPaletas);
        });
    });

    // Seteamos el nombre del tipo de tapiz seleccionado 
    // para identificar la lista de tapices
    nombre_tipo_tapiz.textContent = e.target.id.toUpperCase();

 
};

/** Eventos */
    // Evento que se ejecuta al cargar la pagina 
    addEventListener('load', hanledLoad);

    // evento de seleccion de tipo de tapices
    link_tapices.forEach(link => {
        link.addEventListener('click', hanledLinkTapices);
    });

/** funcion de retornar un boton */
// Obtenemos los botones html
function getBotonHtml(valor) {

    let nombreEnLimpio = valor.split('-').slice(2).join(' ').toLocaleUpperCase();
    arrayImage = valor.split('-'),
    url_imagen_definitiva = "";


    /** validamos si es tapices o pinturas */
    if(arrayImage[0] == "tapices"){
        url_imagen_definitiva = `${arrayImage[0]}/${arrayImage[1]}/${arrayImage[2]}.png`
    }else if(arrayImage[0] == "pinturas"){
        url_imagen_definitiva = `${arrayImage[0]}/${valor}.png`

    }else{

    }

    let boton = `<div class="shadow-lg rounded-pill m-2 botones_disenio_paletstilo">
                    <button type="button" 
                            class="btn rounded-pill p-0" 
                            data-bs-toggle="tooltip" 
                            data-bs-placement="top" 
                            title="${nombreEnLimpio}">

                        <img    src="./imgShowrun/${url_imagen_definitiva}"  
                                class="img rounded-pill " 
                                alt="${valor}" 
                                height="50"
                                width="50"
                                id="${valor}">
                    </button>
                </div>`; 
    
    return boton;
}

// listamos los botones

const setListarBotones = (data, tipo="pinturas") => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let lista = "";
            log(tipo)
            if(tipo != "pinturas"){
                data.forEach(tapiz => {
                    if(tapiz.includes(tipo)){
                        log(tapiz)
                        lista += getBotonHtml(tapiz);
                    }
                });
            }else{
                data.forEach(pintura => {
                    lista += getBotonHtml(pintura);
                });
            }



            resolve({
                message: "Se listo correctamente",
                estatus: 200,
                result: lista
            })
        }, 0 | Math.random() * 1000);
    })
}