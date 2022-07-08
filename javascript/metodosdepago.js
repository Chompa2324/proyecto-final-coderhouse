function tarjetas(){
    let nombreTarjetaCredito = prompt("Ingrese su tarjeta de credito:");

    if (nombreTarjetaCredito == "visa"){
        alert("Podes abonar en 1, 3, 6 o 12 cuotas sin interes.");
    } else if (nombreTarjetaCredito == "mastercard"){
        alert("Podes abonar en 1, 3, 6 o 12 cuotas sin interes.");
    } else if (nombreTarjetaCredito == "naranja"){
        alert("Podes abonar en 3 y 6 cuotas sin interes o 12 cuotas fijas.");
    } else if (nombreTarjetaCredito == "mercadopago"){
        alert("Si abonas por mercardo pago, tenes un 10% de descuento en la compra de cualquier producto.");
    } 
    else {
        alert("Otras tarjetas, en 3, 6 y 12 cuotas fijas.");
    }
} 






