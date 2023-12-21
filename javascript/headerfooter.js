const bodyHeader = document.createElement('template');

// Contenido de la barra de navegación.
bodyHeader.innerHTML = `
    <!-- Logotipo -->
    <div> <a href="index.html" class="LogoText"><img src="" alt="Logo" class="LogoImage" id="PCLogo_Navbar"> PauloCodifica</a> </div>

    <!-- Barra de navegación -->
    <div class="navmenu">
    <ul class="menu">
        
        <!-- Botones de la barra -->
        <li class="menu-item"> <a id="navBarHomeButton" href="index.html">Placeholder</a> </li>
        <li class="menu-item">
        <a id="navBarMyProjectsButton" class="menu-itemdrop">Mis Proyectos <i class="fas fa-angle-down"></i></a>
        <ul class="sub-menu">
            <li class="sub-item"><a id="navBarGamesButton" href="games.html">Juegos</a></li>
            <li class="sub-item"><a id="navBarSoftwareButton" href="software.html">Programas</a></li>
            <li class="sub-item"><a id="navBarWebsitesButton" href="websites.html">Sitios Web</a></li>
            <li class="sub-item"><a id="navBarAcademicPapersButton" href="blog.html">Trabajos Académicos</a></li>
        </ul>
        </li>
        <li class="menu-item"><a id="navBarGalleryButton" href="gallery.html">Galería</a></li>
        <li class="menu-item"><a id="navBarAboutButton" href="about.html">Sobre Mi</a></li>
        <li class="menu-item"><a id="navBarIlluminationButton"><i class="fas fa-adjust"></i> Modo Oscuro</a></li>
        <li class="menu-item">
        <a id="navBarLanguageButton" class="menu-itemdrop">🌎 Idioma <i class="fas fa-angle-down"></i></a>
        <ul class="sub-menu">
            <li class="sub-item"><a href="" id="LangSetSpanishButton"><img src="https://flagcdn.com/w160/mx.png" alt="Español Latinoamerica" class="LangFlag"> Español</a></li>
            <li class="sub-item"><a href="" id="LangSetEnglishButton"><img src="https://flagcdn.com/w160/us.png" alt="English" class="LangFlag"> Inglés</a></li>
        </ul>
        </li>

        <!-- Botón cerrar menú extensible -->
        <div class="close-btn"> <i class="fa fa-times fa-2x"></i> </div>
        
    </ul>
    </div>

    <!-- Botón abrir menú extensible -->
    <div class="menu-btn"> <i class="fas fa-bars fa-2x"></i> </div>
`;


const bodyFooter = document.createElement('template');

// Contenido del pie de página.
bodyFooter.innerHTML = `
<footer>
  <img src="" alt="Logo" class="LogoImage" id="PCLogo_Footer">
  <p id="footercopyright"></p>
</footer>
`;

document.getElementById("webHeader").appendChild(bodyHeader.content);
document.body.appendChild(bodyFooter.content);



