var navJson =
  '[{"id":1,"title":"叮当头条","href":"#","img":"./images/img01.jpg"},{"id":2,"title":"药师指导","href":"apothecaryInstruction.html","img":"./images/img02.jpg"},{"id":3,"title":"海外购","href":"#","img":"./images/img03.jpg"},{"id":4,"title":"医生在线","href":"tinkDoc.html","img":"./images/img04.jpg"},{"id":5,"title":"会员中心","href":"my.html","img":"./images/img05.jpg"}]';
var nav = JSON.parse(navJson);
window.addEventListener("load", function () {
  var indexProject = this.document.querySelector(".indexProject");
  var navHtml = "";
  for (let index = 0; index < nav.length; index++) {
    navHtml += `<a href="${nav[index].href}">
      <img src="${nav[index].img}" alt="" />
      <div>${nav[index].title}</div>
    </a>`;
  }
  indexProject.innerHTML = navHtml;
});
var shopJson =
  '[{"id":1,"title":"恒温持久发热 给你温暖呵护","desc":"【20片装】 [小林暖宝宝]一次性使用取暖片（即贴）10片×2","price":"72.40","xPrice":"54.90","img":"images/product01.jpg"},{"id":2,"title":"泡着喝维C 增强抵抗力","desc":"【70片】 [力度伸]维生素C泡腾片（橙味）1g×15片×2支×2盒+1g×15片","price":"148.80","xPrice":"99.90","img":"images/product02.jpg"}]';
var shop = JSON.parse(shopJson);

window.addEventListener("load", function () {
  var shopProject = this.document.querySelector(".shopProject");
  var shopHtml = "";
  for (let index = 0; index < shop.length; index++) {
    shopHtml += `<a class="part" href="#">
    <img src="${shop[index].img}" alt="" />
    <div class="information">
      <h1><span>28分钟</span>${shop[index].title}</h1>
      <div>${shop[index].desc}</div>
      <div>
        <span>低价换购</span>
        <span>1元换购</span>
        <span>立省17.50元</span>
      </div>
      <div>
        <div>
          <div>￥${shop[index].xPrice}</div>
          <div>￥${shop[index].price}</div>
        </div>
        <div class="iconfont icon-gouwuchekong"></div>
      </div>
    </div>
    </a>`;
  }
  shopProject.innerHTML = shopHtml;
});
