var banner = document.getElementById("banner");
var content = banner.querySelector(".content");
var controls = banner.querySelector(".controls");
var links = content.getElementsByTagName("a");
var dots = controls.getElementsByTagName("a");
var currentIndex = 0;
    // 当前显示的轮播图索引
var intervalId = setInterval(function () {
      // 设置定时器，自动切换轮播图
  currentIndex++;
  if (currentIndex >= links.length) {
        // 如果当前索引大于等于轮播图数量，重置为0
    currentIndex = 0;
  }
  showBanner(currentIndex); // 显示对应索引的轮播图
}, 3000); // 每3秒钟切换一次轮播图
function showBanner(index) {
      // 显示指定索引的轮播图，并更新控制点状态
  for (var i = 0; i < links.length; i++) {
        // 隐藏所有轮播图和控制点，并移除控制点的选中状态
    links[i].style.display = "none";
    dots[i].className = "";
  }
  links[index].style.display = "block";
      // 显示指定索引的轮播图，并添加控制点的选中状态，这里通过修改样式来实现轮播图的切换和控制点的选中状态更新。你可以根据需要进行更多的样式和交互效果的调整。另外，记得替换掉你的图片链接。
  dots[index].className = "checked";
  }
controls.addEventListener("click", function (e) {
      // 点击控制点切换轮播图
  var target = e.target;
  if (target.tagName.toLowerCase() === "a") {
    e.preventDefault();
        // 阻止默认行为，即阻止链接跳转
    currentIndex = Array.prototype.indexOf.call(dots, target);
        // 获取点击的控制点的索引
    showBanner(currentIndex);
  }
  });