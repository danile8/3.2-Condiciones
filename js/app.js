//Se debe construir una página con una única imagen, al hacerle click a la imagen se le debe
//agregar un borde rojo de 2 pixeles, al hacerle click nuevamente se le debe quitar el borde.
const imgborder = document.querySelector("#imgborder");
let imgdog = false;
imgborder.addEventListener("click", () =>{
    console.log("hiciste click")
    if (imgdog == false){
        imgborder.style.border = "3px solid red";
        imgdog = true
    }
    else{
        imgborder.style.border = "none";
        imgdog = false;
    }
})

/* Se debe construir una página web que permita pedir hasta 10 stickers de los 3 tipos
disponibles. Para eso deberá existir un input debajo de cada imagen donde el usuario podrá
ingresar un número. En caso de que la suma de todos los stickers seleccionados sea menor
o igual 10 se indicará en un párrafo nuevo la cantidad de stickers llevados. Ejemplo "llevas
5 stickers" en cualquier otro caso se mostrará un texto que dice "Llevas demasiados
stickers" */

const sticker1 = document.querySelector("#sticker1");
const sticker2 = document.querySelector("#sticker2");
const sticker3 = document.querySelector("#sticker3");
const btn = document.querySelector("#btn");
const total = document.querySelector("#total");

btn.addEventListener("click", () =>{
    let result = parseInt(sticker1.value)+ parseInt(sticker2.value) + parseInt(sticker3.value);
    console.log(result);
    if (result <= 10){
        total.textContent = `Llevas ` + result + ` stickers.`;
    }
    else{
        total.textContent = "Llevas demasiado stickers!"
    }
})

/* Se debe construir una página con 3 select y opciones con dígitos del 1 al 9, al hacer click a
la opción ingresar se debe verificar que el password sea 911 y en ese caso mostrar debajo
del botón ingresar, un párrafo con el contenido "password 1 correcto", en caso de que el
password sea 714 se debe mostrar en el párrafo "password 2 es correcto", si ingresa otro
valor se debe mostrar "password incorrecto". */





