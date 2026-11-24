/* =====================
   JSが動いていることをCSSに伝える
   （.reveal のアニメーション用）
===================== */
document.documentElement.classList.add("js");

/* =====================
   ハンバーガーメニュー
===================== */
const hamburger = document.getElementById("hamburger");
const globalMenu = document.getElementById("globalMenu");

if (hamburger && globalMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    globalMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  });

  // メニュー内のリンクを押したら閉じる
  globalMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      globalMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });
}

/* =====================
   スクロールでヘッダーに影
===================== */
const header = document.querySelector(".site-header");

if (header) {
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
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
  }, 6000);
}

/* =====================
   スクロールでふわっと表示
===================== */
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
