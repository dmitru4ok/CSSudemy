let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let allChoosenButtons = document.querySelectorAll(".plan .button");
let discardPlanChoosingBtn = document.querySelector(".modal__action--negative");
let togleBtn = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

const closeModal = () => {
    backdrop.classList.remove('display');
    
    setTimeout(()=>{
        backdrop.style.display = 'none';
    }, 200);
    if (modal !== null) {
        modal.classList.remove('display');
    }
};

const openModal = () => {
    modal.style.display  = 'block';
    backdrop.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('display');
        backdrop.classList.add('display');
    }, 1);
    
};

allChoosenButtons.forEach((btn) => {
    btn.addEventListener('click', openModal); 
});

if (discardPlanChoosingBtn !== null) {
    discardPlanChoosingBtn.addEventListener('click', closeModal);
}


backdrop.addEventListener('click', () => {
    mobileNav.classList.remove('display');
    closeModal();
});

togleBtn.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('display');
        mobileNav.classList.add('display');
    }, 1);
    
});




   
