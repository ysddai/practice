	var btn = document.getElementsByTagName('input'),
		preBtn = btn[0],
		inBtn = btn[1],
		postBtn = btn[2],
		treeRoot = document.getElementsByClassName('root')[0],
		divList = [],
		timer = null;

		preBtn.onclick = function(){
			reset();
			preOrder(treeRoot);
			changeColor();
		}

		inBtn.onclick = function(){
			reset();
			inOrder(treeRoot);
			changeColor();
		}

		postBtn.onclick = function(){
			reset();
			postOrder(treeRoot);
			changeColor();
		}


	// if (!node == null)  结果是错误的,需要注意符号的优先级
	//前序遍历
	function preOrder(node){
		if (!(node == null)) {
			divList.push(node);
			preOrder(node.firstElementChild);
			preOrder(node.lastElementChild);
		}
	}
	//中序遍历
	function inOrder(node){
		if (!(node == null)) {
			inOrder(node.firstElementChild);
			divList.push(node);
			inOrder(node.lastElementChild);
		}
	}

	//后序遍历
	function postOrder(node){
		if (!(node == null)) {
			postOrder(node.firstElementChild);
			postOrder(node.lastElementChild);
			divList.push(node);
		}
	}
	//颜色变化函数
	function changeColor(){
		var i = 0;
		divList[i].style.background = 'blue';
		timer = setInterval(function(argument){
			i++;
			if (i < divList.length) {
				divList[i-1].style.background = '#fff';
				divList[i].style.background = 'blue';
			}else{
				clearInterval(timer);
				divList[divList.length-1].style.background = '#fff';
			}
		}, 500)
	}

	//初始化样式
	function reset(){
		divList = [];
		clearInterval(timer);
		var divs = document.getElementsByTagName('div');
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.background = '#fff';
		}

	}
