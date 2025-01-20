document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger-id"); // gets DIV hamburger to listen for clicks
  const menu = document.getElementById("mobile-menu-list-id"); // gets DIV with mobile menu items
  const btn = document.getElementById("dropbtn"); //gets DIV containing hamburger to change it's border color

  hamburger.addEventListener("click", () => {
    //triggered when hamburger cliked
    menu.classList.toggle("show"); // adds/removes visible style to mobile pop-up menu
    btn.classList.toggle("cliked"); // adds/removes green border style around hamburger
  });
});
