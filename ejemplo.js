<script>
console.log("Hola mi estimado invitado")
alert("Yo lo veo usted muy bien")

function ceniza(){
    document.getElementById('bebe').src = "imagenes/ceniza.png"
    alert("esperate mano era broma aaaaaaa")
}

function bebe(){
    document.getElementById('bebe').src = "imagenes/bebe.png"
}

function cambiarColor(){
    document.getElementById('menu').style.color = "#489264"
}

function cambiarLogo(){
    document.querySelector("header img").src = "imagenes/senati 2.jpg"
}

function cambiarFondo(){
    document.getElementById('menu').style.background = "#867513"
}

function cambiodeTexto(){
    document.querySelector("h2").textContent = "YA LE SE AL JS"
}

function fondoAside(){
    document.getElementById('aside').style.background = "#15ff00"
}
</script>
