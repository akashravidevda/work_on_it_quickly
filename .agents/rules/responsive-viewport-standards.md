# Responsive Viewport & Navigation Layout Standards

## 1. Viewport Canvas & Root Lockdown
- **Always Clamp Root**: Apply `overflow-x: hidden; width: 100%; max-width: 100%;` to **both** `html` and `body` elements. Relying solely on `body { overflow-x: hidden }` allows root canvas expansion in WebKit and Chrome Device Emulation.
- **Off-Screen Transform Isolation**: Any drawer, sidebar, or bottom sheet using `transform: translateX(...)` or `translateY(...)` must have `overflow: hidden` on its outer backdrop or container to prevent off-canvas dimensions from extending the document coordinate system.
- **Compact Micro-Bar Truncation**: On screens $< 480\text{px}$, avoid multiple `white-space: nowrap` badges in top bars; iconify or hide secondary text.

## 2. Multi-Item Desktop Navigation Breakpoints
- **Dense Nav Threshold**: For headers featuring $\ge 6$ nav items alongside brand marks and action buttons (e.g., Cart, CTA), set the horizontal desktop navigation rail breakpoint to **$\ge 1140\text{px}$** (rather than default $992\text{px}$).
- **Tablet Strategy ($< 1140\text{px}$)**: Use the compact mobile toggle / overlay drawer on tablet devices (e.g., iPad Pro 1032px, iPad Air) to prevent visual collisions.
