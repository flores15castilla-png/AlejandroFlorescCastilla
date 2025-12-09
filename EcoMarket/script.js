// Manejo disponibilidad productos
window.onload = () => {
    const productos = document.querySelectorAll('.producto');

    productos.forEach(prod => {
        const stock = parseInt(prod.getAttribute('data-stock'));
        const mensaje = prod.querySelector('.mensaje-producto');

        if(stock <= 0){
            mensaje.textContent = "YA NO HAY";
            mensaje.classList.add("agotado");
            prod.querySelector('.btn-carrito').disabled = true;
        } else {
            mensaje.textContent = "";
        }
    });

    // Carrito simple
    const carrito = [];
    const botones = document.querySelectorAll('.btn-carrito');

    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            const prod = btn.parentElement.querySelector('h3').textContent;
            carrito.push(prod);
            alert(prod + " agregado al carrito. Total items: " + carrito.length);
        });
    });
};
