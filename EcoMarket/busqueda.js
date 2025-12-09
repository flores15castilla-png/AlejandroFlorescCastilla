// Filtrar productos por nombre
const barraBusqueda = document.createElement('input');
barraBusqueda.setAttribute('type','text');
barraBusqueda.setAttribute('placeholder','Buscar producto...');
document.querySelector('nav').appendChild(barraBusqueda);

barraBusqueda.addEventListener('input', function(){
    const valor = this.value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach(prod=>{
        const nombre = prod.querySelector('h3').textContent.toLowerCase();
        if(nombre.includes(valor)){
            prod.style.display='block';
        } else {
            prod.style.display='none';
        }
    });
});
