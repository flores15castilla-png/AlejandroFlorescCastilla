// main.js
// Datos de ejemplo
var products = [
  { id:1, name:"Manzana organica", category:"Frutas", price:3.5, image:"imagenes/manzana.jpg", desc:"Manzana fresca de produccion local." },
  { id:2, name:"Lechuga organica", category:"Verduras", price:2.0, image:"imagenes/lechuga.jpg", desc:"Lechuga fresca para ensaladas." },
  { id:3, name:"Lentejas", category:"Legumbres", price:6.0, image:"imagenes/lentejas.jpg", desc:"Lentejas secas, ricas en proteina." },
  { id:4, name:"Tomate", category:"Verduras", price:2.8, image:"imagenes/tomate.jpg", desc:"Tomate jugoso para cocinar." },
  { id:5, name:"Naranja organica", category:"Frutas", price:3.0, image:"imagenes/naranja.jpg", desc:"Naranja dulce y natural." }
];

var cart = [];

// referencias DOM
var productsRow = document.getElementById("productsRow");
var searchInput = document.getElementById("searchInput");
var searchBtn = document.getElementById("searchBtn");
var categoryFilter = document.getElementById("categoryFilter");
var sortSelect = document.getElementById("sortSelect");
var cartCount = document.getElementById("cartCount");
var cartList = document.getElementById("cartList");
var cartEmpty = document.getElementById("cartEmpty");
var cartTotal = document.getElementById("cartTotal");
var cartActions = document.getElementById("cartActions");
var checkoutBtn = document.getElementById("checkoutBtn");
var clearCartBtn = document.getElementById("clearCartBtn");

// modal elements
var productModal = new bootstrap.Modal(document.getElementById('productModal'));
var modalTitle = document.getElementById("modalTitle");
var modalImage = document.getElementById("modalImage");
var modalDesc = document.getElementById("modalDesc");
var modalPrice = document.getElementById("modalPrice");
var modalAddBtn = document.getElementById("modalAddBtn");

// contact
var contactForm = document.getElementById("contactForm");
var contactMsg = document.getElementById("contactMsg");

// init
document.addEventListener("DOMContentLoaded", function() {
  populateCategories();
  renderProducts(products);
  updateCartUI();
});

// llenar categorias
function populateCategories(){
  var cats = [];
  products.forEach(function(p){ if(!cats.includes(p.category)) cats.push(p.category); });
  cats.forEach(function(c){
    var opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    categoryFilter.appendChild(opt);
  });
}

// render productos
function renderProducts(list){
  productsRow.innerHTML = "";
  if(!list.length){
    productsRow.innerHTML = "<div class='col-12'><div class='alert alert-warning'>No se encontraron productos</div></div>";
    return;
  }
  list.forEach(function(p){
    var col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4";
    col.innerHTML = "\
      <div class='card product'>\
        <img src='" + p.image + "' class='card-img-top' alt='" + p.name + "' onerror=\"this.src='imagenes/default.jpg'\">\
        <div class='card-body'>\
          <h5 class='card-title'>" + p.name + "</h5>\
          <p class='text-muted'>" + p.category + "</p>\
          <p class='fw-bold'>S/" + p.price.toFixed(2) + "</p>\
          <div class='d-flex gap-2'>\
            <button class='btn btn-outline-primary btn-sm' onclick='showProduct(" + p.id + ")'>Ver</button>\
            <button class='btn btn-success btn-sm' onclick='addToCart(" + p.id + ")'>Agregar</button>\
          </div>\
        </div>\
      </div>";
    productsRow.appendChild(col);
  });
}

// buscar y filtrar
searchBtn.addEventListener("click", function(){
  var q = searchInput.value.trim().toLowerCase();
  var cat = categoryFilter.value;
  var filtered = products.filter(function(p){
    var matchQ = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    var matchCat = !cat || p.category === cat;
    return matchQ && matchCat;
  });
  applySortAndRender(filtered);
});

sortSelect.addEventListener("change", function(){
  applySortAndRender();
});

function applySortAndRender(list){
  var arr = list ? list.slice() : products.slice();
  var s = sortSelect.value;
  if(s === "price-asc") arr.sort(function(a,b){ return a.price - b.price; });
  if(s === "price-desc") arr.sort(function(a,b){ return b.price - a.price; });
  if(s === "name-asc") arr.sort(function(a,b){ return a.name.localeCompare(b.name); });
  renderProducts(arr);
}

// modal product
function showProduct(id){
  var p = products.find(function(x){ return x.id === id; });
  if(!p) return;
  modalTitle.textContent = p.name;
  modalImage.src = p.image;
  modalDesc.textContent = p.desc;
  modalPrice.textContent = "S/" + p.price.toFixed(2);
  modalAddBtn.onclick = function(){ addToCart(id); productModal.hide(); };
  productModal.show();
}
window.showProduct = showProduct;

// carrito
function addToCart(id){
  var p = products.find(function(x){ return x.id === id; });
  if(!p) return;
  var found = cart.find(function(i){ return i.id === id; });
  if(found) found.qty += 1;
  else cart.push({ id:p.id, name:p.name, price:p.price, qty:1 });
  updateCartUI();
  showTempMessage("Producto agregado al carrito");
}
window.addToCart = addToCart;

function updateCartUI(){
  var count = cart.reduce(function(acc,item){ return acc + item.qty; }, 0);
  cartCount.textContent = count;
  if(cart.length === 0){
    cartEmpty.classList.remove("d-none");
    cartList.classList.add("d-none");
    cartTotal.classList.add("d-none");
    cartActions.classList.add("d-none");
  } else {
    cartEmpty.classList.add("d-none");
    cartList.classList.remove("d-none");
    cartList.innerHTML = "";
    var total = 0;
    cart.forEach(function(item){
      total += item.price * item.qty;
      var li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = item.name + " x" + item.qty + " <span>S/" + (item.price * item.qty).toFixed(2) + "</span>";
      var btn = document.createElement("button");
      btn.className = "btn btn-sm btn-outline-danger ms-2";
      btn.textContent = "Eliminar";
      btn.onclick = function(){ removeFromCart(item.id); };
      li.appendChild(btn);
      cartList.appendChild(li);
    });
    cartTotal.textContent = "Total: S/" + total.toFixed(2);
    cartTotal.classList.remove("d-none");
    cartActions.classList.remove("d-none");
  }
}

function removeFromCart(id){
  cart = cart.filter(function(i){ return i.id !== id; });
  updateCartUI();
}

clearCartBtn.onclick = function(){
  cart = [];
  updateCartUI();
};

checkoutBtn.onclick = function(){
  if(cart.length === 0){ showTempMessage("El carrito esta vacio"); return; }
  cart = [];
  updateCartUI();
  showTempMessage("Compra simulada. Gracias por preferir EcoMarket");
};

// mensajes temporales
function showTempMessage(text){
  var el = document.createElement("div");
  el.className = "alert alert-success position-fixed bottom-0 end-0 m-3";
  el.style.zIndex = 2000;
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(function(){ el.remove(); }, 2200);
}

// formulario contacto
contactForm.addEventListener("submit", function(e){
  e.preventDefault();
  var name = document.getElementById("contactName").value.trim();
  var email = document.getElementById("contactEmail").value.trim();
  var msg = document.getElementById("contactMessage").value.trim();
  if(!name || !email || !msg){
    contactMsg.textContent = "Por favor complete todos los campos.";
    contactMsg.className = "text-danger";
    return;
  }
  contactMsg.textContent = "Mensaje enviado. Gracias!";
  contactMsg.className = "text-success";
  contactForm.reset();
});
