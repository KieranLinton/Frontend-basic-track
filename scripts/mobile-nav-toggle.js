const mainNavigationMenu = document.querySelector("#mainNavigationMenu");
const mainNavigationOpen = document.querySelector("#mainNavigationOpen");
const mainNavigationClose = document.querySelector("#mainNavigationClose");

onOpen = () => mainNavigationMenu.classList.add("menu-active");
onClose = () => mainNavigationMenu.classList.remove("menu-active");

mainNavigationOpen.addEventListener("click", onOpen);
mainNavigationClose.addEventListener("click", onClose);
window.navigation.addEventListener("navigate", onClose);
