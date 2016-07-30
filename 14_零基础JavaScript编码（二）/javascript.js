

var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

(function () {

  /*
  在注释下方编写代码
  遍历读取aqiData中各个城市的数据
  将空气质量指数大于60的城市显示到aqi-list的列表中
  */
  var oUl = document.getElementById('aqi-list');
  var oLi = document.createElement('li');
  aqiData.sort(function(a, b){
    return b[1]-a[1];
  });

  for (var i = 0; i < aqiData.length; i++) {
        if (aqiData[i][1] > 60) {
     oLi.innerHTML += "<li> 第" + (i+1) + "名：" + aqiData[i][0] + "," + aqiData[i][1] + "</li>";
      }
  }

  oUl.appendChild(oLi);

  // 第一名：西安,100
  // 第二名：北京,90
  // 第三名：成都,90


})();

