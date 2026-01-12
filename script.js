// ===== DADOS DOS PRODUTOS =====
// Para adicionar/remover produtos, basta editar os arrays abaixo

const produtos = {
    femininos: [
        // Adicione produtos femininos aqui
        // Exemplo:
        // {
        //     nome: "Nome do Produto",
        //     marca: "Marca",
        //     preco: "000,00",
        //     imagem: "URL_DA_IMAGEM",
        //     badge: null // ou "Novo", "Bestseller", "Premium"
        // }
    ],
    masculinos: [
        // Adicione produtos masculinos aqui
    ],
    compartilhaveis: [
        // Adicione produtos compartilháveis aqui
    ]
};

// ===== FUNÇÕES =====

// Cria o HTML de um card de produto
function criarCardProduto(produto) {
    const badgeHTML = produto.badge 
        ? `<span class="product-badge">${produto.badge}</span>` 
        : '';
    
    return `
        <article class="product-card">
            <div class="product-image">
                ${badgeHTML}
                <img src="${produto.imagem}" alt="${produto.nome} - ${produto.marca}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${produto.nome}</h3>
                <p class="product-brand">${produto.marca}</p>
                <p class="product-price">${produto.preco}</p>
                <a href="https://wa.me/5500000000000?text=Olá! Tenho interesse no perfume ${produto.nome} - ${produto.marca}" 
                   class="btn-quote" 
                   target="_blank" 
                   rel="noopener">
                    Solicitar Orçamento
                </a>
            </div>
        </article>
    `;
}

// Renderiza os produtos em suas respectivas seções
function renderizarProdutos() {
    // Femininos
    const gridFemininos = document.getElementById('products-femininos');
    if (gridFemininos) {
        gridFemininos.innerHTML = produtos.femininos.map(criarCardProduto).join('');
    }
    
    // Masculinos
    const gridMasculinos = document.getElementById('products-masculinos');
    if (gridMasculinos) {
        gridMasculinos.innerHTML = produtos.masculinos.map(criarCardProduto).join('');
    }
    
    // Compartilháveis
    const gridCompartilhaveis = document.getElementById('products-compartilhaveis');
    if (gridCompartilhaveis) {
        gridCompartilhaveis.innerHTML = produtos.compartilhaveis.map(criarCardProduto).join('');
    }
}

// Menu mobile toggle
function initMenuMobile() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Fecha o menu ao clicar em um link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
}

// Scroll suave para links internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header com sombra ao rolar
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
    });
}

// Animação de entrada dos cards ao scroll
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observa os cards após renderização
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }, 100);
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    initMenuMobile();
    initSmoothScroll();
    initHeaderScroll();
    initScrollAnimation();
});
