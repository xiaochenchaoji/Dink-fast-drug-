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