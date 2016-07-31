
var $ = function(id){
  return document.getElementById(id);
};

function getData() {
  var data = [];
  for (var i = 0; i < $('source').childElementCount; i++) {
    var li = $('source').children[i];
    var strCity = li.innerHTML.split("空气质量")[0];
    var num = Number(li.children[0].innerHTML);
    data.push([strCity, num]);
    }
    return data;  
  }



function sortAqiData(data) {
  data.sort(function(a, b){
   return a[1]-b[1];
  });
  return data;
  // alert(data);
}


function render(data) {
  var items = '';
  for (var i = 0; i < data.length; i++) {
   items += '<li>第' + (i+1) + '名：' + data[i][0] + '空气质量：<b> '+ data[i][1] + '</b> </li>';
   }
   $('resort').innerHTML = items;
}
 

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
  $('sort-btn').disabled = true; 

}


function init() {
  $('sort-btn').onclick = btnHandle;
}

init();

