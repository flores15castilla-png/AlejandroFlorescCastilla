console.log("Pagina cargada");
alert("Bienvenido a la quinta pagina");

function saludar() {
    alert("Hola");
}

document.getElementById("calcular").addEventListener("click", function() {
    var n1 = Number(document.getElementById("numero1").value);
    var n2 = Number(document.getElementById("numero2").value);
    var operacion = document.getElementById("operacion").value;
    var resultado = 0;

    if (operacion === "suma") {
        resultado = n1 + n2;
    } else if (operacion === "resta") {
        resultado = n1 - n2;
    } else if (operacion === "multiplicacion") {
        resultado = n1 * n2;
    } else if (operacion === "division") {
        if (n2 === 0) {
            document.getElementById("resultado").textContent = "No se puede dividir entre 0";
            return;
        }
        resultado = n1 / n2;
    }

    document.getElementById("resultado").textContent = "Resultado: " + resultado;
});
