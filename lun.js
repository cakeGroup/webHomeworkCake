var box = document.getElementById("box");
var slider = document.getElementById("slider");
var left = document.getElementById("left");
var right = document.getElementById("right");
var index = 1;
var timer;
var flag = 0;
var timer = setInterval(next, 3000);

function next() {
	if (flag == 1) {
		return;
	}
	flag = 1;
	index++;
	animate(slider, {
		left: -1200 * index
	}, function() {
		if (index >= 6) {
			slider.style.left = "-1200px";
			index = 1;
		}
		flag = 0;
	});
}


function prev() {
	if (flag == 1) {
		return;
	}
	flag = 1;
	index--;
	animate(slider, {
		left: -1200 * index
	}, function() {
		if (index <= 0) {
			slider.style.left = "-6000px";
			index = 5;
		}
		flag = 0;
	});
}

box.onmouseover = function() {
	animate(left, {
		opacity: 50
	});
	animate(right, {
		opacity: 50
	});
	clearInterval(timer);
}
box.onmouseout = function() {
	animate(left, {
		opacity: 0
	});
	animate(right, {
		opacity: 0
	});
	timer = setInterval(next, 3000);
}

right.onclick = next;
left.onclick = prev;


