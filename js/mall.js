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
    }, 2000); // 每3秒钟切换一次轮播图
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
    // 定义要循环播放的文本列表
    var searchTexts = [
      "搜索药品、症状、品牌",
      "益生菌",
      "甲流",
      "猫狗用药",
      "壮阳",
      "肠胃",
    ];
    var currentIndex = 0;

    // 为搜索框设置无限循环的文本
    function setInfiniteSearchText() {
      var searchInput = document.getElementById("searchInput");
      searchInput.value = searchTexts[currentIndex];
      currentIndex = (currentIndex + 1) % searchTexts.length; // 循环到下一个文本
    }

    // 每2秒钟更新一次搜索框的文本
    setInterval(setInfiniteSearchText, 1000);

    var json = [
      {
        pic: "./images/mall-tw01.jpg",
        h4: "OTC京都念慈庵蜜炼川贝枇杷膏",
        p: "润肺化痰，止咳平喘，调心降火。用于伤风咳嗽，痰多气喘。",
      },
      {
        pic: "./images/mall-tw02.jpg",
        h4: "[同仁堂]甘草片",
        p: "补脾益气，清热解毒，祛痰止咳。用于脾胃虚弱。",
      },
      {
        pic: "./images/mall-tw03.jpg",
        h4: "OTC[济民可信]复方鲜竹沥液",
        p: "清热化痰，止咳。用于痰热咳嗽，痰黄粘稠。",
      },
      {
        pic: "./images/mall-tw04.jpg",
        h4: "OTC[小葵花]小儿止咳糖浆",
        p: "祛痰，镇咳。用于小儿感冒引起的咳嗽。",
      },
    ];
    var ul = document.querySelector(".tw").getElementsByTagName("ul")[0];

    function addRow(row) {
      var hang =
        "<img src='" +
        row.pic +
        "'><div class='text'><h4>" +
        row.h4 +
        "</h4><p>" +
        row.p +
        "</p></div>";
      var ne = document.createElement("li");
      ne.innerHTML = hang;
      ul.appendChild(ne);
    }
    for (let i = 0; i < json.length; i++) {
      addRow(json[i]);
    }
    // 延迟加载JSON数据以避免阻塞页面渲染
    document.addEventListener("DOMContentLoaded", (event) => {
      // 使用fetch从json文件加载数据
      fetch("data.json")
        .then((response) => response.json()) // 将响应解析为JSON
        .then((data) => {
          var ul = document.querySelector("#list"); // 获取ul元素
          function addRow(row) {
            var hang =
              "<img src='" +
              row.pic +
              "'><div class='text'><h4>" +
              row.h4 +
              "</h4><p>" +
              row.p +
              "</p></div>";
            var ne = document.createElement("li");
            ne.innerHTML = hang;
            ul.appendChild(ne);
          }
          for (let i = 0; i < data.length; i++) {
            // 使用从JSON文件中加载的数据创建新行
            addRow(data[i]);
          }
        })
        .catch((error) => console.error("Error:", error)); // 错误处理
    });