const navtoggle = document.getElementById ("nav-toggle");
const navList = document.getElementById ("nav-list");


navtoggle.addEventListener("click", () => {
        navList.classList.toggle("hidden");

});