/* ============================================================
   PORTFOLIO — M.S. NADHAPRIYAN
   Multi-Page Interactive Controller
   ============================================================ */

(function () {
  'use strict';

  /* --- PROJECT DATA (with full details) --- */
  var projectData = [
    {
      category: 'E-Vehicle & Robotics',
      title: 'AI-Driven Driverless Tractor',
      image: 'assets/project_driverless_tractor.png',
      problem: 'Traditional farming relies heavily on manual labor for tractor operations, leading to inefficiencies, high labor costs, and inconsistent precision in tasks like plowing and seeding. There is a need for autonomous agricultural vehicles that can navigate farmlands safely and efficiently.',
      solution: 'Developed a driverless agricultural tractor equipped with AI algorithms, proximity sensors, and GPS guidance to enable fully autonomous navigation in farmlands. The system performs real-time obstacle detection, precision farming operations, and automates traditional practices without human intervention.',
      components: ['Proximity Sensors', 'GPS Module', 'BLDC Motors', 'Chassis Frame', 'Microcontroller (Arduino)', 'Motor Driver', 'Power Supply Unit'],
      software: ['AI Algorithms', 'Python', 'Sensor Fusion', 'GPS Navigation Software', 'Arduino IDE'],
      highlights: ['Autonomous Navigation', 'Real-time Obstacle Detection', 'Precision Farming', 'Fully Automated']
    },
    {
      category: 'E-Vehicle & Robotics',
      title: 'Perseverance-Inspired Crawling Robot',
      image: 'assets/project_crawling_robot.png',
      problem: 'Fires in narrow, confined, and hazardous spaces (industrial pipes, collapsed buildings) are extremely dangerous for firefighters to access. Conventional fire extinguishing methods fail in tight corridors and hard-to-reach areas.',
      solution: 'Designed a Mars-rover-style robotic crawler capable of autonomously navigating narrow paths and extinguishing fire hazards. Integrated flame sensors for fire detection, actuator modules for movement, and water/CO\u2082 dispersion systems for fire suppression.',
      components: ['Mars-Rover Chassis', 'Flame Sensors', 'Actuator Modules', 'Water/CO\u2082 Nozzle', 'Servo Motors', 'Relay Modules', 'Battery Pack'],
      software: ['Arduino Programming', 'Sensor Interfacing', 'Motor Control Logic', 'Arduino IDE'],
      highlights: ['Compact Crawler Design', 'Fire Detection & Suppression', 'Narrow Path Navigation', 'Mars-Rover Inspired']
    },
    {
      category: 'Research & Embedded',
      title: 'HUPSS \u2014 Hanging Underwater Probes for Ships',
      image: 'assets/project_underwater_probe.png',
      problem: 'There is limited capability for real-time underwater environmental monitoring from moving vessels. Marine researchers lack cost-effective, ship-mounted systems to continuously collect oceanographic data during voyages.',
      solution: 'Engineered underwater research probes that are mounted on ships to monitor marine conditions for academic and ecological studies. The system features waterproofed sensor housings and data logging systems for real-time aquatic research data collection.',
      components: ['Waterproof Sensor Housings', 'Data Loggers', 'Ship-Mounted Brackets', 'Temperature Sensors', 'Pressure Sensors', 'Depth Gauges', 'Sealed Enclosures'],
      software: ['Data Logging Firmware', 'Signal Processing', 'Embedded C', 'Data Visualization'],
      highlights: ['IDEX Defence Runner-Up', 'Ministry of Defence Recognition', 'Real-time Marine Data', 'Waterproofed Design']
    },
    {
      category: 'Research & Embedded',
      title: 'NeuroBridge \u2014 EEG Brain-Computer Interface',
      image: 'assets/project_neurobridge.png',
      problem: 'Individuals with severe motor impairments (ALS, paralysis, locked-in syndrome) have extremely limited communication options. Traditional assistive devices are often expensive, invasive, or insufficient for complex interaction.',
      solution: 'Built a non-invasive BCI system that translates EEG brain signals into control commands, enabling communication for individuals with motor impairments. Uses an EEG headset with machine learning models for signal classification and real-time interface interaction.',
      components: ['EEG Headset', 'Electrodes', 'Signal Amplifiers', 'Microprocessor', 'Display Interface', 'Power Management'],
      software: ['Python', 'Machine Learning (SVM/CNN)', 'EEG Signal Processing', 'NumPy', 'SciPy', 'Real-time Classification'],
      highlights: ['Non-Invasive BCI', 'Active Research Project', 'ML Signal Classification', 'Assistive Technology']
    },
    {
      category: 'IoT & Smart Systems',
      title: 'IoT Smart Doorbell with Facial Recognition',
      image: 'assets/project_smart_doorbell.png',
      problem: 'Conventional doorbells provide no security features, visitor identification, or logging. Homeowners have no way to remotely verify visitors or maintain access records, leading to security vulnerabilities.',
      solution: 'Designed a smart doorbell system with real-time facial recognition using OpenCV and ESP32. Enables secure access control through recognized face matching, automatic visitor logging, cloud storage, and mobile app notifications.',
      components: ['ESP32 Microcontroller', 'Camera Module (OV2640)', 'Buzzer', 'LED Indicator', 'Cloud Server', 'Power Supply'],
      software: ['OpenCV', 'Facial Recognition Algorithms', 'ESP32 Firmware', 'Cloud Storage API', 'Mobile App Interface'],
      highlights: ['Real-time Face Recognition', 'Cloud-Connected', 'Mobile Notifications', 'Secure Access Control']
    },
    {
      category: 'Software & Cybersecurity',
      title: 'Digital Assistant for Legal Awareness & KYC',
      image: 'assets/project_legal_assistant.png',
      problem: 'Common citizens lack accessible legal awareness resources and face complex, confusing KYC (Know Your Customer) documentation processes. There is no simplified digital interface for legal guidance in regional contexts.',
      solution: 'Developed a mobile app to provide legal guidance and facilitate KYC documentation through a user-friendly interface. Built using Python and Flask with integrated APIs for real-time legal updates, making legal information accessible to everyone.',
      components: ['Mobile Device', 'Backend Server', 'Database', 'API Gateway'],
      software: ['Python', 'Flask Framework', 'REST APIs', 'Legal Database Integration', 'UI/UX Design'],
      highlights: ['SIH 2023 Finalist', 'National-Level Recognition', 'Real-time Legal Updates', 'User-Friendly Interface']
    },
    {
      category: 'Software & Cybersecurity',
      title: 'Vulnerability Assessment of Institutional Web Portals',
      image: 'assets/project_vulnerability_assessment.png',
      problem: 'Academic and institutional web portals often contain undetected security vulnerabilities that could expose sensitive student and faculty data to malicious attacks. Manual security auditing is insufficient.',
      solution: 'Conducted a comprehensive cybersecurity audit using Nessus vulnerability scanner to evaluate and report vulnerabilities in academic web systems. Provided detailed remediation strategies based on industry-standard CVSS scoring and risk impact analysis.',
      components: ['Target Web Systems', 'Network Infrastructure', 'Test Environment', 'Reporting Framework'],
      software: ['Nessus Scanner', 'CVSS Framework', 'Network Analysis Tools', 'Report Generation', 'Risk Assessment Matrix'],
      highlights: ['Industry-Standard CVSS', 'Comprehensive Audit', 'Remediation Strategies', 'Institutional Security']
    }
  ];

  /* --- UTILITY --- */
  function debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () { fn.apply(context, args); }, delay);
    };
  }

  /* ============================================================
     SHARED: Mobile Nav
     ============================================================ */
  var navHamburger = document.getElementById('nav-hamburger');
  var navLinks = document.getElementById('nav-links');

  if (navHamburger && navLinks) {
    navHamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navHamburger.classList.toggle('open');
      navHamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click
    var allNavLinks = navLinks.querySelectorAll('.nav__link');
    allNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navHamburger.classList.remove('open');
        navHamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ============================================================
     SHARED: Nav scroll (for index page)
     ============================================================ */
  var navbar = document.getElementById('navbar');
  if (navbar && !navbar.classList.contains('scrolled')) {
    window.addEventListener('scroll', debounce(function () {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, 10));
  }

  /* ============================================================
     SHARED: Scroll Reveal
     ============================================================ */
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ============================================================
     SHARED: Skill Card Tilt
     ============================================================ */
  var skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -8;
      var rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
      card.style.transform = 'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-6px)';
    });
    card.addEventListener('mouseleave', function () { card.style.transform = ''; });
  });

  /* ============================================================
     SHARED: Stat Counter Animation
     ============================================================ */
  var statNumbers = document.querySelectorAll('.stat-card__number');
  if (statNumbers.length > 0) {
    var statsAnimated = false;
    var statsTarget = statNumbers[0].closest('section') || statNumbers[0].closest('.about__stats');
    if (statsTarget) {
      var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            statNumbers.forEach(function (el) {
              var raw = el.textContent;
              var suffix = raw.replace(/[0-9]/g, '');
              var target = parseInt(raw, 10);
              var current = 0;
              var step = Math.max(1, Math.floor(target / 25));
              var interval = setInterval(function () {
                current += step;
                if (current >= target) { current = target; clearInterval(interval); }
                el.textContent = current + suffix;
              }, 40);
            });
          }
        });
      }, { threshold: 0.5 });
      statsObserver.observe(statsTarget);
    }
  }

  /* ============================================================
     PROJECTS PAGE: 3D Carousel + Detail Overlay
     ============================================================ */
  var carouselCards = document.querySelectorAll('.carousel__card');

  if (carouselCards.length > 0) {
    var carouselPrev = document.getElementById('carousel-prev');
    var carouselNext = document.getElementById('carousel-next');
    var carouselDots = document.querySelectorAll('.carousel__dot');
    var overlay = document.getElementById('project-overlay');
    var overlayClose = document.getElementById('overlay-close');
    var currentIndex = 0;
    var autoPlayTimer = null;
    var isDragging = false;
    var startX = 0;
    var dragThreshold = 60;

    function updateCarousel(newIndex) {
      currentIndex = ((newIndex % carouselCards.length) + carouselCards.length) % carouselCards.length;

      carouselCards.forEach(function (card) {
        card.classList.remove('active', 'prev-1', 'prev-2', 'next-1', 'next-2', 'hidden-card');
        var ci = parseInt(card.getAttribute('data-index'), 10);
        var diff = ci - currentIndex;
        var total = carouselCards.length;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;

        if (diff === 0) card.classList.add('active');
        else if (diff === -1) card.classList.add('prev-1');
        else if (diff === 1) card.classList.add('next-1');
        else if (diff === -2) card.classList.add('prev-2');
        else if (diff === 2) card.classList.add('next-2');
        else card.classList.add('hidden-card');
      });

      carouselDots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    // Nav buttons
    if (carouselPrev) {
      carouselPrev.addEventListener('click', function () {
        updateCarousel(currentIndex - 1);
        resetAutoPlay();
      });
    }
    if (carouselNext) {
      carouselNext.addEventListener('click', function () {
        updateCarousel(currentIndex + 1);
        resetAutoPlay();
      });
    }

    // Dots
    carouselDots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        updateCarousel(parseInt(dot.getAttribute('data-index'), 10));
        resetAutoPlay();
      });
    });

    // Card click — open detail if active, otherwise navigate to card
    carouselCards.forEach(function (card) {
      card.addEventListener('click', function () {
        var idx = parseInt(card.getAttribute('data-index'), 10);
        if (idx === currentIndex) {
          openProjectDetail(idx);
        } else {
          updateCarousel(idx);
          resetAutoPlay();
        }
      });
    });

    // Keyboard
    document.addEventListener('keydown', function (e) {
      if (overlay && overlay.classList.contains('active')) {
        if (e.key === 'Escape') closeProjectDetail();
        return;
      }
      if (e.key === 'ArrowLeft') { updateCarousel(currentIndex - 1); resetAutoPlay(); }
      else if (e.key === 'ArrowRight') { updateCarousel(currentIndex + 1); resetAutoPlay(); }
    });

    // Touch / drag
    var viewport = document.querySelector('.carousel__viewport');
    if (viewport) {
      viewport.addEventListener('mousedown', function (e) { isDragging = true; startX = e.clientX; e.preventDefault(); });
      viewport.addEventListener('mousemove', function (e) { if (isDragging) e.preventDefault(); });
      viewport.addEventListener('mouseup', function (e) {
        if (!isDragging) return;
        isDragging = false;
        var diff = e.clientX - startX;
        if (Math.abs(diff) > dragThreshold) {
          updateCarousel(diff < 0 ? currentIndex + 1 : currentIndex - 1);
          resetAutoPlay();
        }
      });
      viewport.addEventListener('mouseleave', function () { isDragging = false; });
      viewport.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
      viewport.addEventListener('touchend', function (e) {
        var diff = e.changedTouches[0].clientX - startX;
        if (Math.abs(diff) > dragThreshold) {
          updateCarousel(diff < 0 ? currentIndex + 1 : currentIndex - 1);
          resetAutoPlay();
        }
      }, { passive: true });
    }

    // Auto-play
    function startAutoPlay() {
      autoPlayTimer = setInterval(function () { updateCarousel(currentIndex + 1); }, 5000);
    }
    function resetAutoPlay() { clearInterval(autoPlayTimer); startAutoPlay(); }

    var carouselEl = document.getElementById('project-carousel');
    if (carouselEl) {
      carouselEl.addEventListener('mouseenter', function () { clearInterval(autoPlayTimer); });
      carouselEl.addEventListener('mouseleave', function () { startAutoPlay(); });
    }

    // Init
    updateCarousel(0);
    startAutoPlay();

    /* --- Project Detail Overlay --- */
    function openProjectDetail(index) {
      if (!overlay) return;
      clearInterval(autoPlayTimer);

      var data = projectData[index];
      var overlayImage = document.getElementById('overlay-image');
      var overlayCategory = document.getElementById('overlay-category');
      var overlayTitle = document.getElementById('overlay-title');
      var overlayProblem = document.getElementById('overlay-problem');
      var overlaySolution = document.getElementById('overlay-solution');
      var overlayComponents = document.getElementById('overlay-components');
      var overlaySoftware = document.getElementById('overlay-software');
      var overlayHighlights = document.getElementById('overlay-highlights');

      overlayImage.src = data.image;
      overlayImage.alt = data.title;
      overlayCategory.textContent = data.category;
      overlayTitle.textContent = data.title;
      overlayProblem.textContent = data.problem;
      overlaySolution.textContent = data.solution;

      // Build tags using safe DOM methods
      buildTags(overlayComponents, data.components, '');
      buildTags(overlaySoftware, data.software, 'detail-tag--orange');
      buildTags(overlayHighlights, data.highlights, 'detail-tag--blue');

      document.body.style.overflow = 'hidden';
      overlay.classList.add('active');
    }

    function buildTags(container, items, extraClass) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      items.forEach(function (item) {
        var span = document.createElement('span');
        span.className = 'detail-tag' + (extraClass ? ' ' + extraClass : '');
        span.textContent = item;
        container.appendChild(span);
      });
    }

    function closeProjectDetail() {
      if (!overlay) return;
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      startAutoPlay();
    }

    if (overlayClose) {
      overlayClose.addEventListener('click', closeProjectDetail);
    }
    if (overlay) {
      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeProjectDetail();
      });
    }
  }

  /* ============================================================
     INDEX PAGE: Hero Parallax
     ============================================================ */
  var heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    window.addEventListener('scroll', function () {
      requestAnimationFrame(function () {
        var scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          heroContent.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
          heroContent.style.opacity = Math.max(0, 1 - scrolled / (window.innerHeight * 0.8));
        }
      });
    });
  }

})();
