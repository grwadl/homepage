const plusButtons = document.querySelectorAll("span.main__plus-btn");
plusButtons.forEach(button=>button.addEventListener("click",
    ()=>button.parentElement.classList.toggle('active')));