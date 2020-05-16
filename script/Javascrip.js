let divPaginaProductos = document.getElementById("todo_pagina_productos");
let divPaginaInicio = document.getElementById("pagina_inicio");
let divPagProducto1 = document.getElementById("form_producto1");
let divPagProducto2 = document.getElementById("form_producto2");

function ocultar_div(id){
     id.style.display = 'none';
    }
//ocultar_div(divPaginaProductos);
function mostrar_div(id) {
    id.style.display = '';
}

function click_bt(id_botones){
    const boton_producto1 = document.getElementById('boton_producto1');
    const boton_producto2 = document.getElementById('boton_producto2');
    const boton_barra_productos = document.getElementById('boton_barra_productos');
    const boton_regresar_inicio = document.getElementById('boton_regresar_p1');
        
   
    if(id_botones === boton_producto1.id){
        boton_producto1.addEventListener("click", mostrar_div(divPagProducto1), ocultar_div(divPaginaInicio));

    } else if(id_botones === boton_producto2.id){
        boton_producto2.addEventListener("click", mostrar_div(divPagProducto2), ocultar_div(divPaginaInicio)); 

    } else if (id_botones === boton_barra_productos.id){
        
        boton_barra_productos.addEventListener("click", mostrar_div(divPaginaProductos), ocultar_div(divPaginaInicio));

    } else if (id_botones === boton_regresar_inicio.id){
        
        boton_regresar_inicio.addEventListener("click", mostrar_div(divPaginaInicio), ocultar_div(divPagProducto1),
         ocultar_div(divPaginaProductos), ocultar_div(divPagProducto2));
         
}
}

