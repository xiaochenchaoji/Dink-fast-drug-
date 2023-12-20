// 获取所有的链接元素  
var links = document.querySelectorAll('link1');  
  
// 为每个链接元素添加点击事件监听器  
links.forEach(function(link) {  
  link.addEventListener('click', function(e) {  
    e.preventDefault(); // 阻止链接的默认行为  
    alert('目前排队人数过多，您前面还有2位！'); // 弹出提示框  
  });  
});