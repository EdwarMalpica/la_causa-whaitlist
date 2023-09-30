/* ------------ Preloader -----------*/ //
window.addEventListener("load", function () {
  // Una vez que la página y todos los recursos se hayan cargado, ocultar el preloader
  let preloader = document.querySelector(".preloader");
  let contenido = document.querySelector(".contenido");

  setTimeout(function () {
    preloader.style.display = "none";
    contenido.style.display = "block";
  }, 2000); // Cambia este valor si deseas que el preloader se muestre durante más tiempo
});
