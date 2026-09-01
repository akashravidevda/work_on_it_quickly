/**
 * ============================================================================
 * VIJAYASHRI AGRO MART — ENTERPRISE JAVASCRIPT ENGINE
 * Modern Agricultural Machinery Discovery, Cart & Lead-Routing Engine
 * ============================================================================
 */

'use strict';

/**
 * ----------------------------------------------------------------------------
 * 1. CENTRAL CONFIGURATION & AUTHENTIC CONTACT DATA
 * ----------------------------------------------------------------------------
 */
const CONFIG = {
  businessName: 'Vijayashri Agro Mart',
  marathiName: 'विजयश्री ॲग्रो मार्ट',
  tagline: 'शेतकऱ्यांच्या हक्काचे ठिकाण',
  officialLocation: 'Nachane, Ratnagiri, Maharashtra - 415639',
  email: 'kunal.5786@gmail.com',
  officialMobile: '9975726256',
  udyamRegistration: 'UDYAM-MH-28-0001865',
  
  // Central WhatsApp number for enquiries and order routing
  whatsappNumber: '919975726256',
  upiId: '9975726256@okbizaxis',
  upiMerchantName: 'Vijayashri Agro Mart',
  tokenBookingAmount: 1000,
  
  // Alternate marketing phone numbers found on authentic creatives
  creativePhoneNumbers: [
    '8369314833',
    '9975726256',
    '9423292359',
    '8329074990',
    '7758018704'
  ],

  // LocalStorage Keys
  storageKeys: {
    cart: 'vijayashri_agro_cart',
    orders: 'vijayashri_agro_orders'
  }
};

/**
 * ----------------------------------------------------------------------------
 * 2. AUTHENTIC PRODUCT CATALOG DATA
 * ----------------------------------------------------------------------------
 */
const PRODUCT_CATALOG = [
  {
    id: 'stihl-fs3001',
    category: 'stihl',
    brand: 'STIHL',
    name: 'STIHL FS 3001',
    marathiName: 'STIHL FS 3001 ब्रश कटर',
    tagline: 'हलके वजन आणि सुलभ वापर.',
    image: 'assets/generated-products/stihl-fs3001-card.webp',
    gallery: [
      'assets/generated-products/stihl-fs3001-detail.webp',
      'assets/generated-products/stihl-fs3001-hero-desktop.webp',
      'assets/images/creative-stihl.jpg'
    ],
    price: 17990,
    mrp: 20500,
    stock: 'In Stock',
    specifications: {
      'Displacement': '25.4 cc',
      'Engine Power': '1.3 HP',
      'Engine Type': '2 Stroke',
      'Fuel': 'Petrol',
      'Starting System': 'Manual',
      'Weight': '5.6 kg'
    },
    features: [
      'High fuel efficiency with German engineering',
      'Lightweight and ergonomic balanced frame',
      'Effortless pull-start mechanism',
      'STIHL genuine world-class build quality'
    ],
    applications: [
      'Light garden and orchard weed trimming',
      'Farm boundary and pathway clearance',
      'Small to medium farmland maintenance'
    ],
    source: 'Supplied STIHL creative'
  },
  {
    id: 'stihl-fs230',
    category: 'stihl',
    brand: 'STIHL',
    name: 'STIHL FS 230',
    marathiName: 'STIHL FS 230 ब्रश कटर',
    tagline: 'अवजड गवत आणि नियमित शेती कामांसाठी.',
    image: 'assets/generated-products/stihl-fs230-card.webp',
    gallery: [
      'assets/generated-products/stihl-fs230-detail.webp',
      'assets/images/stihl-all-lineup.jpg',
      'assets/images/creative-stihl.jpg'
    ],
    price: 21990,
    mrp: 24900,
    stock: 'In Stock',
    specifications: {
      'Displacement': '40.2 cc',
      'Engine Power': '2.07 HP',
      'Engine Type': '2 Stroke',
      'Fuel': 'Petrol',
      'Starting System': 'Manual',
      'Weight': '7.3 kg'
    },
    features: [
      'High-power 2.07 HP engine for dense weeds',
      'Heavy-duty hardened cutting blade',
      'Durable gearbox engineered for long hours',
      'Easy serviceability with authentic spare parts'
    ],
    applications: [
      'Heavy grass cutting and wild weed clearing',
      'Sugarcane and field crop maintenance',
      'Extensive commercial farmland management'
    ],
    source: 'Supplied STIHL creative'
  },
  {
    id: 'stihl-fs120',
    category: 'stihl',
    brand: 'STIHL',
    name: 'STIHL FS 120',
    marathiName: 'STIHL FS 120 ब्रश कटर',
    tagline: 'संतुलित कामगिरी आणि टिकाऊपणा.',
    image: 'assets/generated-products/stihl-fs120-card.webp',
    gallery: [
      'assets/generated-products/stihl-fs120-detail.webp',
      'assets/images/stihl-all-lineup.jpg',
      'assets/images/creative-stihl.jpg'
    ],
    price: 23990,
    mrp: 27500,
    stock: 'In Stock',
    specifications: {
      'Displacement': '30.8 cc',
      'Engine Power': '1.8 HP',
      'Engine Type': '2 Stroke',
      'Fuel': 'Petrol',
      'Starting System': 'Manual',
      'Weight': '6.3 kg'
    },
    features: [
      'Advanced Low-Vibration technology',
      'Ergonomic bike-handle controls',
      'Optimized fuel consumption 2-stroke motor',
      'Engineered for long, continuous farm shifts'
    ],
    applications: [
      'Orchard cleaning and horticulture farms',
      'Medium to heavy weed cutting in fields',
      'Coconut, betel nut, and cashew plantation maintenance'
    ],
    source: 'Supplied STIHL creative'
  },
  {
    id: 'stihl-fs250',
    category: 'stihl',
    brand: 'STIHL',
    name: 'STIHL FS 250',
    marathiName: 'STIHL FS 250 हेवी ड्युटी ब्रश कटर',
    tagline: 'कमाल शक्ती आणि व्यावसायिक वापर.',
    image: 'assets/generated-products/stihl-fs250-card.webp',
    gallery: [
      'assets/generated-products/stihl-fs250-detail.webp',
      'assets/generated-products/stihl-fs250-use-case.webp',
      'assets/images/creative-stihl.jpg'
    ],
    price: 31490,
    mrp: 35000,
    stock: 'In Stock',
    specifications: {
      'Displacement': '40.2 cc',
      'Engine Power': '2.14 HP',
      'Engine Type': '2 Stroke',
      'Fuel': 'Petrol',
      'Starting System': 'Manual',
      'Weight': '6.3 kg'
    },
    features: [
      'Maximum 2.14 HP high-output professional engine',
      'Exceptional power-to-weight ratio (6.3 kg)',
      'Built for heavy-duty commercial farm clearing',
      'Rugged drive shaft and reinforced gearbox'
    ],
    applications: [
      'Commercial clearing and agricultural contracting',
      'Thick bushes, tough scrub, and woody growth',
      'Hillside terrains and demanding rural terrain'
    ],
    source: 'Supplied STIHL creative'
  },
  {
    id: 'really-cr-r35-s',
    category: 'crop-reaper',
    brand: 'Really',
    name: 'Really CR-R35-S Baffle Crop Reaper',
    marathiName: 'Really CR-R35-S बॅफल क्रॉप रिपर',
    tagline: 'भात शेती आणि पिकांच्या जलद कापणीसाठी.',
    image: 'assets/generated-products/really-cr-r35-s-card.webp',
    gallery: [
      'assets/generated-products/really-cr-r35-s-detail.webp',
      'assets/generated-products/really-cr-r35-s-use-case.webp',
      'assets/images/creative-really-reaper.jpg'
    ],
    price: 25490,
    mrp: 29000,
    stock: 'In Stock',
    specifications: {
      'Engine Model': '4 Stroke Engine',
      'Engine Power': '35 cc / 1 KW',
      'Fuel': 'Petrol',
      'Carry Type': 'Sidepack Harness',
      'Certification': 'FMTTI Approved'
    },
    accessories: [
      { name: 'Trimmer Head', img: 'assets/images/acc-trimmer-head.jpg' },
      { name: '2MM 2T Blade', img: 'assets/images/acc-2t-blade.jpg' },
      { name: '80T TCT Blade', img: 'assets/images/acc-80t-blade.jpg' },
      { name: 'Paddy Harvester', img: 'assets/images/acc-paddy-harvester.jpg' }
    ],
    features: [
      'High Power & Operating Efficiency',
      'Low Vibration 4-Stroke Technology',
      'Ergonomic Padded Sidepack Harness',
      'Easy Start Mechanism with Low Maintenance',
      'Durable Heavy-Duty Cutting Transmission'
    ],
    applications: [
      'Grass Cutting and Field Clearance',
      'Paddy Harvest Cutting with Harvester Baffle',
      'General Agricultural Crop Maintenance',
      'Orchard and Horticulture Plantation Care'
    ],
    source: 'Supplied Really creative'
  },
  {
    id: 'elemax-generator',
    category: 'generators',
    brand: 'ELEMAX',
    name: 'ELEMAX Generator',
    marathiName: 'ELEMAX जनरेटर',
    tagline: 'Powered by KOHLER Diesel',
    image: 'assets/generated-products/elemax-generator-card.webp',
    gallery: [
      'assets/generated-products/elemax-generator-detail.webp',
      'assets/images/creative-generators.jpg'
    ],
    price: 65000,
    mrp: 72000,
    stock: 'In Stock',
    specifications: {
      'Engine': 'Powered by KOHLER Diesel',
      'Fuel Type': 'Diesel',
      'Build': 'Heavy Duty Sound Proof Canopy'
    },
    features: [
      'Rugged KOHLER Diesel engine reliability',
      'Engineered for farm motors and irrigation pumps',
      'Durable wheeled chassis for easy site mobility'
    ],
    applications: [
      'Agricultural power backup for farmhouses',
      'Powering water irrigation pumps and equipment',
      'Emergency power for rural and commercial units'
    ],
    source: 'Supplied generator creative'
  },
  {
    id: 'lighton-generator',
    category: 'generators',
    brand: 'LIGHTON',
    name: 'LIGHTON SilentPRO Generator',
    marathiName: 'LIGHTON SilentPRO जनरेटर',
    tagline: 'SilentPRO LT-9000 Series',
    image: 'assets/generated-products/lighton-generator-card.webp',
    gallery: [
      'assets/generated-products/lighton-generator-detail.webp',
      'assets/images/creative-generators.jpg'
    ],
    price: 37990,
    mrp: 42500,
    stock: 'In Stock',
    specifications: {
      'Model Series': 'SilentPRO LT-9000',
      'Type': 'Compact Silent Power Generator'
    },
    features: [
      'Low-noise acoustic canopy operation',
      'Compact and portable frame for quick transport',
      'Effortless starting with minimal maintenance'
    ],
    applications: [
      'Farmhouse electricity and lighting',
      'Powering sprayers, farm tools and lights',
      'Agricultural office and shop backup'
    ],
    source: 'Supplied generator creative'
  },
  {
    id: 'pelican-generator',
    category: 'generators',
    brand: 'PELICAN',
    name: 'PELICAN Generator',
    marathiName: 'PELICAN पॉवर जनरेटर',
    tagline: 'PELICAN W900APL Series',
    image: 'assets/generated-products/pelican-generator-card.webp',
    gallery: [
      'assets/generated-products/pelican-generator-detail.webp',
      'assets/images/creative-generators.jpg'
    ],
    price: 42500,
    mrp: 48000,
    stock: 'In Stock',
    specifications: {
      'Model Series': 'PELICAN W900APL',
      'Design': 'Open Frame Heavy Duty'
    },
    features: [
      'Reinforced tubular steel protective cage',
      'Built for harsh outdoor agricultural conditions',
      'Intuitive control panel and high load endurance'
    ],
    applications: [
      'Welding and heavy agricultural machinery tools',
      'Borewell pumps and pond water management',
      'Farm construction and outdoor power operations'
    ],
    source: 'Supplied generator creative'
  }
];

