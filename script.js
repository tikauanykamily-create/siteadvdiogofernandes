const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {

  if(mobileMenu.style.display === 'flex'){
    mobileMenu.style.display = 'none';
  }else{
    mobileMenu.style.display = 'flex';
  }

});








/* =========================
   HEADER SCROLL
========================= */

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

  if(window.scrollY > 80){

    header.classList.add('header-scroll');

  }else{

    header.classList.remove('header-scroll');

  }

});


/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const revealElements = document.querySelectorAll(
  '.card, .sobre-text, .sobre-img, .faixa-text, .contact-form, .contact-info'
);

function revealOnScroll(){

  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {

    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){

      element.classList.add('active');

    }

  });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


/* =========================
   FORMULÁRIO WHATSAPP
========================= */

const form = document.getElementById('whatsapp-form');

form.addEventListener('submit', function(e){

  e.preventDefault();

  const nome = document.getElementById('nome').value;

  const email = document.getElementById('email').value;

  const assunto = document.getElementById('assunto').value;

  const mensagem = document.getElementById('mensagem').value;

  const texto = 
`Olá, gostaria de entrar em contato.

*Nome:* ${nome}

*E-mail:* ${email}

*Assunto:* ${assunto}

*Mensagem:* ${mensagem}`;

  const numero = '556596689020';

  const url = 
`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');

});

const slider = document.querySelector('.cards-artigos');
const next = document.querySelector('.artigo-next');
const prev = document.querySelector('.artigo-prev');

if(slider && next && prev){

  next.addEventListener('click', () => {
    slider.scrollBy({
      left: 400,
      behavior: 'smooth'
    });
  });

  prev.addEventListener('click', () => {
    slider.scrollBy({
      left: -400,
      behavior: 'smooth'
    });
  });

}