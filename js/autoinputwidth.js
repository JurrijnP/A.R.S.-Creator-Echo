var inputEl = document.getElementById("InputW");

function getWidthOfInput() {
	var tmp = document.createElement("span");
	tmp.className = "prefix";
	tmp.innerHTML = inputEl.value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
	document.body.appendChild(tmp);
	var theWidth = tmp.getBoundingClientRect().width;
		document.body.removeChild(tmp);
		return theWidth;
}

function adjustWidthOfInput() {
	inputEl.style.width = getWidthOfInput() + "px";
}

adjustWidthOfInput();
	inputEl.onkeyup = adjustWidthOfInput;