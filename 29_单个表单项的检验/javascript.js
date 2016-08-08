	var msg = document.getElementById('msg');
	var btn = document.getElementById('btn');
	var tip = document.getElementById('tip');


	function validate(){
		var str = msg.value;
		if (getLength(str) == 0) {
			msg.style.border = '2px solid red';
			tip.style.color = 'red';
			tip.innerHTML = '姓名不能为空';
		}else if(getLength(str) >= 4 && getLength(str) <= 16 ){
			msg.style.border = '2px solid lightGreen';
			tip.style.color = 'lightGreen';
			tip.innerHTML = '格式正确';
		}else{
			msg.style.border = '2px solid red';
			tip.style.color = 'red';
			tip.innerHTML = '字符数应为4~16位';
		}
	}

	function getLength(str){
	// var getLength = function(str){
		var realLength = 0;
		for (var i = 0; i < str.length; i++) {
			charCode = str.charCodeAt(i);
			if (charCode >= 0 && charCode <= 128) {
				realLength += 1;
			}else{
				realLength += 2;
			}
		}
			return realLength;
	}

	btn.onclick = validate;

