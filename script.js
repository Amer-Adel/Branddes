// Show nav menu on phone screens
if (window.screen.width < 768) {
  let navMenu = document.querySelector("nav");

  let navIcon = document.querySelector("header i");
  navIcon.onclick = () => {
    navIcon.classList.toggle("fa-x");
    navIcon.classList.toggle("fa-bars");
    navMenu.style.display = navIcon.classList.contains("fa-x") ? "flex" : "none";
  }

  let navLinks = document.querySelectorAll("nav a");
  for (let i = 0; i < navLinks.length; i++)
    navLinks[i].onclick = () => {
      navIcon.classList.remove("fa-x");
      navIcon.classList.add("fa-bars");
      navMenu.style.display = "none";
    }
}

// Show and hide pop-up consultation Form
let popUpForm = document.querySelector(".pop-up-form-container");
document.querySelector("#hide-pop-up-form").onclick = () => popUpForm.style.display = "none";
document.querySelector("#show-pop-up-form").onclick = () => popUpForm.style.display = "flex";

// Send email from contact form
document.querySelector("footer form").onsubmit = () => {
  Email.send({
    SecureToken : "",
    To : 'them@website.com',
    From : document.getElementById("").value,
    Subject : "This is the subject",
    Body : "Name: " + document.getElementById("").value
        +  "<br> Phone: "
  }).then(
    message => alert("تم الارسال بنجاح")
  );
  
  reset();
  return false;
}

// Send consultation from pop-up form
