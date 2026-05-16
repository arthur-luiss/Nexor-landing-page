// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 100);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

// ── HEADER SCROLL SHADOW ──
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.style.boxShadow = "0 2px 24px rgba(26,24,20,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});

// ── FORM SUBMIT ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".btn-submit");
  const original = btn.textContent;
  btn.textContent = "Mensagem enviada ✓";
  btn.style.background = "#262521";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = "";
    btn.disabled = false;
    e.target.reset();
  }, 3500);
}
