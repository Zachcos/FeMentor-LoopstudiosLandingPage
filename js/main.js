let navBtn = document.querySelector('.hero__topbar__navBtn');
let mobileNav = document.querySelector('.mobile__nav');
let closeBtn = document.querySelector('.mobile__nav__topbar--close');

navBtn.addEventListener('click', () => {
  mobileNav.classList.add('show')
})

closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('show')
})

