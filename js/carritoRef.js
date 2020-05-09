var tblBody = document.getElementById("idTablita");

var items = []

function guardaItems(objs){
    items = objs;
}

function crearTabla(){

    console.log("HEY");
    simpleCart.each(function (item) {
        console.log("HOLA");
        var hilera = document.createElement("tr");
    
        hilera.className = "text-center";
    
        var celdaRemove = document.createElement("td");
        celdaRemove.className = "product-remove";
    
        var iconClose = document.createElement("span");
        iconClose.className = "ion-ios-close";
        celdaRemove.appendChild(iconClose);
    
        hilera.appendChild(celdaRemove);
    
        tblBody.appendChild(hilera);
    
    });
}

