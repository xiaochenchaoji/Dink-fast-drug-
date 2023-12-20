var docJson =
  '[{ "id": 1, "name": "韩医师", "desc": "中医药执业医师，北京中医大学毕业 解答详细 熟悉常见病得药物调剂", "jieda": "456489", "haoping": "99", "img": "images/docter01.jpg" }, { "id": 2, "name": "李医师", "desc": "用药精准合理，对儿科用药多有研究，因为对中药的喜爱，擅长中药养生。作为药师，丰富的用药经验，助你合理选药，健康养生", "jieda": "59846", "haoping": "98", "img": "images/docter02.jpg" }, { "id": 3, "name": "回医师", "desc": "医药企业多年工作经验 经验丰富 指导用药精准合理", "jieda": "19846", "haoping": "98", "img": "images/docter03.jpg" }]';
var doc = JSON.parse(docJson);

window.addEventListener("load", function () {
  var doctor = this.document.querySelector("#doctor");
  var docHtml = "";
  for (let index = 0; index < doc.length; index++) {
    docHtml += `<div>
      <a class="information" href="#">
        <div>
          <img src="${doc[index].img}" />
          <div class="title">
            <div class="top">
              <div>
                <span>${doc[index].name}</span>
                <span>★★★★★</span>
              </div>
              <span>未收藏</span>
            </div>
            <div class="bottom">
              <span>解答:</span>
              <span>${doc[index].jieda}次</span>
              <span>好评：</span>
              <span>${doc[index].haoping}%</span>
            </div>
          </div>
          <span class="iconfont icon-xianghou"></span>
        </div>
        <p>${doc[index].desc}</p>
      </a>
      <div class="function">
        <a href="#">电话咨询</a>
        <a href="#">药师回电</a>
        <a href="#">在线咨询</a>
      </div>
    </div>`;
  }
  doctor.innerHTML = docHtml;
});
