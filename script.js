let navMenu = document.querySelector("nav");

let navIcon = document.querySelector("header i");
navIcon.onclick = () => {
  navIcon.classList.toggle("fa-x");
  navIcon.classList.toggle("fa-bars");
  navMenu.style.display = navIcon.classList.contains("fa-x") ? "flex" : "none";
}

if (window.screen.width < 768) {
  let navLinks = document.querySelectorAll("nav a");
  for (let i = 0; i < navLinks.length; i++)
    navLinks[i].onclick = () => {
      navIcon.classList.toggle("fa-x");
      navIcon.classList.toggle("fa-bars");
      navMenu.style.display = "none";
    }
}




  