const form = document.querySelector(".form");

const openForm = () => {
  form.classList.add("form_active");
  document.body.style.overflow = "hidden";
};

const closeForm = () => {
  form.classList.remove("form_active");
  document.body.style.overflow = null;
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

const orderButtonsListener = () => {
  const orderButtons = document.querySelectorAll(".card__button");

  orderButtons.forEach((orderButton) => {
    orderButton.addEventListener("click", openForm);
  });
};

const burgerInitializer = () => {
  const burgerOpenButton = document.querySelector(".burger__button");
  const burgerCloseButton = document.querySelector(".burger__close-button");
  const burgerLinks = document.querySelectorAll(".burger__link");
  const burger = document.querySelector(".burger__menu");

  const closeBurger = () => {
    burger.classList.remove("burger_active");
  };

  burgerLinks.forEach((burgerLink) => {
    burgerLink.addEventListener("click", () => {
      closeBurger();
    });
  });

  burgerOpenButton.addEventListener("click", () => {
    burger.classList.add("burger_active");
  });

  burgerCloseButton.addEventListener("click", closeBurger);
};

addFormButtonsListener();
initializeSwipers();
orderButtonsListener();
burgerInitializer();
