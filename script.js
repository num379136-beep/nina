// ===== DADOS DOS PRODUTOS =====
// Para adicionar/remover produtos, basta editar os arrays abaixo

const produtos = {
    femininos: [
        {
            nome: "Yara",
            marca: "Lattafa",
            preco: "350,00",
            imagem: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
            badge: "Bestseller"
        },
        {
            nome: "Yara Moi",
            marca: "Lattafa",
            preco: "350,00",
            imagem: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&h=400&fit=crop",
            badge: null
        },
        {
            nome: "Yara Tous",
            marca: "Lattafa",
            preco: "350,00",
            imagem: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
            badge: null
        },
        {
            nome: "Yara Candy",
            marca: "Lattafa",
            preco: "350,00",
            imagem: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
            badge: "Novo"
        },
        {
            nome: "Yara Ever",
            marca: "Lattafa",
            preco: "350,00",
            imagem: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=400&fit=crop",
            badge: null
        },
        {
            nome: "Afeef",
            marca: "Lattafa",
            preco: "599,90",
            imagem: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=400&fit=crop",
            badge: "Premium"
        },
        {
            nome: "Her Confession",
            marca: "Lattafa",
            preco: "450,00",
            imagem: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop",
            badge: null
        }
    ],
    masculinos: [
        {
            nome: "Asad",
            marca: "Lattafa",
            preco: "350,00",
            imagem: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop",
            badge: "Bestseller"
        },
        {
            nome: "Khamrah",
            marca: "Lattafa",
            preco: "450,00",
            imagem: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=400&h=400&fit=crop",
            badge: null
        },
        {
            nome: "Ajwad",
            marca: "Lattafa",
            preco: "350,00",
            imagem: "https://images.unsplash.com/photo-1595535873420-a599195b3f4a?w=400&h=400&fit=crop",
            badge: null
        },
        {
            nome: "His Confession",
            marca: "Lattafa",
            preco: "450,00",
            imagem: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
            badge: "Novo"
        }
    ],
    compartilhaveis: [
        {
            nome: "Khamrah Qahwa",
            marca: "Lattafa",
            preco: "450,00",
            imagem: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop",
            badge: null
        },
        {
            nome: "Musamam White",
            marca: "Lattafa",
            preco: "600,00",
            imagem: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?w=400&h=400&fit=crop",
            badge: "Premium"
        }
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
