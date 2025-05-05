document.querySelector("#date").textContent = new Date().getFullYear();

document.querySelector(".home").addEventListener("click", () => {
  document.querySelector(".landing").scrollIntoView({
    behavior: "smooth",
  });
});

document.querySelector(".about").addEventListener("click", () => {
    document.querySelector(".about-us").scrollIntoView({
      behavior: "smooth",
    });
});
  
document.querySelector(".ser").addEventListener("click", () => {
    document.querySelector(".services").scrollIntoView({
      behavior: "smooth",
    });
});

document.querySelector(".tour").addEventListener("click", () => {
    document.querySelector(".to").scrollIntoView({
      behavior: "smooth",
    });
  });



