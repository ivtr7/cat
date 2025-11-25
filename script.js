// Banner Rotativo
let currentSlide = 0;
let autoSlideInterval;

function initBanner() {
    const slides = document.querySelectorAll('.banner-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.banner-nav.prev');
    const nextBtn = document.querySelector('.banner-nav.next');

    if (slides.length === 0) return;

    // Função para mostrar slide específico
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (indicators[i]) indicators[i].classList.remove('active');
        });

        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
    }

    // Função para próximo slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Função para slide anterior
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto-rotação a cada 5 segundos
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Event listeners para os botões
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide();
            startAutoSlide(); // Reinicia o timer
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide();
            startAutoSlide(); // Reinicia o timer
        });
    }

    // Event listeners para os indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide(); // Reinicia o timer
        });
    });

    // Pausar ao passar o mouse
    const banner = document.querySelector('.hero-banner');
    if (banner) {
        banner.addEventListener('mouseenter', stopAutoSlide);
        banner.addEventListener('mouseleave', startAutoSlide);
    }

    // Iniciar auto-rotação
    startAutoSlide();
}

const products = [
    { id: 1, name: "Canivete personalizado Sonhagro", description: "Canivete portátil com logo Sonhagro, ideal para presentear.", image: "/assets/1 (1).png" },
    { id: 2, name: "Camisa social Sonhagro branca", description: "Camisa social branca com bordado Sonhagro, elegância e conforto.", image: "/assets/1 (2).png" },
    { id: 3, name: "Sacola / Bag Sonhagro", description: "Sacola reforçada e sustentável, perfeita para feiras e eventos.", image: "/assets/1 (3).png" },
    { id: 4, name: "Agenda de couro Sonhagro", description: "Agenda em couro sintético com estampa da marca, organize seu dia com estilo.", image: "/assets/1 (4).png" },
    { id: 5, name: "Agenda de couro verde Sonhagro", description: "Versão verde da agenda premium, combinando com a identidade visual da marca.", image: "/assets/1 (5).png" },
    { id: 6, name: "Banner horizontal Sonhagro", description: "Banner de mesa ou parede, ideal para divulgação em pontos de venda.", image: "/assets/1 (6).png" },
    { id: 7, name: "Fachada Sonhagro", description: "Adesivo de fachada para unidades franqueadas, alta visibilidade e durabilidade.", image: "/assets/1 (7).png" },
    { id: 8, name: "Abridor de garrafas Sonhagro", description: "Abridor metálico resistente, leve e prático para eventos e brindes.", image: "/assets/1 (8).png" },
    { id: 9, name: "Wind banner Sonhagro", description: "Wind banner retrátil para uso externo, fácil transporte e montagem rápida.", image: "/assets/1 (9).png" },
    { id: 10, name: "Kit churrasco / tábua e faca", description: "Conjunto tábua + faca personalizado, presente ideal para clientes e parceiros.", image: "/assets/1 (10).png" },
    { id: 11, name: "Mochila personalizada Sonhagro", description: "Mochila resistente com logo bordado, espaçosa e confortável para o dia a dia.", image: "/assets/1 (11).png" },
    { id: 12, name: "Boné personalizado Sonhagro", description: "Boné ajustável com bordado frontal, proteção solar e estilo em um só produto.", image: "/assets/1 (12).png" },
    { id: 13, name: "Outdoor Sonhagro", description: "Outdoor de grande formato para campanhas, impressão de alta resolução.", image: "/assets/1 (13).png" },
    { id: 14, name: "Uniformes Sonhagro", description: "Linha completa de uniformes para equipe: camisetas, calças e acessórios.", image: "/assets/1 (14).png" },
    { id: 15, name: "Chaveiro em couro e resina Sonhagro", description: "Chaveiro premium combinando couro e resina, elegante e resistente.", image: "/assets/1 (15).png" },
    { id: 16, name: "Barraca com lateral personalizada Sonhagro", description: "Barraca promocional com laterais personalizáveis, ideal para feiras e eventos.", image: "/assets/1 (16).png" },
    { id: 17, name: "Tenda personalizada Sonhagro", description: "Tenda resistente com cobertura estampada, proteção e visibilidade garantidas.", image: "/assets/1 (17).png" },
    { id: 18, name: "Cartões de visita Sonhagro", description: "Cartão de visita com acabamento fosco e verniz localizado, deixe sua marca.", image: "/assets/1 (18).png" },
    { id: 19, name: "Panfleto Sonhagro", description: "Panfleto promocional frente e verso, papel couchê de alta qualidade.", image: "/assets/1 (19).png" },
    { id: 20, name: "Balão inflável para eventos (personalizado Sonhagro)", description: "Balão promocional inflável com logo, chama atenção em qualquer ambiente.", image: "/assets/1 (20).png" },
    { id: 21, name: "Banner vertical Sonhagro", description: "Banner vertical para exposição em vitrines e stands, fácil armazenamento.", image: "/assets/1 (21).png" },
    { id: 22, name: "Garrafa térmica com temperatura Sonhagro", description: "Garrafa térmica digital que mostra a temperatura, moderna e útil.", image: "/assets/1 (22).png" },
    { id: 24, name: "Copo térmico Sonhagro", description: "Copo térmico com isolamento, mantém a bebida na temperatura ideal.", image: "/assets/1 (24).png" },
    { id: 25, name: "Chaveiro de couro Sonhagro", description: "Chaveiro minimalista em couro legítimo, presente sofisticado para clientes.", image: "/assets/1 (25).png" },
    { id: 26, name: "Plotagem de carro marca Sonhagro", description: "Envelopamento completo ou parcial de veículos, transforme seu carro em mídia.", image: "/assets/1 (26).png" },
    { id: 27, name: "Caneta Sonhagro", description: "Caneta esferográfica de alta qualidade com gravação a laser.", image: "/assets/1 (27).png" },
    { id: 28, name: "Bola personalizada", description: "Bolas personalizadas - Futsal / Society / Volei.", image: "/assets/bola.png" }
];

