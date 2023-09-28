
/* ------------ Preloader -----------*///
window.addEventListener('load', function() {
  // Una vez que la página y todos los recursos se hayan cargado, ocultar el preloader
  var preloader = document.querySelector('.preloader');
  var contenido = document.querySelector('.contenido');
  
  setTimeout(function() {
    preloader.style.display = 'none';
    contenido.style.display = 'block';
  }, 2000); // Cambia este valor si deseas que el preloader se muestre durante más tiempo
});

/*---------------*/


/* ------------ Dropdown -----------*/

var dropdownButtons = document.querySelectorAll('.dropbtn');
dropdownButtons.forEach(function(button) {
  button.addEventListener('click', toggleDropdown);
});

function toggleDropdown(event) {
  var dropdown = event.target.nextElementSibling;
  dropdown.classList.toggle("show");
}

window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function(dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
  }
});

function redirectToAppStore() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    // Redirigir a la Play Store de Android
    window.location.href = 'https://play.google.com/store/apps/details?id=com.sacbepayments.numi.android';
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    // Redirigir a la App Store de iOS
    window.location.href = 'https://apps.apple.com/us/app/id1526398350';
  }
}

/*---------------*/



/* ------------ Menu -----------*/
const navigationMainMenu = document.querySelector(".mainMenu");
const hamburguerElement = document.querySelector(".hamburguer");
const button = document.getElementById("downloadMobile");
const userAgent = navigator.userAgent;

hamburguerElement.addEventListener("click", () => {
    navigationMainMenu.classList.toggle("mainMenu--open");
    hamburguerElement.classList.toggle("hamburguer--open");
});

navigationMainMenu.addEventListener("click", () => {
    navigationMainMenu.classList.remove("mainMenu--open");
    hamburguerElement.classList.remove("hamburguer--open");
})
/*---------------------*/

/* ----- MODAL VIDEO ------------*/
var imagenes = document.getElementsByClassName("openModal");
var modal = document.getElementById("modalVideo");

if (screen.width >= 699) {
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].onclick = function() {
      modal.style.display = "block";
    }
  }
} else {
  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].onclick = function() {
      modal.style.display = "flex";
    }
  }
}

var cerrar = document.getElementsByClassName("cerrar")[0];
cerrar.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/* ---------------------*/



/* ------ MODAL QR ---------------*/
var imagenes = document.getElementsByClassName('cuentaModal');
for (var i = 0; i < imagenes.length; i++) {
    var imagen = imagenes[i];
    imagen.addEventListener('click', function() {
        var modalCuenta = document.getElementById('modalCuenta');
        modalCuenta.style.display = 'block';
    });
}

var closeButton = document.getElementsByClassName('cerrarCuenta')[0];
closeButton.addEventListener('click', function() {
    var modalCuenta = document.getElementById('modalCuenta');
    modalCuenta.style.display = 'none';
});
/**------------FINAL MODAL QR */

// Función para cambiar el video en el reproductor
function cambiarVideo(videoId) {
  var reproductor = document.getElementById('reproductor-video');
  reproductor.src = 'https://www.youtube.com/embed/' + videoId;
}

/*Section */
function cambiaVisibilidad() {
  var div1 = document.getElementsByClassName("opc_es");
  var div2 = document.getElementsByClassName("opc_en");
  if ((div2.style.display = "block")) {
    div2.style.display = "none";
    div1.style.display = "block";
  } else {
    div2.style.display = "block";
    div1.style.display = "none";
  }
}

/*Accordion */
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionContent = header.nextElementSibling;
    const popup_accordeon = accordionContent.querySelector(".popup_accordeon");
    const popupClose = popup_accordeon.querySelector(".popup-close");

    // Toggle accordion
    accordionContent.classList.toggle("active");
    header.classList.toggle("active");

    // Toggle popup
    popup_accordeon.classList.toggle("active");

    // Close popup on click outside
    popup_accordeon.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup_accordeon.classList.remove("active");
        accordionContent.classList.remove("active");
        header.classList.remove("active");
      }
    });

    // Close popup on click of close button
    popupClose.addEventListener("click", (e) => {
      e.preventDefault();
      popup_accordeon.classList.remove("active");
      accordionContent.classList.remove("active");
      header.classList.remove("active");
    });
  });
});