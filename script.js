const plusButtons = document.querySelectorAll("span.main__plus-btn");
plusButtons.forEach(button => button.addEventListener("click",
    () => button.parentElement.classList.toggle('active')));
const navLinks = document.querySelectorAll(".nav__linkItem");
navLinks.forEach(link => link.addEventListener("click",
    () => {
        const block = document.querySelector("#" + link.id + "El");
        window.scrollTo({
            top:block.offsetTop -90,
            behavior:'smooth'
        })
    }));