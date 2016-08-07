	$ = function(el) {
		return document.querySelector(el);
	}

	var arrdata = [];
	$('#insert').onclick = function(){
		var str = $('#textArea').value.trim();
		// split() 方法用于把一个字符串分割成字符串数组。
		var arrWord = str.split(/[^0-9A-Za-z\u4e00-\9fa5]+/).filter(function(e){
			if (e.length != 0) {
				return true;
			}else { 
				return false;
			}
		});
		// concat() 方法用于连接两个或多个数组。
		 // 该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
		arrData = arrData.concat(arrWord);
		render();
	}

	$('#search').onclick = function(){
		var str = $('#searchInput').value.trim();
		render(str);
	}

	function render(str){
		$('#result').innerHTML = arrData.map(function(d){
			if ( str.length != 0) {
				d = d.replace(new RegExp(str, 'g'), '<span>' + str + '</span>');
			}
			return '<div>'	+ d + '</div>';		
		// join()用于把数组中的所有元素放入一个字符串。
		// join('')的意义是,如果不用指定的('')间隔,将使用默认的(,)间隔.	
		}).join('');
	}