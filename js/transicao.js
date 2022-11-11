
let videoEscolhido = document.querySelector ("#video")
console.log (videoEscolhido.src)
let listaVideos = ["https://www.youtube.com/embed/1dUGMARRuQE", "https://www.youtube.com/embed/JbctGS_Sugo", "https://www.youtube.com/embed/9_tB5n49QdU", "https://www.youtube.com/embed/QIfAg7oAYd0"]
let videoSelecionado = listaVideos[Math.floor(Math.random()*4)]
console.log (videoSelecionado)

videoEscolhido.src = videoSelecionado


function initScrollSuave (){

    const linksInternos = document.querySelectorAll ('.js-menu a[href^="#"]');

        function scrollToSection (event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }

    linksInternos.forEach ((link) => {
        link.addEventListener('click', scrollToSection);
    });

}

initScrollSuave ();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll ('.js-scroll');
    if(sections.length){
        const windowMetade = window.innerHeight * 0.5;

    function animaScroll (){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible)
                section.classList.add('ativo');
            else
                section.classList.remove('ativo');
        })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll ();

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);