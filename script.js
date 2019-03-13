var prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
//tempOut = document.getElementById('temp-out');
//tempOut.innerHTML = prNum;

function f1(){
	var num, out;
	
	
	
	num = document.getElementById('mynum').value;
	out = document.getElementById('out');
	
	if (num == prNum) {
		out.innerHTML = 'Именно за столько минут Я сделал этот сайт';
	}
	else if (num >prNum){
		out.innerHTML = 'Это слишком много, введите меньше';
	}
	else {
		out.innerHTML = 'Это слишком мало, введите больше';
	}
	
	
}
