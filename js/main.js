document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const carouselItems = document.querySelectorAll('.carousel div');
  let currentIndex = 0;

  function updateCarouselDisplay() {
    carouselItems.forEach((item, index) => {
      item.classList.remove('selected', 'prev', 'next', 'hideLeft', 'hideRight');

      if (index === currentIndex) {
        item.classList.add('selected');
      } else if (index === (currentIndex - 1 + carouselItems.length) % carouselItems.length) {
        item.classList.add('prev');
      } else if (index === (currentIndex + 1) % carouselItems.length) {
        item.classList.add('next');
      } else if (index < currentIndex) {
        item.classList.add('hideLeft');
      } else {
        item.classList.add('hideRight');
      }
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarouselDisplay();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarouselDisplay();
  });

  updateCarouselDisplay();

  const featuresButton = document.getElementById('featuresbutton');
  const scrollDownButton = document.querySelector('a[href="#service-content2"]');
  const scrollDownContainer = document.querySelector('.scroll-container');

  function hideScrollButton() {
    scrollDownButton.style.opacity = '0';
    setTimeout(() => {
      if (scrollDownButton.style.opacity === '0') {
        scrollDownButton.style.visibility = 'hidden';
        scrollDownButton.style.opacity = '1';
      }
    }, 500);
  }

  featuresButton.addEventListener('click', function() {
    // delay for feature button animation
    setTimeout(function() {
      if(scrollDownContainer.style.visibility !== 'visible'){
        // start with opacity 0
        scrollDownButton.style.opacity = '0';
        scrollDownButton.style.visibility = 'visible';
        // set position
        scrollDownButton.style.position = 'fixed';
        scrollDownButton.style.bottom = '1%';
        scrollDownButton.style.right = '50%';
        // delay for opactiy to create fade-in effect
        setTimeout(function() {
          scrollDownButton.style.opacity = '1';
        }, 50);
      }
    }, 500);
  });

  scrollDownButton.addEventListener('click', function() {
    hideScrollButton();
  });


  let initialScrollPosition = window.scrollY;

  window.addEventListener('scroll', function() {
    const currentScrollPosition = window.scrollY;
    const scrollTolerance = 5; // Set this to whatever pixel tolerance you want

    if (Math.abs(currentScrollPosition - initialScrollPosition) > scrollTolerance && scrollDownButton.style.visibility === 'visible') {
      hideScrollButton();
    }
    initialScrollPosition = window.scrollY;
  });

});
