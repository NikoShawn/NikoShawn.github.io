var posts=["2024/07/19/北京理工大學校園介紹/","2024/07/23/健身房一周五練課表/","2024/07/19/港澳臺大學生内地升學指南/","2024/07/15/Hexo 網站搭建教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };