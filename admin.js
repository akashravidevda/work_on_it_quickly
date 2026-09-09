/**
 * ============================================================================
 * VIJAYSHRI AGRO MART — ADMIN DASHBOARD JAVASCRIPT ENGINE (V2 PIXEL-PERFECT)
 * Robust CRUD, LocalStorage Sync, Dynamic Specs, Order Lead Management,
 * Dropdown Actions, and Instant Live Store Sync.
 * ============================================================================
 */

'use strict';

const STORAGE_KEYS = {
  products: 'vijayashri_agro_products',
  orders: 'vijayashri_agro_orders',
  cart: 'vijayashri_agro_cart'
};

// Authentic Default Seed Catalog (8 Authentic Agricultural Products)
const DEFAULT_SEED_CATALOG = [
  {
    id: 'stihl-fs3001',
    sku: 'STL-FS-3001',
    category: 'stihl',
    subType: 'Brush Cutter',
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
    price: 15941,
    mrp: 20468,
    stock: 'In Stock',
    unitsAvailable: 8,
    isRecentlyUpdated: true,
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
    ]
  },
  {
    id: 'stihl-fs230',
    sku: 'STL-FS-230',
    category: 'stihl',
    subType: 'Brush Cutter',
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
    unitsAvailable: 5,
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
    ]
  },
  {
    id: 'stihl-fs120',
    sku: 'STL-FS-120',
    category: 'stihl',
    subType: 'Brush Cutter',
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
    unitsAvailable: 6,
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
    ]
  },
  {
    id: 'stihl-fs250',
    sku: 'STL-FS-250',
    category: 'stihl',
    subType: 'Brush Cutter',
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
    unitsAvailable: 4,
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
    ]
  },
  {
    id: 'really-cr-r35-s',
    sku: 'RLY-CR-R35',
    category: 'crop-reaper',
    subType: 'Crop Reaper 4-Stroke',
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
    unitsAvailable: 7,
    specifications: {
      'Engine Model': '4 Stroke Engine',
      'Engine Power': '35 cc / 1 KW',
      'Fuel': 'Petrol',
      'Carry Type': 'Sidepack Harness',
      'Certification': 'FMTTI Approved'
    },
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
    ]
  },
  {
    id: 'elemax-generator',
    sku: 'ELX-GEN-KOHLER',
    category: 'generators',
    subType: 'Diesel Generator',
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
    unitsAvailable: 3,
    specifications: {
      'Engine': 'Powered by KOHLER Diesel',
      'Fuel Type': 'Diesel',
      'Build': 'Sound Proof Canopy'
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
    ]
  },
  {
    id: 'lighton-generator',
    sku: 'LGT-LT-9000',
    category: 'generators',
    subType: 'Silent Generator',
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
    unitsAvailable: 4,
    specifications: {
      'Model Series': 'SilentPRO LT-9000',
      'Type': 'Compact Silent Generator'
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
    ]
  },
  {
    id: 'pelican-generator',
    sku: 'PEL-W900APL',
    category: 'generators',
    subType: 'Heavy Duty Generator',
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
    unitsAvailable: 2,
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
    ]
  }
];

// Admin State
const AdminState = {
  products: [],
  orders: [],
  currentTab: 'productsTab',
  currentFilter: 'all',
  orderStatusFilter: 'all',
  searchQuery: '',
  ordersSearchQuery: '',
  ordersPaymentFilter: 'all',
  ordersDateFilter: 'all',
  ordersSortColumn: 'date',
  ordersSortDirection: 'desc',
  selectedOrderIds: new Set(),
  currentActiveOrderId: null,
  viewMode: window.innerWidth <= 900 ? 'grid' : 'table',
  userExplicitViewPreference: false,
  editingProductId: null
};

// Lifecycle Start
document.addEventListener('DOMContentLoaded', () => {
  initAdmin();
});

function initAdmin() {
  // Mobile defaults to Card Layout (Grid), Desktop defaults to Table View
  const isMobile = window.innerWidth <= 900;
  if (!AdminState.userExplicitViewPreference) {
    AdminState.viewMode = isMobile ? 'grid' : 'table';
  }

  const tableViewBtn = document.getElementById('tableViewBtn');
  const gridViewBtn = document.getElementById('gridViewBtn');
  if (tableViewBtn && gridViewBtn) {
    if (AdminState.viewMode === 'grid') {
      gridViewBtn.classList.add('active');
      tableViewBtn.classList.remove('active');
    } else {
      tableViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
    }
  }

  loadAdminProducts();
  loadAdminOrders();
  setupAdminEventListeners();
  renderAdminProducts();
  renderAdminOrders();
  updateAdminMetrics();
}

/**
 * ============================================================================
 * DATA ACCESS & PERSISTENCE
 * ============================================================================
 */
function loadAdminProducts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.products);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        AdminState.products = parsed;
        return;
      }
    }
  } catch (e) {
    console.error('Error loading products from localStorage:', e);
  }

  // Seed default catalog
  AdminState.products = [...DEFAULT_SEED_CATALOG];
  saveProductsToStorage(AdminState.products);
}

function saveProductsToStorage(products) {
  try {
    localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(products));
    AdminState.products = products;
  } catch (e) {
    console.error('Error saving products to localStorage:', e);
    showAdminToast('Storage save failed or limit exceeded', 'error');
  }
}

function loadAdminOrders() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.orders);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        AdminState.orders = parsed;
      }
    }
  } catch (e) {
    console.error('Error loading orders from localStorage:', e);
  }
  renderAdminOrders();
  updateAdminMetrics();
}

/**
 * ============================================================================
 * METRICS & COUNTERS
 * ============================================================================
 */
function updateAdminMetrics() {
  const total = AdminState.products.length;
  const inStock = AdminState.products.filter(p => p.stock === 'In Stock').length;
  
  // Unique brands
  const brands = new Set(AdminState.products.map(p => (p.brand || 'General').trim()));
  
  // Total orders
  const ordersCount = AdminState.orders.length;

  // Prices
  const validPrices = AdminState.products.map(p => p.price).filter(pr => typeof pr === 'number' && pr > 0);
  let priceRangeStr = '₹15.9K – ₹65.0K';
  if (validPrices.length > 0) {
    const minP = Math.min(...validPrices);
    const maxP = Math.max(...validPrices);
    priceRangeStr = `₹${(minP / 1000).toFixed(1)}K – ₹${(maxP / 1000).toFixed(1)}K`;
  }

  // DOM elements - Products
  const elTotal = document.getElementById('metricTotalProducts');
  const elInStock = document.getElementById('metricInStockCount');
  const elBrands = document.getElementById('metricTotalBrands');
  const elOrders = document.getElementById('metricTotalOrders');
  const elPriceRange = document.getElementById('metricPriceRange');
  const elSidebarProd = document.getElementById('sidebarProductCount');
  const elSidebarOrd = document.getElementById('sidebarOrderCount');

  if (elTotal) elTotal.textContent = total;
  if (elInStock) elInStock.textContent = `${inStock} In Stock`;
  if (elBrands) elBrands.textContent = brands.size;
  if (elOrders) elOrders.textContent = ordersCount;
  if (elPriceRange) elPriceRange.textContent = priceRangeStr;
  if (elSidebarProd) elSidebarProd.textContent = total;
  
  if (elSidebarOrd) {
    elSidebarOrd.textContent = ordersCount;
    elSidebarOrd.style.display = ordersCount > 0 ? 'inline-flex' : 'none';
  }

  const unreadDot = document.querySelector('.unread-dot');
  if (unreadDot) {
    unreadDot.style.display = ordersCount > 0 ? 'block' : 'none';
  }

  // Filter Pills Counts - Products
  const countAll = document.getElementById('catCountAll');
  const countStihl = document.getElementById('catCountStihl');
  const countReaper = document.getElementById('catCountReaper');
  const countGen = document.getElementById('catCountGenerators');
  const countOther = document.getElementById('catCountOther');

  if (countAll) countAll.textContent = total;
  if (countStihl) countStihl.textContent = AdminState.products.filter(p => p.category === 'stihl').length;
  if (countReaper) countReaper.textContent = AdminState.products.filter(p => p.category === 'crop-reaper').length;
  if (countGen) countGen.textContent = AdminState.products.filter(p => p.category === 'generators').length;
  if (countOther) countOther.textContent = AdminState.products.filter(p => !['stihl', 'crop-reaper', 'generators'].includes(p.category)).length;

  // DOM elements - Orders & Inquiries Tab
  const elOrdersTotal = document.getElementById('metricOrdersTotal');
  const elOrdersSub = document.getElementById('metricOrdersSub');
  const elInquiriesTotal = document.getElementById('metricInquiriesTotal');
  const elInquiriesSub = document.getElementById('metricInquiriesSub');
  const elRevenueTotal = document.getElementById('metricRevenueTotal');
  const elCustomersTotal = document.getElementById('metricCustomersTotal');

  const totalOrders = AdminState.orders.length;
  const inquiryOrders = AdminState.orders.filter(o => !o.status || o.status.toLowerCase().includes('inquiry') || o.status.toLowerCase().includes('received') || o.status.toLowerCase().includes('pending'));
  const completedOrders = AdminState.orders.filter(o => o.status && o.status.toLowerCase().includes('completed'));
  
  const totalRevenue = AdminState.orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
  const uniqueCustomers = new Set(AdminState.orders.map(o => o.customer?.phone || o.customer?.name)).size;

  if (elOrdersTotal) elOrdersTotal.textContent = totalOrders;
  if (elOrdersSub) elOrdersSub.textContent = totalOrders === 0 ? 'No orders yet' : `${completedOrders.length} completed`;
  if (elInquiriesTotal) elInquiriesTotal.textContent = inquiryOrders.length;
  if (elInquiriesSub) elInquiriesSub.textContent = inquiryOrders.length === 0 ? 'No inquiries yet' : `${inquiryOrders.length} pending`;
  if (elRevenueTotal) elRevenueTotal.textContent = `₹${totalRevenue.toLocaleString('en-IN')}`;
  if (elCustomersTotal) elCustomersTotal.textContent = uniqueCustomers;

  // Orders Pill counts
  const countAllOrd = document.getElementById('countOrdersAll');
  const countInquiryOrd = document.getElementById('countOrdersInquiry');
  const countProcessingOrd = document.getElementById('countOrdersProcessing');
  const countCompletedOrd = document.getElementById('countOrdersCompleted');
  const countCancelledOrd = document.getElementById('countOrdersCancelled');

  if (countAllOrd) countAllOrd.textContent = totalOrders;
  if (countInquiryOrd) countInquiryOrd.textContent = inquiryOrders.length;
  if (countProcessingOrd) countProcessingOrd.textContent = AdminState.orders.filter(o => o.status && o.status.toLowerCase().includes('processing')).length;
  if (countCompletedOrd) countCompletedOrd.textContent = completedOrders.length;
  if (countCancelledOrd) countCancelledOrd.textContent = AdminState.orders.filter(o => o.status && o.status.toLowerCase().includes('cancelled')).length;
}

/**
 * ============================================================================
 * EVENT LISTENERS SETUP
 * ============================================================================
 */
function setupAdminEventListeners() {
  // Navigation Tabs
  document.querySelectorAll('.sidebar-nav .nav-item[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId, btn);
    });
  });

  // Mobile sidebar toggle
  const mobileToggle = document.getElementById('mobileSidebarToggle');
  const sidebar = document.getElementById('adminSidebar');
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('mobile-open');
    });

    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
        sidebar.classList.remove('mobile-open');
      }
    });
  }

  // Global & Catalog Search input
  const globalSearch = document.getElementById('globalSearchInput');
  const searchInput = document.getElementById('adminSearchInput');
  const searchClear = document.getElementById('adminSearchClear');

  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => {
      AdminState.searchQuery = e.target.value.trim().toLowerCase();
      if (searchInput) searchInput.value = e.target.value;
      if (searchClear) searchClear.style.display = AdminState.searchQuery ? 'block' : 'none';
      if (AdminState.currentTab !== 'productsTab') {
        const tabBtn = document.getElementById('tabBtnProducts');
        if (tabBtn) switchTab('productsTab', tabBtn);
      }
      renderAdminProducts();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AdminState.searchQuery = e.target.value.trim().toLowerCase();
      if (globalSearch) globalSearch.value = e.target.value;
      if (searchClear) searchClear.style.display = AdminState.searchQuery ? 'block' : 'none';
      renderAdminProducts();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', resetAdminSearch);
  }

  // Category Filter Pills
  document.querySelectorAll('#adminCategoryPills .cat-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#adminCategoryPills .cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AdminState.currentFilter = pill.getAttribute('data-filter');
      renderAdminProducts();
    });
  });

  // View Mode Switcher
  const tableViewBtn = document.getElementById('tableViewBtn');
  const gridViewBtn = document.getElementById('gridViewBtn');
  if (tableViewBtn && gridViewBtn) {
    tableViewBtn.addEventListener('click', () => {
      AdminState.userExplicitViewPreference = true;
      AdminState.viewMode = 'table';
      tableViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
      renderAdminProducts();
    });
    gridViewBtn.addEventListener('click', () => {
      AdminState.userExplicitViewPreference = true;
      AdminState.viewMode = 'grid';
      gridViewBtn.classList.add('active');
      tableViewBtn.classList.remove('active');
      renderAdminProducts();
    });
  }

  // Responsive default layout on window resize if not manually overridden
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const isMobileNow = window.innerWidth <= 900;
      if (!AdminState.userExplicitViewPreference) {
        const targetMode = isMobileNow ? 'grid' : 'table';
        if (AdminState.viewMode !== targetMode) {
          AdminState.viewMode = targetMode;
          if (tableViewBtn && gridViewBtn) {
            if (targetMode === 'grid') {
              gridViewBtn.classList.add('active');
              tableViewBtn.classList.remove('active');
            } else {
              tableViewBtn.classList.add('active');
              gridViewBtn.classList.remove('active');
            }
          }
          renderAdminProducts();
        }
      }
    }, 150);
  });

  // Orders Status Filter Pills
  document.querySelectorAll('#orderStatusFilterPills .order-status-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#orderStatusFilterPills .order-status-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AdminState.orderStatusFilter = pill.getAttribute('data-status');
      renderAdminOrders();
    });
  });

  // Orders Search Input
  const ordersSearch = document.getElementById('ordersSearchInput');
  if (ordersSearch) {
    ordersSearch.addEventListener('input', (e) => {
      AdminState.ordersSearchQuery = e.target.value.trim().toLowerCase();
      renderAdminOrders();
    });
  }

  // Dismiss filter popover on clicking outside
  document.addEventListener('click', (e) => {
    const popover = document.getElementById('ordersFilterPopover');
    const filterBtn = document.getElementById('ordersFilterBtn');
    if (popover && popover.style.display !== 'none' && !popover.contains(e.target) && (!filterBtn || !filterBtn.contains(e.target))) {
      popover.style.display = 'none';
    }
  });

  // Pricing discount calculator listener
  const priceInput = document.getElementById('prodPrice');
  const mrpInput = document.getElementById('prodMrp');
  if (priceInput) priceInput.addEventListener('input', calcDiscount);
  if (mrpInput) mrpInput.addEventListener('input', calcDiscount);

  // Live image URL preview & summary banner sync
  const prodImgInput = document.getElementById('prodImage');
  if (prodImgInput) {
    prodImgInput.addEventListener('input', (e) => {
      updateImagePreview(e.target.value);
      syncModalSummaryBanner();
    });
  }

  // Live summary sync on typing name, brand, category, stock, SKU
  ['prodName', 'prodBrand', 'prodCategory', 'prodStock', 'prodSku'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => syncModalSummaryBanner());
      el.addEventListener('change', () => syncModalSummaryBanner());
    }
  });

  // Shortcut key ⌘ K or Ctrl K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (globalSearch) globalSearch.focus();
    }
  });

  // Cross-tab sync listener
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEYS.products) {
      loadAdminProducts();
      renderAdminProducts();
      updateAdminMetrics();
    } else if (e.key === STORAGE_KEYS.orders) {
      loadAdminOrders();
    }
  });
}

function switchTab(tabId, activeBtn) {
  AdminState.currentTab = tabId;
  document.querySelectorAll('.admin-tab-content').forEach(tab => tab.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.sidebar-nav .nav-item').forEach(b => b.classList.remove('active'));
  if (activeBtn) activeBtn.classList.add('active');

  // Update Page Title
  const titleEl = document.getElementById('pageHeaderTitle');
  if (titleEl) {
    if (tabId === 'productsTab') titleEl.textContent = 'Product Catalog Manager';
    else if (tabId === 'ordersTab') titleEl.textContent = 'Customer Orders & Inquiries';
    else if (tabId === 'toolsTab') titleEl.textContent = 'Catalog Backup & Sync Tools';
  }
}

function resetAdminSearch() {
  const searchInput = document.getElementById('adminSearchInput');
  const globalSearch = document.getElementById('globalSearchInput');
  const searchClear = document.getElementById('adminSearchClear');
  if (searchInput) searchInput.value = '';
  if (globalSearch) globalSearch.value = '';
  if (searchClear) searchClear.style.display = 'none';
  AdminState.searchQuery = '';
  renderAdminProducts();
}

/**
 * ============================================================================
 * PRODUCT CATALOG RENDERING (TABLE & GRID)
 * ============================================================================
 */
function renderAdminProducts() {
  const tableContainer = document.getElementById('adminTableContainer');
  const gridContainer = document.getElementById('adminGridContainer');
  const emptyState = document.getElementById('adminProductsEmpty');
  const tableBody = document.getElementById('adminProductsTableBody');

  if (!tableBody || !gridContainer) return;

  // Filter list
  let list = [...AdminState.products];

  // Category filter
  if (AdminState.currentFilter !== 'all') {
    if (AdminState.currentFilter === 'other') {
      list = list.filter(p => !['stihl', 'crop-reaper', 'generators'].includes(p.category));
    } else {
      list = list.filter(p => p.category === AdminState.currentFilter);
    }
  }

  // Search filter
  if (AdminState.searchQuery) {
    const q = AdminState.searchQuery;
    list = list.filter(p => {
      const matchName = p.name && p.name.toLowerCase().includes(q);
      const matchMarathi = p.marathiName && p.marathiName.toLowerCase().includes(q);
      const matchBrand = p.brand && p.brand.toLowerCase().includes(q);
      const matchSku = p.sku && p.sku.toLowerCase().includes(q);
      const matchTag = p.tagline && p.tagline.toLowerCase().includes(q);
      let matchSpecs = false;
      if (p.specifications) {
        matchSpecs = Object.entries(p.specifications).some(([k, v]) => 
          k.toLowerCase().includes(q) || String(v).toLowerCase().includes(q)
        );
      }
      return matchName || matchMarathi || matchBrand || matchSku || matchTag || matchSpecs;
    });
  }

  // Handle Empty State
  if (list.length === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    tableBody.innerHTML = '';
    gridContainer.innerHTML = '';
    return;
  }
  if (emptyState) emptyState.style.display = 'none';

  // Toggle View
  if (AdminState.viewMode === 'table') {
    tableContainer.style.display = 'block';
    gridContainer.style.display = 'none';
    renderProductsTableView(list, tableBody);
  } else {
    tableContainer.style.display = 'none';
    gridContainer.style.display = 'grid';
    renderProductsGridView(list, gridContainer);
  }
}

function renderProductsTableView(list, tableBody) {
  tableBody.innerHTML = '';

  list.forEach(prod => {
    const tr = document.createElement('tr');
    
    // Category & brand class
    const brandLower = prod.brand ? prod.brand.toLowerCase() : 'other';
    let brandClass = 'other';
    if (brandLower.includes('stihl')) brandClass = 'stihl';
    else if (brandLower.includes('really')) brandClass = 'really';
    else if (brandLower.includes('elemax') || brandLower.includes('lighton') || brandLower.includes('pelican')) brandClass = 'generators';

    // Stock badge class
    let stockClass = 'instock';
    if (prod.stock === 'Out of Stock') stockClass = 'outofstock';
    else if (prod.stock === 'On Inquiry') stockClass = 'onquiry';

    // Specs pills (first 3)
    let specsHtml = '';
    if (prod.specifications) {
      specsHtml = Object.entries(prod.specifications).slice(0, 3).map(([k, v]) => `
        <span class="spec-pill-item"><strong>${k}:</strong> ${v}</span>
      `).join('');
    }

    const priceText = prod.price && prod.price > 0 ? `₹${prod.price.toLocaleString('en-IN')}` : 'On Inquiry';
    const mrpText = prod.mrp && prod.mrp > 0 ? `₹${prod.mrp.toLocaleString('en-IN')}` : '';
    
    let discountPct = 0;
    if (prod.mrp && prod.price && prod.mrp > prod.price) {
      discountPct = Math.round(((prod.mrp - prod.price) / prod.mrp) * 100);
    }

    const skuText = prod.sku || `STL-${prod.id.toUpperCase().slice(-7)}`;
    const unitsText = prod.unitsAvailable ? `${prod.unitsAvailable} units available` : (prod.stock === 'In Stock' ? '8 units available' : 'Currently Unavailable');
    const isRecentlyUpdated = prod.isRecentlyUpdated || false;

    tr.innerHTML = `
      <td>
        <div class="table-prod-img-box">
          <img class="table-prod-img" src="${prod.image || 'assets/images/logo.png'}" alt="${prod.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'50\' height=\'50\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2394a3b8\' stroke-width=\'2\'><rect x=\'3\' y=\'3\' width=\'18\' height=\'18\' rx=\'2\'/><circle cx=\'8.5\' cy=\'8.5\' r=\'1.5\'/><path d=\'M21 15l-5-5L5 21\'/></svg>'">
        </div>
      </td>
      <td>
        <div class="table-prod-info">
          <div class="table-prod-heading-row">
            <h4>${prod.name}</h4>
            ${isRecentlyUpdated ? '<span class="badge-recently-updated">Recently Updated</span>' : ''}
          </div>
          <span class="table-prod-marathi">${prod.marathiName || prod.tagline || ''}</span>
          <span class="table-prod-sku">SKU: ${skuText}</span>
        </div>
      </td>
      <td>
        <span class="table-brand-pill ${brandClass}">${prod.brand || 'STIHL'}</span>
        <div class="table-cat-text">${prod.category || 'stihl'}</div>
        <div class="table-subcat-text">${prod.subType || 'Brush Cutter'}</div>
      </td>
      <td>
        <div class="table-price-wrap">
          <div class="table-price-val">${priceText}</div>
          ${mrpText ? `<span class="table-mrp-val">${mrpText}</span>` : ''}
          ${discountPct > 0 ? `<span class="badge-discount-tag">${discountPct}% OFF</span>` : ''}
        </div>
      </td>
      <td>
        <span class="stock-status-badge ${stockClass}" onclick="toggleProductStock('${prod.id}')" title="Click to toggle stock status">
          ● ${prod.stock || 'In Stock'}
        </span>
        <span class="stock-units-txt">${unitsText}</span>
      </td>
      <td>
        <div class="table-specs-stack">
          ${specsHtml || '<span style="font-size: 0.72rem; color: #94A3B8;">No specifications</span>'}
        </div>
      </td>
      <td style="text-align: right;">
        <div class="action-split-group">
          <button class="btn-split-edit" onclick="openEditProductModal('${prod.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            <span>Edit</span>
          </button>
          <button class="btn-split-chevron" onclick="showProductActionMenu(event, '${prod.id}')" title="More Actions">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

function renderProductsGridView(list, gridContainer) {
  gridContainer.innerHTML = '';

  list.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'admin-prod-card';

    const brandLower = prod.brand ? prod.brand.toLowerCase() : 'other';
    let brandClass = 'other';
    if (brandLower.includes('stihl')) brandClass = 'stihl';
    else if (brandLower.includes('really')) brandClass = 'really';
    else if (brandLower.includes('elemax') || brandLower.includes('lighton') || brandLower.includes('pelican')) brandClass = 'generators';

    let stockClass = 'instock';
    if (prod.stock === 'Out of Stock') stockClass = 'outofstock';
    else if (prod.stock === 'On Inquiry') stockClass = 'onquiry';

    const priceText = prod.price && prod.price > 0 ? `₹${prod.price.toLocaleString('en-IN')}` : 'On Inquiry';
    const mrpText = prod.mrp && prod.mrp > 0 ? `₹${prod.mrp.toLocaleString('en-IN')}` : '';

    let discountPct = 0;
    if (prod.mrp && prod.price && prod.mrp > prod.price) {
      discountPct = Math.round(((prod.mrp - prod.price) / prod.mrp) * 100);
    }

    const skuText = prod.sku || `STL-${prod.id.toUpperCase().slice(-7)}`;

    // Specs pills (first 3)
    let specsHtml = '';
    if (prod.specifications) {
      specsHtml = Object.entries(prod.specifications).slice(0, 3).map(([k, v]) => `
        <span class="spec-pill-item"><strong>${k}:</strong> ${v}</span>
      `).join('');
    }

    card.innerHTML = `
      <div class="card-top-row">
        <div class="card-top-left">
          <span class="table-brand-pill ${brandClass}">${prod.brand || 'General'}</span>
          ${prod.isRecentlyUpdated ? '<span class="recent-update-pill">● Updated</span>' : ''}
        </div>
        <span class="stock-status-badge ${stockClass}" onclick="toggleProductStock('${prod.id}')" title="Click to toggle stock status">
          ● ${prod.stock || 'In Stock'}
        </span>
      </div>

      <div class="card-img-wrap">
        <img src="${prod.image || 'assets/images/logo.png'}" alt="${prod.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'50\\' height=\\'50\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'%2394a3b8\\' stroke-width=\\'2\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/><circle cx=\\'8.5\\' cy=\\'8.5\\' r=\\'1.5\\'/><path d=\\'M21 15l-5-5L5 21\\'/></svg>'">
      </div>

      <div class="card-content-wrap">
        <div class="card-titles">
          <h4 class="card-title-txt">${prod.name}</h4>
          <p class="card-marathi-txt">${prod.marathiName || prod.tagline || ''}</p>
          <span class="table-sku-code">${skuText}</span>
        </div>

        ${specsHtml ? `<div class="card-specs-list">${specsHtml}</div>` : ''}

        <div class="card-price-row">
          <div class="card-price-group">
            <strong class="card-price-val">${priceText}</strong>
            ${mrpText ? `<small class="card-mrp-val">${mrpText}</small>` : ''}
          </div>
          ${discountPct > 0 ? `<span class="card-discount-tag">${discountPct}% OFF</span>` : ''}
        </div>
      </div>

      <div class="card-actions-row">
        <button class="btn-action-primary" style="flex: 1; justify-content: center; padding: 7px 12px; font-size: 0.8rem;" onclick="openEditProductModal('${prod.id}')">
          <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          <span>Edit Product</span>
        </button>
        <button class="btn-action-outline" onclick="duplicateProduct('${prod.id}')" title="Duplicate Variant" style="padding: 7px 10px;">
          <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </button>
        <button class="btn-action-outline" onclick="deleteProduct('${prod.id}')" title="Delete Product" style="color: #DC2626; border-color: #FECDD3; padding: 7px 10px;">
          <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;
    gridContainer.appendChild(card);
  });
}

function showProductActionMenu(event, productId) {
  event.stopPropagation();
  
  // Remove existing dropdown if open
  const existing = document.getElementById('actionDropdownMenu');
  if (existing) existing.remove();

  const menu = document.createElement('div');
  menu.id = 'actionDropdownMenu';
  menu.style.cssText = `
    position: absolute;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15);
    border-radius: 8px;
    padding: 6px;
    z-index: 1000;
    min-width: 160px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  `;

  const btn = event.currentTarget;
  const rect = btn.getBoundingClientRect();
  menu.style.top = `${rect.bottom + window.scrollY + 4}px`;
  menu.style.left = `${rect.right + window.scrollX - 160}px`;

  menu.innerHTML = `
    <button style="display: flex; align-items: center; gap: 8px; padding: 8px 10px; border: none; background: transparent; font-size: 0.8rem; font-weight: 600; color: #0F172A; cursor: pointer; border-radius: 4px; text-align: left; width: 100%;" onmouseover="this.style.background='#F1F5F9'" onmouseout="this.style.background='transparent'" onclick="duplicateProduct('${productId}'); document.getElementById('actionDropdownMenu')?.remove();">
      📋 Duplicate Variant
    </button>
    <button style="display: flex; align-items: center; gap: 8px; padding: 8px 10px; border: none; background: transparent; font-size: 0.8rem; font-weight: 600; color: #0F172A; cursor: pointer; border-radius: 4px; text-align: left; width: 100%;" onmouseover="this.style.background='#F1F5F9'" onmouseout="this.style.background='transparent'" onclick="toggleProductStock('${productId}'); document.getElementById('actionDropdownMenu')?.remove();">
      🔄 Toggle Stock Status
    </button>
    <div style="height: 1px; background: #E2E8F0; margin: 4px 0;"></div>
    <button style="display: flex; align-items: center; gap: 8px; padding: 8px 10px; border: none; background: transparent; font-size: 0.8rem; font-weight: 600; color: #DC2626; cursor: pointer; border-radius: 4px; text-align: left; width: 100%;" onmouseover="this.style.background='#FEE2E2'" onmouseout="this.style.background='transparent'" onclick="deleteProduct('${productId}'); document.getElementById('actionDropdownMenu')?.remove();">
      🗑️ Delete Product
    </button>
  `;

  document.body.appendChild(menu);

  const closeMenu = (e) => {
    if (!menu.contains(e.target) && e.target !== btn) {
      menu.remove();
      document.removeEventListener('click', closeMenu);
    }
  };
  setTimeout(() => document.addEventListener('click', closeMenu), 50);
}

/**
 * ============================================================================
 * PRODUCT MODAL (ADD & EDIT) & DYNAMIC SPECS BUILDER
 * ============================================================================
/**
 * ============================================================================
 * PRODUCT ADD / EDIT MODAL & FORM LOGIC
 * ============================================================================
 */
function openAddProductModal() {
  AdminState.editingProductId = null;
  AdminState.modalGallery = [];
  
  document.getElementById('editProductId').value = '';
  document.getElementById('productModalTitle').textContent = 'Add New Product';
  
  const statusBadge = document.getElementById('modalLiveStatusBadge');
  if (statusBadge) {
    statusBadge.textContent = '● New Product';
    statusBadge.className = 'product-modal-store-status';
    statusBadge.style.background = '#E0F2FE';
    statusBadge.style.color = '#0369A1';
    statusBadge.style.borderColor = '#BAE6FD';
  }

  // Reset Form
  document.getElementById('productForm').reset();
  calcDiscount();

  // Reset Primary Image & Summary Thumbnail
  const defaultImg = 'assets/generated-products/stihl-fs3001-card.webp';
  document.getElementById('prodImage').value = defaultImg;
  updateImagePreview(defaultImg);

  // Sync Summary Banner
  syncModalSummaryBanner({
    name: 'New Agricultural Machine',
    brand: 'STIHL',
    category: 'stihl',
    stock: 'In Stock',
    sku: `STL-${Date.now().toString().slice(-4)}`,
    image: defaultImg
  });

  // Prepopulate standard default specs matching reference
  const specsContainer = document.getElementById('specsBuilderContainer');
  specsContainer.innerHTML = '';
  addSpecificationRow('Displacement', '25.4 cc');
  addSpecificationRow('Fuel', 'Petrol');
  addSpecificationRow('Engine Power', '1.3 HP');
  addSpecificationRow('Starting System', 'Manual');
  addSpecificationRow('Engine Type', '2 Stroke');
  addSpecificationRow('Weight', '5.6 kg');

  renderModalGallery();
  setupModalNav();

  const backdrop = document.getElementById('productModalBackdrop');
  if (backdrop) backdrop.classList.add('active');
}

function openEditProductModal(productId) {
  const prod = AdminState.products.find(p => p.id === productId);
  if (!prod) return;

  AdminState.editingProductId = productId;
  AdminState.modalGallery = Array.isArray(prod.gallery) ? [...prod.gallery] : (prod.image ? [prod.image] : []);

  document.getElementById('editProductId').value = productId;
  document.getElementById('productModalTitle').textContent = 'Edit Product';

  const statusBadge = document.getElementById('modalLiveStatusBadge');
  if (statusBadge) {
    if (prod.stock === 'Out of Stock') {
      statusBadge.textContent = '● Out of Stock';
      statusBadge.style.background = '#FEE2E2';
      statusBadge.style.color = '#DC2626';
      statusBadge.style.borderColor = '#FECACA';
    } else {
      statusBadge.textContent = '● Live on Store';
      statusBadge.style.background = '#DCFCE7';
      statusBadge.style.color = '#15803D';
      statusBadge.style.borderColor = '#BBF7D0';
    }
  }

  // Populate basic inputs
  document.getElementById('prodName').value = prod.name || '';
  document.getElementById('prodMarathiName').value = prod.marathiName || '';
  document.getElementById('prodBrand').value = prod.brand || 'STIHL';
  document.getElementById('prodCategory').value = prod.category || 'stihl';
  document.getElementById('prodStock').value = prod.stock || 'In Stock';
  document.getElementById('prodSku').value = prod.sku || '';
  document.getElementById('prodTagline').value = prod.tagline || '';
  document.getElementById('prodPrice').value = prod.price || 0;
  document.getElementById('prodMrp').value = prod.mrp || 0;
  document.getElementById('prodImage').value = prod.image || '';

  // Update image preview & summary banner
  updateImagePreview(prod.image || '');
  syncModalSummaryBanner(prod);

  // Calculate live discount
  calcDiscount();

  // Populate dynamic specifications (2-column layout)
  const specsContainer = document.getElementById('specsBuilderContainer');
  specsContainer.innerHTML = '';
  if (prod.specifications && Object.keys(prod.specifications).length > 0) {
    Object.entries(prod.specifications).forEach(([k, v]) => {
      addSpecificationRow(k, v);
    });
  } else {
    addSpecificationRow('Displacement', '25.4 cc');
    addSpecificationRow('Fuel', 'Petrol');
    addSpecificationRow('Engine Power', '1.3 HP');
    addSpecificationRow('Starting System', 'Manual');
    addSpecificationRow('Engine Type', '2 Stroke');
    addSpecificationRow('Weight', '5.6 kg');
  }

  // Features & Applications
  document.getElementById('prodFeatures').value = prod.features ? prod.features.join('\n') : '';
  document.getElementById('prodApplications').value = prod.applications ? prod.applications.join('\n') : '';

  renderModalGallery();
  setupModalNav();

  const backdrop = document.getElementById('productModalBackdrop');
  if (backdrop) backdrop.classList.add('active');
}

function closeProductModal() {
  const backdrop = document.getElementById('productModalBackdrop');
  if (backdrop) backdrop.classList.remove('active');
}

function syncModalSummaryBanner(prod = null) {
  const name = prod?.name || document.getElementById('prodName')?.value.trim() || 'STIHL FS 3001';
  const brand = prod?.brand || document.getElementById('prodBrand')?.value.trim() || 'STIHL';
  const cat = prod?.category || document.getElementById('prodCategory')?.value || 'Brush Cutter';
  const stock = prod?.stock || document.getElementById('prodStock')?.value || 'In Stock';
  const sku = prod?.sku || document.getElementById('prodSku')?.value.trim() || 'STL-FS-3001';
  const img = prod?.image || document.getElementById('prodImage')?.value.trim() || 'assets/generated-products/stihl-fs3001-card.webp';

  const elTitle = document.getElementById('summaryProdTitle');
  const elBrandTag = document.getElementById('summaryBrandTag');
  const elStockTag = document.getElementById('summaryStockTag');
  const elSkuText = document.getElementById('summarySkuText');
  const elThumb = document.getElementById('summaryProdImg');

  if (elTitle) elTitle.textContent = name;
  if (elBrandTag) {
    let catDisplay = 'Machinery';
    if (cat === 'stihl') catDisplay = 'Brush Cutter';
    else if (cat === 'crop-reaper') catDisplay = 'Crop Reaper';
    else if (cat === 'generators') catDisplay = 'Generator';
    elBrandTag.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="meta-icon">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      </svg>
      ${brand} | ${catDisplay}
    `;
  }
  if (elStockTag) {
    elStockTag.textContent = `● ${stock.replace(/●/g, '').trim()}`;
    if (stock.includes('Out')) {
      elStockTag.style.background = '#FEE2E2';
      elStockTag.style.color = '#DC2626';
    } else if (stock.includes('Inquiry')) {
      elStockTag.style.background = '#FEF3C7';
      elStockTag.style.color = '#D97706';
    } else {
      elStockTag.style.background = '#DCFCE7';
      elStockTag.style.color = '#15803D';
    }
  }
  if (elSkuText) elSkuText.textContent = `SKU: ${sku}`;
  if (elThumb) elThumb.src = img;
}

function setupModalNav() {
  const container = document.querySelector('.modal-form-content');
  document.querySelectorAll('.modal-nav-sidebar .modal-nav-item[data-section]').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.modal-nav-sidebar .modal-nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const secId = btn.getAttribute('data-section');
      const sec = document.getElementById(secId);
      if (sec && container) {
        container.scrollTo({
          top: sec.offsetTop - container.offsetTop,
          behavior: 'smooth'
        });
      }
    };
  });
}

function calcDiscount() {
  const priceInput = document.getElementById('prodPrice');
  const mrpInput = document.getElementById('prodMrp');
  const liveDiscount = document.getElementById('liveDiscountVal');
  if (!priceInput || !mrpInput || !liveDiscount) return;

  const p = parseFloat(priceInput.value) || 0;
  const m = parseFloat(mrpInput.value) || 0;

  if (m > p && p > 0) {
    const diff = m - p;
    const pct = Math.round((diff / m) * 100);
    liveDiscount.textContent = `₹${diff.toLocaleString('en-IN')} (${pct}% OFF)`;
  } else {
    liveDiscount.textContent = '₹0 (0% OFF)';
  }
}

function addSpecificationRow(key = '', val = '') {
  const container = document.getElementById('specsBuilderContainer');
  if (!container) return;

  const row = document.createElement('div');
  row.className = 'spec-builder-pair';
  row.innerHTML = `
    <input type="text" class="admin-input spec-key-input" placeholder="Spec Name (e.g. Displacement)" value="${key}">
    <input type="text" class="admin-input spec-val-input" placeholder="Value (e.g. 25.4 cc)" value="${val}">
    <button type="button" class="btn-remove-spec" onclick="this.parentElement.remove()" title="Delete specification">
      <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
    </button>
  `;
  container.appendChild(row);
}

function updateImagePreview(src) {
  const img = document.getElementById('primaryImgPreview');
  const summaryImg = document.getElementById('summaryProdImg');
  
  if (img) {
    img.src = src && src.trim().length > 0 ? src : 'assets/generated-products/stihl-fs3001-card.webp';
  }
  if (summaryImg) {
    summaryImg.src = src && src.trim().length > 0 ? src : 'assets/generated-products/stihl-fs3001-card.webp';
  }
}

function clearPrimaryImage() {
  document.getElementById('prodImage').value = '';
  updateImagePreview('');
  showAdminToast('Primary image cleared', 'info');
}

function renderModalGallery() {
  const container = document.getElementById('galleryThumbsRow');
  if (!container) return;

  // Clear previous thumbnails, preserve "+ Add More" label
  container.querySelectorAll('.gallery-thumb-item').forEach(el => el.remove());

  const addCard = container.querySelector('.gallery-add-card');

  if (AdminState.modalGallery && AdminState.modalGallery.length > 0) {
    AdminState.modalGallery.forEach((imgUrl, idx) => {
      const item = document.createElement('div');
      item.className = 'gallery-thumb-item';
      item.innerHTML = `
        <img src="${imgUrl}" alt="Gallery ${idx + 1}">
        <button type="button" class="btn-remove-gallery-thumb" onclick="removeGalleryThumb(${idx})" title="Remove">&times;</button>
      `;
      if (addCard) {
        container.insertBefore(item, addCard);
      } else {
        container.appendChild(item);
      }
    });
  }

  // Update hidden input
  const hiddenInput = document.getElementById('prodGallery');
  if (hiddenInput) {
    hiddenInput.value = (AdminState.modalGallery || []).join(', ');
  }
}

function removeGalleryThumb(index) {
  if (AdminState.modalGallery && AdminState.modalGallery.length > index) {
    AdminState.modalGallery.splice(index, 1);
    renderModalGallery();
  }
}

function handleGalleryFileUpload(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!AdminState.modalGallery) AdminState.modalGallery = [];
      AdminState.modalGallery.push(e.target.result);
      renderModalGallery();
    };
    reader.readAsDataURL(file);
  });
  showAdminToast('Gallery images added!', 'success');
}

function triggerProductPreviewFromModal() {
  const name = document.getElementById('prodName')?.value.trim() || 'Product';
  showAdminToast(`Live previewing "${name}" on storefront...`, 'info');
  window.open('index.html#products', '_blank');
}

function handleImageFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const base64Data = e.target.result;
    document.getElementById('prodImage').value = base64Data;
    updateImagePreview(base64Data);
    syncModalSummaryBanner();
    showAdminToast('Primary image updated!', 'success');
  };
  reader.readAsDataURL(file);
}

function handleProductFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('prodName').value.trim();
  const marathiName = document.getElementById('prodMarathiName').value.trim();
  const brand = document.getElementById('prodBrand').value.trim();
  const category = document.getElementById('prodCategory').value;
  const stock = document.getElementById('prodStock').value.replace(/●/g, '').trim();
  const sku = document.getElementById('prodSku').value.trim() || `STL-${Date.now().toString().slice(-4)}`;
  const tagline = document.getElementById('prodTagline').value.trim();
  const price = parseFloat(document.getElementById('prodPrice').value) || 0;
  const mrp = parseFloat(document.getElementById('prodMrp').value) || 0;
  const image = document.getElementById('prodImage').value.trim() || 'assets/generated-products/stihl-fs3001-card.webp';
  
  // Gallery from state
  const gallery = AdminState.modalGallery && AdminState.modalGallery.length > 0 ? AdminState.modalGallery : [image];

  // Extract dynamic specs
  const specifications = {};
  document.querySelectorAll('#specsBuilderContainer .spec-builder-pair').forEach(row => {
    const k = row.querySelector('.spec-key-input')?.value.trim();
    const v = row.querySelector('.spec-val-input')?.value.trim();
    if (k && v) {
      specifications[k] = v;
    }
  });

  // Extract Features & Applications
  const featuresRaw = document.getElementById('prodFeatures').value;
  const features = featuresRaw ? featuresRaw.split('\n').map(s => s.trim()).filter(Boolean) : [];

  const appsRaw = document.getElementById('prodApplications').value;
  const applications = appsRaw ? appsRaw.split('\n').map(s => s.trim()).filter(Boolean) : [];

  if (AdminState.editingProductId) {
    // EDIT EXISTING PRODUCT
    const idx = AdminState.products.findIndex(p => p.id === AdminState.editingProductId);
    if (idx > -1) {
      AdminState.products[idx] = {
        ...AdminState.products[idx],
        name,
        marathiName,
        brand,
        category,
        stock,
        sku,
        tagline,
        price,
        mrp,
        image,
        gallery,
        specifications,
        features,
        applications,
        isRecentlyUpdated: true
      };
      saveProductsToStorage(AdminState.products);
      showAdminToast(`"${name}" changes saved and synced live!`, 'success');
    }
  } else {
    // ADD NEW PRODUCT
    const newId = `${category}-${brand.toLowerCase().replace(/[^a-z0-9]/g, '')}-${Date.now().toString().slice(-4)}`;
    const newProduct = {
      id: newId,
      name,
      marathiName,
      brand,
      category,
      stock,
      sku,
      tagline,
      price,
      mrp,
      image,
      gallery,
      specifications,
      features,
      applications,
      unitsAvailable: 5,
      isRecentlyUpdated: true
    };

    AdminState.products.unshift(newProduct);
    saveProductsToStorage(AdminState.products);
    showAdminToast(`"${name}" created and published to store!`, 'success');
  }

  closeProductModal();
  renderAdminProducts();
  updateAdminMetrics();
}

/**
 * ============================================================================
 * QUICK OPERATIONS (STOCK TOGGLE, DUPLICATE, DELETE)
 * ============================================================================
 */
function toggleProductStock(productId) {
  const prod = AdminState.products.find(p => p.id === productId);
  if (!prod) return;

  if (prod.stock === 'In Stock') prod.stock = 'Out of Stock';
  else if (prod.stock === 'Out of Stock') prod.stock = 'On Inquiry';
  else prod.stock = 'In Stock';

  saveProductsToStorage(AdminState.products);
  renderAdminProducts();
  updateAdminMetrics();
  showAdminToast(`"${prod.name}" marked as "${prod.stock}"`, 'info');
}

function duplicateProduct(productId) {
  const orig = AdminState.products.find(p => p.id === productId);
  if (!orig) return;

  const clone = JSON.parse(JSON.stringify(orig));
  clone.id = `${orig.id}-copy-${Date.now().toString().slice(-4)}`;
  clone.name = `${orig.name} (Copy)`;
  clone.sku = `${orig.sku || 'SKU'}-COPY`;

  const idx = AdminState.products.findIndex(p => p.id === productId);
  AdminState.products.splice(idx + 1, 0, clone);

  saveProductsToStorage(AdminState.products);
  renderAdminProducts();
  updateAdminMetrics();
  showAdminToast(`Duplicated "${orig.name}" successfully!`, 'success');
}

function deleteProduct(productId) {
  const prod = AdminState.products.find(p => p.id === productId);
  if (!prod) return;

  const confirmed = confirm(`Are you sure you want to delete "${prod.name}" from your catalog?\n\nThis will immediately remove it from the live store.`);
  if (!confirmed) return;

  AdminState.products = AdminState.products.filter(p => p.id !== productId);
  saveProductsToStorage(AdminState.products);
  renderAdminProducts();
  updateAdminMetrics();
  showAdminToast(`"${prod.name}" deleted from catalog`, 'info');
}

/**
 * ============================================================================
 * CUSTOMER ORDERS & INQUIRIES MANAGEMENT
 * ============================================================================
 */

function formatPhoneDisplay(phone) {
  if (!phone) return 'No Phone';
  const clean = phone.replace(/[^0-9]/g, '');
  if (clean.length === 10) {
    return `+91 ${clean.slice(0, 5)} ${clean.slice(5)}`;
  }
  return phone;
}

function clearOrdersSearch() {
  const input = document.getElementById('ordersSearchInput');
  const clearBtn = document.getElementById('ordersSearchClear');
  if (input) input.value = '';
  if (clearBtn) clearBtn.style.display = 'none';
  AdminState.ordersSearchQuery = '';
  renderAdminOrders();
}

function toggleOrdersFilterMenu(e) {
  if (e) e.stopPropagation();
  const popover = document.getElementById('ordersFilterPopover');
  if (popover) {
    popover.style.display = popover.style.display === 'none' ? 'block' : 'none';
  }
}

function applyOrdersFilters() {
  const payEl = document.getElementById('filterPaymentMode');
  const dateEl = document.getElementById('filterDateRange');
  const badgeEl = document.getElementById('activeFilterBadge');

  if (payEl) AdminState.ordersPaymentFilter = payEl.value;
  if (dateEl) AdminState.ordersDateFilter = dateEl.value;

  const hasActiveFilters = AdminState.ordersPaymentFilter !== 'all' || AdminState.ordersDateFilter !== 'all';
  if (badgeEl) badgeEl.style.display = hasActiveFilters ? 'inline-block' : 'none';

  renderAdminOrders();
}

function resetOrdersFilter() {
  const payEl = document.getElementById('filterPaymentMode');
  const dateEl = document.getElementById('filterDateRange');
  const badgeEl = document.getElementById('activeFilterBadge');
  const popover = document.getElementById('ordersFilterPopover');

  if (payEl) payEl.value = 'all';
  if (dateEl) dateEl.value = 'all';
  if (badgeEl) badgeEl.style.display = 'none';
  if (popover) popover.style.display = 'none';

  AdminState.ordersPaymentFilter = 'all';
  AdminState.ordersDateFilter = 'all';
  renderAdminOrders();
  showAdminToast('Order filters reset to default', 'info');
}

function handleOrderSort(column) {
  if (AdminState.ordersSortColumn === column) {
    AdminState.ordersSortDirection = AdminState.ordersSortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    AdminState.ordersSortColumn = column;
    AdminState.ordersSortDirection = (column === 'date' || column === 'amount') ? 'desc' : 'asc';
  }
  renderAdminOrders();
}

function renderAdminOrders() {
  const tableBody = document.getElementById('adminOrdersTableBody');
  const emptyState = document.getElementById('adminOrdersEmpty');
  const tableContainer = document.querySelector('#ordersTab .table-responsive');
  const controlPanel = document.querySelector('#ordersTab .orders-control-panel');
  const searchClear = document.getElementById('ordersSearchClear');

  if (!tableBody) return;

  if (searchClear) {
    searchClear.style.display = AdminState.ordersSearchQuery ? 'block' : 'none';
  }

  const totalOrdersInSystem = AdminState.orders.length;

  if (totalOrdersInSystem === 0) {
    tableBody.innerHTML = '';
    if (tableContainer) tableContainer.style.setProperty('display', 'none', 'important');
    if (controlPanel) controlPanel.style.setProperty('display', 'none', 'important');
    if (emptyState) {
      emptyState.style.setProperty('display', 'flex', 'important');
      emptyState.classList.remove('hidden');
      const titleEl = emptyState.querySelector('.empty-state-title');
      const descEl = emptyState.querySelector('.empty-state-desc');
      if (titleEl) titleEl.textContent = 'No Customer Orders Yet';
      if (descEl) descEl.textContent = 'When farmers and customers place checkout orders or machinery inquiries on the website, they will appear here automatically.';
    }
    updateBulkBar();
    return;
  }

  // If there ARE orders in the database, show the control panel
  if (controlPanel) controlPanel.style.setProperty('display', 'flex', 'important');

  let filtered = [...AdminState.orders];

  // 1. Status Filter
  if (AdminState.orderStatusFilter && AdminState.orderStatusFilter !== 'all') {
    const filter = AdminState.orderStatusFilter.toLowerCase();
    filtered = filtered.filter(order => {
      const st = (order.status || 'received').toLowerCase();
      if (filter === 'inquiry') {
        return st.includes('inquiry') || st.includes('received') || st.includes('pending');
      }
      return st.includes(filter);
    });
  }

  // 2. Search Filter
  if (AdminState.ordersSearchQuery) {
    const q = AdminState.ordersSearchQuery.toLowerCase();
    filtered = filtered.filter(order => {
      const matchId = (order.orderId || '').toLowerCase().includes(q);
      const matchName = (order.customer?.name || '').toLowerCase().includes(q);
      const matchPhone = (order.customer?.phone || '').toLowerCase().includes(q);
      const matchCity = (order.customer?.city || '').toLowerCase().includes(q);
      const matchVillage = (order.customer?.village || '').toLowerCase().includes(q);
      const matchDist = (order.customer?.district || '').toLowerCase().includes(q);
      const matchPin = (order.customer?.pincode || '').toLowerCase().includes(q);
      const matchItems = order.items && Array.isArray(order.items) && order.items.some(it => (it.name || '').toLowerCase().includes(q));
      return matchId || matchName || matchPhone || matchCity || matchVillage || matchDist || matchPin || matchItems;
    });
  }

  // 3. Payment Mode Filter
  if (AdminState.ordersPaymentFilter && AdminState.ordersPaymentFilter !== 'all') {
    filtered = filtered.filter(order => {
      const mode = (order.paymentMode || order.paymentMethod || 'cash').toLowerCase();
      if (AdminState.ordersPaymentFilter === 'cash') {
        return mode.includes('cash') || mode.includes('confirmation') || mode.includes('delivery');
      }
      if (AdminState.ordersPaymentFilter === 'online') {
        return mode.includes('online') || mode.includes('upi') || mode.includes('prepaid');
      }
      return true;
    });
  }

  // 4. Date Range Filter
  if (AdminState.ordersDateFilter && AdminState.ordersDateFilter !== 'all') {
    const now = new Date();
    filtered = filtered.filter(order => {
      if (!order.timestamp) return true;
      const orderDate = new Date(order.timestamp);
      const diffDays = (now - orderDate) / (1000 * 60 * 60 * 24);
      if (AdminState.ordersDateFilter === 'today') return diffDays < 1;
      if (AdminState.ordersDateFilter === 'week') return diffDays <= 7;
      if (AdminState.ordersDateFilter === 'month') return diffDays <= 30;
      return true;
    });
  }

  // 5. Sorting
  filtered.sort((a, b) => {
    let valA, valB;
    const col = AdminState.ordersSortColumn;
    if (col === 'orderId') {
      valA = (a.orderId || '').toLowerCase();
      valB = (b.orderId || '').toLowerCase();
    } else if (col === 'customer') {
      valA = (a.customer?.name || '').toLowerCase();
      valB = (b.customer?.name || '').toLowerCase();
    } else if (col === 'location') {
      valA = (a.customer?.village || a.customer?.city || '').toLowerCase();
      valB = (b.customer?.village || b.customer?.city || '').toLowerCase();
    } else if (col === 'amount') {
      valA = a.totalAmount || 0;
      valB = b.totalAmount || 0;
    } else if (col === 'payment') {
      valA = (a.paymentMode || a.paymentMethod || '').toLowerCase();
      valB = (b.paymentMode || b.paymentMethod || '').toLowerCase();
    } else if (col === 'status') {
      valA = (a.status || 'received').toLowerCase();
      valB = (b.status || 'received').toLowerCase();
    } else { // 'date'
      valA = new Date(a.timestamp || 0).getTime();
      valB = new Date(b.timestamp || 0).getTime();
    }

    if (valA < valB) return AdminState.ordersSortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return AdminState.ordersSortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Update table header sort indicators
  document.querySelectorAll('#ordersTab .sortable-header').forEach(th => {
    th.classList.remove('sorted-asc', 'sorted-desc');
  });
  ['orderId', 'customer', 'location', 'amount', 'payment', 'status'].forEach(col => {
    const indicator = document.getElementById(`sort-${col}`);
    if (indicator) {
      if (AdminState.ordersSortColumn === col) {
        indicator.textContent = AdminState.ordersSortDirection === 'asc' ? '▲' : '▼';
        indicator.parentElement?.classList.add(AdminState.ordersSortDirection === 'asc' ? 'sorted-asc' : 'sorted-desc');
      } else {
        indicator.textContent = '↕';
      }
    }
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = '';
    if (tableContainer) tableContainer.style.setProperty('display', 'none', 'important');
    if (emptyState) {
      emptyState.style.setProperty('display', 'flex', 'important');
      emptyState.classList.remove('hidden');
      const titleEl = emptyState.querySelector('.empty-state-title');
      const descEl = emptyState.querySelector('.empty-state-desc');
      if (titleEl) titleEl.textContent = 'No Matching Orders Found';
      if (descEl) descEl.textContent = 'No customer inquiries match your current search query or filter selection.';
    }
    updateBulkBar();
    return;
  }

  if (tableContainer) tableContainer.style.setProperty('display', 'block', 'important');
  if (emptyState) {
    emptyState.style.setProperty('display', 'none', 'important');
    emptyState.classList.add('hidden');
  }

  tableBody.innerHTML = '';

  filtered.forEach(order => {
    const tr = document.createElement('tr');
    const isChecked = AdminState.selectedOrderIds.has(order.orderId);
    
    // Items list chips
    let itemsHtml = '<span class="order-item-chip"><span class="chip-name">Machinery Inquiry</span><span class="chip-qty">×1</span></span>';
    if (order.items && Array.isArray(order.items) && order.items.length > 0) {
      itemsHtml = order.items.map(item => `
        <span class="order-item-chip">
          <span class="chip-name" title="${item.name || item.id}">${item.name || item.id}</span>
          <span class="chip-qty">×${item.quantity || 1}</span>
        </span>
      `).join('');
    }

    const orderDate = order.timestamp 
      ? new Date(order.timestamp).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) 
      : 'Recent';
    
    // Status Determination
    const rawSt = (order.status || 'received').toLowerCase();
    let st = 'received';
    if (rawSt.includes('completed')) st = 'completed';
    else if (rawSt.includes('processing')) st = 'processing';
    else if (rawSt.includes('cancelled')) st = 'cancelled';

    // Payment Mode
    const rawPay = (order.paymentMode || order.paymentMethod || 'cash').toLowerCase();
    const isOnline = rawPay.includes('online') || rawPay.includes('upi');
    const payLabel = isOnline ? 'UPI / Online' : 'Pay on Delivery / Cash';
    const payClass = isOnline ? 'online' : 'cash';
    const payIcon = isOnline ? '📱' : '💵';

    // WhatsApp Direct Link
    let waHtml = '';
    if (order.customer?.phone) {
      const rawNum = order.customer.phone.replace(/[^0-9]/g, '');
      const cleanNum = rawNum.startsWith('91') ? rawNum : `91${rawNum}`;
      const waText = encodeURIComponent(`Namaskar ${order.customer?.name || ''}, this is Vijayashri Agro Mart regarding your order #${order.orderId}. We are ready to process your equipment!`);
      waHtml = `
        <a href="https://wa.me/${cleanNum}?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn-wa-action-sm" title="Instant WhatsApp Chat">
          <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      `;
    }

    const locationVillage = order.customer?.village || order.customer?.city || 'Showroom Pickup';
    const locationDist = order.customer?.district ? `${order.customer.district}, MH` : 'Maharashtra';
    const locationPin = order.customer?.pincode ? `PIN: ${order.customer.pincode}` : '';

    tr.innerHTML = `
      <td style="text-align: center;">
        <input type="checkbox" class="admin-checkbox order-row-checkbox" value="${order.orderId}" ${isChecked ? 'checked' : ''} onchange="handleOrderRowCheck(this)">
      </td>
      <td>
        <div class="order-id-cell">
          <div class="order-id-row">
            <strong class="order-id-tag">${order.orderId || 'VAM-ORD'}</strong>
            <button type="button" class="btn-copy-id" onclick="copyOrderId('${order.orderId}', event)" title="Copy Order ID">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
          <span class="order-time-sub">${orderDate}</span>
        </div>
      </td>
      <td>
        <div class="order-customer-box">
          <strong>${order.customer?.name || 'Valued Customer'}</strong>
          <a href="tel:${order.customer?.phone || ''}" class="order-phone-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-phone-sm">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>${formatPhoneDisplay(order.customer?.phone)}</span>
          </a>
        </div>
      </td>
      <td>
        <div class="order-location-cell">
          <div class="location-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="icon-pin-sm" style="color: #0E5C2F; flex-shrink: 0;">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${locationVillage}</span>
          </div>
          <div class="location-sub">${locationDist} ${locationPin ? '· ' + locationPin : ''}</div>
        </div>
      </td>
      <td>
        <div class="order-items-flow">
          ${itemsHtml}
        </div>
      </td>
      <td>
        <div class="order-amount-cell">
          <span class="order-amount-val">₹${(order.totalAmount || 0).toLocaleString('en-IN')}</span>
          ${order.totalAmount === 0 ? '<span class="inquiry-tag">Price on Inquiry</span>' : ''}
        </div>
      </td>
      <td>
        <span class="badge-payment ${payClass}">
          <span>${payIcon}</span>
          <span>${payLabel}</span>
        </span>
      </td>
      <td>
        <div class="order-status-dropdown-wrap">
          <select class="order-status-select ${st}" onchange="changeOrderStatusDirect('${order.orderId}', this.value, event)" title="Change Order Status">
            <option value="received" ${st === 'received' ? 'selected' : ''}>● Received</option>
            <option value="processing" ${st === 'processing' ? 'selected' : ''}>● Processing</option>
            <option value="completed" ${st === 'completed' ? 'selected' : ''}>● Completed</option>
            <option value="cancelled" ${st === 'cancelled' ? 'selected' : ''}>● Cancelled</option>
          </select>
        </div>
      </td>
      <td>
        <div class="order-actions-row">
          ${waHtml}
          <button type="button" class="btn-action-view" onclick="openOrderModal('${order.orderId}')" title="View Full Details">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="action-icon-sm">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>View</span>
          </button>
          <button type="button" class="btn-action-print" onclick="printOrderSlip('${order.orderId}')" title="Print Invoice Slip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="action-icon-sm">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
          </button>
        </div>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  updateBulkBar();
}

/**
 * Direct Status Changer from Table Row
 */
function changeOrderStatusDirect(orderId, newStatus, event) {
  if (event) event.stopPropagation();
  const order = AdminState.orders.find(o => o.orderId === orderId);
  if (!order) return;

  order.status = newStatus;
  try {
    localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(AdminState.orders));
  } catch (e) {
    console.error('Failed to save order status change:', e);
  }

  renderAdminOrders();
  updateAdminMetrics();
  showAdminToast(`Order #${orderId} updated to ${newStatus.toUpperCase()}`, 'success');
}

/**
 * 1-Click Copy Order ID
 */
function copyOrderId(orderId, event) {
  if (event) event.stopPropagation();
  if (!navigator.clipboard) {
    showAdminToast(`Order ID: ${orderId}`, 'info');
    return;
  }
  navigator.clipboard.writeText(orderId).then(() => {
    showAdminToast(`Order ID #${orderId} copied to clipboard!`, 'success');
  }).catch(() => {
    showAdminToast(`Order ID: ${orderId}`, 'info');
  });
}

/**
 * Bulk Selection Management
 */
function toggleSelectAllOrders(masterCheckbox) {
  const isChecked = masterCheckbox.checked;
  const rowCheckboxes = document.querySelectorAll('.order-row-checkbox');
  
  if (isChecked) {
    rowCheckboxes.forEach(cb => {
      cb.checked = true;
      AdminState.selectedOrderIds.add(cb.value);
    });
  } else {
    rowCheckboxes.forEach(cb => {
      cb.checked = false;
    });
    AdminState.selectedOrderIds.clear();
  }
  updateBulkBar();
}

function handleOrderRowCheck(rowCheckbox) {
  if (rowCheckbox.checked) {
    AdminState.selectedOrderIds.add(rowCheckbox.value);
  } else {
    AdminState.selectedOrderIds.delete(rowCheckbox.value);
  }

  const allVisibleCheckboxes = document.querySelectorAll('.order-row-checkbox');
  const master = document.getElementById('selectAllOrdersCheckbox');
  if (master && allVisibleCheckboxes.length > 0) {
    const allChecked = Array.from(allVisibleCheckboxes).every(cb => cb.checked);
    master.checked = allChecked;
  }
  updateBulkBar();
}

function updateBulkBar() {
  const bulkBar = document.getElementById('ordersBulkBar');
  const countEl = document.getElementById('ordersBulkCount');
  const count = AdminState.selectedOrderIds.size;

  if (bulkBar) {
    if (count > 0) {
      bulkBar.style.display = 'flex';
      if (countEl) countEl.textContent = `${count} ${count === 1 ? 'order' : 'orders'} selected`;
    } else {
      bulkBar.style.display = 'none';
    }
  }
}

function deselectAllOrders() {
  AdminState.selectedOrderIds.clear();
  document.querySelectorAll('.order-row-checkbox').forEach(cb => { cb.checked = false; });
  const master = document.getElementById('selectAllOrdersCheckbox');
  if (master) master.checked = false;
  updateBulkBar();
}

function bulkUpdateOrderStatus(newStatus) {
  if (AdminState.selectedOrderIds.size === 0) return;
  const count = AdminState.selectedOrderIds.size;

  AdminState.orders.forEach(order => {
    if (AdminState.selectedOrderIds.has(order.orderId)) {
      order.status = newStatus;
    }
  });

  try {
    localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(AdminState.orders));
  } catch (e) {
    console.error('Failed to save bulk order updates:', e);
  }

  deselectAllOrders();
  renderAdminOrders();
  updateAdminMetrics();
  showAdminToast(`${count} ${count === 1 ? 'order' : 'orders'} updated to ${newStatus}!`, 'success');
}

