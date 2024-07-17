var posts=["2024/07/17/这是一篇新的博文/","2024/07/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };