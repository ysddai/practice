var msg = document.getElementById('msg'),
    tip = document.getElementById('tip'),
    btn = document.getElementById('btn'),

    inputLength = 0;


    function validate(){
        var str = msg.value;
        if (getLength(str) == 0) {
            tip.innerHTML = '姓名不能为空!';
            tip.style.color = 'red';
            msg.style.border = '2px solid red';
        }else if (getLength(str) >= 4 && getLength(str) <= 16) {
           tip.innerHTML = '格式正确!';
           tip.style.color = 'lightgreen';
           msg.style.border = '2px solid lightgreen'; 
        }else{
            tip.innerHTML = '字符数应为4~16位!';
            tip.style.color = 'red';
            msg.style.border = '2px solid red';
        }
    }


   function getLength(str){

        for(var i = 0; i < str.length; i++){
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) {
                inputLength +=1;
            }else{
                inputLength +=2;
            }
        }
            return inputLength;
    };


    btn.onclick = function(){
        validate();
    }