function bulkExportOrdersCSV() {
  const ordersToExport = AdminState.selectedOrderIds.size > 0
    ? AdminState.orders.filter(o => AdminState.selectedOrderIds.has(o.orderId))
    : AdminState.orders;

  if (ordersToExport.length === 0) {
    showAdminToast('No orders available to export', 'error');
    return;
  }

  const headers = ['Order ID', 'Date', 'Customer Name', 'Phone', 'Village/City', 'District', 'Pincode', 'Items', 'Total Amount', 'Payment Mode', 'Status'];
  const rows = ordersToExport.map(o => {
    const itemsStr = (o.items || []).map(i => `${i.name} (x${i.quantity})`).join('; ');
    return [
      `"${o.orderId || ''}"`,
      `"${o.timestamp ? new Date(o.timestamp).toLocaleString('en-IN') : ''}"`,
      `"${(o.customer?.name || '').replace(/"/g, '""')}"`,
      `"${o.customer?.phone || ''}"`,
      `"${(o.customer?.village || o.customer?.city || '').replace(/"/g, '""')}"`,
      `"${(o.customer?.district || '').replace(/"/g, '""')}"`,
      `"${o.customer?.pincode || ''}"`,
      `"${itemsStr.replace(/"/g, '""')}"`,
      o.totalAmount || 0,
      `"${o.paymentMode || o.paymentMethod || 'Cash'}"`,
      `"${o.status || 'Received'}"`
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vijayashri_orders_export_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showAdminToast(`Exported ${ordersToExport.length} orders to CSV`, 'success');
}

function bulkDeleteOrders() {
  const count = AdminState.selectedOrderIds.size;
  if (count === 0) return;

  if (!confirm(`Are you sure you want to delete ${count} selected ${count === 1 ? 'order' : 'orders'}? This action cannot be undone.`)) {
    return;
  }

  AdminState.orders = AdminState.orders.filter(o => !AdminState.selectedOrderIds.has(o.orderId));
  try {
    localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(AdminState.orders));
  } catch (e) {
    console.error('Failed to save orders after deletion:', e);
  }

  deselectAllOrders();
  renderAdminOrders();
  updateAdminMetrics();
  showAdminToast(`Deleted ${count} ${count === 1 ? 'order' : 'orders'} successfully`, 'info');
}

/**
 * Enhanced Order Details Modal
 */
/**
 * Copy Order ID from Modal
 */
function copyModalOrderId() {
  if (!AdminState.currentActiveOrderId) return;
  const id = AdminState.currentActiveOrderId;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(id).then(() => {
      showAdminToast(`Order ID #${id} copied to clipboard!`, 'success');
    }).catch(() => {
      showAdminToast(`Order ID #${id}`, 'info');
    });
  } else {
    showAdminToast(`Order ID #${id}`, 'info');
  }
}

/**
 * Handle direct status change from inside modal
 */
function handleModalStatusChange(orderId, newStatus) {
  changeOrderStatusDirect(orderId, newStatus);
  openOrderModal(orderId);
}

/**
 * Enhanced View Order Details Modal (Design-Taste-Frontend)
 */
function openOrderModal(orderId) {
  const order = AdminState.orders.find(o => o.orderId === orderId);
  if (!order) return;

  AdminState.currentActiveOrderId = orderId;

  const content = document.getElementById('orderModalContent');
  const heading = document.getElementById('orderModalHeading');
  const sub = document.getElementById('orderModalSub');
  const waBtn = document.getElementById('orderModalWhatsAppBtn');

  const formattedDate = order.timestamp 
    ? new Date(order.timestamp).toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })
    : 'Recent Inquiry';

  if (heading) heading.textContent = `Order #${order.orderId}`;
  if (sub) {
    sub.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px;color:#94A3B8;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      <span>Placed on ${formattedDate} • <strong>${order.customer?.name || 'Customer'}</strong></span>
    `;
  }

  // Stepper logic
  const rawSt = (order.status || 'received').toLowerCase();
  const isCancelled = rawSt.includes('cancelled');
  const isProcessing = rawSt.includes('processing') || rawSt.includes('completed');
  const isCompleted = rawSt.includes('completed');

  let itemsHtml = '';
  let subtotal = 0;
  let totalItemsCount = 0;

  if (order.items && Array.isArray(order.items) && order.items.length > 0) {
    itemsHtml = order.items.map(it => {
      const qty = it.quantity || 1;
      const price = it.price || 0;
      const lineTot = price * qty;
      subtotal += lineTot;
      totalItemsCount += qty;

      return `
        <tr>
          <td>
            <div class="receipt-prod-cell">
              <svg class="receipt-prod-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <span>${it.name || it.id}</span>
            </div>
          </td>
          <td style="text-align: center;">
            <span class="receipt-qty-badge">× ${qty}</span>
          </td>
          <td style="text-align: right; color: #475569; font-weight: 600;">
            ₹${price.toLocaleString('en-IN')}
          </td>
          <td style="text-align: right; font-weight: 800; color: #0A2E19;">
            ₹${lineTot.toLocaleString('en-IN')}
          </td>
        </tr>
      `;
    }).join('');
  } else {
    itemsHtml = `
      <tr>
        <td colspan="4" style="padding: 16px; text-align: center; color: #64748B;">
          Machinery Inquiry Request (Price on Dealer Confirmation)
        </td>
      </tr>
    `;
  }

  const grandTotal = order.totalAmount || subtotal;

  // Stepper vs Cancelled Banner
  let stepperSectionHtml = '';
  if (isCancelled) {
    stepperSectionHtml = `
      <div class="order-cancelled-banner">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
        <div>
          <strong>Order Cancelled:</strong> This order is currently marked as cancelled. You can change the status below to resume processing.
        </div>
      </div>
    `;
  } else {
    stepperSectionHtml = `
      <div class="order-stepper-card">
        <div class="order-timeline-stepper">
          <div class="stepper-step active">
            <span class="stepper-num">1</span>
            <span class="stepper-label-desktop">Order Received</span>
            <span class="stepper-label-mobile">Received</span>
          </div>
          <div class="stepper-line ${isProcessing ? 'active' : ''}"></div>
          <div class="stepper-step ${isProcessing ? 'active' : ''} ${isCompleted ? 'completed' : ''}">
            <span class="stepper-num">2</span>
            <span class="stepper-label-desktop">Processing / Packed</span>
            <span class="stepper-label-mobile">Packed</span>
          </div>
          <div class="stepper-line ${isCompleted ? 'active' : ''}"></div>
          <div class="stepper-step ${isCompleted ? 'active completed' : ''}">
            <span class="stepper-num">3</span>
            <span class="stepper-label-desktop">Completed</span>
            <span class="stepper-label-mobile">Done</span>
          </div>
        </div>
      </div>
    `;
  }

  // Payment badge label & icon
  const paymentModeStr = order.paymentMode || order.paymentMethod || 'Pay on Delivery / Cash';
  const isOnlinePayment = paymentModeStr.toLowerCase().includes('online') || paymentModeStr.toLowerCase().includes('upi') || paymentModeStr.toLowerCase().includes('bank');

  // Customer contact actions
  const rawPhone = (order.customer?.phone || '').replace(/[^0-9]/g, '');
  const cleanPhone = rawPhone.startsWith('91') ? rawPhone : `91${rawPhone}`;
  const addressQuery = encodeURIComponent(`${order.customer?.village || ''} ${order.customer?.city || ''} ${order.customer?.district || 'Ratnagiri'} ${order.customer?.pincode || ''}`);

  content.innerHTML = `
    <!-- 1. Timeline Stepper Card -->
    ${stepperSectionHtml}

    <!-- 2. Interactive Status & Payment Control Bar -->
    <div class="order-meta-control-bar">
      <div class="order-status-control-group">
        <span class="meta-control-label">LIFECYCLE STATUS:</span>
        <select class="order-status-select ${rawSt.includes('completed') ? 'completed' : rawSt.includes('processing') ? 'processing' : rawSt.includes('cancelled') ? 'cancelled' : 'received'}" 
          onchange="handleModalStatusChange('${order.orderId}', this.value);" 
          style="font-size: 0.84rem; padding: 6px 28px 6px 12px; cursor: pointer;">
          <option value="received" ${rawSt.includes('received') ? 'selected' : ''}>● Received / Inquiry</option>
          <option value="processing" ${rawSt.includes('processing') ? 'selected' : ''}>● Processing / Packed</option>
          <option value="completed" ${rawSt.includes('completed') ? 'selected' : ''}>● Completed & Dispatched</option>
          <option value="cancelled" ${rawSt.includes('cancelled') ? 'selected' : ''}>● Cancelled</option>
        </select>
      </div>
      <div class="order-payment-meta-badge">
        <span class="meta-control-label" style="margin-right: 4px;">PAYMENT:</span>
        ${isOnlinePayment ? '📱' : '💵'}
        <span>${paymentModeStr}</span>
      </div>
    </div>

    <!-- 3. 2-Column Bento Info Cards -->
    <div class="order-details-grid">
      <!-- Customer Bento Card -->
      <div class="order-bento-card">
        <div class="bento-card-header">
          <div class="bento-header-left">
            <svg class="bento-header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Customer Details</span>
          </div>
          <span style="font-size: 0.7rem; color: #15803D; background: #DCFCE7; padding: 1px 6px; border-radius: 4px; font-weight: 700;">Verified</span>
        </div>
        
        <h4 class="bento-primary-title">${order.customer?.name || 'Valued Customer'}</h4>

        <div class="bento-info-list">
          <div class="bento-info-item">
            <span class="bento-item-label">Phone:</span>
            <strong style="color: #0E5C2F;">${formatPhoneDisplay(order.customer?.phone)}</strong>
          </div>
          <div class="bento-info-item">
            <span class="bento-item-label">Email:</span>
            <span style="color: #334155;">${order.customer?.email || 'Not specified'}</span>
          </div>
          <div class="bento-info-item">
            <span class="bento-item-label">Preferred Contact:</span>
            <span style="color: #0E5C2F; font-weight: 600;">${order.customer?.contactPref || 'WhatsApp'}</span>
          </div>
        </div>

        <div class="bento-action-chips">
          ${order.customer?.phone ? `
            <a href="tel:${order.customer.phone}" class="bento-action-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Call Customer</span>
            </a>
          ` : ''}
          ${order.customer?.email ? `
            <a href="mailto:${order.customer.email}" class="bento-action-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>Email</span>
            </a>
          ` : ''}
        </div>
      </div>
      
      <!-- Delivery / Address Bento Card -->
      <div class="order-bento-card">
        <div class="bento-card-header">
          <div class="bento-header-left">
            <svg class="bento-header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Delivery Destination</span>
          </div>
          <span style="font-size: 0.7rem; color: #475569; background: #F1F5F9; padding: 1px 6px; border-radius: 4px; font-weight: 700;">Rural Dispatch</span>
        </div>

        <h4 class="bento-primary-title">
          ${order.customer?.village || order.customer?.address || 'Showroom Direct Collection'}
        </h4>

        <div class="bento-info-list">
          <div class="bento-info-item">
            <span class="bento-item-label">District / PIN:</span>
            <span style="color: #334155; font-weight: 600;">
              ${order.customer?.city ? order.customer.city + ', ' : ''}${order.customer?.district || 'Ratnagiri'} - ${order.customer?.pincode || '415639'}
            </span>
          </div>
          <div class="bento-info-item">
            <span class="bento-item-label">State:</span>
            <span style="color: #334155;">${order.customer?.state || 'Maharashtra, India'}</span>
          </div>
        </div>

        <div class="bento-action-chips">
          <a href="https://www.google.com/maps/search/?api=1&query=${addressQuery}" target="_blank" rel="noopener noreferrer" class="bento-action-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
            <span>Open Maps Route</span>
          </a>
        </div>
      </div>
    </div>

    <!-- 4. Itemized Equipment Receipt Table Card -->
    <div class="order-receipt-card">
      <div class="order-receipt-header">
        <span>Ordered Machinery & Equipment</span>
        <span class="receipt-count-pill">${totalItemsCount || (order.items?.length || 1)} Item${(totalItemsCount || 1) > 1 ? 's' : ''}</span>
      </div>
      
      <table class="order-receipt-table">
        <thead>
          <tr>
            <th>Equipment Item & Model</th>
            <th style="text-align: center;">Qty</th>
            <th style="text-align: right;">Dealer Rate</th>
            <th style="text-align: right;">Amount</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>

      <!-- Summary Breakdown Footer -->
      <div class="order-receipt-summary">
        <div class="summary-calc-row">
          <span>Equipment Subtotal:</span>
          <span class="summary-calc-val">₹${subtotal.toLocaleString('en-IN')}</span>
        </div>
        <div class="summary-calc-row">
          <span>GST / Official Invoicing:</span>
          <span class="summary-calc-val" style="color: #15803D;">Included (18% Tax Invoice)</span>
        </div>
        <div class="summary-calc-row">
          <span>Freight & Handling:</span>
          <span class="summary-calc-val" style="color: #0E5C2F;">FREE Store Dispatch / Pickup</span>
        </div>
        <div class="summary-total-banner">
          <span class="total-label">Grand Total Payable</span>
          <span class="total-price">₹${grandTotal.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>

    <div class="order-audit-note">
      Order Reference #${order.orderId} • Verified by Vijayshri Agro Mart Automated Store Engine
    </div>
  `;

  // WhatsApp Button
  if (waBtn && order.customer?.phone) {
    const waText = encodeURIComponent(`Namaskar ${order.customer?.name || ''}, this is Vijayashri Agro Mart regarding your order #${order.orderId}. Your order status is: ${order.status || 'Received'}. How can we assist you today?`);
    waBtn.href = `https://wa.me/${cleanPhone}?text=${waText}`;
    waBtn.style.display = 'inline-flex';
  } else if (waBtn) {
    waBtn.style.display = 'none';
  }

  const backdrop = document.getElementById('orderModalBackdrop');
  if (backdrop) backdrop.classList.add('active');
}

