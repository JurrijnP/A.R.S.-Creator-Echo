document.getElementById("ANT").onclick = function() {
	document.getElementById("UContentDefault").style.display = "none";
	document.getElementById("UContent").style.display = "none";
	$("#UploadField").attr("onclick", "");
	document.getElementById("AddNewTrigger").style.display = "block";
};

var ANTUseParams = 0;
document.getElementById("ANTUseParams").onclick = function() {
	if (ANTUseParams === 0) {
		document.getElementById("ANTUseParams").innerHTML = "<i class='fa fa-check-square-o' aria-hidden='true'></i><span class='bold'>Use <span class='skipbold DSCL'>{params}</span>.</span>";
		ANTUseParams = 1;
	} else {
		document.getElementById("ANTUseParams").innerHTML = "<i class='fa fa-square-o' aria-hidden='true'></i><span class='bold'>Use <span class='skipbold DSCL'>{params}</span>.</span>";
		ANTUseParams = 0;
	}
};

document.getElementById("ANTSubmit").onclick = function() {
	if (document.getElementById("ANTTriggerName").value !== "" && document.getElementById("ANTTriggerName").value !== " ") {
		if (document.getElementById("ANTTriggerName").value in obj[0]) {
			return AlertDiv("Trigger already exists.");
		} else {
			Reset();
			document.getElementById("TriggerName").value = document.getElementById("ANTTriggerName").value;
			setTimeout( function() {
				if (ANTUseParams === 1) {
					document.getElementById("UseParamsInTrigger").checked = true;
					SetTrigger(true);
					AddNewTriggerToFile(true);
				} else {
					SetTrigger(false);
					AddNewTriggerToFile(false);
				}
			}, 100);
			setTimeout( function() {
				if (document.getElementById("UContent").innerHTML !== "") {
					document.getElementById("UContentDefault").style.display = "none";
					document.getElementById("UContent").style.display = "block";
					$("#UploadField").attr("onclick", '$("#Uploader").click();');
					document.getElementById("AddNewTrigger").style.display = "none";
				} else {
					document.getElementById("AddNewTrigger").style.display = "none";
					document.getElementById("UContentDefault").style.display = "none";
					document.getElementById("UContent").style.display = "block";
					document.getElementById("UploadField").style.textAlign = "left";
					$("#UploadField").attr("onclick", '$("#Uploader").click();');
				}
				setTimeout( function() {
					HideSettings();
					document.getElementById("ANTTriggerName").value = "";
					if (ANTUseParams === 1) {
						$("#ANTUseParams").click();
					}
				}, 250);
			}, 250);
		}
	} else {
		AlertDiv("You need to give your trigger a name");
	}
};