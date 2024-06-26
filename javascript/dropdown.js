const dropdown_btns = document.querySelectorAll(".dropdown-btn");

dropdown_btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const dropdown = e.currentTarget.nextElementSibling;
        dropdown.classList.toggle("show");
        document
            .querySelectorAll(".dropdown-btn + .dropdown-list")
            .forEach((dropdown) => {
                if (dropdown !== e.currentTarget.nextElementSibling) {
                    dropdown.classList.remove("show");
                }
            });
    });
});

window.onclick = (e) => {
    if (!e.target.matches(".dropdown-topbtn")) {
        const dropdowns = document.querySelectorAll(".dropdown-list");
        dropdowns.forEach((drpodown) => {
            drpodown.classList.remove("show");
        });
    }
};