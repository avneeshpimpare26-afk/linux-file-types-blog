
// Small JavaScript features for the blog

// Show the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// Open and close the navigation menu on smaller screens.
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Close the mobile menu after selecting a section.
const links = navLinks.querySelectorAll("a");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});

// Copy command text when a Copy button is clicked.
const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const command = button.getAttribute("data-copy");

    navigator.clipboard.writeText(command).then(function () {
      button.textContent = "Copied!";

      setTimeout(function () {
        button.textContent = "Copy";
      }, 1500);

    }).catch(function () {
      button.textContent = "Copy unavailable";
    });
  });
});
