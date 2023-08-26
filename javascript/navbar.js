//jquery para alternar entre menús
$(document).ready(function(){
  $(".menu-itemdrop").click(function(){
    $(this).next(".sub-menu").slideToggle();
  });
});

//javascript para el menú de navegación responsivo
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});





//Función del botón para colocar idioma en español.
var prefLenguaje = localStorage.getItem("LanguagePref");
const currentPage = window.location.pathname.split("/").pop();

document.getElementById("LangSetSpanishButton").onclick = function() {
  //Guardar preferencia de idioma.
  if (typeof(Storage) !== "undefined") { localStorage.setItem("LanguagePref", "Spanish"); }
    location.href = "../es/" + currentPage;
  return false;
}
//Función del botón para colocar idioma en inglés.
document.getElementById("LangSetEnglishButton").onclick = function() {
  //Guardar preferencia de idioma.
  if (typeof(Storage) !== "undefined") { localStorage.setItem("LanguagePref", "English"); }
    location.href = "../en/" + currentPage;
  return false;
}


//Guardado de preferencia de iluminación por defecto.
if (localStorage.getItem("IlluminationMode") === null) {
  localStorage.setItem("IlluminationMode", "Dark");
}

var botonModoIluminacion = document.getElementById("IlluminationButton");

//Cambiar apariencia de iluminación cuando carga la página.
if(localStorage.getItem("IlluminationMode") === "Dark") {
  document.getElementById("PageStyle").href="../css/style_pageDark.css";
  document.getElementById("NavbarStyle").href="../css/style_navbarDark.css";
  document.getElementById("PCLogo_Navbar").src="../images/mybrand/PCLogoWhite_160x160.png";
  if(document.getElementById("PCLogo_Banner") != null) { document.getElementById("PCLogo_Banner").src="../images/mybrand/PCLogoWhite_160x160.png"; }
  document.getElementById("PCLogo_Footer").src="../images/mybrand/PCLogoWhite_160x160.png";
  switch(prefLenguaje)
  {
    case "Spanish":
      botonModoIluminacion.innerHTML = '<i class="fas fa-adjust"></i> Modo Claro';
    break;
    case "English":
      botonModoIluminacion.innerHTML = '<i class="fas fa-adjust"></i> Light Mode';
    break;
  }
} else if(localStorage.getItem("IlluminationMode") === "Light") {
  document.getElementById("PageStyle").href="../css/style_pageLight.css";
  document.getElementById("NavbarStyle").href="../css/style_navbarLight.css";
  document.getElementById("PCLogo_Navbar").src="../images/mybrand/PCLogoBlack_160x160.png";
  if(document.getElementById("PCLogo_Banner") != null) { document.getElementById("PCLogo_Banner").src="../images/mybrand/PCLogoBlack_160x160.png"; }
  document.getElementById("PCLogo_Footer").src="../images/mybrand/PCLogoBlack_160x160.png";
  switch(prefLenguaje)
  {
    case "Spanish":
      botonModoIluminacion.innerHTML = '<i class="fas fa-adjust"></i> Modo Oscuro';
    break;
    case "English":
      botonModoIluminacion.innerHTML = '<i class="fas fa-adjust"></i> Dark Mode';
    break;
  }
}

//Función del botón para cambiar entre modo oscuro y modo claro.
botonModoIluminacion.onclick = function() {
    if(localStorage.getItem("IlluminationMode") === "Dark") {
      //Guardar preferencias de iluminación.
      if (typeof(Storage) !== "undefined") { localStorage.setItem("IlluminationMode", "Light"); }
      document.getElementById("PageStyle").href="../css/style_pageLight.css";
      document.getElementById("NavbarStyle").href="../css/style_navbarLight.css";
      document.getElementById("PCLogo_Navbar").src="../images/mybrand/PCLogoBlack_160x160.png";
      if(document.getElementById("PCLogo_Banner") != null) { document.getElementById("PCLogo_Banner").src="../images/mybrand/PCLogoBlack_160x160.png"; }
      document.getElementById("PCLogo_Footer").src="../images/mybrand/PCLogoBlack_160x160.png";
      switch(prefLenguaje)
      {
        case "Spanish":
          botonModoIluminacion.innerHTML = '<i class="fas fa-adjust"></i> Modo Oscuro';
        break;
        case "English":
          botonModoIluminacion.innerHTML = '<i class="fas fa-adjust"></i> Dark Mode';
        break;
      }
      return false;
    } else if(localStorage.getItem("IlluminationMode") === "Light") {
      //Guardar preferencias de iluminación.
      if (typeof(Storage) !== "undefined") { localStorage.setItem("IlluminationMode", "Dark"); }
      document.getElementById("PageStyle").href="../css/style_pageDark.css";
      document.getElementById("NavbarStyle").href="../css/style_navbarDark.css";
      document.getElementById("PCLogo_Navbar").src="../images/mybrand/PCLogoWhite_160x160.png";
      if(document.getElementById("PCLogo_Banner") != null) { document.getElementById("PCLogo_Banner").src="../images/mybrand/PCLogoWhite_160x160.png"; }
      document.getElementById("PCLogo_Footer").src="../images/mybrand/PCLogoWhite_160x160.png";
      switch(prefLenguaje)
      {
        case "Spanish":
          botonModoIluminacion.innerHTML = '<i class="fas fa-adjust"></i> Modo Claro';
        break;
        case "English":
          botonModoIluminacion.innerHTML = '<i class="fas fa-adjust"></i> Light Mode';
        break;
      }
      return false;
    }
};



function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Texto del pie de página.
switch(prefLenguaje)
{
  case "Spanish":
    document.getElementById('footercopyright').innerHTML = "PauloCodifica " + new Date().getFullYear() + '<br>' + "Todos los derechos reservados.";
  break;
  case "English":
    document.getElementById('footercopyright').innerHTML = "PauloCodifica " + new Date().getFullYear() + '<br>' + "All rights reserved.";
  break;
}