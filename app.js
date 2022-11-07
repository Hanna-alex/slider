function slidesPlagin(num = 0) {
  const slides = document.querySelectorAll('.slide')

  slides[num].classList.add('active')

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()

      slide.classList.add('active')
    })
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    })
  }
}

slidesPlagin(2)