//  --- FUNCIONALIDADES Y PERSONALIZACIÓN DE LA BARRA DE NAVEGACIÓN Y EL PIE DE PÁGINA ---


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
  //const currentPage = window.location.pathname.split("/").pop(); --- Obsoleto ---
  const currentDirectory = window.location.pathname;
  
  document.getElementById("LangSetSpanishButton").onclick = function() {
    //Guardar preferencia de idioma.
    if (typeof(Storage) !== "undefined") { localStorage.setItem("LanguagePref", "Spanish"); }
    location.href = currentDirectory.replace("/en/", "/es/");
    return false;
  }
  //Función del botón para colocar idioma en inglés.
  document.getElementById("LangSetEnglishButton").onclick = function() {
    //Guardar preferencia de idioma.
    if (typeof(Storage) !== "undefined") { localStorage.setItem("LanguagePref", "English"); }
    location.href = currentDirectory.replace("/es/", "/en/");
    return false;
  }
  
  
  //Guardado de preferencia de iluminación por defecto.
  if (localStorage.getItem("IlluminationMode") === null) {
    localStorage.setItem("IlluminationMode", "Dark");
  }
  
  var botonModoIluminacion = document.getElementById("navBarIlluminationButton");
  
  //Cambiar apariencia de iluminación cuando carga la página.
  if(localStorage.getItem("IlluminationMode") === "Dark") {
    document.getElementById("PageStyle").href="../css/style_pageDark.css";
    document.getElementById("NavbarStyle").href="../css/style_navbarDark.css";
    document.getElementById("PCLogo_Navbar").src="../images/mybrand/PCLogoWhite_160x160.png";
    if(document.getElementById("PCLogo_Banner") != null) { document.getElementById("PCLogo_Banner").src="../images/mybrand/PCLogoWhite_160x160.png"; }
    document.getElementById("PCLogo_Footer").src="../images/mybrand/PCLogoWhite_160x160.png";
    if(document.getElementById("AboutStyle") != null) { document.getElementById("AboutStyle").href="../css/style_aboutDark.css"; }
    if(document.getElementById("GamesStyle") != null) { document.getElementById("GamesStyle").href="../css/style_gamesDark.css"; }
    if(document.getElementById("AcademicPapersStyle") != null) { document.getElementById("AcademicPapersStyle").href="../css/style_academicPapersDark.css"; }
    if(document.getElementById("BlogStandardStyle") != null) { document.getElementById("BlogStandardStyle").href="../css/style_blogStandardDark.css"; }
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
    if(document.getElementById("AboutStyle") != null) { document.getElementById("AboutStyle").href="../css/style_aboutLight.css"; }
    if(document.getElementById("GamesStyle") != null) { document.getElementById("GamesStyle").href="../css/style_gamesLight.css"; }
    if(document.getElementById("AcademicPapersStyle") != null) { document.getElementById("AcademicPapersStyle").href="../css/style_academicPapersLight.css"; }
    if(document.getElementById("BlogStandardStyle") != null) { document.getElementById("BlogStandardStyle").href="../css/style_blogStandardLight.css"; }
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
        if(document.getElementById("AboutStyle") != null) { document.getElementById("AboutStyle").href="../css/style_aboutLight.css"; }
        if(document.getElementById("GamesStyle") != null) { document.getElementById("GamesStyle").href="../css/style_gamesLight.css"; }
        if(document.getElementById("AcademicPapersStyle") != null) { document.getElementById("AcademicPapersStyle").href="../css/style_academicPapersLight.css"; }
        if(document.getElementById("BlogStandardStyle") != null) { document.getElementById("BlogStandardStyle").href="../css/style_blogStandardLight.css"; }
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
        if(document.getElementById("AboutStyle") != null) { document.getElementById("AboutStyle").href="../css/style_aboutDark.css"; }
        if(document.getElementById("GamesStyle") != null) { document.getElementById("GamesStyle").href="../css/style_gamesDark.css"; }
        if(document.getElementById("AcademicPapersStyle") != null) { document.getElementById("AcademicPapersStyle").href="../css/style_academicPapersDark.css"; }
        if(document.getElementById("BlogStandardStyle") != null) { document.getElementById("BlogStandardStyle").href="../css/style_blogStandardDark.css"; }
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
        document.getElementById('navBarHomeButton').innerHTML = 'Inicio';
        document.getElementById('navBarMyProjectsButton').innerHTML = 'Mis Proyectos <i class="fas fa-angle-down"></i>';
        document.getElementById('navBarGamesButton').innerHTML = 'Juegos';
        document.getElementById('navBarSoftwareButton').innerHTML = 'Programas';
        document.getElementById('navBarWebsitesButton').innerHTML = 'Sitios Web';
        document.getElementById('navBarAcademicPapersButton').innerHTML = 'Trabajos Académicos';
        document.getElementById('navBarGalleryButton').innerHTML = 'Galería';
        document.getElementById('navBarAboutButton').innerHTML = 'Sobre Mi';
        document.getElementById('navBarLanguageButton').innerHTML = '🌎 Idioma <i class="fas fa-angle-down"></i>';
        document.getElementById('LangSetSpanishButton').innerHTML = '<img src="https://flagcdn.com/w160/mx.png" alt="Español Latinoamerica" class="LangFlag"> Español';
        document.getElementById('LangSetEnglishButton').innerHTML = '<img src="https://flagcdn.com/w160/us.png" alt="English" class="LangFlag"> Inglés';
        document.getElementById('footercopyright').innerHTML = "PauloCodifica " + new Date().getFullYear() + '<br>' + "Todos los derechos reservados.";
    break;
    case "English":
        document.getElementById('navBarHomeButton').innerHTML = "Home";
        document.getElementById('navBarMyProjectsButton').innerHTML = 'My Projects <i class="fas fa-angle-down"></i>';
        document.getElementById('navBarGamesButton').innerHTML = 'Games';
        document.getElementById('navBarSoftwareButton').innerHTML = 'Software';
        document.getElementById('navBarWebsitesButton').innerHTML = 'Websites';
        document.getElementById('navBarAcademicPapersButton').innerHTML = 'Academic Papers';
        document.getElementById('navBarGalleryButton').innerHTML = 'Gallery';
        document.getElementById('navBarAboutButton').innerHTML = 'About Me';
        document.getElementById('navBarLanguageButton').innerHTML = '🌎 Language <i class="fas fa-angle-down"></i>';
        document.getElementById('LangSetSpanishButton').innerHTML = '<img src="https://flagcdn.com/w160/mx.png" alt="Español Latinoamerica" class="LangFlag"> Spanish';
        document.getElementById('LangSetEnglishButton').innerHTML = '<img src="https://flagcdn.com/w160/us.png" alt="English" class="LangFlag"> English';
        document.getElementById('footercopyright').innerHTML = "PauloCodifica " + new Date().getFullYear() + '<br>' + "All rights reserved.";
    break;
}