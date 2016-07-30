(function() {
  /*	
  在注释下方写下代码
  给按钮button绑定一个点击事件
  在事件处理函数中
  获取aqi-input输入的值，并显示在aqi-display中
  */
  var $ = function(id){
  	return document.getElementById(id);
  };

 	$('button').onclick = function(){
 		handler();
  	}

  	$('aqi-input').onkeyup = function(event){
  		if (event.keyCode === 13) {
  			handler();
  		}	
  	}


  	function handler(){
  		var num = parseInt($('aqi-input').value);
  		if (!isNaN(num) && (num>=0) && (num<=1000)) {
  			$('aqi-display').innerHTML = num;
  		}else{
  			$('aqi-input').value = " 不是有效的AQI数值，请重新输入0-1000的有效整数！";
			$('aqi-input').style.color = "red";	
  		}
  	}

})();
