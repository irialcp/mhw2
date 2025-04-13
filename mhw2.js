let lastScroll = 0;

const header = document.querySelector("#header");

const scrollThreshold = 10;
const headerHeight = header.offsetHeight;
let tricking = false;

window.addEventListener("scroll", function() {
    if(!tricking){
        window.requestAnimationFrame(function() {
            const currentScroll = window.scrollY;

            if (currentScroll < lastScroll && currentScroll > scrollThreshold) {
                header.style.top = "0";
            }
            else if (currentScroll > lastScroll && currentScroll > headerHeight) {
                header.style.top = `-${headerHeight}px`;
            }

            if ( currentScroll < scrollThreshold ) {
                header.style.top = "0";
            }


            lastScroll = currentScroll;
            tricking = false;
        });
        tricking = true;
    }
});


const menuButton = document.querySelector("#menu_button");
const menuWrap = document.querySelector("#wrapper");
const menuClose = document.querySelector("#close");

const inputButton = document.querySelector(".input_button");
const inputClose = document.querySelector(".inputClose");
const inputWrap = document.querySelector(".wrapper2");

const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", () => {
  menuWrap.classList.toggle("active");
  overlay.classList.toggle("active");
});

inputButton.addEventListener("click", () => {
  inputWrap.classList.toggle("active");
  overlay.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  const clickMenu = menuWrap.contains(e.target) || menuButton.contains(e.target) || (menuClose && menuClose.contains(e.target));
  const clickSearch = inputWrap.contains(e.target) || inputButton.contains(e.target) || (inputClose && inputClose.contains(e.target));

  if (!clickMenu) {
    menuWrap.classList.remove("active");
  }
  if (!clickSearch) {
    inputWrap.classList.remove("active");
  }
  if (!clickMenu && !clickSearch) {
    overlay.classList.remove("active");
  }
});


const productImages = document.querySelectorAll('.product-card__image img');

for (let i = 0; i < productImages.length; i++) {
  const image = productImages[i];
  const originalSrc = image.src;
  const altSrc = image.dataset.alt;

  image.addEventListener('mouseenter', function () {
    image.src = altSrc;
  });

  image.addEventListener('mouseleave', function () {
    image.src = originalSrc;
  });
}

const products = document.querySelectorAll('.product-card__image');

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  product.addEventListener('mouseenter', function () {
    if (!product.querySelector('.hover-info')) {
      const hoverDiv = document.createElement('div');
      hoverDiv.classList.add('hover-info');

      const text = product.dataset.text || 'Scopri di più';
      hoverDiv.textContent = text;

      product.appendChild(hoverDiv);
    }
  });

  product.addEventListener('mouseleave', function () {
    const hoverDiv = product.querySelector('.hover-info');
    if (hoverDiv) {
      hoverDiv.remove();
    }
  });
}
