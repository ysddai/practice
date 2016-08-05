var $  = function(el){
	return document.querySelector(el);
}
	function radioChange(){
		if ($('#inSchoolRadio').checked) {
			$('.inSchool').className = 'inSchool';
			$('.outSchool').className = 'outSchool hide';
		}else{
			$('.inSchool').className = 'inSchool hide';
			$('.outSchool').className = 'outSchool';
		}
	}

	function selectDistrict(){
		var data = {
			bj: ["北京大学", "清华大学", "北京航空航天大学"],
			sh: ["复旦大学", "上海交通大学", "同济大学"],
			hz: ["浙江大学", "杭州电子科技大学", "浙江工业大学"]
		}


		// 知识点: options,selectedIndex 的用法
		var selected = $('#select1').options[$('#select1').selectedIndex].value;
			$('#select2').innerHTML = '';

		for (var i = 0; i < data[selected].length; i++) {
			var opt = document.createElement('option');
			opt.innerHTML = data[selected][i];
			opt.value = data[selected][i];
			$('#select2').appendChild(opt);

	}

}