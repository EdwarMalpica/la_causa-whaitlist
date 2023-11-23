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
});

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

// Obtener todos los botones con la clase "dropbtn"
var dropdownButtons = document.querySelectorAll(".dropbtn");
dropdownButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var dropdownMenu = button.nextElementSibling;
    dropdownMenu.classList.toggle("show");
  });
});

// Cerrar el menú si se hace clic fuera de él
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

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

function functionEnviar() {
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) {
    var isAndroid = /Android/i.test(navigator.userAgent);
    if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.sacbepayments.numi.android.mx&hl=es_419&gl=US";
    } else {
      window.location.href = "https://apps.apple.com/us/app/id1541072619";
    }
  } else {
    document.getElementById("functionEnviar").classList.toggle("show");
  }
}

/*
 ****MODAL VIDEO
 */
// Obtén todas las imágenes que tienen la clase "openModal"
var imagenes = document.getElementsByClassName("openModal");
for (var i = 0; i < imagenes.length; i++) {
  var imagen = imagenes[i];
  imagen.addEventListener("click", function () {
    var modalVideo = document.getElementById("modalVideo");
    modalVideo.style.display = "block";
  });
}

var closeButton = document.getElementsByClassName("cerrar")[0];
closeButton.addEventListener("click", function () {
  var modalVideo = document.getElementById("modalVideo");
  modalVideo.style.display = "none";
});
/**FINAL MODAL VIDEO */

/*
------ MODAL QR */
var imagenes = document.getElementsByClassName("cuentaModal");
for (var i = 0; i < imagenes.length; i++) {
  var imagen = imagenes[i];
  imagen.addEventListener("click", function () {
    var modalCuenta = document.getElementById("modalCuenta");
    modalCuenta.style.display = "block";
  });
}

var closeButton = document.getElementsByClassName("cerrarCuenta")[0];
closeButton.addEventListener("click", function () {
  var modalCuenta = document.getElementById("modalCuenta");
  modalCuenta.style.display = "none";
});
/**FINAL MODAL QR */

// Download btn menu
const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener("click", () => {
  const menu = document.querySelector(".container-download");
  menu.style.opacity = "100";
  menu.style.pointerEvents = "all";
});

window.onclick = (e) => {
  if (!e.target.classList.contains("download-btn")) {
    const menu = document.querySelector(".container-download");

    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
  }
};