function renderProducts(list) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    const items = list || products;
    items.forEach(product => {
        const productCard = `
            <div class="col-lg-2 col-md-3 col-sm-6">
                <div class="product-card">
                    <div class="product-image-wrapper">
                        <img loading="lazy" src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="product-overlay">
                            <div class="overlay-actions">
                                <a href="javascript:void(0)" class="overlay-action" onclick="openModal(${product.id})"><i class="fas fa-search-plus"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                    </div>
                    <div class="product-actions">
                        <button class="add-cart-btn" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Adicionar</button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

function applyFilters() {
    const q = (document.getElementById('searchInput')?.value || '').toLowerCase();
    const sort = document.getElementById('sortSelect')?.value || 'name-asc';
    let filtered = products.filter(p => {
        const text = (p.name + ' ' + p.description).toLowerCase();
        return text.includes(q);
    });
    if (sort === 'name-asc') {
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'name-desc') {
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
    }
    renderProducts(filtered);
    const info = document.getElementById('resultsInfo');
    if (info) info.textContent = filtered.length + ' itens encontrados';
}

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    modalImage.src = product.image;
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar banner rotativo
    initBanner();
    
    // Inicializar produtos
    renderProducts();
    const si = document.getElementById('searchInput');
    const ss = document.getElementById('sortSelect');
    if (si) si.addEventListener('input', applyFilters);
    if (ss) ss.addEventListener('change', applyFilters);
    applyFilters();
    
    // Botão voltar ao topo
    const btt = document.getElementById('backToTop');
    if (btt) {
        btt.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
        window.addEventListener('scroll', function() { if (window.scrollY > 200) btt.classList.add('visible'); else btt.classList.remove('visible'); });
    }
});

// Funcionalidade do carrinho
const WHATSAPP_NUMBER = '5532998450698';
let cart = [];

function loadCart() { try { const raw = localStorage.getItem('sonhagro_cart'); cart = raw ? JSON.parse(raw) : []; } catch(e) { cart = []; } renderCart(); updateCartBadge(); }
function saveCart() { localStorage.setItem('sonhagro_cart', JSON.stringify(cart)); }
function addToCart(productId) { const p = products.find(x => x.id === productId); if (!p) return; const idx = cart.findIndex(c => c.id === productId); if (idx >= 0) { cart[idx].qty += 1; } else { cart.push({ id: p.id, name: p.name, qty: 1 }); } saveCart(); updateCartBadge(); renderCart(); }
function incQty(productId) { const i = cart.findIndex(c => c.id === productId); if (i>=0) { cart[i].qty += 1; saveCart(); renderCart(); updateCartBadge(); } }
function decQty(productId) { const i = cart.findIndex(c => c.id === productId); if (i>=0) { cart[i].qty = Math.max(0, cart[i].qty - 1); if (cart[i].qty===0) cart.splice(i,1); saveCart(); renderCart(); updateCartBadge(); } }
function removeItem(productId) { cart = cart.filter(c => c.id !== productId); saveCart(); renderCart(); updateCartBadge(); }
function clearCart() { cart = []; saveCart(); renderCart(); updateCartBadge(); }
function renderCart() { const wrap = document.getElementById('cartItems'); if (!wrap) return; wrap.innerHTML = ''; if (cart.length === 0) { wrap.innerHTML = '<div class="text-muted">Seu carrinho está vazio</div>'; return; } cart.forEach(item => { const row = document.createElement('div'); row.className = 'cart-item'; row.innerHTML = `<div class="cart-item-info"><div class="cart-item-name">${item.name}</div></div><div class="cart-item-actions"><button class="qty-btn" onclick="decQty(${item.id})">-</button><div class="qty-value">${item.qty}</div><button class="qty-btn" onclick="incQty(${item.id})">+</button><button class="remove-item" onclick="removeItem(${item.id})"><i class="fas fa-trash"></i></button></div>`; wrap.appendChild(row); }); }
function updateCartBadge() { const total = cart.reduce((s,i)=>s+i.qty,0); const el = document.getElementById('cartCount'); if (el) el.textContent = String(total); }
function openCart() { const p = document.getElementById('cartPanel'); const o = document.getElementById('cartOverlay'); if (p) p.classList.add('active'); if (o) o.classList.add('visible'); }
function closeCart() { const p = document.getElementById('cartPanel'); const o = document.getElementById('cartOverlay'); if (p) p.classList.remove('active'); if (o) o.classList.remove('visible'); }
function formatCartMessage() {
    const total = cart.reduce((s,i)=>s+i.qty,0);
    const d = new Date();
    const pad = n => String(n).padStart(2,'0');
    const lines = cart.slice().sort((a,b)=>a.name.localeCompare(b.name)).map((item, idx)=> `${pad(idx+1)}. ${item.name} — x${item.qty}`);
    const header = 'Pedido Sonhagro';
    const meta = `Itens: ${total} | Data: ${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
    return `${header}\n${meta}\n------------------------------\n${lines.join('\n')}\n------------------------------\nAguardo confirmação.`;
}

function checkoutCart() {
    if (cart.length === 0) return;
    const msg = formatCartMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}
document.addEventListener('DOMContentLoaded', function(){ loadCart(); updateCartBadge(); const oc = document.getElementById('openCartBtn'); const cc = document.getElementById('closeCartBtn'); const ct = document.getElementById('continueBtn'); const cl = document.getElementById('clearCartBtn'); const co = document.getElementById('checkoutBtn'); const ov = document.getElementById('cartOverlay'); if (oc) oc.addEventListener('click', openCart); if (cc) cc.addEventListener('click', closeCart); if (ct) ct.addEventListener('click', closeCart); if (cl) cl.addEventListener('click', clearCart); if (co) co.addEventListener('click', checkoutCart); if (ov) ov.addEventListener('click', closeCart); });

