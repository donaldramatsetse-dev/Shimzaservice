const WHATSAPP_NUMBER = "0766835809";
const SHOP_NAME = "ShimzaService";
const contactPhone = WHATSAPP_NUMBER;

function formatWhatsAppNumber(number) {
  const digits = String(number).replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("27") && digits.length === 11) return digits;
  if (digits.startsWith("0") && digits.length === 10) return `27${digits.slice(1)}`;
  return digits;
}

function openWhatsApp(productName) {
  const message = encodeURIComponent(`Hello ${SHOP_NAME}, I would like to order: ${productName}. Please advise the next steps and pricing. My contact number is ${contactPhone}.`);
  const waNumber = formatWhatsAppNumber(WHATSAPP_NUMBER);
  const waUrl = `https://wa.me/${waNumber}?text=${message}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");
}

document.addEventListener("click", (event) => {
  const button = event.target.closest && event.target.closest(".btn.buy");
  if (!button) return;
 
  event.preventDefault();
  const productName = button.dataset.name || "Product enquiry";
  openWhatsApp(productName);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const id = anchor.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const categoryImageCatalog = {
  business: "assets/photos/business.jpg",
  internet: "assets/photos/internet.jpg",
  stationery: "assets/photos/stationery.jpg",
  bicycle: "assets/photos/bicycle.jpg",
  retail: "assets/photos/retail.jpg"
};

const productImageCatalog = {
  "cv": "assets/photos/CV%20and%20document%20services.png",
  "document": "assets/photos/CV%20and%20document%20services.png",
  "sars": "assets/photos/SARS%20and%20CIPC%20services.png",
  "cipc": "assets/photos/SARS%20and%20CIPC%20services.png",
  "website": "assets/photos/Business%20website%20and%20app%20services.jpg",
  "app": "assets/photos/Business%20website%20and%20app%20services.jpg",
  "printing": "assets/photos/Printing%20and%20branding%20services.jpg",
  "branding": "assets/photos/Printing%20and%20branding%20services.jpg",
  "training": "assets/photos/Corporate%20training%20and%20business%20support.jpg",
  "support": "assets/photos/Corporate%20training%20and%20business%20support.jpg",
  "internet": "assets/photos/Internet%20caf%C3%A9%20services.jpeg",
  "cafe": "assets/photos/Internet%20caf%C3%A9%20services.jpeg",
  "computer": "assets/photos/Computer%20and%20printing%20station.jpeg",
  "typing": "assets/photos/Typing%20and%20document%20design%20service.jpeg",
  "design": "assets/photos/Typing%20and%20document%20design%20service.jpeg",
  "admin": "assets/photos/Online%20document%20and%20admin%20services.png",
  "application": "assets/photos/Online%20document%20and%20admin%20services.png",
  "a4": "assets/photos/A4%20Paper%20500%20Sheets.jpg",
  "paper": "assets/photos/A4%20Paper%20500%20Sheets.jpg",
  "exercise": "assets/photos/Exercise%20Book.webp",
  "book": "assets/photos/Exercise%20Book.webp",
  "hardcover": "assets/photos/Big%20Hardcover%20Book.jpg",
  "copy": "assets/photos/Copy%20Paper%20Ream.jpg",
  "ream": "assets/photos/Copy%20Paper%20Ream.jpg",
  "ball": "assets/photos/Ball%20Pens.png",
  "pens": "assets/photos/Ball%20Pens.png",
  "pencil": "assets/photos/Pencils.jpg",
  "calculator": "assets/photos/Calculator.jpg",
  "eraser": "assets/photos/Eraser.jpg",
  "typex": "assets/photos/Typex.png",
  "charger": "assets/photos/phone%20%20charge.jpg",
  "phone": "assets/photos/phone%20%20charge.jpg",
  "charge": "assets/photos/charge%20cable.jpg",
  "cable": "assets/photos/charge%20cable.jpg",
  "powerbank": "assets/photos/powerbanks.jpg",
  "powerbanks": "assets/photos/powerbanks.jpg",
  "pampers": "assets/photos/pampers%202.jpg",
  "perfume": "assets/photos/oil%20%20perfume.jpg",
  "oil": "assets/photos/oil%20perfume6.jpg",
  "desk": "assets/photos/Desk%20Organizer.jpg",
  "organizer": "assets/photos/Desk%20Organizer.jpg",
  "marker": "assets/photos/PRETTY%20MAKER.jpg",
  "pretty": "assets/photos/PRETTY%20MAKER.jpg",
  "highlighter": "assets/photos/highlighters.jpg",
  "folder": "assets/photos/file-folder.png",
  "pack": "assets/photos/folder-pack.webp",
  "glue": "assets/photos/glue-stick.jpg",
  "stamp": "assets/photos/stamp-pad.jpg",
  "invoice": "assets/photos/Invoice%20Book.jpg",
  "notebook": "assets/photos/Notebook.jpg",
  "stapler": "assets/photos/scissor.jpg",
  "scissor": "assets/photos/scissor.jpg",
  "scissors": "assets/photos/scissor.jpg",
  "hole": "assets/photos/Hole%20Punch.jpg",
  "punch": "assets/photos/Hole%20Punch.jpg",
  "tyre": "assets/photos/mtb-tyre-26.webp",
  "tire": "assets/photos/mtb-tyre-26.webp",
  "chain": "assets/photos/durable-chain.webp",
  "brake": "assets/photos/brake-pads-set.webp",
  "cassette": "assets/photos/gear-cassette.jpg",
  "pedal": "assets/photos/pedals.webp",
  "saddle": "assets/photos/comfort-saddle.webp",
  "grip": "assets/photos/handlebar-grips.webp",
  "light": "assets/photos/bike%20lite.jpg",
  "pump": "assets/photos/bicycle-pump.webp",
  "lock": "assets/photos/bike-lock.jpg",
  "glove": "assets/photos/Cycling%20Gloves.webp",
  "tube": "assets/photos/Inner%20Tube.jpg",
  "bell": "assets/photos/Bike%20Bell.webp",
  "spoke": "assets/photos/Replacement%20Spokes.webp",
  "lubricant": "assets/photos/Chain%20Lubricant.webp",
  "lunch": "assets/photos/Lunch%20Box.jpg",
  "water": "assets/photos/Water%20Bottle.jpg",
  "snack": "assets/photos/Snack%20Pack.jpg",
  "toiletries": "assets/photos/Toiletries%20Kit.jpeg",
  "school": "assets/photos/School%20Bag.jpg",
  "soap": "assets/photos/Soap%20Pack.jpg",
  "toothpaste": "assets/photos/Toothpaste.jpg",
  "tissue": "assets/photos/Tissue%20Pack.png",
  "sanitizer": "assets/photos/Hand%20Sanitizer.jpg",
  "socks": "assets/photos/Socks.jpg",
  "umbrella": "assets/photos/Umbrella.jpg",
  "bag": "assets/photos/School%20Bag.jpg"
};

const imageExtensionCandidates = [".jpg", ".jpeg", ".png", ".webp", ".svg"];

function getCategoryFallbackImage(altText, category) {
  return categoryImageCatalog[category] || "assets/photos/business.jpg";
}

function getImageExtensionCandidates(source) {
  if (!source) return [];

  const trimmedSource = source.trim();
  const hasKnownExtension = /\.(jpg|jpeg|png|webp|svg)$/i.test(trimmedSource);
  if (hasKnownExtension) return [];

  return imageExtensionCandidates.map((extension) => `${trimmedSource}${extension}`);
}

function getProductImageSource(altText) {
  const normalizedAlt = (altText || "").toLowerCase();

  for (const [keyword, source] of Object.entries(productImageCatalog)) {
    if (normalizedAlt.includes(keyword)) {
      return source;
    }
  }

  if (["tyre", "tire", "chain", "brake", "cassette", "pedal", "saddle", "grip", "light", "pump", "lock", "glove", "tube", "bell", "spoke", "lubricant", "bicycle", "bike", "cycling"].some((keyword) => normalizedAlt.includes(keyword))) {
    return getCategoryFallbackImage(altText, "bicycle");
  }

  return getCategoryFallbackImage(altText, "retail");
}

function applyImageWithFallback(img, candidateSources) {
  const sources = Array.isArray(candidateSources) ? candidateSources : [candidateSources];
  let index = 0;

  const tryNextSource = () => {
    if (index >= sources.length) return;
    const nextSrc = sources[index];
    index += 1;
    img.src = nextSrc;
  };

  img.addEventListener("error", () => {
    tryNextSource();
  }, { once: false });

  tryNextSource();
}

function applyRealProductImages() {
  const logoImage = document.querySelector("img.logo");
  if (logoImage) {
    logoImage.src = "assets/logo.png";
  }

  const heroImage = document.querySelector(".hero-img");
  if (heroImage) {
    applyImageWithFallback(heroImage, ["assets/logo.png", "assets/photos/business.jpg"]);
    heroImage.loading = "eager";
  }

  document.querySelectorAll(".product img, .item img").forEach((img) => {
    const alt = img.getAttribute("alt") || "";
    const currentSource = img.getAttribute("src") || "";
    const initialSource = getProductImageSource(alt);
    const candidates = [
      currentSource,
      initialSource,
      ...getImageExtensionCandidates(currentSource),
      ...getImageExtensionCandidates(initialSource),
      "assets/photos/business.jpg",
      "assets/photos/internet.jpg",
      "assets/photos/stationery.jpg",
      "assets/photos/bicycle.jpg",
      "assets/photos/retail.jpg"
    ].filter(Boolean);

    applyImageWithFallback(img, candidates);
    img.loading = "lazy";
  });
}

document.addEventListener("DOMContentLoaded", applyRealProductImages);

// Lightbox functionality: open images in a responsive viewer on click
function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('.lightbox-img');
  const lbCaption = lightbox.querySelector('.lightbox-caption');
  const lbClose = lightbox.querySelector('.lightbox-close');

  const imgNodes = Array.from(document.querySelectorAll('main img'))
    .filter(img => !img.closest('a'));
  const preloadCache = new Map();
  let currentIndex = -1;

  function getLargeSrc(img) {
    if (img.dataset.largeSrc) return img.dataset.largeSrc;
    const src = img.src || '';
    if (src.includes('source.unsplash.com')) {
      return src.replace(/900x600|800x600|600x400/g, '1600x1200');
    }
    if (src.includes('images.unsplash.com')) {
      // try to bump w= param
      if (src.includes('w=900')) return src.replace('w=900', 'w=1600');
      return src + (src.includes('?') ? '&' : '?') + 'auto=format&fit=crop&w=1600&q=90';
    }
    return src;
  }

  function preloadLargeForIndex(i) {
    if (i < 0 || i >= imgNodes.length) return;
    const img = imgNodes[i];
    const large = getLargeSrc(img);
    if (!large || preloadCache.has(large)) return;
    const p = new Image();
    p.src = large;
    p.onload = () => preloadCache.set(large, p);
    p.onerror = () => preloadCache.set(large, null);
    preloadCache.set(large, p);
  }

  function showImageAt(index) {
    if (index < 0 || index >= imgNodes.length) return;
    currentIndex = index;
    const srcSmall = imgNodes[index].src || '';
    const large = getLargeSrc(imgNodes[index]);
    lbCaption.textContent = imgNodes[index].alt || imgNodes[index].title || '';
    // show small immediately, then swap to large when ready
    lbImg.src = srcSmall;
    lbImg.alt = lbCaption.textContent;
    if (preloadCache.has(large) && preloadCache.get(large)) {
      lbImg.src = large;
    } else if (large && large !== srcSmall) {
      const temp = new Image();
      temp.onload = () => { lbImg.src = large; preloadCache.set(large, temp); };
      temp.src = large;
      preloadCache.set(large, temp);
    }
    // prefetch neighbors
    preloadLargeForIndex(index + 1);
    preloadLargeForIndex(index - 1);
  }

  function openLightboxAt(index) {
    if (!lightbox) return;
    showImageAt(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
    currentIndex = -1;
  }

  function showNext() { showImageAt((currentIndex + 1) % imgNodes.length); }
  function showPrev() { showImageAt((currentIndex - 1 + imgNodes.length) % imgNodes.length); }

  // Click outside image or on close button closes
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lbClose) closeLightbox();
  });

  // Keyboard navigation: ESC, arrows
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') return closeLightbox();
    if (e.key === 'ArrowRight') return showNext();
    if (e.key === 'ArrowLeft') return showPrev();
  });

  // Touch / swipe support
  let touchStartX = 0;
  let touchCurrentX = 0;
  let touchStartTime = 0;

  lightbox.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    touchStartX = t.clientX; touchCurrentX = touchStartX; touchStartTime = Date.now();
  }, { passive: true });

  lightbox.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    touchCurrentX = t.clientX;
    const dx = touchCurrentX - touchStartX;
    lbImg.style.transform = `translateX(${dx}px)`;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    const dx = touchCurrentX - touchStartX;
    const dt = Date.now() - touchStartTime;
    lbImg.style.transform = '';
    if (Math.abs(dx) > 60 || (Math.abs(dx) > 30 && dt < 200)) {
      if (dx < 0) showNext(); else showPrev();
    }
  });

  // Attach to image nodes: click opens, hover/touch preloads large
  imgNodes.forEach((img, i) => {
    img.style.touchAction = 'manipulation';
    // set data-large-src heuristically if missing
    if (!img.dataset.largeSrc) {
      try { img.dataset.largeSrc = getLargeSrc(img); } catch (e) { /* ignore */ }
    }

    img.addEventListener('click', (e) => {
      if (img.closest('a')) return;
      openLightboxAt(i);
    });

    img.addEventListener('mouseenter', () => preloadLargeForIndex(i));
    img.addEventListener('touchstart', () => preloadLargeForIndex(i), { passive: true });
  });
}

document.addEventListener('DOMContentLoaded', setupLightbox);

function setupPdfViewer() {
  const openButton = document.querySelector('.pdf-open-btn');
  const overlay = document.getElementById('pdfViewerOverlay');
  const closeButton = document.getElementById('closePdfViewer');
  const frame = document.querySelector('.pdf-viewer-frame');

  if (!openButton || !overlay || !closeButton || !frame) return;

  const pdfUrl = 'Champion%20bike.pdf';
  const isFileProtocol = window.location.protocol === 'file:';

  const openViewer = () => {
    const pdfLink = `${window.location.href.replace(/index\.html$/i, '')}${pdfUrl}`;

    if (isFileProtocol) {
      window.open(pdfLink, '_blank', 'noopener,noreferrer');
      return;
    }

    try {
      frame.setAttribute('src', pdfUrl);
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
    } catch (error) {
      window.open(pdfLink, '_blank', 'noopener,noreferrer');
    }
  };

  const closeViewer = () => {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    frame.removeAttribute('src');
  };

  openButton.addEventListener('click', openViewer);
  closeButton.addEventListener('click', closeViewer);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeViewer();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('open')) {
      closeViewer();
    }
  });
}

document.addEventListener('DOMContentLoaded', setupPdfViewer);
