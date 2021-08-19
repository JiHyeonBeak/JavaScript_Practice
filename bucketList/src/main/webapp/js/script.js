

function addlist() {
	var thing = document.getElementById('addtext').value;
	var li = document.createElement('li');
	li.innerHTML = '<li>'+thing+'</li>';
	document.getElementById('list').appendChild(li);
	document.getElementById('addtext').value='';

	li.addEventListener('click', function() {
		li.classList.toggle("done");
	})
	
	}