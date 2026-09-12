# विजयश्री ॲग्रो मार्ट (Vijayashri Agro Mart)
**शेतकऱ्यांच्या हक्काचे ठिकाण | Premium Agricultural Equipment E-Commerce Platform**

A modern, high-conversion, mobile-first single-page agricultural equipment discovery and ordering website built using pure **HTML5, CSS3, and Vanilla JavaScript (ES6+)**.

---

## 🌟 Redesign & Design System Highlights

### 🎨 Brand Design System
- **Primary Trust Green**: `#0B4D2A`
- **Secondary Agricultural Green**: `#145A32`
- **Harvest Amber Accent**: `#F28C18`
- **Alert / Highlight Red**: `#D92D20`
- **Verified Success Green**: `#198754`
- **Backgrounds**: Pure White (`#FFFFFF`) & Warm Neutral Soft Sage (`#F6F8F5`)
- **Card Surfaces**: Pure White with 1px subtle `#E5EAE6` border and 12px/16px radius
- **Typography**: Inter (Modern sans-serif) + Noto Sans Devanagari (Crisp Marathi support) with fluid `clamp()` sizing

### 📱 Responsive Layout Architecture
- **Max Content Width**: 1280px container with 32px desktop / 24px tablet / 16px mobile padding
- **Section Spacing**: 96px desktop / 72px tablet / 56px mobile
- **Product Catalog Grid**: 4 columns (Desktop) → 2 columns (Tablet) → 1 column (Mobile)
- **Category Cards**: 3 equal cards (Desktop/Tablet) → Stacked (Mobile)
- **Applications Grid**: 4 cards (Desktop) → 2 columns (Tablet & Mobile)
- **Why Choose Us**: Split editorial layout (Left: Heading & CTA, Right: 2x4 benefits grid on desktop, 2-col on mobile)
- **Mobile Bottom Navigation**: 4-button quick bar (Home, Products, WhatsApp, Cart with real-time count badge)
- **Touch-Friendly Standards**: Minimum 44x44px touch targets on interactive controls, inputs styled with 16px minimum font size to prevent iOS zoom

---

## 🛒 E-Commerce & Lead-Generation Features

1. **100% Single-Page Architecture**: Zero multi-page reloads. All product details, category filtering, cart management, checkout forms, and order confirmations work seamlessly within the single-page application using responsive drawers and modals.
2. **Authentic Reference Integration**: Faithfully reproduces specifications, features, and brand identities from authentic reference posters:
   - **STIHL Series**: FS 3001, FS 230, FS 120, FS 250
   - **Really Crop Reaper**: CR-R35-S Baffle Crop Reaper 4-Stroke (FMTTI Approved) with dedicated accessories (*Trimmer Head, 2MM 2T Blade, 80T TCT Blade, Paddy Harvester*) and applications (*Grass Cutting, Paddy Cutting, Farm Maintenance, Orchard Cleaning*)
   - **Generators Range**: ELEMAX (Powered by KOHLER Diesel), LIGHTON (SilentPRO LT-9000), and PELICAN (W900APL)
3. **Transparent Pricing State**: Displays **"चौकशीवर उपलब्ध (Price on Enquiry)"** for unpriced commercial items per business rules.
4. **Interactive Cart & Local Persistence**: Add to cart, quantity adjustments, item removals, badge updates, and `localStorage` persistence across page reloads.
5. **Same-Page Checkout & Indian Validation**: Validates 10-digit Indian phone numbers, 6-digit PIN codes, customer name, address, and consent. Generates a local Order ID (`VAM-YYYYMMDD-XXXX`).
6. **Dynamic WhatsApp Conversion Engine**: 1-click dynamic prefilled WhatsApp message generation for single product enquiries, multi-item cart quotes, and complete order submissions.

---

## 📁 File Structure

