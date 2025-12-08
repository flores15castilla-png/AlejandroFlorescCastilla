const productos = [600
    {
        id: "p1",
        disponible: true
    },
    {
        id: "p2",
        disponible: false
    },
    {
        id: "p3",
        disponible: true
    }
];

window.onload = () => {
    productos.forEach(producto => {
        const item = document.getElementById(producto.id);
        const mensaje = item.querySelector(".mensaje-producto");

        if(!producto.disponible) {
            mensaje.textContent = "YA NO HAY";
            mensaje.classList.add("agotado");
        } else {
            mensaje.textContent = "";
        }
    });
};
