let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let allChoosenButtons = document.querySelectorAll(".plan .button");
let discardPlanChoosingBtn = document.querySelector(".modal__action--negative");
let togleBtn = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

const closeModal = () => {
    backdrop.classList.remove('display-block');
    if (modal !== null) {
        modal.classList.remove('display-block');
    }
};

const openModal = () => {
    backdrop.classList.add('display-block');
    modal.classList.add('display-block');
};

allChoosenButtons.forEach((btn) => {
    btn.addEventListener('click', openModal); 
});

if (discardPlanChoosingBtn !== null) {
    discardPlanChoosingBtn.addEventListener('click', closeModal);
}


backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('display-block');
    closeModal();
});

togleBtn.addEventListener('click', () => {
    mobileNav.classList.add('display-block');
    backdrop.classList.add('display-block');
});




   
