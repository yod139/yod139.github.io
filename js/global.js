const hamburger = document.getElementById("hamburger");
const globalMenu = document.getElementById("globalMenu");

if (hamburger && globalMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    globalMenu.classList.toggle("open");
  });
}

/* =====================
   MV スライド
===================== */
const slides = document.querySelectorAll(".mv-slide");
let currentIndex = 0;

if (slides.length > 0) {
  slides[0].classList.add("active");

  setInterval(() => {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }, 3000);
}