/**
 * ----------------------------------------------------------------------------
 * 3. APPLICATION STATE
 * ----------------------------------------------------------------------------
 */
/**
 * ----------------------------------------------------------------------------
 * 3. APPLICATION STATE
 * ----------------------------------------------------------------------------
 */
const AppState = {
  currentFilter: 'all',
  searchQuery: '',
  currentSort: 'popular',
  viewMode: 'grid',
  currentPage: 1,
  itemsPerPage: 4,
  wishlist: [],
  cart: [],
  activeModalProduct: null,
  activeModalQty: 1
};

/**
 * ----------------------------------------------------------------------------
 * 4. INITIALIZATION & LIFECYCLE
 * ----------------------------------------------------------------------------
 */
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  loadCart();
  updateFilterPillCounts();
  renderProducts();
  setupEventListeners();
  updateCartBadge();
  initHeroThumbnailSwitcher();
  initHeaderScrollEffect();
  initScrollSpy();
  initMobileComparator();
  initScrollRevealAnimation();
  initSpecPowerGauges();
}

/**
 * ----------------------------------------------------------------------------
 * 5. EVENT LISTENERS SETUP
 * ----------------------------------------------------------------------------
 */
function setupEventListeners() {
  // Mobile Nav Toggle with outside click & Escape support
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = mainNav.classList.toggle('mobile-active');
      mobileToggle.classList.toggle('active', isExpanded);
      mobileToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Close mobile nav on outside click
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('mobile-active') && !mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mainNav.classList.remove('mobile-active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile nav on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('mobile-active')) {
        mainNav.classList.remove('mobile-active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll links & close mobile menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#legal-')) return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        if (mainNav) {
          mainNav.classList.remove('mobile-active');
          if (mobileToggle) {
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
          }
        }
        
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Category Filter Pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const filter = e.currentTarget.getAttribute('data-filter');
      filterProducts(filter);
    });
  });

  // Department / Category Cards Click
  document.querySelectorAll('.dept-panel-card').forEach(card => {
    const handleCategoryClick = () => {
      const filter = card.getAttribute('data-filter');
      filterProducts(filter);
      const productSection = document.getElementById('products');
      if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    card.addEventListener('click', handleCategoryClick);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCategoryClick();
      }
    });
  });

  // Search Input & Clear
  const searchInput = document.getElementById('catalogSearchInput');
  const searchClear = document.getElementById('searchClearBtn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.trim().toLowerCase();
      AppState.currentPage = 1;
      if (searchClear) {
        searchClear.style.display = AppState.searchQuery ? 'block' : 'none';
      }
      renderProducts();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      resetCatalogSearch();
    });
  }

  // Catalog Sort Dropdown
  const catalogSortSelect = document.getElementById('catalogSortSelect');
  if (catalogSortSelect) {
    catalogSortSelect.addEventListener('change', (e) => {
      AppState.currentSort = e.target.value;
      AppState.currentPage = 1;
      renderProducts();
    });
  }

  // Catalog View Mode Grid/List Buttons
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewListBtn = document.getElementById('viewListBtn');
  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      AppState.viewMode = 'grid';
      viewGridBtn.classList.add('active');
      viewListBtn.classList.remove('active');
      renderProducts();
    });
    viewListBtn.addEventListener('click', () => {
      AppState.viewMode = 'list';
      viewListBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      renderProducts();
    });
  }

  // Cart Drawer Triggers & Close
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const cartDrawerCloseBtn = document.getElementById('cartDrawerCloseBtn');
  const cartDrawerBackdrop = document.getElementById('cartDrawerBackdrop');

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCart);
  if (cartDrawerCloseBtn) cartDrawerCloseBtn.addEventListener('click', closeCart);
  if (cartDrawerBackdrop) {
    cartDrawerBackdrop.addEventListener('click', (e) => {
      if (e.target === cartDrawerBackdrop) closeCart();
    });
  }

  // Product Modal Close
  const productModalCloseBtn = document.getElementById('productModalCloseBtn');
  const productModalBackdrop = document.getElementById('productModalBackdrop');
  if (productModalCloseBtn) productModalCloseBtn.addEventListener('click', closeProductModal);
  if (productModalBackdrop) {
    productModalBackdrop.addEventListener('click', (e) => {
      if (e.target === productModalBackdrop) closeProductModal();
    });
  }

  // Checkout Modal Close
  const checkoutModalCloseBtn = document.getElementById('checkoutModalCloseBtn');
  const checkoutModalBackdrop = document.getElementById('checkoutModalBackdrop');
  if (checkoutModalCloseBtn) checkoutModalCloseBtn.addEventListener('click', closeCheckout);
  if (checkoutModalBackdrop) {
    checkoutModalBackdrop.addEventListener('click', (e) => {
      if (e.target === checkoutModalBackdrop) closeCheckout();
    });
  }

  // Legal Modal Close
  const legalModalCloseBtn = document.getElementById('legalModalCloseBtn');
  const legalModalBackdrop = document.getElementById('legalModalBackdrop');
  if (legalModalCloseBtn) legalModalCloseBtn.addEventListener('click', closeLegalModal);
  if (legalModalBackdrop) {
    legalModalBackdrop.addEventListener('click', (e) => {
      if (e.target === legalModalBackdrop) closeLegalModal();
    });
  }

  // Escape key global listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCart();
      closeCheckout();
      closeOrderSuccessModal();
      closeLegalModal();
    }
  });

  // Forms Submissions
  // Payment Mode Radio Switcher
  document.querySelectorAll('input[name="paymentMode"]').forEach(radio => {
    radio.addEventListener('change', handlePaymentModeChange);
  });

  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckoutSubmit);

  const quickEnquiryForm = document.getElementById('quickEnquiryForm');
  if (quickEnquiryForm) quickEnquiryForm.addEventListener('submit', handleQuickEnquirySubmit);
}

