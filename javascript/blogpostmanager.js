// Constructor de Blog Posts
function BlogPostPreview(title, imageSrc, date, tags, linkHref) {
  this.title = title;
  this.imageSrc = imageSrc;
  this.date = date;
  this.tags = tags;
  this.linkHref = linkHref;
}

let printHelloBlog1;

switch(prefLenguaje)
{
  case "Spanish":
    printHelloBlog1 = new BlogPostPreview( `Imprimir( " Hola Blog! " )`, "../images/blogs/Print_Hello_Blog.jpg", "20 / Dic / 2023", ["Blog", "Bloguear", "Publicación"], "../es/blog/Print_Hello_Blog.html" );
  break;
  case "English":
    printHelloBlog1 = new BlogPostPreview( `Print( " Hello Blog! " )`, "../images/blogs/Print_Hello_Blog.jpg", "20 / Dec / 2023", ["Blog", "Blogging", "Post"], "../en/blog/Print_Hello_Blog.html" );
  break;
}

const anotherPost = new BlogPostPreview( "Technology tips for newbies and much more", "../images/WebDevExample1.jpg", "13 / Dic / 2023", ["technology", "software", "hardware", "Web dev", "tips"], "../es/academic_papers/Test_Post.html" );
const myThirdPost = new BlogPostPreview( "AI and it's functionalities", "../images/dogUsingPC.jpg", "14 / Dic / 2023", ["AI", "Artificial", "Intelligence"], "../es/academic_papers/Test_Post.html" );

// Lista Completa de todos los Blog Posts.
// IMPORTANTE -- Añadir todo nuevo blog post al final de la lista.
const fullBlogPostList = [printHelloBlog1/*, anotherPost, myThirdPost*/];
const recentBlogPostList = [fullBlogPostList[fullBlogPostList.length - 1]/*, fullBlogPostList[fullBlogPostList.length - 2]*/];