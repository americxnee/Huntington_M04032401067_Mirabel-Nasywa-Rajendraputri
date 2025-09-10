// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Modal
let modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

// Klik di luar modal untuk close
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// simple lightbox: open clicked image in overlay
function openLightbox(imgEl) {
  // if overlay doesn't exist yet, create it
  let lb = document.getElementById('simpleLightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'simpleLightbox';
    lb.className = 'lightbox';
    lb.innerHTML = '<img id="lightboxImg" src="" alt="Preview"><span id="lbClose" style="position:absolute; top:18px; right:28px; color:white; font-size:28px; cursor:pointer;">&times;</span>';
    document.body.appendChild(lb);

    document.getElementById('lbClose').onclick = closeLightbox;
    lb.onclick = function(e) {
      if (e.target === lb) closeLightbox();
    };
  }
  document.getElementById('lightboxImg').src = imgEl.src;
  lb.style.display = 'flex';
}

function closeLightbox() {
  const lb = document.getElementById('simpleLightbox');
  if (lb) lb.style.display = 'none';
}

// Typing Animation
const texts = ["Hola!👋", "How’s it going?", "Hope you’re doing well!🌸😊"];
let index = 0, charIndex = 0;
const typing = document.getElementById("typing");

function type() {
  if (charIndex < texts[index].length) {
    typing.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typing.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 200);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Back to Top Button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementsByClassName("close")[0];
const images = document.querySelectorAll(".gallery img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

// Buka lightbox + set gambar
function showLightbox(index) {
  lightbox.style.display = "flex";
  lightboxImg.src = images[index].src;
  currentIndex = index;
}

// Event klik gambar
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showLightbox(index);
  });
});

// Next button
next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox(currentIndex);
});

// Prev button
prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showLightbox(currentIndex);
});

// Close lightbox
close.onclick = () => {
  lightbox.style.display = "none";
};

// Tutup lightbox kalau klik area luar
lightbox.onclick = (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
};




