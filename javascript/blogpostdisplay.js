const genInfoDiv = document.getElementById('genInfoDiv');
genInfoDiv.style = `background: url("../images/software-developer-Innovalabs-Pixabay.jpg") no-repeat center; background-size: cover;`;


// Crear los elementos de la lista de publicaciones recientes.
recentBlogPostList.forEach( element => {
  const blogPostPreviewTitle = document.createElement('a');
  blogPostPreviewTitle.innerHTML = element.title;
  blogPostPreviewTitle.href = element.linkHref;

  const blogPostPreviewImage = document.createElement('img');
  blogPostPreviewImage.src = element.imageSrc;
  blogPostPreviewImage.alt = element.imageSrc;
  blogPostPreviewImage.style = "width: 100%;";
  const blogPostPreviewImgAnchor = document.createElement('a');
  blogPostPreviewImgAnchor.href = element.linkHref;
  blogPostPreviewImgAnchor.appendChild(blogPostPreviewImage);
  const blogPostPreviewDate = document.createElement('p');
  blogPostPreviewDate.innerHTML = element.date;

  const blogPostPreviewTags = document.createElement('p');
  switch(prefLenguaje)
  {
    case "Spanish":
      blogPostPreviewTags.innerHTML = "Etiquetas: ";
    break;
    case "English":
      blogPostPreviewTags.innerHTML = "Tags: ";
    break;
  }
  for(let i = 0; i < element.tags.length; i++) {
    blogPostPreviewTags.innerHTML += element.tags[i];
    if(i != element.tags.length - 1) {
      blogPostPreviewTags.innerHTML += ", ";
    } else {
      blogPostPreviewTags.innerHTML += ".";
    }
  }

  const blogPostPreviewText = document.createElement('div');
  blogPostPreviewText.classList.add("blogpostpreviewtext");
  blogPostPreviewText.append(blogPostPreviewTitle, blogPostPreviewDate, blogPostPreviewTags);

  const blogPostPreviewDiv = document.createElement('div');
  blogPostPreviewDiv.classList.add("blogpostpreviewdiv");
  blogPostPreviewDiv.append(blogPostPreviewImgAnchor, blogPostPreviewText);

  document.getElementById("recentPostsDiv").appendChild(blogPostPreviewDiv);
});




let blogPostPrevDivColorSwitch = 0;
let blogPostPrevDivBCKColors = ["rgb(45, 52, 85);", "rgb(125, 131, 160);"];


// Crear los elementos de la lista de todas las entradas.
fullBlogPostList.slice().reverse().forEach( element => {
  const blogPostPreviewTitle = document.createElement('a');
  blogPostPreviewTitle.innerHTML = element.title;
  blogPostPreviewTitle.href = element.linkHref;

  const blogPostPreviewImage = document.createElement('img');
  blogPostPreviewImage.src = element.imageSrc;
  blogPostPreviewImage.alt = element.imageSrc;
  blogPostPreviewImage.style = "width: 100%;";
  const blogPostPreviewImgAnchor = document.createElement('a');
  blogPostPreviewImgAnchor.href = element.linkHref;
  blogPostPreviewImgAnchor.appendChild(blogPostPreviewImage);
  const blogPostPreviewDate = document.createElement('p');
  blogPostPreviewDate.innerHTML = element.date;

  const blogPostPreviewTags = document.createElement('p');
  switch(prefLenguaje)
  {
    case "Spanish":
      blogPostPreviewTags.innerHTML = "Etiquetas: ";
    break;
    case "English":
      blogPostPreviewTags.innerHTML = "Tags: ";
    break;
  }
  for(let i = 0; i < element.tags.length; i++) {
    blogPostPreviewTags.innerHTML += element.tags[i];
    if(i != element.tags.length - 1) {
      blogPostPreviewTags.innerHTML += ", ";
    } else {
      blogPostPreviewTags.innerHTML += ".";
    }
  }

  const blogPostPreviewText = document.createElement('div');
  blogPostPreviewText.classList.add("blogpostpreviewtext");
  blogPostPreviewText.append(blogPostPreviewTitle, blogPostPreviewDate, blogPostPreviewTags);

  const blogPostPreviewDiv = document.createElement('div');
  blogPostPreviewDiv.classList.add("blogpostpreviewdiv");
  blogPostPreviewDiv.append(blogPostPreviewImgAnchor, blogPostPreviewText);
  blogPostPreviewDiv.style = "background-color: " + blogPostPrevDivBCKColors[ blogPostPrevDivColorSwitch % 2 === 0 ? 0 : 1 ];

  document.getElementById("allEntriesDiv").appendChild(blogPostPreviewDiv);

  blogPostPrevDivColorSwitch += 1;
});


// FUNCIONES DEL BUSCADOR
var varEstadoBusqueda = "inactiva";

document.getElementById("searchBarSubmitButton").addEventListener('click', () => {
  if (document.getElementById("searchBarInputText").value.length != 0) {
    if(varEstadoBusqueda == "inactiva") {
      IniciarAnimacionCarga();
    }
  }
});

document.getElementById('searchBarInputText').onkeydown = function(e){
  if (document.getElementById("searchBarInputText").value.length != 0) {
    if (varEstadoBusqueda == "inactiva") {
      if(e.keyCode == 13){
        IniciarAnimacionCarga();
      }
    }
  }
};


// Animación de cargar
var varTiempoCarga;

function IniciarAnimacionCarga() {
  varEstadoBusqueda = "activa";
  document.getElementById("animCargando").style.display = "block";
  document.getElementById("resultEntriesDiv").style.display = "none";
  document.getElementById("allEntriesDiv").style.display = "none";
  varTiempoCarga = setTimeout(CargarBlogPosts, randomInteger(1500, 2000));
}

