document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2.2,
      },
      640: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 2.2,
      },
    },
  });
  new Swiper(".profileSwiper", {
    slidesPerView: 3.7,
    spaceBetween: 13,
    grabCursor: true,
  });
  function toggleMenu(btn) {
    const menu = btn.parentElement.querySelector(".dropdown-menu");
    menu.classList.toggle("hidden");
  }

  // click outside close
  window.toggleMenu = function (btn) {
    const menu = btn.parentElement.querySelector(".dropdown-menu");
    menu.classList.toggle("hidden");
  };

  document.addEventListener("click", (e) => {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (!menu.parentElement.contains(e.target)) {
        menu.classList.add("hidden");
      }
    });
  });
  //video play
  const playBtnWrapper = document.getElementById("playBtnWrapper");
  const videoThumbnail = document.getElementById("videoThumbnail");
  const customVideo = document.getElementById("customVideo");

  playBtnWrapper.addEventListener("click", () => {
    videoThumbnail.classList.add("hidden"); 
    customVideo.classList.remove("hidden");
    customVideo.play();
    playBtnWrapper.classList.add("hidden");
  });
});
