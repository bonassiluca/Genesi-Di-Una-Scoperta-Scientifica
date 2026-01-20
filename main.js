document.body.classList.add("loading");

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  loader.style.transition = "opacity 0.6s ease";
  loader.style.opacity = "0";

  setTimeout(() => {
    loader.remove();
    document.body.classList.remove("loading");
  }, 600);
});