```
work_on_it_quickly/
│
├── index.html                  # Semantic HTML5 single-page application
├── style.css                   # Responsive CSS3 styling & brand design system
├── script.js                   # Vanilla JS logic, product catalog & cart engine
├── README.md                   # Project documentation & configuration guide
│
└── assets/
    ├── images/                 # Product photos, application shots & poster creatives
    │   ├── really-cr-r35-s.jpg
    │   ├── stihl-fs3001.jpg
    │   ├── stihl-fs230.jpg
    │   ├── stihl-fs120.jpg
    │   ├── stihl-fs250.jpg
    │   ├── stihl-all-lineup.jpg
    │   ├── elemax-generator.jpg
    │   ├── lighton-generator.jpg
    │   ├── pelican-generator.jpg
    │   ├── acc-*.jpg           # Accessories thumbnails
    │   ├── app-*.jpg           # Application shots (grass, paddy, farm, orchard)
    │   └── creative-*.jpg      # Full original reference posters
    │
    ├── logos/                  # Brand mark & icons
    └── icons/                  # SVG icons
```

---

## ⚙️ Configuration & Maintenance Guide

### 1. Updating Primary Contact & WhatsApp Numbers
All contact details and WhatsApp routing are centralized in the `CONFIG` object at the top of [`script.js`](file:///c:/Users/july2/OneDrive/Desktop/work_on_it_quickly/script.js#L18-L45):

```javascript
const CONFIG = {
  businessName: 'Vijayashri Agro Mart',
  marathiName: 'विजयश्री ॲग्रो मार्ट',
  tagline: 'शेतकऱ्यांच्या हक्काचे ठिकाण',
  officialLocation: 'Khanyalal Complex, UGF-8, Opp. S.T. Stand, Ratnagiri, Maharashtra',
  email: 'kunal.5786@gmail.com',
  officialMobile: '8369314833',
  udyamRegistration: 'UDYAM-MH-28-0001865',
  
  // Update WhatsApp number here (include country code without + or spaces, e.g., '918369314833'):
  whatsappNumber: '918369314833',
  
  // Marketing phone numbers fallback list:
  creativePhoneNumbers: [
    '8369314833',
    '8369314833',
    '9423292359',
    '8329074990',
    '7758018704'
  ]
};
```

### 2. Adding or Editing Products in Catalog
To add, edit, or adjust products, modify the `PRODUCT_CATALOG` array in [`script.js`](file:///c:/Users/july2/OneDrive/Desktop/work_on_it_quickly/script.js#L54-L240):

```javascript
{
  id: 'stihl-fs3001',
  category: 'stihl', // 'stihl', 'crop-reaper', or 'generators'
  brand: 'STIHL',
  name: 'STIHL FS 3001',
  marathiName: 'STIHL FS 3001 ब्रश कटर',
  tagline: 'हलके वजन आणि सुलभ वापर',
  image: 'assets/images/stihl-fs3001.jpg',
  gallery: [
    'assets/images/stihl-fs3001.jpg',
    'assets/images/stihl-all-lineup.jpg'
  ],
  price: null, // Keep null for "Price on Enquiry", or set numeric value e.g. 18500
  stock: null,
  specifications: {
    'Displacement (cc)': '25.4',
    'Engine Power (HP)': '1.3',
    'Engine Type': '2 stroke',
    'Fuel': 'Petrol',
    'Starting System': 'Manual',
    'Weight (kg)': '5.6'
  },
  features: [ ... ],
  applications: [ ... ],
  source: 'Supplied STIHL creative'
}
```

### 3. Replacing Product Images & Logos
- Drop new product photos into `assets/images/` with matching aspect ratios (1:1 square or 4:3 landscape recommended).
- Update the `image` and `gallery` paths in `PRODUCT_CATALOG` in `script.js`.

### 4. Connecting Future Online Payment Gateway (Razorpay / PayU / Cashfree)
In [`script.js`](file:///c:/Users/july2/OneDrive/Desktop/work_on_it_quickly/script.js#L540-L580), the checkout is architected for seamless payment gateway integration:

1. Enable the radio button option in [`index.html`](file:///c:/Users/july2/OneDrive/Desktop/work_on_it_quickly/index.html#L388) (remove `disabled` attribute).
2. Inside `handleCheckoutSubmit(e)` in `script.js`, integrate your merchant payment SDK checkout handler before triggering `displayOrderSuccess(orderData)`.

---

## 🚀 How to Run Locally

Since this is a static plain-stack application:

1. **Option A (Direct in Browser)**: Double-click or open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox).
2. **Option B (Using Local HTTP Server)**:
   ```bash
   # Using Python 3 built-in server:
   python -m http.server 8080
   
   # Or using npx serve:
   npx serve .
   ```
   Then open `http://localhost:8080` in your browser.
