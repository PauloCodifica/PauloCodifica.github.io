//fullBlogPostList se define en el script "blogpostmanager".
  
// Script para rellenar la sección de artículos recomendados.
const recommendedPosts = [document.getElementById("recommendedPost1"), document.getElementById("recommendedPost2"), document.getElementById("recommendedPost3"), document.getElementById("recommendedPost4")];

  recommendedPosts.forEach(element => {
    const selectRandomPost = fullBlogPostList[randomInteger(0, fullBlogPostList.length - 1)];
    
    const blogPostPreviewImage = document.createElement('img');
    blogPostPreviewImage.src = selectRandomPost.imageSrc;
    blogPostPreviewImage.alt = selectRandomPost.imageSrc;
    blogPostPreviewImage.style = "width: clamp(15rem, 12vw, 30rem); display: block; margin: 0 auto;";
    const blogPostPreviewImgAnchor = document.createElement('a');
    blogPostPreviewImgAnchor.href = selectRandomPost.linkHref;
    blogPostPreviewImgAnchor.appendChild(blogPostPreviewImage);

    const blogPostPreviewTitle = document.createElement('a');
    blogPostPreviewTitle.innerHTML = selectRandomPost.title;
    blogPostPreviewTitle.href = selectRandomPost.linkHref;
    blogPostPreviewTitle.style = "width: clamp(15rem, 12vw, 30rem);";

    element.append(blogPostPreviewImgAnchor, blogPostPreviewTitle);
  });