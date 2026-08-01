document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("[data-carousel]");

  if (carousel) {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const prevButton = carousel.querySelector(".carousel-button-prev");
    const nextButton = carousel.querySelector(".carousel-button-next");
    const currentCounter = carousel.querySelector(".carousel-current");
    const totalCounter = carousel.querySelector(".carousel-total");

    let currentIndex = 0;
    let startX = 0;

    const showSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === currentIndex);
      });

      currentCounter.textContent = String(currentIndex + 1).padStart(2, "0");
      totalCounter.textContent = String(slides.length).padStart(2, "0");
    };

    prevButton.addEventListener("click", () => showSlide(currentIndex - 1));
    nextButton.addEventListener("click", () => showSlide(currentIndex + 1));

    carousel.addEventListener(
      "touchstart",
      (event) => {
        startX = event.touches[0].clientX;
      },
      { passive: true }
    );

    carousel.addEventListener(
      "touchend",
      (event) => {
        const endX = event.changedTouches[0].clientX;
        const delta = endX - startX;

        if (Math.abs(delta) < 50) {
          return;
        }

        showSlide(delta < 0 ? currentIndex + 1 : currentIndex - 1);
      },
      { passive: true }
    );

    showSlide(0);
  }

  const reveals = document.querySelectorAll(".reveal");

  const showAllReveals = () => {
    reveals.forEach((element) => element.classList.add("is-visible"));
  };

  if (!("IntersectionObserver" in window)) {
    showAllReveals();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.08,
    }
  );

  reveals.forEach((element) => observer.observe(element));

  window.setTimeout(showAllReveals, 1600);
});
