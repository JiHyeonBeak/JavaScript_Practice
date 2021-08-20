
	var count = 0;
function addlist() {
	var thing = document.getElementById('addtext').value;
	var li = document.createElement('li');
	console.log(count);
	if(count == 12) {
		alert("리스트 창이 다 찼습니다. 이제 버킷리스트를 이루어 보세요!")
		document.getElementById('addtext').setAttribute('class','active');
		document.getElementById('ok').setAttribute('class','active');
	}
	else {
	li.innerHTML = '<li>'+thing+'</li>';
	document.getElementById('list').appendChild(li);
	document.getElementById('addtext').value='';
	count++;
	}
	li.addEventListener('click', function() {
		li.classList.toggle("done");
	})
	
	}