/**
 * ----------------------------------------------------------------------------
 * 6. DYNAMIC FILTER COUNTS & SEARCH
 * ----------------------------------------------------------------------------
 */
function updateFilterPillCounts() {
  const countAll = document.getElementById('countAll');
  const countStihl = document.getElementById('countStihl');
  const countReaper = document.getElementById('countReaper');
  const countGenerators = document.getElementById('countGenerators');

  if (countAll) countAll.textContent = PRODUCT_CATALOG.length;
  if (countStihl) countStihl.textContent = PRODUCT_CATALOG.filter(p => p.category === 'stihl').length;
  if (countReaper) countReaper.textContent = PRODUCT_CATALOG.filter(p => p.category === 'crop-reaper').length;
  if (countGenerators) countGenerators.textContent = PRODUCT_CATALOG.filter(p => p.category === 'generators').length;
}

function resetCatalogSearch() {
  const searchInput = document.getElementById('catalogSearchInput');
  const searchClear = document.getElementById('searchClearBtn');
  if (searchInput) searchInput.value = '';
  if (searchClear) searchClear.style.display = 'none';
  AppState.searchQuery = '';
  AppState.currentFilter = 'all';
  AppState.currentPage = 1;
  
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-filter') === 'all');
    pill.setAttribute('aria-selected', pill.getAttribute('data-filter') === 'all' ? 'true' : 'false');
  });

  renderProducts();
}

/**
 * ----------------------------------------------------------------------------
 * 7. PRODUCT RENDERING, WISHLIST & DYNAMIC PAGINATION
 * ----------------------------------------------------------------------------
 */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('catalogEmptyState');
  if (!grid) return;

  // Toggle view mode
  if (AppState.viewMode === 'list') {
    grid.classList.add('list-view');
  } else {
    grid.classList.remove('list-view');
  }

  // Filter by category
  let list = AppState.currentFilter === 'all'
    ? [...PRODUCT_CATALOG]
    : PRODUCT_CATALOG.filter(p => p.category === AppState.currentFilter);

  // Filter by search query
  if (AppState.searchQuery) {
    const q = AppState.searchQuery.toLowerCase().trim();
    list = list.filter(p => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchMarathi = p.marathiName && p.marathiName.toLowerCase().includes(q);
      const matchBrand = p.brand.toLowerCase().includes(q);
      const matchTag = p.tagline && p.tagline.toLowerCase().includes(q);
      
      let matchSpecs = false;
      if (p.specifications) {
        matchSpecs = Object.entries(p.specifications).some(([k, v]) => 
          k.toLowerCase().includes(q) || String(v).toLowerCase().includes(q)
        );
      }

      let matchApps = false;
      if (p.applications) {
        matchApps = p.applications.some(a => a.toLowerCase().includes(q));
      }

      return matchName || matchMarathi || matchBrand || matchTag || matchSpecs || matchApps;
    });
  }

  // Sort list
  if (AppState.currentSort === 'price-low') {
    list.sort((a, b) => (a.price || 0) - (b.price || 0));
  } else if (AppState.currentSort === 'price-high') {
    list.sort((a, b) => (b.price || 0) - (a.price || 0));
  } else if (AppState.currentSort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  const totalFiltered = list.length;
  const totalPages = Math.ceil(totalFiltered / AppState.itemsPerPage);

  // Bounds check for current page
  if (AppState.currentPage > totalPages) {
    AppState.currentPage = Math.max(1, totalPages);
  }
  if (AppState.currentPage < 1) {
    AppState.currentPage = 1;
  }

  const startIndex = (AppState.currentPage - 1) * AppState.itemsPerPage;
  const endIndex = Math.min(startIndex + AppState.itemsPerPage, totalFiltered);
  const paginatedList = list.slice(startIndex, endIndex);

  grid.innerHTML = '';

  if (totalFiltered === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'flex';
  } else {
    grid.style.display = 'grid';
    if (emptyState) emptyState.style.display = 'none';
    paginatedList.forEach(product => {
      const card = createProductCardElement(product);
      grid.appendChild(card);
    });
  }

  // Render dynamic pagination bar
  renderPagination(totalFiltered, totalPages);
}

