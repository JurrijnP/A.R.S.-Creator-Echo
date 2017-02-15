function ClearStorage() {
	document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i></span>" + GetTimeDate() + "Creator was cleared by Client. <br>";
	localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
	var SavedLog = localStorage.getItem("Log");
	localStorage.clear();
	localStorage.setItem("Log", SavedLog);
	location.reload();
}

window.onunload = function() {
	SetSystemVars();
	/*SetOptionsVars();*/
	SetUploadVars();
}

window.onload = function() {
	if (!localStorage["haslocalStorage"]) {
		document.getElementById("LogContent").innerHTML = localStorage.getItem("Log");
		localStorage.setItem("haslocalStorage", true);
		setTimeout( function() {
			localStorage.removeItem("Log");
		}, 10);
	} else {
		GetSystemVars();
		/*GetOptionsVars();*/
		GetUploadVars();
	}
}