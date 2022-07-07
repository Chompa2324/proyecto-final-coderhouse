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


const producto1 = new Oufit ("Oversized Larga",2200,"https://showroomfreyja.netlify.app/ropa/remeras1.png", false, false);
producto1.vender();


const producto2 = new Oufit ("Cotton Croptee Dark Grey)",2398,"https://showroomfreyja.netlify.app/ropa/remeras2.png", false);


const producto3 = new Oufit ("Remera Touch Me",2498,"https://showroomfreyja.netlify.app/ropa/remeras3.png", false);
producto3.vender();


const producto4 = new Oufit ("Camiseta Dance Crop",2640,"https://showroomfreyja.netlify.app/ropa/remeras4.png", false);


const producto5 = new Oufit ("Top Emm Lycra",2998,"https://showroomfreyja.netlify.app/ropa/remeras5.png", false);
producto5.vender();


const producto6 = new Oufit ("Ribbed Basic Top (VARIOS COLORES)",2998,"https://showroomfreyja.netlify.app/ropa/remeras6.png", false);


const producto7 = new Oufit ("Blazer Falling for You (BLACK)",9998,"https://showroomfreyja.netlify.app/ropa/saco1.png", false);
producto7.enviar();


const producto8 = new Oufit ("Blazer Falling for You (COOKIES)",9998,"https://showroomfreyja.netlify.app/ropa/saco2.png", false);
producto8.enviar();


const producto9 = new Oufit ("Tapado Cozy Wool",13998,"https://showroomfreyja.netlify.app/ropa/saco3.png", false);
producto9.vender();
producto9.enviar();


const producto10 = new Oufit ("Valley Trench",11880,"https://showroomfreyja.netlify.app/ropa/saco4.png", false);
producto10.enviar();


const producto11 = new Oufit ("Blazer Falling for You (VERDE)",9998,"https://showroomfreyja.netlify.app/ropa/saco5.png", false);
producto11.vender();
producto11.enviar();


const producto12 = new Oufit ("Blazer Falling for You (CHOCOLATE)",9998,"https://showroomfreyja.netlify.app/ropa/saco6.png", false);
producto12.enviar();


const producto13 = new Oufit ("RIBBED PUNTO MORLEY",5998,"https://showroomfreyja.netlify.app/ropa/sweater1.png", false);


const producto14 = new Oufit ("Buzito Baby Cool",3840,"https://showroomfreyja.netlify.app/ropa/buzo1.png", false);


const producto15 = new Oufit ("Polera Essential Hight Neck",5200,"https://showroomfreyja.netlify.app/ropa/sweater2.png", false);


const producto16 = new Oufit ("Buzo Crop Cotton ",4200,"https://showroomfreyja.netlify.app/ropa/buzo2.png", false);


const producto17 = new Oufit ("Ribbed Power Shine ",8698,"https://showroomfreyja.netlify.app/ropa/sweater3.png", false);
producto17.enviar();


const producto18 = new Oufit ("Polera High Neck Ochitos Wool",6240,"https://showroomfreyja.netlify.app/ropa/sweater4.png", false);


const producto19 = new Oufit ("Musculosa High Neck (CHOKER)",4998,"https://showroomfreyja.netlify.app/ropa/party1.png", false);


const producto20 = new Oufit ("Blusa Cool Lover Manga Corta",3998,"https://showroomfreyja.netlify.app/ropa/party2.png", false);


const producto21 = new Oufit ("Top Roxane ",3998,"https://showroomfreyja.netlify.app/ropa/party3.png", false);


const producto22 = new Oufit ("Vestido Black Fire",11998,"https://showroomfreyja.netlify.app/ropa/party4.png", false);
producto22.enviar();


const producto23 = new Oufit ("Maxi Falda Shina Portafolio",6998,"https://showroomfreyja.netlify.app/ropa/party5.png", false);


const producto24 = new Oufit ("Vestido Fire Pink",11998,"https://showroomfreyja.netlify.app/ropa/party6.png", false);
producto24.enviar();


const producto25 = new Oufit ("Biker Sport Body (SUPLEX)",3200,"https://showroomfreyja.netlify.app/ropa/pantalon1.png", false);


const producto26 = new Oufit ("Mini Hot Lovers", 4998,"https://showroomfreyja.netlify.app/ropa/pantalon2.png", false);


const producto27 = new Oufit ("Kill Shorsy Black",4558,"https://showroomfreyja.netlify.app/ropa/pantalon3.png", false);


const producto28 = new Oufit ("Cozy Jogger Cotton",4998,"https://showroomfreyja.netlify.app/ropa/pantalon4.png", false);


const producto29 = new Oufit ("Basic Bikers",3598,"https://showroomfreyja.netlify.app/ropa/pantalon5.png", false);


const producto30 = new Oufit ("Kill Shorsy Scott",4558,"https://showroomfreyja.netlify.app/ropa/pantalon6.png", false);


const producto31 = new Oufit ("Cap Sport Wear ",2998,"https://showroomfreyja.netlify.app/ropa/accesorio1.png", false);


const producto32 = new Oufit ("Piluso Fisher Sport",2266,"https://showroomfreyja.netlify.app/ropa/accesorio2.png", false);


const producto33 = new Oufit ("Cadena Hard Angel XXL",3432,"https://showroomfreyja.netlify.app/ropa/accesorio3.png", false);


const producto34 = new Oufit ("Anillo Infinit Love",1459,"https://showroomfreyja.netlify.app/ropa/accesorio4.png", false);


const producto35 = new Oufit ("Bag Killah",5200,"https://showroomfreyja.netlify.app/ropa/accesorio5.png", false);


const producto36 = new Oufit ("Crystal Misky",1998,"https://showroomfreyja.netlify.app/ropa/accesorio6.png", false);


const array = [];
array.push(producto1, producto2, producto3, producto4, producto5);
console.log(array);