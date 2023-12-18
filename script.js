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
  const swiperSmall = new Swiper(".card-swiper-small", {
    loop: true,
    slidesPerView: 9,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 3000,
    },
  });
  const swiper = new Swiper(".card-swiper", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
    },
    thumbs: {
      swiper: swiperSmall,
    },
  });
};

addFormButtonsListener();
initializeSwipers();