function createProductCardElement(product) {
  const card = document.createElement('div');
  card.className = 'product-card reveal-on-scroll';
  card.setAttribute('data-id', product.id);

  const brandClass = product.brand.toLowerCase().replace(/\s+/g, '-');
  const discount = product.mrp && product.price ? (product.mrp - product.price) : 0;
  const isWishlisted = AppState.wishlist && AppState.wishlist.includes(product.id);

  // 3-Row Spec Table
  let specTableHtml = '';
  if (product.specifications) {
    const entries = Object.entries(product.specifications).slice(0, 3);
    specTableHtml = `
      <div class="product-spec-table">
        ${entries.map(([key, val]) => `
          <div class="spec-table-row">
            <span class="spec-key-pill">${key}</span>
            <span class="spec-val-txt">${val}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Image Feature Badge Text
  let featureTagText = '🛡️ Heavy Duty';
  if (product.id === 'really-cr-r35-s') featureTagText = '🍃 4 Stroke Engine';
  else if (product.id === 'elemax-generator') featureTagText = '🛡️ Heavy Duty';
  else if (product.id === 'lighton-generator') featureTagText = '🔈 Silent Operation';
  else if (product.id === 'pelican-generator') featureTagText = '🛡️ Heavy Duty';
  else if (product.id.includes('fs3001')) featureTagText = '🍃 Lightweight';
  else if (product.id.includes('fs230')) featureTagText = '⚡ High Power';
  else if (product.id.includes('fs120')) featureTagText = '⚙️ Low Vibration';
  else if (product.id.includes('fs250')) featureTagText = '⚡ 2.14 HP Output';

  card.innerHTML = `
    <div class="product-card-top-bar">
      <span class="card-brand-pill ${brandClass}">${product.brand}</span>
    </div>
    
    <div class="product-image-area" onclick="openProductModal('${product.id}')" title="Click to view specifications">
      <img src="${product.image}" alt="${product.name}" width="280" height="280" loading="lazy">
      <div class="card-img-feature-tag">
        <span>${featureTagText}</span>
      </div>
    </div>

    <div class="product-card-body">
      <h3 class="product-card-title">${product.name}</h3>
      <p class="product-tagline">${product.marathiName || product.tagline || ''}</p>
      
      ${specTableHtml}

      <!-- Pricing Display -->
      <div class="product-price-container">
        <div class="price-main-row">
          <div class="price-value-box">
            <span>₹${product.price ? product.price.toLocaleString('en-IN') : 'On Inquiry'}</span>
          </div>
          ${product.mrp ? `<span class="price-mrp-strike">MRP ₹${product.mrp.toLocaleString('en-IN')}</span>` : ''}
          ${discount > 0 ? `<span class="badge-save-pill">₹${discount.toLocaleString('en-IN')} OFF</span>` : ''}
        </div>
        <div class="price-meta-sub">
          <span>✓ GST Invoice Included</span>
          <span>✓ Subsidy Eligible</span>
        </div>
      </div>

      <!-- 2-Button Action Flow -->
      <div class="card-actions-grid">
        <button class="btn-outline-card" onclick="openProductModal('${product.id}')">
          <span>View Details</span>
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
        <button class="btn-add-cart" onclick="addToCart('${product.id}')">
          <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  `;

  return card;
}

/**
 * Dynamic Pagination Logic
 * Rule: If totalFiltered <= itemsPerPage (e.g. 4 or fewer items in a category),
 * pagination buttons (1, 2, 3, 4) MUST NOT APPEAR.
 */
function renderPagination(totalFiltered, totalPages) {
  const paginationBar = document.getElementById('catalogPaginationBar');
  const paginationButtons = document.getElementById('paginationButtons');
  const paginationCountDisplay = document.getElementById('paginationCountDisplay');

  if (!paginationBar) return;

  if (totalFiltered === 0) {
    paginationBar.style.display = 'none';
    return;
  }

  paginationBar.style.display = 'flex';

  // Count text display
  const startItem = (AppState.currentPage - 1) * AppState.itemsPerPage + 1;
  const endItem = Math.min(AppState.currentPage * AppState.itemsPerPage, totalFiltered);

  if (paginationCountDisplay) {
    if (totalFiltered <= AppState.itemsPerPage) {
      paginationCountDisplay.textContent = `Showing 1–${totalFiltered} of ${totalFiltered} products`;
    } else {
      paginationCountDisplay.textContent = `Showing ${startItem}–${endItem} of ${totalFiltered} products`;
    }
  }

  // CRITICAL LOGIC:
  // If there are no more than 4 products in this category (totalPages <= 1),
  // hide page buttons 1 2 3 4 completely!
  if (totalPages <= 1) {
    if (paginationButtons) {
      paginationButtons.innerHTML = '';
      paginationButtons.style.display = 'none';
    }
    return;
  }

  // When totalPages > 1, show dynamic page numbers and next arrow
  if (paginationButtons) {
    paginationButtons.style.display = 'flex';
    paginationButtons.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.className = `page-btn ${i === AppState.currentPage ? 'active' : ''}`;
      btn.textContent = i;
      btn.setAttribute('aria-label', `Page ${i}`);
      btn.addEventListener('click', () => {
        AppState.currentPage = i;
        renderProducts();
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      });
      paginationButtons.appendChild(btn);
    }

    if (AppState.currentPage < totalPages) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'page-btn page-next-btn';
      nextBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      `;
      nextBtn.setAttribute('aria-label', 'Next page');
      nextBtn.addEventListener('click', () => {
        AppState.currentPage++;
        renderProducts();
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      });
      paginationButtons.appendChild(nextBtn);
    }
  }
}

function toggleWishlist(productId, event) {
  if (event) event.stopPropagation();
  if (!AppState.wishlist) AppState.wishlist = [];

  const idx = AppState.wishlist.indexOf(productId);
  if (idx > -1) {
    AppState.wishlist.splice(idx, 1);
    showToastNotification('Removed from wishlist');
  } else {
    AppState.wishlist.push(productId);
    showToastNotification('Saved to wishlist ❤️');
  }

  // Update heart visual on active card
  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  if (card) {
    const btn = card.querySelector('.card-wishlist-btn');
    if (btn) {
      const isWish = AppState.wishlist.includes(productId);
      btn.classList.toggle('active', isWish);
      const svg = btn.querySelector('svg');
      if (svg) {
        svg.setAttribute('fill', isWish ? '#E52E2E' : 'none');
        svg.setAttribute('stroke', isWish ? '#E52E2E' : 'currentColor');
      }
    }
  }
}

function filterProducts(category) {
  AppState.currentFilter = category;
  AppState.currentPage = 1; // Reset to page 1 on category switch

  document.querySelectorAll('.filter-pill').forEach(pill => {
    const isActive = pill.getAttribute('data-filter') === category;
    pill.classList.toggle('active', isActive);
    pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  renderProducts();
}

/**
 * ----------------------------------------------------------------------------
 * 8. PRODUCT DETAIL MODAL v2 (1000–1100px Desktop)
 * ----------------------------------------------------------------------------
 */
function openProductModal(productId) {
  const product = PRODUCT_CATALOG.find(p => p.id === productId);
  if (!product) return;

  AppState.activeModalProduct = product;
  AppState.activeModalQty = 1;

  const modalBody = document.getElementById('productModalBody');
  const modalBackdrop = document.getElementById('productModalBackdrop');

  if (!modalBody || !modalBackdrop) return;

  // Specs table
  let specsRows = '';
  if (product.specifications) {
    Object.entries(product.specifications).forEach(([key, val]) => {
      specsRows += `
        <tr>
          <td>${key}</td>
          <td><strong>${val}</strong></td>
        </tr>
      `;
    });
  }

  // Accessories (Really reaper)
  let accessoriesHtml = '';
  if (product.accessories && product.accessories.length > 0) {
    accessoriesHtml = `
      <div style="margin-top: var(--space-xs);">
        <strong style="font-size: var(--text-xs); color: var(--color-deep-forest); display: block; margin-bottom: 4px;">Included Attachments & Tools:</strong>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 6px;">
          ${product.accessories.map(acc => `
            <div style="background-color: var(--color-warm-surface); border: 1px solid var(--color-border); border-radius: 6px; padding: 4px; text-align: center;">
              <img src="${acc.img}" alt="${acc.name}" style="height: 44px; width: 100%; object-fit: contain; background: white; border-radius: 4px;">
              <span style="font-size: 0.68rem; font-weight: 600; display: block; margin-top: 2px;">${acc.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Applications
  let appsHtml = '';
  if (product.applications && product.applications.length > 0) {
    appsHtml = `
      <div style="margin-top: var(--space-xs);">
        <strong style="font-size: var(--text-xs); color: var(--color-deep-forest); display: block; margin-bottom: 2px;">Recommended Applications:</strong>
        <ul style="padding-left: 16px; list-style-type: disc; font-size: var(--text-xs); color: var(--color-body); line-height: 1.45;">
          ${product.applications.map(app => `<li>${app}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Gallery Thumbnails
  let thumbsHtml = '';
  if (product.gallery && product.gallery.length > 1) {
    thumbsHtml = `
      <div class="modal-thumbs-row">
        ${product.gallery.map((imgSrc, idx) => `
          <img src="${imgSrc}" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="switchModalGalleryImage('${imgSrc}', this)" alt="${product.name}">
        `).join('')}
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div class="modal-product-split">
      <!-- Gallery Left -->
      <div class="modal-gallery-area">
        <div class="modal-main-img-wrap">
          <img id="modalMainImg" src="${product.image}" alt="${product.name}">
        </div>
        ${thumbsHtml}
      </div>

      <!-- Technical Info Right -->
      <div class="modal-info-area">
        <div>
          <span class="modal-brand-label">${product.brand}</span>
          <h2 class="modal-product-heading" id="modalProductTitle">${product.name}</h2>
          <p style="font-size: var(--text-xs); color: var(--color-body);">${product.marathiName || ''}</p>
        </div>

        <div class="modal-price-hero-box">
          <div class="modal-price-row">
            <div class="modal-price-tag">
              <span class="modal-curr">₹</span>
              <span class="modal-amount">${product.price ? product.price.toLocaleString('en-IN') : 'On Inquiry'}</span>
            </div>
            ${product.mrp ? `<span class="modal-mrp-tag">MRP: ₹${product.mrp.toLocaleString('en-IN')}</span>` : ''}
            ${product.mrp && product.price ? `<span class="badge-save-pill">₹${(product.mrp - product.price).toLocaleString('en-IN')} Direct Savings</span>` : ''}
          </div>
          <p class="modal-price-guarantee">✓ Official Showroom Invoice • GST Included • Government Subsidy & Quotation Support</p>
        </div>

        <div>
          <strong style="font-size: var(--text-xs); color: var(--color-deep-forest);">Technical Specifications:</strong>
          <table class="modal-specs-table-view">
            <tbody>
              ${specsRows}
            </tbody>
          </table>
        </div>

        ${accessoriesHtml}
        ${appsHtml}

        <div class="modal-sticky-action-row">
          <div class="qty-stepper">
            <button class="qty-step-btn" onclick="adjustModalQty(-1)" aria-label="Decrease Quantity">-</button>
            <span class="qty-step-value" id="modalQtyDisplay">1</span>
            <button class="qty-step-btn" onclick="adjustModalQty(1)" aria-label="Increase Quantity">+</button>
          </div>

          <button class="btn btn-primary" onclick="addModalProductToCart()">
            <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span>Add to Cart</span>
          </button>

          <button class="btn btn-whatsapp-btn" onclick="enquireProductViaWhatsApp('${product.id}')">
            <svg class="icon-sm icon-wa" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>WhatsApp Enquiry</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modalBackdrop = document.getElementById('productModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

function switchModalGalleryImage(imgSrc, thumbEl) {
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) mainImg.src = imgSrc;
  document.querySelectorAll('.modal-thumb-btn').forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function adjustModalQty(delta) {
  AppState.activeModalQty = Math.max(1, AppState.activeModalQty + delta);
  const qtyDisplay = document.getElementById('modalQtyDisplay');
  if (qtyDisplay) qtyDisplay.textContent = AppState.activeModalQty;
}

function addModalProductToCart() {
  if (!AppState.activeModalProduct) return;
  addToCart(AppState.activeModalProduct.id, AppState.activeModalQty);
  closeProductModal();
}

/**
 * ----------------------------------------------------------------------------
 * 9. HERO PRODUCT SHOWCASE SWITCHER
 * ----------------------------------------------------------------------------
 */
function initHeroThumbnailSwitcher() {
  const thumbCards = document.querySelectorAll('.hero-nav-thumb');
  const mainHeroImg = document.getElementById('heroShowcaseImg');
  const pictureEl = document.getElementById('heroShowcasePicture');
  const modelName = document.getElementById('heroModelName');
  const modelSpec = document.getElementById('heroModelSpec');
  const groundShadow = document.querySelector('.stage-grounding-shadow');
  const floatingTags = document.querySelectorAll('.showcase-floating-tag');
  
  if (!mainHeroImg || !thumbCards.length) return;

  thumbCards.forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('active')) return;

      thumbCards.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-selected', 'false');
      });
      card.classList.add('active');
      card.setAttribute('aria-selected', 'true');

      const newSrc = card.getAttribute('data-img');
      const newName = card.getAttribute('data-name');
      const newSpec = card.getAttribute('data-spec');

      if (newSrc) {
        mainHeroImg.classList.add('switching');
        if (groundShadow) groundShadow.classList.add('switching');
        floatingTags.forEach(t => t.classList.add('tag-switching'));

        setTimeout(() => {
          mainHeroImg.src = newSrc;
          if (pictureEl) {
            const sources = pictureEl.querySelectorAll('source');
            sources.forEach(src => src.srcset = newSrc);
          }
          if (modelName && newName) modelName.textContent = newName;
          if (modelSpec && newSpec) modelSpec.textContent = newSpec;
          
          mainHeroImg.classList.remove('switching');
          if (groundShadow) groundShadow.classList.remove('switching');
          floatingTags.forEach(t => t.classList.remove('tag-switching'));
        }, 160);
      }
    });
  });
}

