//事件绑定函数，兼容浏览器差异
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }
    else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
    }
    else {
        element["on" + event] = listener;
    }
}


// var $ = function(el){
// 	return document.querySelector(el);
// }
var $ = function(id){
	return document.getElementById(id);
}



var queue = {
	str: [],
	leftPush: function(num){
		this.str.unshift(num);
		this.paint();
	},

	rightPush: function(num){
		this.str.push(num);
		this.paint();
	},

	isEmpty: function(){
		return (this.str.length == 0);

	},

	leftPop: function(num){
		if (!this.isEmpty()) {
			alert(this.str.shift());
			this.paint();
		}else{
			alert('the queue is already empty!')
		}
	},

	rightPop: function(num){
		if (!this.isEmpty()) {
			alert(this.str.pop());
			this.paint();
		}else{
			alert('the queue is already empty!')
		}
	},


	paint: function(){
		var str = '';
		each(this.str, function(items){
			str += '<div>' + parseInt(items) + '</div>';
		})
		$('container').innerHTML = str;
		addDivDelEvent();
	},

	deleteID: function(id){
		console.log(id);
		this.str.splice(id, 1);
		this.paint();
	}

}


// 遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递，后面用
// return fn(arr[i], i) 的用法是错误的,只运行一次返回值就停止了
function each(arr, fn){
	for (var i = 0; i < arr.length; i++) {
		fn(arr[i], i)
	}
}

//为container中的每个div绑定删除函数
	function addDivDelEvent(){
		for (var i = 0; i < $('container').children.length; i++) {
			addEvent($('container').children[i], 'click', function(i){
				return function(){return queue.deleteID(i)};
			}(i));
		}
	} 



	//为4个按钮绑定函数
	//	var inp = btnList[0].value; 的位置不可以在addEvent(){}外面,那是一个定值
	var btnList = document.getElementsByTagName('input');
	// var inp = btnList[0].value;
	addEvent(btnList[1], 'click', function(){
		var inp = btnList[0].value;
		if (inp.match(/^[0-9]+$/)) {
				queue.leftPush(inp);
			}else{
				alert('Please enter an interger!');
			}
	});

	addEvent(btnList[2], 'click', function(){
		var inp = btnList[0].value;
		if (inp.match(/^[0-9]+$/)) {
			queue.rightPush(inp);
		}else{
			alert('Please enter an interger!');
		}

	});

	addEvent(btnList[3], 'click', function(){queue.leftPop();})

	addEvent(btnList[4], 'click', function(){queue.rightPop();})