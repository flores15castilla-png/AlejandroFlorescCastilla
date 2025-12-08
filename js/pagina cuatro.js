console.log("Hola muchacho");
alert("Yo lo veo a usted muy bien");

function bebe(){
    document.getElementById('bebe').src = 'imagenes/bebe.png';
    alert("hola que tal");
}

function ceniza(){
    document.getElementById('bebe').src = 'imagenes/ceniza.png';
    alert("me quitaste mis derechos T_T");
}

function cambiarColor(){
    document.getElementById('menu').style.color = '#b61b30ff';
    alert("conformate con este humilde color >:V");
}

function cambiarLogo(){
    document.querySelector('header img').src = 'imagenes/senati2.jpg';
    alert("Te entiendo, aveces lo simple es mejor");
}

function cambiarFondo(){
    document.querySelector('nav').style.background = '#742006ff';
    alert("muchacho deja el racismo");
}

function cambiodeTexto(){
    document.querySelector('header h2').textContent = 'DEJA OE';
    alert("Pareces mujer nada te complace");
}

function fondoAside(){
    document.getElementById('aside').style.background = '#15720cff';
}