/**
 * ----------------------------------------------------------------------------
 * 10. MOBILE COMPARISON ACCORDION
 * ----------------------------------------------------------------------------
 */
function initMobileComparator() {
  switchMobileComparator('stihl-fs3001');
}

function switchMobileComparator(modelId, btnEl) {
  const card = document.getElementById('mobileComparatorCard');
  const product = PRODUCT_CATALOG.find(p => p.id === modelId);
  if (!card || !product) return;

  document.querySelectorAll('.model-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  if (btnEl) {
    btnEl.classList.add('active');
  } else {
    const defaultBtn = document.querySelector(`.model-tab-btn[data-model="${modelId}"]`);
    if (defaultBtn) defaultBtn.classList.add('active');
  }

  // Model-specific attributes
  let badgeText = 'HIGH POWER';
  let badgeClass = 'badge-power';
  let bestForText = 'Farm weed cutting & maintenance';
  let powerPercent = '80%';
  let powerColorClass = '';
  let displacementPercent = '75%';

  if (modelId === 'stihl-fs3001') {
    badgeText = 'BEST FOR HOME';
    badgeClass = 'badge-home';
    bestForText = 'Light garden & orchard trimming';
    powerPercent = '60%';
    displacementPercent = '63%';
  } else if (modelId === 'stihl-fs230') {
    badgeText = 'HIGH POWER';
    badgeClass = 'badge-power';
    bestForText = 'Heavy grass & sugarcane cutting';
    powerPercent = '96%';
    displacementPercent = '100%';
  } else if (modelId === 'stihl-fs120') {
    badgeText = 'BALANCED';
    badgeClass = 'badge-balanced';
    bestForText = 'Medium farm maintenance';
    powerPercent = '84%';
    displacementPercent = '76%';
  } else if (modelId === 'stihl-fs250') {
    badgeText = 'MAX POWER';
    badgeClass = 'badge-max';
    bestForText = 'Commercial & intensive field operations';
    powerPercent = '100%';
    powerColorClass = 'fill-orange';
    displacementPercent = '100%';
  }

  const discount = product.mrp && product.price ? (product.mrp - product.price) : 0;
  const discountPercent = product.mrp && product.price ? Math.round((discount / product.mrp) * 100) : 10;

  card.innerHTML = `
    <div style="background: #052B1B; padding: 14px 16px; border-radius: 12px; color: #FFFFFF;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
        <span style="font-size: 1.3rem; font-weight: 900; color: #FFD24D;">${product.name.replace('STIHL ', '')}</span>
        <span class="model-badge-tag ${badgeClass}">${badgeText}</span>
      </div>
      <div style="font-size: 0.8rem; color: rgba(255,255,255,0.85);">${product.tagline || ''}</div>
    </div>

    <!-- Specs Grid with Meters -->
    <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.84rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid #F0F5F2;">
        <span style="color: #687D72; font-weight: 600;">Displacement</span>
        <div style="text-align: right;">
          <strong style="color: #042516;">${product.specifications['Displacement'] || '25.4 cc'}</strong>
          <div class="spec-power-track" style="margin-top: 4px;">
            <div class="spec-power-fill" style="width: ${displacementPercent};"></div>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid #F0F5F2;">
        <span style="color: #687D72; font-weight: 600;">Engine Power</span>
        <div style="text-align: right;">
          <strong class="${modelId === 'stihl-fs250' ? 'highlight-power' : ''}" style="${modelId === 'stihl-fs250' ? 'color: #D85800; font-weight: 900;' : 'color: #042516;'}">${product.specifications['Engine Power'] || '1.3 HP'}</strong>
          <div class="spec-power-track" style="margin-top: 4px;">
            <div class="spec-power-fill ${powerColorClass}" style="width: ${powerPercent};"></div>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid #F0F5F2;">
        <span style="color: #687D72; font-weight: 600;">Engine Type</span>
        <strong style="color: #042516;">${product.specifications['Engine Type'] || '2 Stroke'}</strong>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid #F0F5F2;">
        <span style="color: #687D72; font-weight: 600;">Fuel</span>
        <strong style="color: #042516;">Petrol</strong>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid #F0F5F2;">
        <span style="color: #687D72; font-weight: 600;">Starting System</span>
        <strong style="color: #042516;">Manual</strong>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; border-bottom: 1px solid #F0F5F2;">
        <span style="color: #687D72; font-weight: 600;">Weight</span>
        <strong class="${modelId === 'stihl-fs3001' ? 'text-success-weight' : ''}" style="${modelId === 'stihl-fs3001' ? 'color: #0A6034;' : 'color: #042516;'}">${modelId === 'stihl-fs3001' ? '5.6 kg (Lightest)' : (product.specifications['Weight'] || '6.3 kg')}</strong>
      </div>

      <div style="padding-bottom: 8px; border-bottom: 1px solid #F0F5F2;">
        <span style="color: #687D72; font-weight: 600; display: block; margin-bottom: 2px;">Best For</span>
        <span style="color: #042516; font-weight: 600;">${bestForText}</span>
      </div>
    </div>

    <!-- Pricing & Action Cluster -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 6px;">
      <div class="comp-price-block">
        <strong class="comp-price-num">₹${product.price ? product.price.toLocaleString('en-IN') : 'On Inquiry'}</strong>
        <div class="comp-price-sub">
          ${product.mrp ? `<span class="comp-mrp-strike">MRP ₹${product.mrp.toLocaleString('en-IN')}</span>` : ''}
          <span class="comp-discount-pill">${discountPercent}% OFF</span>
        </div>
      </div>
    </div>

    <div class="card-actions-grid" style="margin-top: 6px;">
      <button class="btn-outline-card" onclick="openProductModal('${product.id}')">
        <span>View Details</span>
        <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
      <button class="btn-add-cart" onclick="addToCart('${product.id}')">
        <svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <span>Add to Cart</span>
      </button>
    </div>
  `;
}

/**
 * ----------------------------------------------------------------------------
 * 11. CART MANAGEMENT & PERSISTENCE
 * ----------------------------------------------------------------------------
 */
function addToCart(productId, quantity = 1) {
  const product = PRODUCT_CATALOG.find(p => p.id === productId);
  if (!product) return;

  const existing = AppState.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      image: product.image,
      price: product.price || 0,
      mrp: product.mrp || 0,
      tagline: product.tagline || '',
      quantity: quantity
    });
  }

  saveCart();
  updateCartBadge();
  renderCart();
  showToast(`✓ ${product.name} (${quantity} unit) added to cart!`, 'success');
}

function removeFromCart(productId) {
  AppState.cart = AppState.cart.filter(item => item.id !== productId);
  saveCart();
  updateCartBadge();
  renderCart();
  showToast('Item removed from cart.', 'info');
}

function updateQuantity(productId, delta) {
  const item = AppState.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartBadge();
    renderCart();
  }
}

function saveCart() {
  try {
    localStorage.setItem(CONFIG.storageKeys.cart, JSON.stringify(AppState.cart));
  } catch (err) {
    console.warn('LocalStorage save error:', err);
  }
}

function loadCart() {
  try {
    const saved = localStorage.getItem(CONFIG.storageKeys.cart);
    if (saved) AppState.cart = JSON.parse(saved);
  } catch (err) {
    AppState.cart = [];
  }
}

