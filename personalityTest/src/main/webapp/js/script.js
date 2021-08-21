var que = ['시끄러운 광장을 벗어난 당신.<br>여기는 시장인가보네요!<br>고기, 목욕용품, 장난감 다양한 것들이 있네요.<br>무엇을 살까요?',
			'"어이 인간친구, 이리로 와봐!"<br>시장에서 나오던 당신을 불러세우는 삽살개.<br>당신의 반응은?"',
			'넉살좋은 삽살개에 끌려간 당신!<br>끌려간 그곳엔 뭐가 있을까?',
			];
			
var one = ['고기','신나서 달려간다','수많은 친구들'];
var two =['목욕 용품','누구냐고 묻는다','아늑한 방석'];
var three = ['장난감','빤히 바라본다','어떤 사람'];

var num = -1;

var fir = 0;
var sec = 0;
var thr = 0;

function res(){
	if(fir>=1){
		document.getElementById('photo').setAttribute('class','dog1');
		document.getElementById('sentence').innerHTML = '몰라';
	}
	else if(sec>=1){
		document.getElementById('photo').setAttribute('class','dog2');
		document.getElementById('sentence').innerHTML = '몰라2';
	}
	else if(thr>=1){
		document.getElementById('photo').setAttribute('class','dog3');
		document.getElementById('sentence').innerHTML = '몰라3';
	}
	
}



function sttt() {
	document.getElementById('stt').setAttribute('class','done');
	location.href='test.html';
} 

function first(){
	++fir;
	++num;
	document.getElementById('question').innerHTML = que[num];
	document.getElementById('fir').innerText = one[num];
	document.getElementById('se').innerText = two[num];
	document.getElementById('th').innerText = three[num];
	console.log("num:"+num);
	console.log("fir:"+fir);
	if(num ==3 ){
		document.getElementById('main').setAttribute('class','done');
		console.log("num:"+num);
		console.log("thr:"+thr);
		console.log("fir:"+fir);
		console.log("sec:"+sec);
		location.href='result.html';
		res();
	}
}

function second(){
	++sec;
	++num;
	document.getElementById('question').innerHTML = que[num];
	document.getElementById('fir').innerText = one[num];
	document.getElementById('se').innerText = two[num];
	document.getElementById('th').innerText = three[num];
	console.log("num:"+num);
	console.log("sec:"+sec);
	if(num ==3 ){
		document.getElementById('main').setAttribute('class','done');
		location.href='result.html';
		res();
	}
}

function third(){
	++thr;
	++num;
	document.getElementById('question').innerHTML = que[num];
	document.getElementById('fir').innerText = one[num];
	document.getElementById('se').innerText = two[num];
	document.getElementById('th').innerText = three[num];
	console.log("num:"+num);
	console.log("thr:"+thr);
	if(num ==3 ){
		document.getElementById('main').setAttribute('class','done');
		location.href='result.html';
		res();
		
	}
	

}