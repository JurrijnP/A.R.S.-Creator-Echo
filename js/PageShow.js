function ShowSettings() {
	document.getElementById("Settings").style.opacity = "1";
	document.getElementById("Settings").style.height = "calc(80% - 70px)";
	document.getElementById("SettingsContent").style.display = "block";
	document.getElementById("Creator").style.display = "none";
	document.getElementById("ShowSettingsButton").style.display = "none";
	document.getElementById("HideSettingsButton").style.display = "block";
}

function HideSettings() {
	document.getElementById("Settings").style.opacity = "0";
	document.getElementById("Settings").style.height = "0px";
	document.getElementById("SettingsContent").style.display = "none";
	document.getElementById("Creator").style.display = "block";
	document.getElementById("ShowSettingsButton").style.display = "block";
	document.getElementById("HideSettingsButton").style.display = "none";
}

function KeyDiv() {
	var CheckSetTrigger = document.getElementById("Trigger");
	var GetUseParamsKey = JSON.parse(localStorage.getItem("UseParams"));
	var GetRequireIsUsed = JSON.parse(localStorage.getItem("RequireIsUsed"));
	var GetExcludeIsUsed = JSON.parse(localStorage.getItem("ExcludeIsUsed"));
	if (CheckSetTrigger.innerHTML == "") {
		AlertDiv("Create a trigger first.");
		document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'>&#9888</span>" + GetTimeDate() + WarnMessage[0] + "<br>";
		localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
	} else {
		if (GetUseParamsKey == true) {
			document.getElementById("AddParamsKey").disabled = false;
			document.getElementById("AddParamsKey").className = "addbutton";
			document.getElementById("AddParamsKeyDiv").className = "KeyContentKey";
		} else {
			document.getElementById("AddParamsKey").disabled = true;
			document.getElementById("AddParamsKey").className = "disabledbutton";
			document.getElementById("AddParamsKeyDiv").className = "KeyContentKey disabledkey";
		}
		if (GetRequireIsUsed == true) {
			document.getElementById("AddNotReqKey").disabled = false;
			document.getElementById("AddNotReqKey").className = "addbutton";
			document.getElementById("AddNotReqKeyDiv").className = "KeyContentKey";
		} else {
			document.getElementById("AddNotReqKey").disabled = true;
			document.getElementById("AddNotReqKey").className = "disabledbutton";
			document.getElementById("AddNotReqKeyDiv").className = "KeyContentKey disabledkey";
		}
		if (GetExcludeIsUsed == true) {
			document.getElementById("AddIsExcKey").disabled = false;
			document.getElementById("AddIsExcKey").className = "addbutton";
			document.getElementById("AddIsExcKeyDiv").className = "KeyContentKey";
		} else {
			document.getElementById("AddIsExcKey").disabled = true;
			document.getElementById("AddIsExcKey").className = "disabledbutton";
			document.getElementById("AddIsExcKeyDiv").className = "KeyContentKey disabledkey";
		}
		document.getElementById("KeyList").style.opacity = "1";
		document.getElementById("KeyListContent").style.margin = "0px auto";
		document.getElementById("Content").style.opacity = "0.1";
		return;
	}
}

function CloseKeyDiv() {
	document.getElementById("KeyList").style.opacity = "0";
	document.getElementById("KeyListContent").style.margin = "-500% auto";
	document.getElementById("Content").style.opacity = "1";
}

function CloseOptions() {
	document.getElementById("Options").style.opacity = "0";
	document.getElementById("Options").style.height = "0px";
	document.getElementById("outerOptionsContent").style.display = "none";
	document.getElementById("SettingsOptions").style = "background-color";
}

function CloseTriggers() {
	document.getElementById("Triggers").style.opacity = "0";
	document.getElementById("Triggers").style.height = "0px";
	document.getElementById("outerTriggersContent").style.display = "none";
	document.getElementById("SettingsTriggers").style = "background-color";
}

function CloseLog() {
	document.getElementById("Log").style.opacity = "0";
	document.getElementById("Log").style.height = "0px";
	document.getElementById("outerLogContent").style.display = "none";
	document.getElementById("SettingsLog").style = "background-color";
}

function CloseChangelog() {
	document.getElementById("Changelog").style.opacity = "0";
	document.getElementById("Changelog").style.height = "0px";
	document.getElementById("outerChangelogContent").style.display = "none";
	document.getElementById("SettingsChangelog").style = "background-color";
}

function ShowOptions() {
	CloseChangelog();
	CloseLog();
	CloseTriggers();
	setTimeout( function() {
		document.getElementById("Options").style.opacity = "1";
		document.getElementById("Options").style.height = "calc(100% - 70px)";
		document.getElementById("outerOptionsContent").style.display = "block";
		document.getElementById("SettingsTitle").innerHTML = "Settings | Options";
		document.getElementById("SettingsOptions").style = "background-color: rgba(78, 145, 206, 1);";
		var element = document.getElementById("LogContent");
		element.scrollTop = element.scrollHeight - element.clientHeight;
	}, 100);
}

function ShowTriggers() {
	CloseChangelog();
	CloseOptions();
	CloseLog();
	setTimeout( function() {
		document.getElementById("Triggers").style.opacity = "1";
		document.getElementById("Triggers").style.height = "calc(100% - 70px)";
		document.getElementById("outerTriggersContent").style.display = "block";
		document.getElementById("SettingsTitle").innerHTML = "Settings | Triggers";
		document.getElementById("SettingsTriggers").style = "background-color: rgba(78, 145, 206, 1);";
	}, 100);
}

function ShowLog() {
	CloseChangelog();
	CloseOptions();
	CloseTriggers();
	setTimeout( function() {
		document.getElementById("Log").style.opacity = "1";
		document.getElementById("Log").style.height = "calc(100% - 70px)";
		document.getElementById("outerLogContent").style.display = "block";
		document.getElementById("SettingsTitle").innerHTML = "Settings | Log";
		document.getElementById("SettingsLog").style = "background-color: rgba(78, 145, 206, 1);";
		var element = document.getElementById("LogContent");
		element.scrollTop = element.scrollHeight - element.clientHeight;
	}, 100);
}

function ShowChangelog() {
	CloseLog();
	CloseOptions();
	CloseTriggers();
	setTimeout( function() {
		document.getElementById("Changelog").style.opacity = "1";
		document.getElementById("Changelog").style.height = "calc(100% - 70px)";
		document.getElementById("outerChangelogContent").style.display = "block";
		document.getElementById("SettingsTitle").innerHTML = "Settings | Changelog";
		document.getElementById("SettingsChangelog").style = "background-color: rgba(78, 145, 206, 1)";
	}, 100);
}

function AlertDiv(Message) {
	document.getElementById("Alert").style.opacity = "1";
	document.getElementById("Alert").style.margin = "0px auto";
	document.getElementById("Content").style.opacity = "0.7";
	document.getElementById("Content").style.pointerEvents = "none";
	document.getElementById("AlertMessage").innerHTML = Message;
}

function CloseAlertDiv() {
	document.getElementById("Alert").style.opacity = "0";
	document.getElementById("Alert").style.margin = "-500% auto";
	if (document.getElementById("Log").style.opacity == "0") {
		document.getElementById("Content").style.opacity = "1";
		document.getElementById("Content").style.pointerEvents = "all";
	}
	setTimeout(function() {
		document.getElementById("AlertMessage").innerHTML = "";
	}, 200);
}