function closeOrderModal() {
  const backdrop = document.getElementById('orderModalBackdrop');
  if (backdrop) backdrop.classList.remove('active');
  AdminState.currentActiveOrderId = null;
}

function deleteCurrentOrder() {
  if (!AdminState.currentActiveOrderId) return;
  const orderId = AdminState.currentActiveOrderId;

  if (!confirm(`Are you sure you want to delete order #${orderId}? This cannot be undone.`)) {
    return;
  }

  AdminState.orders = AdminState.orders.filter(o => o.orderId !== orderId);
  try {
    localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(AdminState.orders));
  } catch (e) {
    console.error('Failed to save orders after deletion:', e);
  }

  closeOrderModal();
  renderAdminOrders();
  updateAdminMetrics();
  showAdminToast(`Order #${orderId} deleted successfully`, 'info');
}

function printCurrentOrderSlip() {
  if (AdminState.currentActiveOrderId) {
    printOrderSlip(AdminState.currentActiveOrderId);
  }
}

/**
 * Print Formal Invoice / Order Slip
 */
function printOrderSlip(orderId) {
  const order = AdminState.orders.find(o => o.orderId === orderId);
  if (!order) return;

  const printWindow = window.open('', '_blank', 'width=800,height=900');
  if (!printWindow) {
    alert('Please allow popups to print the order invoice');
    return;
  }

  let itemsRows = '';
  let subtotal = 0;
  if (order.items && Array.isArray(order.items)) {
    itemsRows = order.items.map(it => {
      const tot = (it.price || 0) * (it.quantity || 1);
      subtotal += tot;
      return `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${it.name || it.id}</td>
          <td style="padding: 8px; text-align: center; border-bottom: 1px solid #ddd;">${it.quantity || 1}</td>
          <td style="padding: 8px; text-align: right; border-bottom: 1px solid #ddd;">₹${(it.price || 0).toLocaleString('en-IN')}</td>
          <td style="padding: 8px; text-align: right; border-bottom: 1px solid #ddd;">₹${tot.toLocaleString('en-IN')}</td>
        </tr>
      `;
    }).join('');
  }

  const grandTotal = order.totalAmount || subtotal;

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Invoice - #${order.orderId} - Vijayashri Agro Mart</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; color: #1e293b; line-height: 1.5; }
        .header { display: flex; justify-content: space-between; border-bottom: 2px solid #0E5C2F; padding-bottom: 15px; margin-bottom: 20px; }
        .brand { color: #0E5C2F; font-size: 24px; font-weight: 800; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; }
        .box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px 16px; border-radius: 6px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
        th { background: #0E5C2F; color: white; padding: 10px; text-align: left; }
        .total-row { font-size: 18px; font-weight: bold; background: #eaf4ee; }
        .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #64748B; border-top: 1px dashed #cbd5e1; padding-top: 15px; }
        @media print { button { display: none; } }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="brand">🌾 Vijayashri Agro Mart</div>
          <div style="font-size: 13px; color: #64748B;">Authorized Agricultural Machinery & Genuine Parts Dealer</div>
          <div style="font-size: 12px; color: #64748B;">Ratnagiri, Maharashtra, India</div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 18px; font-weight: 800; color: #0E5C2F;">INVOICE SLIP</div>
          <div style="font-weight: bold;">#${order.orderId}</div>
          <div style="font-size: 12px; color: #64748B;">${new Date(order.timestamp || Date.now()).toLocaleDateString('en-IN')}</div>
        </div>
      </div>

      <div class="grid">
        <div class="box">
          <strong style="color: #0E5C2F; font-size: 12px; text-transform: uppercase;">Customer Details:</strong>
          <div style="font-size: 16px; font-weight: bold; margin-top: 4px;">${order.customer?.name || 'Customer'}</div>
          <div>Mobile: <strong>${order.customer?.phone || '-'}</strong></div>
          <div>Email: ${order.customer?.email || 'N/A'}</div>
        </div>
        <div class="box">
          <strong style="color: #0E5C2F; font-size: 12px; text-transform: uppercase;">Delivery Address:</strong>
          <div style="margin-top: 4px;">${order.customer?.village || order.customer?.address || 'Showroom Pickup'}</div>
          <div>${order.customer?.city ? order.customer.city + ', ' : ''}${order.customer?.district || 'Ratnagiri'} - ${order.customer?.pincode || ''}</div>
          <div>Payment Mode: <strong>${order.paymentMode || order.paymentMethod || 'Pay on Delivery'}</strong></div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item Description</th>
            <th style="text-align: center;">Qty</th>
            <th style="text-align: right;">Unit Rate</th>
            <th style="text-align: right;">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          ${itemsRows}
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="3" style="padding: 12px; text-align: right;">Grand Total:</td>
            <td style="padding: 12px; text-align: right; color: #0E5C2F;">₹${grandTotal.toLocaleString('en-IN')}</td>
          </tr>
        </tfoot>
      </table>

      <div class="footer">
        <p>Thank you for placing your machinery order with Vijayashri Agro Mart!</p>
        <p>For support or service: +91 74859 63617 • Ratnagiri, Maharashtra</p>
      </div>

      <script>
        window.onload = function() { window.print(); }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

/**
 * ============================================================================
 * BACKUP, EXPORT & IMPORT TOOLS
 * ============================================================================
 */
function exportCatalogJSON() {
  const dataStr = JSON.stringify(AdminState.products, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const today = new Date().toISOString().split('T')[0];
  const a = document.createElement('a');
  a.href = url;
  a.download = `vijayashri_catalog_backup_${today}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showAdminToast('Catalog exported as JSON backup', 'success');
}

function handleImportJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (Array.isArray(parsed) && parsed.length > 0) {
        if (confirm(`Found ${parsed.length} products in JSON file.\n\nDo you want to replace your current catalog with these products?`)) {
          saveProductsToStorage(parsed);
          renderAdminProducts();
          updateAdminMetrics();
          showAdminToast(`Successfully imported ${parsed.length} products!`, 'success');
        }
      } else {
        alert('Invalid catalog format. File must contain an array of products.');
      }
    } catch (err) {
      alert('Failed to parse JSON file. Please ensure it is a valid JSON catalog.');
    }
  };
  reader.readAsText(file);
}

function confirmResetCatalog() {
  const answer = prompt('WARNING: This will reset all products back to the original 8 factory products.\n\nType "RESET" to confirm:');
  if (answer === 'RESET') {
    AdminState.products = [...DEFAULT_SEED_CATALOG];
    saveProductsToStorage(AdminState.products);
    renderAdminProducts();
    updateAdminMetrics();
    showAdminToast('Catalog reset to factory default!', 'info');
  } else if (answer !== null) {
    alert('Reset cancelled. You must type "RESET" in capital letters to proceed.');
  }
}

/**
 * ============================================================================
 * TOAST NOTIFICATION SYSTEM
 * ============================================================================
 */
function showAdminToast(message, type = 'info') {
  const container = document.getElementById('adminToastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'admin-toast';
  
  let icon = '✓';
  if (type === 'error') icon = '⚠️';
  else if (type === 'info') icon = 'ℹ️';

  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
