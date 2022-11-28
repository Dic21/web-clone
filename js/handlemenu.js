let nav = document.querySelector("#burgerNavBar");

function handleMenu() {
    if(nav.classList.contains("rwd-none")){
        nav.classList.remove("rwd-none");
        nav.classList.add("rwd-show");
    } else{
        nav.classList.remove("rwd-show");
        nav.classList.add("rwd-none");
    }
}