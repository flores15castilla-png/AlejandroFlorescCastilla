console.log("Hola muchacho");
alert("Yo lo veo a usted muy bien");

function bebe() {
    const img = document.getElementById('bebe');
    img.src = 'imagenes/bebe.png';
    alert("hola que tal");
}

function ceniza() {
    const img = document.getElementById('ceniza');
    img.src = 'imagenes/ceniza.png';
    alert("me quitaste mis derechos T_T");
}

function cambiarColor() {
    document.getElementById('menu').style.color = '#68000e';
    alert("conformate con este humilde color >:V");
}

function cambiarLogo() {
    document.querySelector('header img').src = 'imagenes/senati 2.jpg';
    alert("Te entiendo, a veces lo simple es mejor");
}

function cambiarFondo() {
    document.querySelector('section').style.background = '#ffe553';
    alert("muchacho deja el racismo");
}

function cambiodeTexto() {
    document.querySelector('header h2').textContent = 'DEJA OE';
    alert("Pareces mujer nada te complace");
}

function fondoAside() {
    document.getElementById('aside').style.background = '#15ff00';
}