function updateCartBadge() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);

  const headerBadge = document.getElementById('cartBadgeCount');
  const mobileBadge = document.getElementById('mobileCartBadge');
  const drawerCount = document.getElementById('drawerCartCount');

  [headerBadge, mobileBadge].forEach(badge => {
    if (badge) {
      badge.textContent = totalCount;
      badge.classList.remove('pop');
      void badge.offsetWidth; // Trigger reflow for re-animation
      badge.classList.add('pop');
    }
  });

  if (drawerCount) drawerCount.textContent = `${totalCount} Items`;
}

function renderCart() {
  const drawerBody = document.getElementById('cartDrawerBody');
  const drawerFooter = document.getElementById('cartDrawerFooter');
  const summaryQty = document.getElementById('cartSummaryQuantity');

  if (!drawerBody) return;

  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = AppState.cart.reduce((sum, item) => sum + ((item.price || 0) * item.quantity), 0);
  const totalMrp = AppState.cart.reduce((sum, item) => sum + ((item.mrp || item.price || 0) * item.quantity), 0);
  const totalSavings = Math.max(0, totalMrp - totalPrice);

  if (AppState.cart.length === 0) {
    drawerBody.innerHTML = `
      <div class="empty-cart-state">
        <div class="empty-icon-wrap">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        </div>
        <h4 style="font-weight: 800; color: var(--color-deep-forest);">Your cart is currently empty</h4>
        <p style="font-size: var(--text-xs); color: var(--color-body);">Explore our certified agricultural machinery and equipment.</p>
        <button class="btn btn-primary btn-sm" onclick="closeCart(); document.getElementById('products').scrollIntoView({behavior: 'smooth'});">
          Browse Equipment
        </button>
      </div>
    `;
    if (drawerFooter) drawerFooter.style.display = 'none';
    return;
  }

  if (drawerFooter) {
    drawerFooter.style.display = 'flex';
    drawerFooter.innerHTML = `
      <div class="cart-bill-summary">
        <div class="bill-row">
          <span>Total Equipment (${totalCount} Units):</span>
          <span>₹${totalPrice.toLocaleString('en-IN')}</span>
        </div>
        ${totalSavings > 0 ? `
        <div class="bill-row text-savings">
          <span>Special Offer Savings:</span>
          <span>− ₹${totalSavings.toLocaleString('en-IN')}</span>
        </div>` : ''}
        <div class="bill-row total-row">
          <strong>Total Amount Payable:</strong>
          <strong class="total-price-highlight">₹${totalPrice.toLocaleString('en-IN')}</strong>
        </div>
        <small class="tax-inclusive-tag">✓ GST Invoice Included • Genuine Warranty</small>
      </div>

      <div class="drawer-actions-stack">
        <button class="btn btn-primary btn-block" onclick="openCheckout()">
          <span>Proceed to Checkout</span>
        </button>
      </div>
    `;
  }

  let itemsHtml = '';
  AppState.cart.forEach((item, index) => {
    const itemTotal = (item.price || 0) * item.quantity;
    const staggerDelay = Math.min(index * 35, 200);
    itemsHtml += `
      <div class="cart-item-row" style="--stagger-delay: ${staggerDelay}ms;">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        
        <div class="cart-item-details">
          <span class="brand-chip ${item.brand.toLowerCase()}" style="display: inline-block; width: max-content; font-size: 0.65rem;">${item.brand}</span>
          <h4 class="cart-item-name">${item.name}</h4>
          
          <div class="cart-item-price-line">
            <strong>₹${itemTotal.toLocaleString('en-IN')}</strong>
            <span class="cart-unit-price">(₹${(item.price || 0).toLocaleString('en-IN')} / unit)</span>
          </div>
          
          <div class="cart-item-qty-bar">
            <div class="cart-qty-toggle">
              <button onclick="updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">-</button>
              <span>${item.quantity}</span>
              <button onclick="updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-trash-btn" onclick="removeFromCart('${item.id}')" title="Remove item">Remove</button>
          </div>
        </div>
      </div>
    `;
  });

  drawerBody.innerHTML = itemsHtml;
}

