// Helper function to create image slides from actual images
function createImageSlides(containerId, imagePaths, captions) {
  const wrapper = document.getElementById(containerId);
  if (!wrapper) return;
  
  wrapper.innerHTML = '';
  
  imagePaths.forEach((imagePath, index) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = captions[index] || `Design mockup ${index + 1}`;
    img.style.width = '100%';
    img.style.maxHeight = '420px';
    img.style.objectFit = 'contain';
    img.style.borderRadius = '8px';
    img.style.backgroundColor = '#1e2029';
    
    // Handle image loading errors
    img.onerror = function() {
      console.warn(`Failed to load image: ${imagePath}`);
      this.style.display = 'none';
      const errorMsg = document.createElement('div');
      errorMsg.className = 'placeholder-img';
      errorMsg.style.minHeight = '280px';
      errorMsg.style.display = 'flex';
      errorMsg.style.alignItems = 'center';
      errorMsg.style.justifyContent = 'center';
      errorMsg.style.flexDirection = 'column';
      errorMsg.style.gap = '0.5rem';
      errorMsg.innerHTML = `⚠️ Image not found<br><span style="font-size:0.7rem">${imagePath}</span>`;
      slide.insertBefore(errorMsg, this);
    };
    
    // Add loading indicator
    img.style.opacity = '0';
    img.onload = function() {
      this.style.opacity = '1';
      this.style.transition = 'opacity 0.3s ease';
    };
    
    const caption = document.createElement('div');
    caption.className = 'slide-caption';
    caption.textContent = captions[index] || `Design iteration ${index + 1}`;
    
    slide.appendChild(img);
    slide.appendChild(caption);
    wrapper.appendChild(slide);
  });
}

// Load slideshow images
function loadSlideshowImages() {
  // Sketch images
  const sketchImages = [
    'img/meal-sketch.png',
    'img/past-order-sketch.png',
    'img/checkout-process-sketch.png',
    'img/homepage-sketch.png'
  ];
  
  const sketchCaptions = [
    'Meal Page Sketch',
    'Past orders Sketch',
    'Checkout Process Sketch',
    'Homepage Sketch'
  ];
  
  // Figma images
  const figmaImages = [
    'img/homepage-figma.png',
    'img/past-orders-figma.png',
    'img/profile-figma.png',
    'img/payment-1-figma.png',
    'img/payment-2-figma.png',
    'img/payment-3-figma.png',
    'img/checkout-1-figma.png',
    'img/checkout-2-figma.png',
    'img/checkout-3-figma.png',
    'img/checkout-4-figma.png'
  ];
  
  const figmaCaptions = [
    'Figma Homepage Design',
    'Figma Past Orders Design',
    'Figma Profile Design',
    'Figma Payment page - Step 1',
    'Figma Payment page - Step 2',
    'Figma Payment page - Step 3',
    'Figma Checkout - Step 1',
    'Figma Checkout - Step 2',
    'Figma Checkout - Step 3',
    'Figma Checkout - Step 4'
  ];
  
  // Final product images
  const finalImages = [
    'img/homepage-final.png',
    'img/profile-final.png',
    'img/past-order-final.png',
    'img/payment-1-final.png',
    'img/payment-2-final.png',
    'img/checkout-1-final.png',
    'img/checkout-2-final.png',
    'img/checkout-3-final.png',
    'img/checkout-4-final.png',
    'img/checkout-5-final.png',
    'img/checkout-6-final.png',
    'img/checkout-7-final.png',
    'img/checkout-8-final.png',
    'img/checkout-9-final.png',
    'img/checkout-10-final.png'
  ];
  
  const finalCaptions = [
    'Final Homepage Design',
    'Final Profile Design',
    'Final Past Orders Design',
    'Final Payment Design - Step 1',
    'Final Payment Design - Step 2',
    'Final Checkout Design - Step 1',
    'Final Checkout Design - Step 2',
    'Final Checkout Design - Step 3',
    'Final Checkout Design - Step 4',
    'Final Checkout Design - Step 5',
    'Final Checkout Design - Step 6',
    'Final Checkout Design - Step 7',
    'Final Checkout Design - Step 8',
    'Final Checkout Design - Step 9',
    'Final Checkout Design - Step 10'
  ];
  
  // Create the slideshows
  createImageSlides('sketchWrapper', sketchImages, sketchCaptions);
  createImageSlides('figmaWrapper', figmaImages, figmaCaptions);
  createImageSlides('finalWrapper', finalImages, finalCaptions);
}

// Initialize Swiper instances
function initSwipers() {
  // Delay to ensure DOM is ready
  setTimeout(() => {
    // Sketch swiper
    if (document.querySelector('.sketch-swiper')) {
      new Swiper('.sketch-swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });
    }
    
    // Figma swiper
    if (document.querySelector('.figma-swiper')) {
      new Swiper('.figma-swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });
    }
    
    // Final swiper
    if (document.querySelector('.final-swiper')) {
      new Swiper('.final-swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      });
    }
  }, 100);
}

// Initialize smooth scroll for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        history.pushState(null, null, targetId);
      }
    });
  });
}

// Initialize contact handlers
function initContactHandlers() {
  const emailBtn = document.getElementById('emailBtn');
  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      return true;
    });
  }
  
  const githubMock = document.getElementById('githubMock');
  if (githubMock) {
    githubMock.addEventListener('click', (e) => {
      return true;
    });
  }
  
  const linkedinMock = document.getElementById('linkedinMock');
  if (linkedinMock) {
    linkedinMock.addEventListener('click', (e) => {
      return true;
    });
  }
}

// Update copyright year dynamically
function updateCopyrightYear() {
  const footer = document.querySelector('footer p');
  if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('2026', currentYear);
  }
}

// Initialize everything
function init() {
  loadSlideshowImages();
  initSwipers();
  initSmoothScroll();
  initContactHandlers();
  updateCopyrightYear();
  console.log("Portfolio loaded with all images! Sketch: 4, Figma: 10, Final: 15");
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);