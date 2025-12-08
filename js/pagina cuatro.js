console.log("Página cargada");
alert("Bienvenido a mi pagina");

function bebe() {
    document.getElementById('bebe').src = 'imagenes/bebe.png';
    alert("Hola que tal tu dia ");
}

function ceniza() {
    document.getElementById('bebe').src = 'imagenes/ceniza.png';
    alert("No espera aaaaaaa");
}

function cambiarColor() {
    document.querySelector('h1').style.color = 'blue';
    alert("Color del título cambiado");
}

function cambiarLogo() {
    document.querySelector('header img').src = 'imagenes/senati 2.png';
    alert("Logo cambiado");
}

function cambiarFondo() {
    document.getElementById('menu').style.background = '#066da8ff';
    alert("Color del menú cambiado");
}

function cambiodeTexto() {
    document.querySelector('h2').textContent = "Como ta muchacho";
    alert("Texto del subtítulo cambiado");
}

function fondoAside() {
    document.getElementById('aside').style.background = '#00ffffff';
    alert("Fondo del aside cambiado");
}
