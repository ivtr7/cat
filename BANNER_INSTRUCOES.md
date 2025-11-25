# Instruções - Banner Rotativo

## Como adicionar imagens ao banner

### 1. Prepare suas imagens

Você precisa de **duas versões** de cada banner:
- **Desktop**: Resolução recomendada 1920x500px (proporção 16:9 ou similar)
- **Mobile**: Resolução recomendada 768x400px (proporção 2:1 ou similar)

### 2. Nomeie suas imagens

Coloque as imagens na pasta `/assets/` com os seguintes nomes:

**Primeiro banner:**
- `banner-desktop-1.jpg` (para desktop)
- `banner-mobile-1.jpg` (para mobile)

**Segundo banner:**
- `banner-desktop-2.jpg` (para desktop)
- `banner-mobile-2.jpg` (para mobile)

**E assim por diante...**

### 3. Adicionar mais banners

No arquivo `index.html`, dentro da `<section class="hero-banner">`, adicione mais slides:

```html
<div class="banner-slide">
    <picture>
        <source media="(max-width: 768px)" srcset="/assets/banner-mobile-3.jpg">
        <img src="/assets/banner-desktop-3.jpg" alt="Banner 3" class="banner-image">
    </picture>
</div>
```

**Não esqueça de adicionar o indicador correspondente:**

```html
<span class="indicator" data-slide="2"></span>
```

### 4. Características do banner

✅ **Rotação automática:** Troca de imagem a cada 5 segundos
✅ **Transição suave:** Fade in/out de 1 segundo
✅ **Navegação manual:** Setas laterais e bolinhas indicadoras
✅ **Pausa ao passar o mouse:** O banner para de girar quando você passa o mouse sobre ele
✅ **Responsivo:** Imagens diferentes para desktop e mobile

### 5. Se você tiver apenas 1 imagem

Se você tiver apenas um banner, o carousel ainda funcionará, mas sem rotação (já que só há 1 slide).
Basta manter apenas:

```html
<div class="banner-slide active">
    <picture>
        <source media="(max-width: 768px)" srcset="/assets/banner-mobile-1.jpg">
        <img src="/assets/banner-desktop-1.jpg" alt="Banner Principal" class="banner-image">
    </picture>
</div>
```

E manter apenas 1 indicador:
```html
<span class="indicator active" data-slide="0"></span>
```

### 6. Ajustar altura do banner

Se quiser mudar a altura do banner, edite no arquivo `style.css`:

```css
.hero-banner { height: 500px; } /* Desktop */

@media (max-width: 768px) { 
    .hero-banner { height: 300px; } /* Mobile */
}
```

---

## Exemplo completo com 3 banners

```html
<section class="hero-banner">
    <div class="banner-carousel">
        <!-- Banner 1 -->
        <div class="banner-slide active">
            <picture>
                <source media="(max-width: 768px)" srcset="/assets/banner-mobile-1.jpg">
                <img src="/assets/banner-desktop-1.jpg" alt="Banner 1" class="banner-image">
            </picture>
        </div>
        
        <!-- Banner 2 -->
        <div class="banner-slide">
            <picture>
                <source media="(max-width: 768px)" srcset="/assets/banner-mobile-2.jpg">
                <img src="/assets/banner-desktop-2.jpg" alt="Banner 2" class="banner-image">
            </picture>
        </div>
        
        <!-- Banner 3 -->
        <div class="banner-slide">
            <picture>
                <source media="(max-width: 768px)" srcset="/assets/banner-mobile-3.jpg">
                <img src="/assets/banner-desktop-3.jpg" alt="Banner 3" class="banner-image">
            </picture>
        </div>
    </div>
    
    <!-- Indicadores (3 bolinhas) -->
    <div class="banner-indicators">
        <span class="indicator active" data-slide="0"></span>
        <span class="indicator" data-slide="1"></span>
        <span class="indicator" data-slide="2"></span>
    </div>
    
    <!-- Setas de navegação -->
    <button class="banner-nav prev" aria-label="Anterior">
        <i class="fas fa-chevron-left"></i>
    </button>
    <button class="banner-nav next" aria-label="Próximo">
        <i class="fas fa-chevron-right"></i>
    </button>
</section>
```

