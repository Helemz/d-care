const button =document.querySelector(".button-install");

button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("animate");

    setTimeout(() => {
        button.classList.remove("animate");

    }, 600) // 1s = 1000ms
});