function openCart() {
  renderCart();
  const drawerBackdrop = document.getElementById('cartDrawerBackdrop');
  if (drawerBackdrop) {
    drawerBackdrop.classList.add('active');
    drawerBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeCart() {
  const drawerBackdrop = document.getElementById('cartDrawerBackdrop');
  if (drawerBackdrop) {
    drawerBackdrop.classList.remove('active');
    drawerBackdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

/**
 * ----------------------------------------------------------------------------
 * 12. CHECKOUT & ORDER SUBMISSION FLOW
 * ----------------------------------------------------------------------------
 */

/**
 * ----------------------------------------------------------------------------
 * 12a. UPI PAYMENT MANAGEMENT ENGINE
 * ----------------------------------------------------------------------------
 */
function handlePaymentModeChange(e) {
  const selectedMode = e ? e.target.value : (document.querySelector('input[name="paymentMode"]:checked') || {}).value;
  const upiBox = document.getElementById('upiPaymentBox');
  const upiOptionLabel = document.getElementById('upiPaymentOptionLabel');
  const confirmOptionLabel = document.getElementById('payOnConfirmOption') || document.querySelector('.payment-card-option');
  
  document.querySelectorAll('.payment-card-option').forEach(card => {
    const isChecked = card.querySelector('input').checked;
    card.classList.toggle('selected', isChecked);
  });

  if (selectedMode === 'UPI Payment') {
    if (upiBox) upiBox.style.display = 'block';
    updateUpiPaymentDetails();
  } else {
    if (upiBox) upiBox.style.display = 'none';
    const upiErr = document.getElementById('checkoutUpiRefError');
    if (upiErr) upiErr.textContent = '';
  }
}

function updateUpiPaymentDetails() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = AppState.cart.reduce((sum, item) => sum + ((item.price || 0) * item.quantity), 0);
  const tokenAmt = Math.max(1000, totalCount * 1000);
  
  const amtDisplay = document.getElementById('upiPayAmountDisplay');
  if (amtDisplay) {
    amtDisplay.textContent = `₹${totalPrice > 0 ? totalPrice.toLocaleString('en-IN') : tokenAmt.toLocaleString('en-IN')} (Total Payable)`;
  }

  const upiId = CONFIG.upiId || '9975726256@okbizaxis';
  const upiName = encodeURIComponent(CONFIG.upiMerchantName || 'Vijayashri Agro Mart');
  const payAmt = totalPrice > 0 ? totalPrice : tokenAmt;
  const note = encodeURIComponent('Vijayashri Agro Mart Machinery Order');
  const upiUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${upiName}&am=${payAmt}&cu=INR&tn=${note}`;

  const qrImg = document.getElementById('upiQrImage');
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(upiUrl)}`;
  }

  const directBtn = document.getElementById('directUpiIntentBtn');
  if (directBtn) {
    directBtn.href = upiUrl;
  }
}

function copyUpiId() {
  const upiId = CONFIG.upiId || '9975726256@okbizaxis';
  const btnText = document.getElementById('copyUpiBtnText');
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(upiId).then(() => {
      if (btnText) btnText.textContent = 'Copied! ✓';
      showToast('✓ Official UPI ID copied!', 'success');
      setTimeout(() => { if (btnText) btnText.textContent = 'Copy'; }, 2500);
    }).catch(() => {
      prompt('Copy UPI ID:', upiId);
    });
  } else {
    prompt('Copy UPI ID:', upiId);
  }
}

function openCheckout() {
  if (AppState.cart.length === 0) {
    showToast('Please add equipment to your cart first.', 'info');
    return;
  }

  closeCart();
  renderCheckoutSummary();
  handlePaymentModeChange();

  const checkoutBackdrop = document.getElementById('checkoutModalBackdrop');
  if (checkoutBackdrop) {
    checkoutBackdrop.classList.add('active');
    checkoutBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeCheckout() {
  const checkoutBackdrop = document.getElementById('checkoutModalBackdrop');
  if (checkoutBackdrop) {
    checkoutBackdrop.classList.remove('active');
    checkoutBackdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

function renderCheckoutSummary() {
  const summaryList = document.getElementById('checkoutSummaryItems');
  const summaryQty = document.getElementById('checkoutSummaryQty');
  const billCard = document.getElementById('checkoutBillCard');
  if (!summaryList) return;

  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = AppState.cart.reduce((sum, item) => sum + ((item.price || 0) * item.quantity), 0);
  const totalMrp = AppState.cart.reduce((sum, item) => sum + ((item.mrp || item.price || 0) * item.quantity), 0);
  const totalSavings = Math.max(0, totalMrp - totalPrice);

  if (summaryQty) summaryQty.textContent = `${totalCount} Units`;

  let itemsHtml = '';
  AppState.cart.forEach(item => {
    const lineTotal = (item.price || 0) * item.quantity;
    itemsHtml += `
      <div class="checkout-item-line">
        <div class="co-item-info">
          <strong>${item.name}</strong>
          <span class="co-item-meta">${item.brand} • ${item.quantity} Units × ₹${(item.price || 0).toLocaleString('en-IN')}</span>
        </div>
        <strong class="co-item-total">₹${lineTotal.toLocaleString('en-IN')}</strong>
      </div>
    `;
  });

  summaryList.innerHTML = itemsHtml;

  if (billCard) {
    billCard.innerHTML = `
      <div class="bill-line">
        <span>Equipment Total (${totalCount} Units):</span>
        <span>₹${totalPrice.toLocaleString('en-IN')}</span>
      </div>
      ${totalSavings > 0 ? `
      <div class="bill-line text-discount">
        <span>Special Offer Discount:</span>
        <span>− ₹${totalSavings.toLocaleString('en-IN')}</span>
      </div>` : ''}
      <div class="bill-line">
        <span>Delivery & Coordination:</span>
        <span class="text-free-ship">Free / Showroom Coordination</span>
      </div>
      <div class="bill-line bill-grand-total">
        <strong>Total Amount Payable:</strong>
        <strong class="grand-price-val">₹${totalPrice.toLocaleString('en-IN')}</strong>
      </div>
      <small class="bill-tax-note">✓ GST Invoice Included • Subsidy Eligible</small>
    `;
  }
}

function validateCheckoutForm() {
  let isValid = true;

  const nameInput = document.getElementById('checkoutName');
  const phoneInput = document.getElementById('checkoutPhone');
  const emailInput = document.getElementById('checkoutEmail');
  const addressInput = document.getElementById('checkoutAddress');
  const cityInput = document.getElementById('checkoutCity');
  const stateInput = document.getElementById('checkoutState');
  const pincodeInput = document.getElementById('checkoutPincode');
  const consentInput = document.getElementById('checkoutConsent');

  document.querySelectorAll('.field-error').forEach(e => e.textContent = '');
  document.querySelectorAll('.form-input').forEach(f => f.classList.remove('is-invalid'));

  // Name Validation
  if (!nameInput.value.trim()) {
    setError(nameInput, 'checkoutNameError', 'Please enter your full name.');
    isValid = false;
  }

  // Phone Validation (10-digit Indian Mobile)
  const phoneVal = phoneInput.value.trim();
  if (!phoneVal || !/^[6-9]\d{9}$/.test(phoneVal)) {
    setError(phoneInput, 'checkoutPhoneError', 'Please enter a valid 10-digit Indian mobile number.');
    isValid = false;
  }

  // Email Validation (Optional)
  const emailVal = emailInput ? emailInput.value.trim() : '';
  if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    setError(emailInput, 'checkoutEmailError', 'Please enter a valid email address.');
    isValid = false;
  }

  // Address
  if (!addressInput.value.trim()) {
    setError(addressInput, 'checkoutAddressError', 'Please enter your full address.');
    isValid = false;
  }

  // City
  if (!cityInput.value.trim()) {
    setError(cityInput, 'checkoutCityError', 'Please enter your city / village.');
    isValid = false;
  }

  // State
  if (!stateInput.value.trim()) {
    setError(stateInput, 'checkoutStateError', 'Please enter your state.');
    isValid = false;
  }

  // Pincode (6-digit)
  const pincodeVal = pincodeInput.value.trim();
  if (!pincodeVal || !/^\d{6}$/.test(pincodeVal)) {
    setError(pincodeInput, 'checkoutPincodeError', 'Please enter a valid 6-digit pincode.');
    isValid = false;
  }

  // Consent
  if (consentInput && !consentInput.checked) {
    const consentErr = document.getElementById('checkoutConsentError');
    if (consentErr) consentErr.textContent = 'Please provide consent to be contacted.';
    isValid = false;
  }

  return isValid;
}

function setError(inputEl, errorId, message) {
  if (inputEl) inputEl.classList.add('is-invalid');
  const err = document.getElementById(errorId);
  if (err) err.textContent = message;
}

function generateOrderId() {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `VAM-${dateStr}-${randomSuffix}`;
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  if (!validateCheckoutForm()) return;

  const orderData = collectOrderData();
  saveOrder(orderData);
  displayOrderSuccess(orderData);
  
  AppState.cart = [];
  saveCart();
  updateCartBadge();
  closeCheckout();
}

function collectOrderData() {
  const contactPrefRadio = document.querySelector('input[name="contactPref"]:checked');
  const paymentModeRadio = document.querySelector('input[name="paymentMode"]:checked');
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = AppState.cart.reduce((sum, item) => sum + ((item.price || 0) * item.quantity), 0);
  const totalMrp = AppState.cart.reduce((sum, item) => sum + ((item.mrp || item.price || 0) * item.quantity), 0);

  return {
    orderId: generateOrderId(),
    timestamp: new Date().toISOString(),
    customer: {
      name: document.getElementById('checkoutName').value.trim(),
      phone: document.getElementById('checkoutPhone').value.trim(),
      email: document.getElementById('checkoutEmail').value.trim() || null,
      address: document.getElementById('checkoutAddress').value.trim(),
      city: document.getElementById('checkoutCity').value.trim(),
      district: document.getElementById('checkoutDistrict').value.trim() || 'Ratnagiri',
      state: document.getElementById('checkoutState').value.trim() || 'Maharashtra',
      pincode: document.getElementById('checkoutPincode').value.trim(),
      contactPref: contactPrefRadio ? contactPrefRadio.value : 'Phone Call',
      notes: document.getElementById('checkoutNotes').value.trim() || 'None'
    },
    paymentMode: paymentModeRadio ? paymentModeRadio.value : 'Pay on Confirmation',
    upiRef: (paymentModeRadio && paymentModeRadio.value === 'UPI Payment' && document.getElementById('checkoutUpiRef')) ? document.getElementById('checkoutUpiRef').value.trim() : null,
    totalItems: totalCount,
    totalPrice: totalPrice,
    totalMrp: totalMrp,
    totalSavings: Math.max(0, totalMrp - totalPrice),
    items: AppState.cart.map(i => ({
      id: i.id,
      name: i.name,
      brand: i.brand,
      price: i.price || 0,
      quantity: i.quantity,
      lineTotal: (i.price || 0) * i.quantity
    }))
  };
}

function saveOrder(orderData) {
  try {
    const existingOrders = JSON.parse(localStorage.getItem(CONFIG.storageKeys.orders) || '[]');
    existingOrders.push(orderData);
    localStorage.setItem(CONFIG.storageKeys.orders, JSON.stringify(existingOrders));
  } catch (err) {
    console.warn('Order storage error:', err);
  }
}

function displayOrderSuccess(orderData) {
  const successModal = document.getElementById('orderSuccessModalBackdrop');
  const detailsCard = document.getElementById('successDetailsCard');

  if (!successModal || !detailsCard) return;

  const itemsSummary = orderData.items
    .map(i => `• ${i.name} (Qty: ${i.quantity}) — <strong>₹${((i.lineTotal || (i.price * i.quantity))).toLocaleString('en-IN')}</strong>`)
    .join('<br>');

  detailsCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--color-border); padding-bottom: 8px;">
      <span style="font-size: var(--text-xs);">Order / Booking ID:</span>
      <span class="success-order-num">${orderData.orderId}</span>
    </div>
    
    <div style="margin-top: 8px; text-align: left;">
      <strong style="font-size: var(--text-xs); color: var(--color-deep-forest);">Customer Details:</strong>
      <p style="font-size: var(--text-xs); margin-top: 2px; color: var(--color-body); line-height: 1.5;">
        <strong>${orderData.customer.name}</strong> | 📞 ${orderData.customer.phone}<br>
        📍 ${orderData.customer.address}, ${orderData.customer.city}, ${orderData.customer.district} - ${orderData.customer.pincode}
      </p>
    </div>

    <div style="margin-top: 8px; text-align: left;">
      <strong style="font-size: var(--text-xs); color: var(--color-deep-forest);">Equipment Booked:</strong>
      <p style="font-size: var(--text-xs); margin-top: 2px; color: var(--color-ink); line-height: 1.5;">
        ${itemsSummary}
      </p>
    </div>

    <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed var(--color-border); display: flex; justify-content: space-between; align-items: center;">
      <strong style="font-size: var(--text-sm);">Total Order Value:</strong>
      <strong style="font-size: 1.2rem; color: var(--color-forest);">₹${(orderData.totalPrice || 0).toLocaleString('en-IN')}</strong>
    </div>

    <div style="margin-top: 6px; font-size: 0.74rem; color: var(--color-muted); text-align: left;">
      Payment Mode: <strong>${orderData.paymentMode}</strong> ${orderData.upiRef ? `<span style="background:#EBF4EE;color:#0B4D2A;padding:2px 6px;border-radius:4px;font-weight:700;">UTR: ${orderData.upiRef}</span>` : ''} | Contact Preference: ${orderData.customer.contactPref}
    </div>
  `;

  successModal.classList.add('active');
  successModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeOrderSuccessModal() {
  const successModal = document.getElementById('orderSuccessModalBackdrop');
  if (successModal) {
    successModal.classList.remove('active');
    successModal.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

/**
 * ----------------------------------------------------------------------------
 * 13. WHATSAPP CUSTOMER-INITIATED ENQUIRY
 * ----------------------------------------------------------------------------
 */
function enquireProductViaWhatsApp(productId) {
  const product = PRODUCT_CATALOG.find(p => p.id === productId);
  if (!product) return;

  const msg = `Hello Vijayashri Agro Mart,\nI would like to inquire about ${product.name} (${product.brand}). Please provide current pricing, subsidy documentation, and availability details.`;
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

/**
 * ----------------------------------------------------------------------------
 * 14. QUICK ENQUIRY FORM & LEGAL MODALS
 * ----------------------------------------------------------------------------
 */
function handleQuickEnquirySubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('enquiryName');
  const phoneInput = document.getElementById('enquiryPhone');
  const productInput = document.getElementById('enquiryProduct');
  const msgInput = document.getElementById('enquiryMessage');
  const charCountEl = document.getElementById('enquiryCharCount');

  let valid = true;
  if (document.getElementById('enquiryNameError')) document.getElementById('enquiryNameError').textContent = '';
  if (document.getElementById('enquiryPhoneError')) document.getElementById('enquiryPhoneError').textContent = '';
  if (document.getElementById('enquiryMsgError')) document.getElementById('enquiryMsgError').textContent = '';

  if (!nameInput || !nameInput.value.trim()) {
    if (document.getElementById('enquiryNameError')) document.getElementById('enquiryNameError').textContent = 'Please enter your full name.';
    if (nameInput) nameInput.classList.add('is-invalid');
    valid = false;
  } else if (nameInput) {
    nameInput.classList.remove('is-invalid');
  }

  const phoneVal = phoneInput ? phoneInput.value.trim() : '';
  if (!phoneVal || !/^[6-9]\d{9}$/.test(phoneVal)) {
    if (document.getElementById('enquiryPhoneError')) document.getElementById('enquiryPhoneError').textContent = 'Please enter a valid 10-digit mobile number.';
    if (phoneInput) phoneInput.classList.add('is-invalid');
    valid = false;
  } else if (phoneInput) {
    phoneInput.classList.remove('is-invalid');
  }

  if (!productInput || !productInput.value) {
    if (document.getElementById('enquiryMsgError')) document.getElementById('enquiryMsgError').textContent = 'Please select an equipment type.';
    if (productInput) productInput.classList.add('is-invalid');
    valid = false;
  } else if (productInput) {
    productInput.classList.remove('is-invalid');
  }

  if (!valid) return;

  const msg = `Hello Vijayashri Agro Mart,\n\n🌾 Equipment Inquiry Details:\n• Name: ${nameInput.value.trim()}\n• Mobile: ${phoneVal}\n• Equipment: ${productInput.value}\n• Requirement: ${msgInput && msgInput.value.trim() ? msgInput.value.trim() : 'Please provide quotation, subsidy details and availability.'}`;
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  showToast('Inquiry submitted! Opening WhatsApp...', 'success');
  
  if (nameInput) nameInput.value = '';
  if (phoneInput) phoneInput.value = '';
  if (msgInput) msgInput.value = '';
  if (productInput) productInput.selectedIndex = 0;
  if (charCountEl) charCountEl.textContent = '0 / 500';

  window.open(url, '_blank');
}

// Live character counter and form binder for Quick Enquiry Form
document.addEventListener('DOMContentLoaded', () => {
  const enquiryForm = document.getElementById('quickEnquiryForm');
  const msgInput = document.getElementById('enquiryMessage');
  const charCountEl = document.getElementById('enquiryCharCount');

  if (msgInput && charCountEl) {
    msgInput.addEventListener('input', () => {
      charCountEl.textContent = `${msgInput.value.length} / 500`;
    });
  }

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', handleQuickEnquirySubmit);
  }
});

function openLegalModal(type) {
  const modalBackdrop = document.getElementById('legalModalBackdrop');
  const modalBody = document.getElementById('legalModalBody');
  if (!modalBackdrop || !modalBody) return;

  if (type === 'privacy') {
    modalBody.innerHTML = `
      <h3 style="color: var(--color-deep-forest); font-size: 1.35rem; font-weight: 800; margin-bottom: var(--space-xs);" id="legalModalTitle">Privacy Policy</h3>
      <div style="font-size: var(--text-sm); color: var(--color-body); line-height: 1.65; display: flex; flex-direction: column; gap: 8px;">
        <p>
          <strong>Vijayashri Agro Mart</strong> (UDYAM-MH-28-0001865) is committed to safeguarding customer privacy. Customer details (name, contact number, inquiry notes, and location) collected through this website are strictly utilized to coordinate agricultural machinery consultation, product quotes, delivery scheduling, and warranty service.
        </p>
        <p>
          We do not sell, rent, or distribute personal information to third-party marketing entities. All quotation and order communications are processed securely through direct phone, showroom visit, or official WhatsApp consultation.
        </p>
      </div>
    `;
  } else {
    modalBody.innerHTML = `
      <h3 style="color: var(--color-deep-forest); font-size: 1.35rem; font-weight: 800; margin-bottom: var(--space-xs);" id="legalModalTitle">Terms & Conditions</h3>
      <div style="font-size: var(--text-sm); color: var(--color-body); line-height: 1.65; display: flex; flex-direction: column; gap: 8px;">
        <p>
          1. <strong>Product Specifications:</strong> All technical specifications, horsepower ratings, and machinery features for STIHL, Really, ELEMAX, LIGHTON, and PELICAN equipment are reproduced based on official manufacturer reference standards.
        </p>
        <p>
          2. <strong>Pricing & Quotations:</strong> Final equipment pricing, government subsidy eligibility, attachment bundles, and delivery charges are confirmed via official consultation and invoice quotation.
        </p>
        <p>
          3. <strong>Brand Ownership:</strong> All manufacturer trademarks, logos, and brand names are the intellectual property of their respective owners. Vijayashri Agro Mart operates as an authorized dealer and showroom center.
        </p>
      </div>
    `;
  }

  modalBackdrop.classList.add('active');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLegalModal() {
  const modalBackdrop = document.getElementById('legalModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
  }
  document.body.style.overflow = '';
}

/**
 * ----------------------------------------------------------------------------
 * 15. HEADER SCROLL & SCROLLSPY
 * ----------------------------------------------------------------------------
 */
function initHeaderScrollEffect() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

function initScrollSpy() {
  const sections = ['hero', 'categories', 'products', 'comparison', 'applications', 'why-us', 'about', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileHome = document.getElementById('mobileNavHome');
  const mobileProducts = document.getElementById('mobileNavProducts');

  window.addEventListener('scroll', () => {
    let current = 'hero';
    const scrollPosition = window.scrollY + 140;

    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el && el.offsetTop <= scrollPosition) current = secId;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });

    if (mobileHome && mobileProducts) {
      mobileHome.classList.toggle('active', current === 'hero');
      mobileProducts.classList.toggle('active', current === 'products' || current === 'categories');
    }
  }, { passive: true });
}

/**
 * ----------------------------------------------------------------------------
 * 16. TOAST NOTIFICATIONS
 * ----------------------------------------------------------------------------
 */
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = message;

  container.appendChild(toast);

  // Trigger enter animation smoothly
  requestAnimationFrame(() => {
    toast.classList.add('toast-visible');
  });

  setTimeout(() => {
    toast.classList.remove('toast-visible');
    toast.classList.add('toast-exiting');
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 220);
  }, 3200);
}

/**
 * ----------------------------------------------------------------------------
 * 17. HIGH-PERFORMANCE SCROLL REVEALS & NUMERIC GAUGES
 * ----------------------------------------------------------------------------
 */
function initScrollRevealAnimation() {
  if (typeof IntersectionObserver === 'undefined') return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

function initSpecPowerGauges() {
  if (typeof IntersectionObserver === 'undefined') return;

  const tableSection = document.getElementById('comparison');
  if (!tableSection) return;

  const gaugeObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.spec-power-fill').forEach(fill => {
          const width = fill.getAttribute('data-width');
          if (width) fill.style.width = width;
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  gaugeObserver.observe(tableSection);
}

