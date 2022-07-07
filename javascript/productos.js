class Oufit{
    constructor (nombre, precio, img, envioGratis){
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.envioGratis = false;
        this.vendido = false;
    }

    vender(){
        this.vendido = true;
    }

    enviar(){
        this.envioGratis = true;
    }
}

const array = [];

const addArray=(nombre,precio,img,envioGratis,vendido)=>{
    array.push(new Oufit(nombre,precio,img,envioGratis,vendido));
    array.sort((a,b) => a.precio - b.precio);
} 

addArray("Oversized Larga",2200,"https://showroomfreyja.netlify.app/ropa/remeras1.png", false, false);
addArray("Cotton Croptee Dark Grey)",2398,"https://showroomfreyja.netlify.app/ropa/remeras2.png", false);
addArray("Camiseta Dance Crop",2640,"https://showroomfreyja.netlify.app/ropa/remeras4.png", false);
addArray("Remera Touch Me",2498,"https://showroomfreyja.netlify.app/ropa/remeras3.png", false);
addArray("Top Emm Lycra",2998,"https://showroomfreyja.netlify.app/ropa/remeras5.png", false);
addArray("Ribbed Basic Top (VARIOS COLORES)",2998,"https://showroomfreyja.netlify.app/ropa/remeras6.png", false);;
addArray("Blazer Falling for You (BLACK)",9998,"https://showroomfreyja.netlify.app/ropa/saco1.png", false);
addArray("Blazer Falling for You (COOKIES)",9998,"https://showroomfreyja.netlify.app/ropa/saco2.png", false);
addArray("Tapado Cozy Wool",13998,"https://showroomfreyja.netlify.app/ropa/saco3.png", false);
addArray("Valley Trench",11880,"https://showroomfreyja.netlify.app/ropa/saco4.png", false);
addArray("Crystal Misky",1998,"https://showroomfreyja.netlify.app/ropa/accesorio6.png", false);
console.log(array);
















