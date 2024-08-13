var posts=["2024/北京理工大學校園介紹/","2024/閲讀筆記（二）/","2024/閲讀筆記（一）/","2024/卡爾曼濾波器介紹/","2024/健身房一周五練課表/","2024/港澳臺大學生内地升學指南/","2024/Hexo 網站搭建教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };