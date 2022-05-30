class slideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide='${id}']`);
    this.active = 0;
    console.log(this.slide);
    this.activeSlide(0);
    this.init();
  }
  activeSlide(index) {
    this.active = index;
    this.items = this.slide.querySelectorAll('.slide-items > *');
    this.items.forEach((item) => item.classList.remove('active'));
    this.items[index].classList.add('active');
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector('.slide-next');
    const prevBtn = this.slide.querySelector('.slide-prev');
    nextBtn.addEventListener('click', this.next);
    prevBtn.addEventListener('click', this.prev);
  }
  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.addNavigation();
  }
}
new slideStories('slide');

const menu = document.querySelector('.botaoX2');
const menu1 = document.querySelector('.menu');
const waring = document.querySelector('.botaoX');
const menuAbrir = document.getElementById('menuAbrir');
const fecharMenu = document.querySelector('.fecharMenu');
const fecharMenu2 = document.querySelector('.fecharMenu2');
const waring1 = document.querySelector('.waring');

function sairWaring() {
  waring1.style.visibility = 'hidden';
  fecharMenu2.style.visibility = 'hidden';
}
waring.addEventListener('click', sairWaring);

function sairMenu() {
  menu1.style.visibility = 'hidden';
  menu1.style.animation = 'subir 1s';
  fecharMenu.style.visibility = 'hidden';
}
menu.addEventListener('click', sairMenu);

function abrirMenu() {
  menu1.style.visibility = 'visible';
  menu1.style.animation = 'descer 1s';
  fecharMenu.style.visibility = 'visible';
}
menuAbrir.addEventListener('click', abrirMenu);

function fechaMenu() {
  menu1.style.visibility = 'hidden';
  menu1.style.animation = 'subir 1s';
  fecharMenu.style.visibility = 'hidden';
  waring1.style.visibility = 'hidden';
}
fecharMenu.addEventListener('click', fechaMenu);

function fechaMenu2() {
  waring1.style.visibility = 'hidden';
  fecharMenu2.style.visibility = 'hidden';
}
fecharMenu2.addEventListener('click', fechaMenu2);
