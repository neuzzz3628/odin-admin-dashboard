const button = document.getElementById("menuButton");
const menu = document.getElementById("menuList");

button.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Optional: Close when clicking outside
document.addEventListener("click", (e) => {
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

function applyGroupHover(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      elements.forEach((e) => e.classList.add("hovered"));
    });
    el.addEventListener("mouseleave", () => {
      elements.forEach((e) => e.classList.remove("hovered"));
    });
  });
}

applyGroupHover(".task");
applyGroupHover(".hist");
applyGroupHover(".comm");
applyGroupHover(".supp");
applyGroupHover(".priv");

function applyGroupHighlight(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      elements.forEach((e) => e.classList.add("highlight"));
    });
    el.addEventListener("mouseleave", () => {
      elements.forEach((e) => e.classList.remove("highlight"));
    });
  });
}

applyGroupHighlight(".logo");