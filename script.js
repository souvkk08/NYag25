document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  const loader = document.getElementById("preloader");
  if (loader) {
    window.addEventListener("load", function () {
      loader.classList.add("hide");
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    });
  }

  // Countdown Timer
  const eventDate = new Date("March 31, 2025 10:00:00").getTime();
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      countdownElement.innerHTML = "🎉 Event Started!";
      countdownElement.style.display = "block";
      countdownElement.style.opacity = "1";
      countdownElement.style.color = "#FFD700";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.style.display = "block";
    countdownElement.style.opacity = "1";
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);

  // Menu System
  const menuButton = document.getElementById("menu-btn");
  const popupMenu = document.getElementById("popup-menu");
  const closeButton = document.getElementById("close-btn");

  if (menuButton && popupMenu && closeButton) {
    const toggleMenu = () => {
      popupMenu.classList.toggle("active");
      popupMenu.setAttribute("aria-hidden", 
        popupMenu.classList.contains("active") ? "false" : "true"
      );
    };

    menuButton.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && popupMenu.classList.contains("active")) {
        toggleMenu();
      }
    });

    document.addEventListener("click", (e) => {
      if (!popupMenu.contains(e.target) && 
          e.target !== menuButton && 
          popupMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  }

  // Video Handling
  const video = document.getElementById('bg-video');
  if (video) {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      video.playsInline = true;
      video.muted = true;
    }
    video.play().catch(() => {
      video.style.display = "none";
    });
  }
});