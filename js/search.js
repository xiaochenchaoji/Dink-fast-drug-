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
    setInterval(setInfiniteSearchText, 3000);