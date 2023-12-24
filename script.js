const form = document.querySelector(".form");

const openForm = () => {
  form.classList.add("form_active");
};

const closeForm = () => {
  form.classList.remove("form_active");
};

const addFormButtonsListener = () => {
  const openFormButton = document.querySelector(".open-form-button");
  openFormButton.addEventListener("click", openForm);
  const closeFormButton = form.querySelector(".form__close-button");

  form.addEventListener("click", (e) => {
    const modalContent = form.querySelector(".form__container");
    if (!modalContent.contains(e.target)) closeForm(e);
  });

  closeFormButton.addEventListener("click", closeForm);
};

const initializeSwipers = () => {
  const cardSwipers = document.querySelectorAll(".swiper-big");
  const cardSwipersSmall = document.querySelectorAll(".swiper-small");

  console.log(cardSwipers, cardSwipersSmall);

  cardSwipers.forEach((cardSwiper, index) => {
    const swiperSmall = new Swiper(cardSwipersSmall[index], {
      loop: true,
      slidesPerView: 8,
      spaceBetween: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });
    const swiper = new Swiper(cardSwiper, {
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },
      thumbs: {
        swiper: swiperSmall,
      },
    });
  });
};

addFormButtonsListener();
initializeSwipers();