/*function sanitize(string) {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
  };
  const reg = /[&<>"'/`=]/ig;
  return string.replace(reg, (match)=>(map[match]));
}*/

function BuscarBlogPosts() {
  let blogPostsMatchesFound = [];
  let userInputSearch = document.getElementById("searchBarInputText").value.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  userInputSearch = userInputSearch.replace(/[^a-zA-Z0-9 ]/g, '');
  userInputSearch = userInputSearch.toLowerCase();

  let userInputArray = userInputSearch.split(" ");
  userInputArray = [... new Set(userInputArray)];
  
  userInputArray.forEach( element => {
    if(element.length > 1) {
      fullBlogPostList.slice().reverse().forEach( blogPost => {
        // Verificación en los títulos de los blogs.
        let titleVerify = blogPost.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        titleVerify = titleVerify.replace(/[^a-zA-Z0-9 ]/g, '');
        titleVerify = titleVerify.toLowerCase();

        if(titleVerify.includes(element) && ! blogPostsMatchesFound.includes(blogPost)) {
          blogPostsMatchesFound.push(blogPost);
        }

        // Verificación en las etiquetas de los blogs.
        blogPost.tags.forEach( blogTag => {
          let tagVerify = blogTag.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          tagVerify = tagVerify.replace(/[^a-zA-Z0-9 ]/g, '');
          tagVerify = tagVerify.toLowerCase();

          // Verificar si la etiqueta tiene espacios en blanco.
          if(/\s/.test(tagVerify)) {
            tagVerify.split(" ").forEach( tagWord => {
              if(element == tagWord && ! blogPostsMatchesFound.includes(blogPost)) {
                blogPostsMatchesFound.push(blogPost);
              }
            }); 
          } else if(element == tagVerify && ! blogPostsMatchesFound.includes(blogPost)) {
            blogPostsMatchesFound.push(blogPost);
          }
          
        });
      });
    }
  });
  
  return blogPostsMatchesFound;
}

function CargarBlogPosts() {
  let listaBlogPosts = [];
  listaBlogPosts = BuscarBlogPosts();
  varEstadoBusqueda = "inactiva";
  document.getElementById("animCargando").style.display = "none";
  document.getElementById("returnToAllEntriesButton").style.display = "block";
  document.getElementById("resultEntriesDiv").style.display = "block";
  $(document.getElementById("searchEntriesDiv")).empty();

  if(listaBlogPosts.length == 0) {
    document.getElementById("noSearchResultsMsg").style.display = "block";
  } else {
    document.getElementById("noSearchResultsMsg").style.display = "none";
    blogPostPrevDivColorSwitch = 0;
    listaBlogPosts.forEach( element => {
      const blogPostPreviewTitle = document.createElement('a');
      blogPostPreviewTitle.innerHTML = element.title;
      blogPostPreviewTitle.href = element.linkHref;

      const blogPostPreviewImage = document.createElement('img');
      blogPostPreviewImage.src = element.imageSrc;
      blogPostPreviewImage.alt = element.imageSrc;
      blogPostPreviewImage.style = "width: 100%;";
      const blogPostPreviewImgAnchor = document.createElement('a');
      blogPostPreviewImgAnchor.href = element.linkHref;
      blogPostPreviewImgAnchor.appendChild(blogPostPreviewImage);
      const blogPostPreviewDate = document.createElement('p');
      blogPostPreviewDate.innerHTML = element.date;

      const blogPostPreviewTags = document.createElement('p');
      switch(prefLenguaje)
      {
        case "Spanish":
          blogPostPreviewTags.innerHTML = "Etiquetas: ";
        break;
        case "English":
          blogPostPreviewTags.innerHTML = "Tags: ";
        break;
      }
      for(let i = 0; i < element.tags.length; i++) {
        blogPostPreviewTags.innerHTML += element.tags[i];
        if(i != element.tags.length - 1) {
          blogPostPreviewTags.innerHTML += ", ";
        } else {
          blogPostPreviewTags.innerHTML += ".";
        }
      }

      const blogPostPreviewText = document.createElement('div');
      blogPostPreviewText.classList.add("blogpostpreviewtext");
      blogPostPreviewText.append(blogPostPreviewTitle, blogPostPreviewDate, blogPostPreviewTags);

      const blogPostPreviewDiv = document.createElement('div');
      blogPostPreviewDiv.classList.add("blogpostpreviewdiv");
      blogPostPreviewDiv.append(blogPostPreviewImgAnchor, blogPostPreviewText);
      blogPostPreviewDiv.style = "background-color: " + blogPostPrevDivBCKColors[ blogPostPrevDivColorSwitch % 2 === 0 ? 0 : 1 ];

      document.getElementById("searchEntriesDiv").appendChild(blogPostPreviewDiv);

      blogPostPrevDivColorSwitch += 1;
    });
  }
}


switch(prefLenguaje)
{
  case "Spanish":
    document.getElementById("searchBarInputText").placeholder = "Buscar..";
    document.getElementById("returnToAllEntriesButton").innerHTML = `<i class="fas fa-arrow-left"></i> Volver atrás`;
  break;
  case "English":
    document.getElementById("searchBarInputText").placeholder = "Search..";
    document.getElementById("returnToAllEntriesButton").innerHTML = `<i class="fas fa-arrow-left"></i> Go back`;
  break;
}

document.getElementById("returnToAllEntriesButton").addEventListener('click', () => {
  clearTimeout(varTiempoCarga);
  varEstadoBusqueda = "inactiva";
  document.getElementById("animCargando").style.display = "none";
  document.getElementById("returnToAllEntriesButton").style.display = "none";
  document.getElementById("resultEntriesDiv").style.display = "none";
  document.getElementById("allEntriesDiv").style.display = "block";
});