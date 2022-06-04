const plusButtons = document.querySelectorAll("span.main__plus-btn");
plusButtons.forEach(button => button.addEventListener("click",
    () => button.parentElement.classList.toggle('active')));
const navLinks = document.querySelectorAll(".nav__linkItem");
navLinks.forEach(link => link.addEventListener("click",
    () => {
        document.body.classList.remove('disabled');
        const block = document.querySelector("#" + link.id + "El");
        window.scrollTo({
            top: block.offsetTop - 90,
            behavior: 'smooth'
        });
        document.querySelector('.nav').classList.remove('active');
    }));
const burgerMenuButton = document.querySelector('.nav__burger-wrapper');
burgerMenuButton.addEventListener("click", () => {
    console.log(1);
    document.querySelector('.nav').classList.toggle('active');
    document.body.classList.toggle('disabled');
})