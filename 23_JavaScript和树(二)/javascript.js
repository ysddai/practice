var oBtns = document.getElementsByTagName('button'),
	 rootNode = document.getElementById('root'),
	 BFindex = 0,	 
	 lock = false;


	 function traverseDF(node, nodeList){
	 	if (node) {
	 		nodeList.push(node);
	 		for (var i = 0; i < node.children.length; i++) {
	 			traverseDF(node.children[i], nodeList);
	 		}
	 	}
	 }

	 function traverseBF(node, nodeList){;
	 	var i = 0;
	 	if (node) {
	 		nodeList.push(node);
	 		traverseBF(node.nextElementSibling, nodeList);
	 		node = nodeList[BFindex++];
	 		traverseBF(node.firstElementChild, nodeList);
	 	}
	 }

	 function traverseRender(nodeList, foundText){
	 		var i = 0,
	 			len = nodeList.length;  
	 	if (nodeList[i].firstChild.nodeValue.replace(/^\s*|\s*$/g, '') == foundText) {
	 		nodeList[i].className = 'found';
	 		lock = false;
	 		clearInterval(timer);
	 	} else{
	 		nodeList[i++].className = 'active';
	 	}

	 	lock = true;
	 	timer = setInterval(function(){
	 		if (i<len) {
	 			nodeList[i-1].className = '';
	 			if (nodeList[i].firstChild.nodeValue.replace(/^\s*|\s*$/g, '') == foundText) {
	 				nodeList[i].className = 'found';
					
	 				lock = false;
					clearInterval(timer);
	 			}else{
	 				nodeList[i++].className = 'active';
	 			}
	 		}else {
	 			nodeList[i-1].className = '';
	 			lock = false;
	 			clearInterval(timer);
	 		}
	 	}, 500);
	 }

	 function traverse(traverseIndex){

	 	var nodeList = [],
	 		foundList = [];
	 	switch(traverseIndex){
	 		case 0:traverseDF(rootNode, nodeList);
	 			break;
	 		case 1: BFindex = 0;
	 			traverseBF(rootNode, nodeList);
	 			break; 		
	 		case 2: var foundText = document.getElementsByTagName('input')[0].value;
	 		traverseDF(rootNode, nodeList);
	 			break; 		
	 		case 3: BFindex = 0;
	 			var foundText = document.getElementsByTagName('input')[0].value;
	 		traverseBF(rootNode, nodeList);
	 			break;
	 	}
	 	reset();	
	 	traverseRender(nodeList, foundText);
	 }


function init(){
	for (var i = 0; i < oBtns.length; i++) {
		(function(i){
			oBtns[i].onclick = function(){
				if (lock === true) {
					alert('ÕýÔÚ±éÀûÖÐ!');
				}else{
					traverse(i);
				}
			}
		}(i));
	}
}

function reset(){
	var nodeList = [];
	traverseDF(rootNode, nodeList);
	for(var i=0; i<nodeList.length; i++){
		nodeList[i].className = 'default';
			
	}

}
	
init();