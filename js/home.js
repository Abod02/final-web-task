// Dynamic Greeting
const welcomeMessages = [
    "Enjoy our delicious meals!",
    "Feel at home with our service!",
    "Taste the best food in town!"
];
let welcomeIndex = 0;

setInterval(() => {
    const welcomeElement = document.querySelector(".welcome");
    welcomeElement.textContent = welcomeMessages[welcomeIndex];
    welcomeIndex = (welcomeIndex + 1) % welcomeMessages.length;
}, 4000);

  document.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { 
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
