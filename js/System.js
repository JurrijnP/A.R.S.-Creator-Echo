var ctrlDown = false;
$(document).keydown(function(e) {
	if (e.keyCode === 17 || e.keyCode == 91) ctrlDown = true;
}).keyup(function(e) {
	if (e.keyCode == 17 || e.keyCode == 91) ctrlDown = false;
});

function isExnotReMessage(RoleKeyID, RoleTypeID) {
	if (document.getElementById(RoleKeyTypes[RoleTypeID]).value !== "") {
		document.getElementById("Type_" + RoleTypeID + "ARSKey_" + RoleKeyID + RoleKeyTypes[RoleTypeID] + "Response").innerHTML = "{" + Keys[RoleTypeID] + ":<span id='" + RoleKeyTypes[RoleTypeID] + "Response'>" + document.getElementById(RoleKeyTypes[RoleTypeID]).value + "</span>}";
	} else {
		document.getElementById("Type_" + RoleTypeID + "ARSKey_" + RoleKeyID + RoleKeyTypes[RoleTypeID] + "Response").innerHTML = "{" + Keys[RoleTypeID] + "<span id='" + RoleKeyTypes[RoleTypeID] + "Response'></span>}";
	}
	localStorage.setItem((RoleKeyTypes[RoleTypeID] + "Message"), document.getElementById(RoleKeyTypes[RoleTypeID]).value);
}

function RoTaRoleValue(RoleKeyID, RoleTypeID) {
	document.getElementById(RoleKeyTypes[RoleTypeID] + "RoleResponse").innerHTML = document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value;
	localStorage.setItem((RoleKeyTypes[RoleTypeID] + "Role"), document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value);
	if (document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value !== "") {
		document.getElementById("Type_" + RoleTypeID + "ARSKey_" + RoleKeyID + RoleKeyTypes[RoleTypeID] + "RoleResponse").innerHTML = "{" + Keys[RoleTypeID] + ":<span id='" + RoleKeyTypes[RoleTypeID] + "RoleResponse'>" + document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value + "</span>}";
	} else {
		document.getElementById("Type_" + RoleTypeID + "ARSKey_" + RoleKeyID + RoleKeyTypes[RoleTypeID] + "RoleResponse").innerHTML = "{" + Keys[RoleTypeID] + "<span id='" + RoleKeyTypes[RoleTypeID] + "RoleResponse'></span>}";
	}
}

function AlertIdValue(AlertKeyID, AlertTypeID, e) {
	setTimeout( function() {
		if (e === 1) {
			var cont = 13;
		} else {
			var cont = (e.keyCode ? e.keyCode : e.which);
		}
		if (cont === 13) {
			setTimeout( function() {
				if (document.getElementById("AlertId").value.length < 15) {
					AlertDiv("Please add an Id of at least 15 characters.(Discord Ids are 18 characters long in most cases.)");
				} else if (document.getElementById("AlertId").value.length <= 18 && document.getElementById("AlertId").value !== "") {
					if (document.getElementById("AlertId" + document.getElementById("AlertId").value)) {
						AlertDiv("This Id has already been added.");
						setTimeout( function() {
							document.getElementById("AlertId").value = "";
						}, 100);
					} else {
						document.getElementById("AlertIdsSelection").innerHTML += "<option id='AlertId" + document.getElementById("AlertId").value + "'>" + document.getElementById("AlertId").value + "</option>";
						if (document.getElementById("AlertIdsResponse").innerHTML === "") {
							document.getElementById("AlertIdsResponse").innerHTML += "<span id='AlertId" + document.getElementById("AlertId").value + "Response'>" + document.getElementById("AlertId").value + "</span>";
						} else {
							document.getElementById("AlertIdsResponse").innerHTML += "<span>, </span><span id='AlertId" + document.getElementById("AlertId").value + "Response'>" + document.getElementById("AlertId").value + "</span>";
						}
						document.getElementById("AlertId").value = "";
						document.getElementById("Type_" + AlertTypeID + "ARSKey_" + AlertKeyID + "AlertIdsResponse").innerHTML = "{" + Keys[AlertTypeID] + ":<span id='AlertIdsResponse'>" + document.getElementById("AlertIdsResponse").innerHTML + "</span>}";
						localStorage.setItem("AlertIdsSelection", document.getElementById("AlertIdsSelection").innerHTML);
						localStorage.setItem("AlertIdsResponse", document.getElementById("Type_" + AlertTypeID + "ARSKey_" + AlertKeyID + "AlertIdsResponse").innerHTML);
					}
				} else {
					return;
				}
			}, 10);
		} else if (47 < cont && cont < 58) {
			setTimeout( function() {
				document.getElementById("AlertId").value = document.getElementById("AlertId").value.replace(/([^0-9])/g, "");
			}, 10);
		} else if (((cont === (65 || (67 || 17)) && ctrlDown) || ctrlDown) && cont !== 86) {
			return;
		} else if (cont === 86 && ctrlDown) {
			setTimeout( function() {
				document.getElementById("AlertId").value = document.getElementById("AlertId").value.replace(/([^0-9])/g, "");
			}, 10);
		} else if (document.getElementById("AlertId").value.length < 18) {
			setTimeout( function() {
				document.getElementById("AlertId").value = document.getElementById("AlertId").value.replace(/(.)$/, "");
			}, 10);
		}
	}, 5);
}

function AlertRemoveId(AlertKeyID, AlertTypeID) {
	var list = document.getElementById("AlertIdsSelection");
	var SelectedId = list.options[list.selectedIndex].id;
	var AlertId = document.getElementById(SelectedId);
	var AlertIdInResponse = document.getElementById(SelectedId + "Response");
	if (SelectedId !== ("AlertIdDefault")) {
		if (document.getElementById(AlertIdInResponse.id).nextSibling) {
			var span = document.getElementById(AlertIdInResponse.id).nextSibling;
			span.parentNode.removeChild(span);
		} else if (document.getElementById(AlertIdInResponse.id).previousSibling) {
			var span = document.getElementById(AlertIdInResponse.id).previousSibling;
			span.parentNode.removeChild(span);
		}
		AlertId.parentNode.removeChild(AlertId);
		AlertIdInResponse.parentNode.removeChild(AlertIdInResponse);
	} else {
		return;
	}
	if (document.getElementById("AlertIdDefault").nextSibling) {
		document.getElementById("Type_" + AlertTypeID + "ARSKey_" + AlertKeyID + "AlertIdsResponse").innerHTML = "{" + Keys[AlertTypeID] + ":<span id='AlertIdsResponse'>" + document.getElementById("AlertIdsResponse").innerHTML + "</span>}";
	} else {
		document.getElementById("Type_" + AlertTypeID + "ARSKey_" + AlertKeyID + "AlertIdsResponse").innerHTML = "{" + Keys[AlertTypeID] + "<span id='AlertIdsResponse'></span>}";
	}
	localStorage.setItem("AlertIdsSelection", document.getElementById("AlertIdsResponse").innerHTML);
	localStorage.setItem("AlertIdsResponse", document.getElementById("Type_" + AlertTypeID + "ARSKey_" + AlertKeyID + "AlertIdsResponse").innerHTML);
}

function ReExRoleValue(RoleKeyID, RoleTypeID, e) {
	if (e === 13) {
		var code = 13;
	} else {
		var code = (e.keyCode ? e.keyCode : e.which);
	}
	if (code === 13) {
		if (document.getElementById(RoleKeyTypes[RoleTypeID] + "Role" + document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value.replace(/(,)/g, ""))) {
			alert("Error: Role has already been added.");
			setTimeout( function() {
				document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value = "";
			}, 100);
		} else {
			var dom = document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value.replace(/(,.)/g, "");
			setTimeout( function() {
				var dom = document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value.replace(/(,.)/g, "");
				document.getElementById(RoleKeyTypes[RoleTypeID] + "RolesSelection").innerHTML += "<option id='" + RoleKeyTypes[RoleTypeID] + "Role" + dom + "' class='" + RoleKeyTypes[RoleTypeID] + "RoleOption' >" + dom + "</option>";
				if (document.getElementById(RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML === "") {
					var dom = document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value.replace(/(,.)/g, "");
					document.getElementById(RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML += "<span id='" + RoleKeyTypes[RoleTypeID] + "Role" + dom + "Response' >" + dom + "</span>";
				} else {
					var dom = document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value.replace(/(,.)/g, "");
					document.getElementById(RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML += "<span>, </span><span id='" + RoleKeyTypes[RoleTypeID] + "Role" + dom + "Response' >" + dom + "</span>";
				}
				document.getElementById(RoleKeyTypes[RoleTypeID] + "Role").value = "";
				document.getElementById("Type_" + RoleTypeID + "ARSKey_" + RoleKeyID + RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML = "{" + Keys[RoleTypeID] + ":<span id='" + RoleKeyTypes[RoleTypeID] + "RolesResponse'>" + document.getElementById(RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML + "</span>}";
				localStorage.setItem((RoleKeyTypes[RoleTypeID] + "RolesSelection"), document.getElementById(RoleKeyTypes[RoleTypeID] + "RolesSelection").innerHTML);
				localStorage.setItem((RoleKeyTypes[RoleTypeID] + "RolesResponse"), document.getElementById(RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML);
			}, 100);
		}
	}
}

function ReExremoveRole(RoleKeyID, RoleTypeID) {
	var list = document.getElementById(RoleKeyTypes[RoleTypeID] + "RolesSelection");
	var SelectedId = list.options[list.selectedIndex].id;
	var Role = document.getElementById(SelectedId);
	var RoleInResponse = document.getElementById(SelectedId + "Response");
	if (SelectedId !== (RoleKeyTypes[RoleTypeID] + "RoleDefault")) {
		if (document.getElementById(RoleInResponse.id).nextSibling) {
			var span = document.getElementById(RoleInResponse.id).nextSibling;
			span.parentNode.removeChild(span);
		} else if (document.getElementById(RoleInResponse.id).previousSibling) {
			var span = document.getElementById(RoleInResponse.id).previousSibling;
			span.parentNode.removeChild(span);
		}
		Role.parentNode.removeChild(Role);
		RoleInResponse.parentNode.removeChild(RoleInResponse);
	} else {
		return;
	}
	if (document.getElementById(RoleKeyTypes[RoleTypeID] + "RoleDefault").nextSibling) {
		document.getElementById("Type_" + RoleTypeID + "ARSKey_" + RoleKeyID + RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML = "{" + Keys[RoleTypeID] + ":<span id='" + RoleKeyTypes[RoleTypeID] + "RolesResponse'>" + document.getElementById(RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML + "</span>}";
	} else {
		document.getElementById("Type_" + RoleTypeID + "ARSKey_" + RoleKeyID + RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML = "{" + Keys[RoleTypeID] + "<span id='" + RoleKeyTypes[RoleTypeID] + "RolesResponse'></span>}";
	}
	localStorage.setItem((RoleKeyTypes[RoleTypeID] + "RolesSelection"), document.getElementById(RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML);
	localStorage.setItem((RoleKeyTypes[RoleTypeID] + "RolesResponse"), document.getElementById("Type_" + RoleTypeID + "ARSKey_" + RoleKeyID + RoleKeyTypes[RoleTypeID] + "RolesResponse").innerHTML);
}

function SmoothScrollToTop(X, Y) {
	if (X > 0) {
		var XNew = (X - (Math.round(X / 10) + 1));
	}
	if (Y > 0) {
		var YNew = (Y - (Math.round(Y / 10) + 1));
	}
	setTimeout( function() {
		window.scrollTo(XNew, YNew);
		if (window.pageXOffset > 0 && window.pageYOffset > 0) {
			SmoothScrollToTop(XNew, YNew);
		} else if (window.pageXOffset > 0 && window.pageYOffset == 0) {
			SmoothScrollToTop(XNew, 5);
		} else if (window.pageXOffset == 0 && window.pageYOffset > 0) {
			SmoothScrollToTop(5, YNew);
		} else {
			return;
		}
	}, 1);
}

function PageLoad() {
	document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Page Was Loaded.<br>";
	localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
}

function Reset() {
	var AmountOfKeys = localStorage.getItem("AmountOfKeysBeingUsed");
	var IsTrigger = JSON.stringify(localStorage.getItem("Trigger"));
	if (AmountOfKeys > 0 || IsTrigger !== "") {
		KeyTypeAmounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var StartAmounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var StartSubAmounts = [0, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
		var StartTFC = ["DNU"];
		KeyID = 0;
		TextfieldId = 0;
		localStorage.setItem("KeyTypeAmounts", StartAmounts);
		localStorage.setItem("KeyTypeSubAmounts", StartSubAmounts);
		localStorage.setItem("TextfieldsContent", JSON.stringify(StartTFC));
		localStorage.setItem("AmountOfKeysBeingUsed", 0);
		localStorage.setItem("AmountOfTextFieldsBeingUsed", 0);
		localStorage.setItem("MultipleWords", false);
		localStorage.setItem("UseParams", false);
		document.getElementById("UseParamsInTrigger").checked = false;
		document.getElementById("TriggerName").value = "";
		document.getElementById("UsedItems").innerHTML = "";
		document.getElementById("Trigger").innerHTML = "";
		document.getElementById("Response").innerHTML = "";
		localStorage.setItem("KeysBeingUsed", "");
		localStorage.setItem("Trigger", "");
		localStorage.setItem("Response", "");
		localStorage.setItem("TriggerName", "");
	}
}

function isOdd(Number) {
	return Number % 2;
}

function Get(What) {
	if (What === 1) {
		return KeyID;
	} else if (What === 2) {
		return TextfieldId;
	} else if (What === 3) {
		return LinebreakID;
	}
}
/* "DNU" in arrays means DoNotUse. */
var ARSFile = false;
var KeyID = 0;
var TextfieldId = 0;
var LinebreakID = 0;
var isAS = 1;
var TextfieldValuesList = ["DNU"];
var AlertIdsList = ["DNU"];
var Quote = "'";
var TypeText = "'Type_";
var KeyText = "ARSKey_";
var TextFieldText = "TextField_";
var SpanIDEnd = "Response'";
var ResponseText = "'Response'";
var TFText = "'TextField_";
var UsedText = "'UsedItems'";
var Keys = ["", "params", "pm", "user", "/user", "role", "take", "kick", "ban", "req", "notreq", "exc", "isexc", "alert", "pref", "greet", "bye", "del", "chan", "ismaster", "listroles", "allroles", "joined", "channels", "meme", "joke", "ass", "boobs", "sky", "cats", "wrecks", "space", "dbz", "cute", "cars", "trucks", "protect", "timestamp", "usernick", "self", "getid", "rawid", "usericon", "membercount", "rolecount", "channelcount", "myperms"];
var RoleKeyTypes = ["", "", "", "", "", "Give", "Take", "", "", "Require", "NotRequired", "Exclude", "IsExcluded"];
var KeyTypeAmounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var KeyTypeSubAmounts = [0, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var KeyTypeAmountsMax = [1000, 50, 1, 50, 50, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];

function GSARSFile(HasARSFile) {
	if (HasARSFile === true) {
		ARSFile = true;
	} else {
		return ARSFile;
	}
}

var AlertType = ["", "You reached the maximum amount of 50 keys.", "You can use this key only once."];
var WarnMessage = [" Client tried to add key while no trigger was made yet.", "Client reached maximum amount of keys."];
/* !!! The Indexes with "" of the above arrays should ALWAYS be blanc and therefore never be used. !!! */

function SetTrigger(Params) {
	var UseParams = false;
	if (Params === "GetParams") {
		console.log("Hey!");
		return UseParams;
	} else {
		UseParams = Params;
	}
	setTimeout(function() {
		var UseParamsKey = "";
		var MultipleWords = "";
		var GetMultipleWords = RegExp(/\s/g).test(TriggerName);
		var EchoPrefix = document.getElementById("EchoPrefix").value;
		var TriggerName = document.getElementById("TriggerName").value;
		var TriggerNameAfterParams = document.getElementById("TriggerNameAfterParams").value;
		var AllowTriggerNameAfterParams = document.getElementById("TriggerNameAfterParams");
		var Trigger = document.getElementById("Trigger");
		var SetEchoPrefix = document.getElementById("EchoPrefix").innerHTML;
		var SetTriggerName = document.getElementById("TriggerName").innerHTML;
		var SetMultipleWords = document.getElementById("MultipleWords");
		var SetUseParamsKey = document.getElementById("UseParamsKey");
		var SetResponse = document.getElementById("Response").innerHTML;
		var SetTrigger = document.getElementById("Trigger").innerHTML;
		var SetTriggerNameAfterParams = document.getElementById("TriggerNameAfterParamsTrigger");
		var CheckForWhiteSpaces = RegExp(/\s/g).test(TriggerName);
		
		//Check Echo's Prefix & Trigger name.
		setTimeout(function() {
			if (EchoPrefix == "" && TriggerName == "" && SetTrigger !== "") { 
				AlertDiv("A prefix and a name for your trigger are required to make a command for Echo."); //This error should never be possible, report fatal error if both are empty.
				document.getElementById("EchoPrefix").value = localStorage.getItem("EchoPrefix");
				document.getElementById("TriggerName").value = localStorage.getItem("TriggerName");
				if (localStorage.getItem("TriggerName") == "") {
					var TNE = 1;
				} else {
					var TNE = 0;
				}
				if (localStorage.getItem("EchoPrefix") == "") {
					var EPE = 1;
				} else {
					var EPE = 0;
				}
				document.getElementById("LogContent").innerHTML += "<div><span style='font-size: 15px; color: rgba(165, 34, 34, 1);'>&#9760FATAL ERROR</span>" + GetTimeDate() + "EchoPrefix and TriggerName were both empty, report this error to Staff, add the following text to your report:<br><span style='float:right'>Error: 2x202134" + TNE + EPE + "</span></div><br>";
				ShowLog();
				var mentionError = document.getElementById("LogContent").lastChild;
				mentionError.previousSibling.style = "display: inline-block; border-radius: 3px; padding-left: 2px; padding-right: 2px; background-color: rgb(0, 0, 0);";
				setTimeout(function() {
					mentionError.previousSibling.style = "display: inline-block; border-radius: 0px; padding-left: 2px; padding-right: 2px; background-color: none; transition: 2s;";
				}, 1500);
				setTimeout(function() {
					localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
				}, 3500);
			} else if (EchoPrefix == "" && SetTrigger !== "") {
				AlertDiv("A prefix is required to make a command for Echo.");
				document.getElementById("EchoPrefix").value = localStorage.getItem("EchoPrefix");
			} else if (TriggerName == "" && SetTrigger !== "") {
				AlertDiv("A name for your trigger is required to make a command for Echo.");
				document.getElementById("TriggerName").value = localStorage.getItem("TriggerName");
			}
		}, 50);
		
		//Check if {params} should be used.
		setTimeout(function() {
			if (SetTrigger.innerHTML !== "") {
				if (Params == true && GetMultipleWords == true) {
					MultipleWords = "&";
					UseParamsKey = " {params}";
					AllowTriggerNameAfterParams.disabled = false;
					AllowTriggerNameAfterParams.style = "opacity: 1;";
					localStorage.setItem("UseParams", true);
				} else if (Params == true && GetMultipleWords == false) {
					MultipleWords = "&";
					UseParamsKey = " {params}";
					AllowTriggerNameAfterParams.disabled = false;
					AllowTriggerNameAfterParams.style = "opacity: 1;";
					localStorage.setItem("UseParams", true);
				}
			}
			if (GetMultipleWords == true && Params == false) {
				MultipleWords = "&";
				UseParamsKey = "";
				AllowTriggerNameAfterParams.disabled = true;
				AllowTriggerNameAfterParams.style = "opacity: 0.5;";
				document.getElementById("TriggerNameAfterParams").value = "";
				localStorage.setItem("TriggerNameAfterParams", "");
				localStorage.setItem("UseParams", false);
				localStorage.setItem("MultipleWords", true);
			} else if (GetMultipleWords == false && Params == false) {
				MultipleWords = "";
				UseParamsKey = "";
				AllowTriggerNameAfterParams.disabled = true;
				AllowTriggerNameAfterParams.style = "opacity: 0.5;";
				document.getElementById("TriggerNameAfterParams").value = "";
				localStorage.setItem("TriggerNameAfterParams", "");
			}
			
			//Check the value that should be put after the {params}.
			if (Params === true && SetTrigger !== "") {
				setTimeout(function() {
					if (TriggerNameAfterParams !== "") {
						SetTriggerNameAfterParams.innerHTML = " " + TriggerNameAfterParams;
						localStorage.setItem("TriggerNameAfterParams", TriggerNameAfterParams);
					} else {
						SetTriggerNameAfterParams.innerHTML = "";
					}
				}, 100);
			} else if (Params === false) {
				setTimeout(function() {
					document.getElementById("TriggerNameAfterParams").value = "";
					localStorage.setItem("TriggerNameAfterParams", "");
				}, 100);
			}
		}, 100);
				
		if (EchoPrefix !== "" && TriggerName !== "") {
			setTimeout(function() {
				SetEchoPrefix = '<span id="EchoPrefixTrigger">' + EchoPrefix + '</span>';
				SetTriggerName = '<span id="TriggerNameTrigger">' + TriggerName + '</span>';
				SetMultipleWords = '<span id="MultipleWords">' + MultipleWords + '</span>';
				SetUseParamsKey = '<span id="UseParamsKeyTrigger">' + UseParamsKey + '</span>';
				if (Params === true && SetTrigger !== "") {
					SetTriggerNameAfterParams = '<span id="TriggerNameAfterParamsTrigger">' + SetTriggerNameAfterParams.innerHTML + '</span>';
				} else {
					SetTriggerNameAfterParams = '<span id="TriggerNameAfterParamsTrigger"></span>';
				}
				Trigger.innerHTML = SetEchoPrefix + "<span>auto </span>" + SetMultipleWords + SetTriggerName + SetUseParamsKey + SetTriggerNameAfterParams + "<span>={init}</span>";
				if (SetTrigger === "") {
					document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client made a trigger:<br>Echo's Prefix: " + EchoPrefix + "<br>Trigger Name: " + TriggerName + "<br>";
					localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
				}
			}, 300);
		}
	}, 100);
}

function AddItem(TypeID) {
	var CheckSetTrigger = document.getElementById("Trigger");
	var KeyDiv = document.createElement('div');
	var SetTrigger = document.getElementById("Trigger").innerHTML;
	var SetResponse = document.getElementById("Response").innerHTML;
	var Response = document.getElementById("Response");
	if (TypeID === 100) {
		if (CheckSetTrigger.innerHTML === "") {
			AlertDiv("Create a trigger first.");
			document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client tried to add key while no trigger was made yet." + "<br>";
			localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
		} else {
			KeyID++;
			LinebreakID++;
			KeyDiv.id = "Type_" + TypeID + "ARSKey_" + KeyID + "Linebreak_" + LinebreakID;
			KeyDiv.style = "padding: 4px 4px 4px 0; display: block;";
			KeyDiv.innerHTML = "<span class='bold'>" + KeyID + ". Linebreak<div style='display:inline-block; float: right;'><button class='button' onClick='KeyID--; LinebreakID--; RemoveWhatItem(" + KeyID + ", " + TypeID + ", " + (TextfieldId + 1) + ", " + LinebreakID + ");'>Remove</button></div></span>";
			document.getElementById("UsedItems").appendChild(KeyDiv);
			Response.innerHTML = SetResponse + "<br id='Type_" + TypeID + "ARSKey_" + KeyID + "Linebreak_" + LinebreakID + "Response' />";
			document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + 	GetTimeDate() + "Client added a linebreak.<br>";
			localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
			UpdateARSFile("\n");
			
		}
	} else if (TypeID === 0) {
		if (CheckSetTrigger.innerHTML === "") {
			AlertDiv("Create a trigger first.");
			document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i></span>" + GetTimeDate() + WarnMessage[0] + "<br>";
			localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
		} else {
			if (KeyTypeAmounts[TypeID] < KeyTypeAmountsMax[TypeID]) {
				KeyID++;
				TextfieldId++;
				KeyTypeAmounts[TypeID]++;
				KeyTypeSubAmounts[TypeID]++;
				KeyDiv.id = "Type_" + TypeID + "ARSKey_" + KeyID + "TextFieldDiv";
				KeyDiv.style = 'padding: 4px 4px 4px 0; display: block;';
				KeyDiv.innerHTML = '<label class="bold">' + KeyID + '. Your Text: <input class="input" type="text" id="TextField_' + TextfieldId + '" name="Type_' + '0' + 'ARSKey_' + KeyID + 'TextField_' + TextfieldId + '" placeholder="You can put some text here..." value="" onchange="var Text = document.getElementById(' + Quote + 'TextField_' + TextfieldId + Quote + ').value; document.getElementById(' + Quote + 'Type_' + TypeID + 'ARSKey_' + KeyID + 'TextField_' + TextfieldId + 'Response' + Quote + ').innerHTML = Text; var StoreResponse = document.getElementById(' + ResponseText + ').innerHTML; localStorage.setItem(' + ResponseText + ', StoreResponse); localStorage.setItem(' + Quote + 'TextField_' + TextfieldId + Quote + ', Text);"></input><div style="display:inline-block; float: right;"><button class="button" onclick="setTimeout(function() {KeyID--; TextfieldId--; RemoveWhatItem(' + KeyID + ', 0, ' + TextfieldId + ', ' + (LinebreakID + 1) + ');}, 100); return false;">Remove</button></div></label>';
				document.getElementById('UsedItems').appendChild(KeyDiv);
				Response.innerHTML = SetResponse + '<span id="Type_0ARSKey_' + KeyID + 'TextField_' + TextfieldId + 'Response"></span>';
				localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
				localStorage.setItem("KeyTypeSubAmounts", KeyTypeSubAmounts);
				localStorage.setItem('AmountOfTextFieldsBeingUsed', TextfieldId);
				document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client added a textfield. With an ID of: " + KeyID + "<br>";
				localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
			} else {
				alert("You reached the maximum amount of 1000 textfields.");
			}
		}	
	} else if (TypeID === 5 || TypeID === 6) {
		if (KeyTypeAmounts[TypeID] < KeyTypeAmountsMax[TypeID]) {
			KeyID++;
			KeyTypeAmounts[TypeID]++;
			KeyDiv.id = "Type_" + TypeID + "ARSKey_" + KeyID;
			KeyDiv.style = "padding: 4px 4px 4px 0; display: block;";
			KeyDiv.innerHTML = '<label class="bold">' + KeyID + '. <span class="DCSL skipbold">{' + Keys[TypeID] + '}</span> ' + RoleKeyTypes[TypeID] + ' a role: <input class="input" type="text" id="' + RoleKeyTypes[TypeID] + 'Role" name="Type_' + TypeID + 'ARSKey_' + KeyID + RoleKeyTypes[TypeID] + 'Role" placeholder="Roles are CaSe-sensitive" value="" onchange="RoTaRoleValue(' + KeyID + ', ' + TypeID + ');"><div style="display:inline-block; float: right;"><button class="button" onclick="KeyID--; RemoveWhatItem(' + KeyID + ', ' + TypeID + ', ' + (TextfieldId + 1) + ', ' + (LinebreakID + 1) + ');">Remove</button></div></label>';
			Response.innerHTML = SetResponse + '<label id="Type_' + TypeID + 'ARSKey_' + KeyID + RoleKeyTypes[TypeID] + 'RoleResponse">{' + Keys[TypeID] + '<span id="'+ RoleKeyTypes[TypeID] + 'RoleResponse"></span>}</label>';
			document.getElementById('UsedItems').appendChild(KeyDiv);
			localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
			localStorage.setItem(RoleKeyTypes[TypeID] + "Role", "");
		} else {
			CloseKeyDiv();
			AlertDiv("You can only use this key once");
		}
	} else if(TypeID === 9 || TypeID === 11) {
		if (KeyTypeAmounts[TypeID] < KeyTypeAmountsMax[TypeID]) {
			KeyID++;
			KeyTypeAmounts[TypeID]++;
			KeyDiv.id = "Type_" + TypeID + "ARSKey_" + KeyID;
			KeyDiv.style = "padding: 4px 4px 4px 0; display: block;";
			KeyDiv.innerHTML = '<label class="bold">' + KeyID + '. <span class="DCSL skipbold">{' + Keys[TypeID] + '}</span> ' + RoleKeyTypes[TypeID] + ' a role: <input class="input" type="text" id="' + RoleKeyTypes[TypeID] + 'Role" name="Type_' + TypeID + 'ARSKey_' + KeyID + RoleKeyTypes[TypeID] + 'Roles" placeholder="To add a role press Enter." value="" onkeypress="ReExRoleValue(' + KeyID + ', ' + TypeID + ', event);"><div style="display:inline-block; float: right;"><select name="' + RoleKeyTypes[TypeID] + 'Roles" id="' + RoleKeyTypes[TypeID] + 'RolesSelection" class="Selection"><option id="' + RoleKeyTypes[TypeID] + 'RoleDefault" class="RoleOption" selected>Select Role you want to remove</option></select><button class="button" style="margin-right: 3px;" onClick="ReExremoveRole(' + KeyID + ', ' + TypeID + ');">Remove role</button><button class="button" onclick="KeyID--; RemoveWhatItem(' + KeyID + ', ' + TypeID + ', ' + (TextfieldId + 1) + ', ' + (LinebreakID + 1) + ');">Remove</button></div></label>';
			document.getElementById('UsedItems').appendChild(KeyDiv);
			Response.innerHTML = SetResponse + '<label id="Type_' + TypeID + 'ARSKey_' + KeyID + RoleKeyTypes[TypeID] + 'RolesResponse">{' + Keys[TypeID] + '<span id="'+ RoleKeyTypes[TypeID] + 'RolesResponse"></span>}</label>';
			localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
			localStorage.setItem(RoleKeyTypes[TypeID] + "RolesSelection", document.getElementById(RoleKeyTypes[TypeID] + "RolesSelection").innerHTML);
			localStorage.setItem(RoleKeyTypes[TypeID] + "IsUsed", true);
		} else {
			AlertDiv("You can only use this key once");
		}
	} else if (TypeID === 10 || TypeID === 12) {
		if (KeyTypeAmounts[TypeID] < KeyTypeAmountsMax[TypeID]) {
			KeyID++;
			KeyTypeAmounts[TypeID]++;
			KeyDiv.id = "Type_" + TypeID + "ARSKey_" + KeyID;
			KeyDiv.style = "padding: 4px 4px 4px 0; display: block;";
			KeyDiv.innerHTML = '<label class="bold">' + KeyID + '. <span class="DCSL skipbold">{' + Keys[TypeID] + '}</span> ' + RoleKeyTypes[(TypeID - 1)] + ' message: <input class="input" type="text" id="' + RoleKeyTypes[TypeID] + '" name="Type_' + TypeID + 'ARSKey_' + KeyID + RoleKeyTypes[TypeID] + '" placeholder="You can only use text in here" value="" onchange="isExnotReMessage(' + KeyID + ', ' + TypeID + ');"><div style="display:inline-block; float: right;"><button class="button" onclick="KeyID--; RemoveWhatItem(' + KeyID + ', ' + TypeID + ', ' + (TextfieldId + 1) + ', ' + (LinebreakID + 1) + ');">Remove</button></div></label>';
			Response.innerHTML = SetResponse + '<label id="Type_' + TypeID + 'ARSKey_' + KeyID + RoleKeyTypes[TypeID] + 'Response">{' + Keys[TypeID] + '<span id="'+ RoleKeyTypes[TypeID] + 'Response"></span>}</label>';
			document.getElementById("UsedItems").appendChild(KeyDiv);
			localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
			localStorage.setItem(RoleKeyTypes[TypeID] + "Message", "");
		} else {
			CloseKeyDiv();
			AlertDiv("You can only use this key once");
		}
	} else if (TypeID === 13) {
		if (KeyTypeAmounts[TypeID] < KeyTypeAmountsMax[TypeID]) {
			KeyID++;
			KeyTypeAmounts[TypeID]++;
			KeyDiv.id = "Type_" + TypeID + "ARSKey_" + KeyID;
			KeyDiv.style = "padding: 4px 4px 4px 0; display: block;";
			KeyDiv.innerHTML = '<label class="bold">' + KeyID + '. <span class="DCSL skipbold">{' + Keys[TypeID] + '}</span> Alert Ids: <input class="input" type="text" id="AlertId" name="Type_' + TypeID + 'ARSKey_' + KeyID + '" placeholder="To add an Id press Enter." value="" maxLength=18 onkeydown="AlertIdValue(' + KeyID + ', ' + TypeID + ', event);"><div style="display:inline-block; float: right;"><select name="AlertIDs" id="AlertIdsSelection" class="Selection"><option id="AlertIdDefault" class="Option" selected>Select an Id you want to remove</option></select><button class="button" style="margin-right: 3px;" onClick="AlertRemoveId(' + KeyID + ', ' + TypeID + ');">Remove Id</button><button class="button" onclick="KeyID--; RemoveWhatItem('+KeyID+', '+TypeID + ', ' + (TextfieldId + 1) + ', ' + (LinebreakID + 1) + ');">Remove</button></div></label>';
			Response.innerHTML += "<span id='Type_" + TypeID + "ARSKey_" + KeyID + "AlertIdsResponse'>{" + Keys[TypeID] + "<span id='AlertIdsResponse'></span>}</span>";
			document.getElementById("UsedItems").appendChild(KeyDiv);
			localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
			localStorage.setItem("AlertIdsSelection", document.getElementById("AlertIdsSelection").innerHTML);
		} else {
			CloseKeyDiv();
			AlertDiv("You can only use this key once");
		}
	} else {
		if (KeyTypeAmounts[TypeID] < KeyTypeAmountsMax[TypeID]) {
			KeyID++;
			KeyTypeAmounts[TypeID]++;
			KeyDiv.id = "Type_" + TypeID + "ARSKey_" + KeyID;
			KeyDiv.style = "padding: 4px 4px 4px 0; display: block;";
			KeyDiv.innerHTML = '<label class="bold">' + KeyID + '. <span class="DCSL skipbold">{' + Keys[TypeID] + '}</span><div style="display:inline-block; float: right;"><button class="button" onclick="KeyID--; RemoveWhatItem('+KeyID+', '+TypeID + ', ' + (TextfieldId + 1) + ', ' + (LinebreakID + 1) + ');">Remove</button></div></label>';
			document.getElementById("UsedItems").appendChild(KeyDiv);
			Response.innerHTML = SetResponse + '<span class="skipbold" id="Type_' + TypeID + 'ARSKey_' + KeyID + 'Response">{' + Keys[TypeID] + '}</span>';
			localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
			document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client added a {" + Keys[TypeID] +"} key. With an ID of: " + KeyID + "<br>";
			localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
			UpdateARSFile("{" + Keys[TypeID] + "}");
		} else {
			AlertDiv(AlertType[TypeID]);
		}
	}
	if (GetOptionValues(2) === 0) {
		var Number = ((KeyID*2)-4);
		if (1 < KeyID && document.getElementById("UsedItems").getElementsByTagName("div")[Number].id.includes("Type_0ARSKey_") === true && TypeID !== 0) {
			if (document.getElementById("TextField_" + TextfieldId).value !== "" && document.getElementById("TextField_" + TextfieldId).value.endsWith(" ") === false) {
				document.getElementById("TextField_" + TextfieldId).value += " ";
				document.getElementById("Type_0ARSKey_" + (KeyID - 1) + "TextField_" + TextfieldId + "Response").innerHTML += " ";
				localStorage.setItem("TextField_" + TextfieldId, document.getElementById("TextField_" + TextfieldId).value);
			}
		}
		if (1 < KeyID && document.getElementById("UsedItems").getElementsByTagName("div")[Number].id.includes("Type_0ARSKey_") === false && document.getElementById("UsedItems").getElementsByTagName("div")[Number].id.includes("Linebreak_") === false && TypeID === 0) {
			document.getElementById("TextField_" + TextfieldId).value += " ";
			document.getElementById("Type_0ARSKey_" + KeyID + "TextField_" + TextfieldId + "Response").innerHTML += " ";
			localStorage.setItem("TextField_" + TextfieldId, document.getElementById("TextField_" + TextfieldId).value);
		}
	}
	/*TextfieldList[KeyID] = false;
	localStorage.setItem("Linebreaks", JSON.stringify(TextfieldList));*/
}
function RemoveWhatItem(RemovedKeyID, TypeID, RemovedTextfieldId, RemovedLinebreakId) {
	if (KeyTypeAmounts[13] > 0 && TypeID !== 13) {
		localStorage.setItem("TempChangeAlertId", document.getElementById("AlertId").value);
	}
	if (TypeID === 100) {
		setTimeout( function() {
			var Key = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + "Linebreak_" + RemovedLinebreakId);
			var LinebreakInResponse = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + "Linebreak_" + RemovedLinebreakId + "Response");
			Key.parentNode.removeChild(Key);
			LinebreakInResponse.parentNode.removeChild(LinebreakInResponse);
			var UsedItems = document.getElementById("UsedItems").innerHTML;
			var SetResponse = document.getElementById("Response").innerHTML;
			localStorage.setItem("UsedItems", UsedItems);
			localStorage.setItem("Response", SetResponse);
			localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
			localStorage.setItem("AmountOfTextFieldsBeingUsed", TextfieldId);
			ChangeIDs(RemovedKeyID, TypeID, RemovedTextfieldId, RemovedLinebreakId);
		}, 10);
	} else if (TypeID === 0) {
		KeyTypeAmounts[TypeID]--;
		KeyTypeSubAmounts[TypeID]--;
		localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
		localStorage.setItem("KeyTypeSubAmounts", KeyTypeSubAmounts);
		document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client removed textfield. With an ID of: " + RemovedKeyID + "<br>";
		localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
		setTimeout( function() {
			var Key = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + "TextFieldDiv");
			var TextFieldInResponse = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + "TextField_" + RemovedTextfieldId + "Response");
			Key.parentNode.removeChild(Key);
			TextFieldInResponse.parentNode.removeChild(TextFieldInResponse);
			/*if (TextfieldList[RemovedKeyID] === true) {
				var LinebreakInResponse = document.getElementById("ARSKey_" + RemovedKeyID + "LineBreak");
				LinebreakInResponse.parentNode.removeChild(LinebreakInResponse);
			}*/
			var UsedItems = document.getElementById("UsedItems").innerHTML;
			var SetResponse = document.getElementById("Response").innerHTML;
			localStorage.setItem("UsedItems", UsedItems);
			localStorage.setItem("Response", SetResponse);
			localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
			localStorage.setItem("AmountOfTextFieldsBeingUsed", TextfieldId);
			ChangeIDs(RemovedKeyID, TypeID, RemovedTextfieldId, RemovedLinebreakId);
		}, 10);
	} else if (TypeID === 5 || TypeID === 6) {
		KeyTypeAmounts[TypeID]--;
		localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
		document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client removed '{" + Keys[TypeID] +"}' key. With an ID of: " + RemovedKeyID + "</span><br>";
		localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
		setTimeout( function() {
			var Key = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID);
			var RoleInResponse = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + RoleKeyTypes[TypeID] + "RoleResponse");
			Key.parentNode.removeChild(Key);
			RoleInResponse.parentNode.removeChild(RoleInResponse);
			/*if (TextfieldList[RemovedKeyID] === true) {
				var LinebreakInResponse = document.getElementById("ARSKey_" + RemovedKeyID + "LineBreak");
				LinebreakInResponse.parentNode.removeChild(LinebreakInResponse);
			}*/
			var UsedItems = document.getElementById("UsedItems").innerHTML;
			var SetResponse = document.getElementById("Response").innerHTML;
			localStorage.setItem("UsedItems", UsedItems);
			localStorage.setItem("Response", SetResponse);
			localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
			ChangeIDs(RemovedKeyID, TypeID, RemovedTextfieldId, RemovedLinebreakId);
		}, 10);
	} else if (TypeID === 9 || TypeID === 11) {
		KeyTypeAmounts[TypeID]--;
		localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
		document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client removed '{" + Keys[TypeID] +"}' key. With an ID of: " + RemovedKeyID + "</span><br>";
		localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
		setTimeout( function() {
			var Key = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID);
			var RolesInResponse = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + RoleKeyTypes[TypeID] + "RolesResponse");
			Key.parentNode.removeChild(Key);
			RolesInResponse.parentNode.removeChild(RolesInResponse);
			if (TextfieldList[RemovedKeyID] === true) {
				var LinebreakInResponse = document.getElementById("ARSKey_" + RemovedKeyID + "LineBreak");
				LinebreakInResponse.parentNode.removeChild(LinebreakInResponse);
			}
			var UsedItems = document.getElementById("UsedItems").innerHTML;
			var SetResponse = document.getElementById("Response").innerHTML;
			localStorage.setItem("UsedItems", UsedItems);
			localStorage.setItem("Response", SetResponse);
			localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
			localStorage.setItem(RoleKeyTypes[TypeID] + "IsUsed", false);
			ChangeIDs(RemovedKeyID, TypeID, RemovedTextfieldId, RemovedLinebreakId);
		}, 10);
	} else if (TypeID === 10 || TypeID === 12) {
		KeyTypeAmounts[TypeID]--;
		localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
		document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client removed '{" + Keys[TypeID] +"}' key. With an ID of: " + RemovedKeyID + "</span><br>";
		localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
		setTimeout( function() {
			var Key = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID);
			var RoleInResponse = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + RoleKeyTypes[TypeID] + "Response");
			Key.parentNode.removeChild(Key);
			RoleInResponse.parentNode.removeChild(RoleInResponse);
			if (TextfieldList[RemovedKeyID] === true) {
				var LinebreakInResponse = document.getElementById("ARSKey_" + RemovedKeyID + "LineBreak");
				LinebreakInResponse.parentNode.removeChild(LinebreakInResponse);
			}
			var UsedItems = document.getElementById("UsedItems").innerHTML;
			var SetResponse = document.getElementById("Response").innerHTML;
			localStorage.setItem("UsedItems", UsedItems);
			localStorage.setItem("Response", SetResponse);
			localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
			ChangeIDs(RemovedKeyID, TypeID, RemovedTextfieldId, RemovedLinebreakId);
		}, 10);
	} else if (TypeID === 13) {
		KeyTypeAmounts[TypeID]--;
		localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
		document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client removed '{" + Keys[TypeID] +"}' key. With an ID of: " + RemovedKeyID + "</span><br>";
		localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
		setTimeout( function() {
			var Key = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID);
			var AlertIdInResponse = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + "AlertIdsResponse");
			Key.parentNode.removeChild(Key);
			AlertIdInResponse.parentNode.removeChild(AlertIdInResponse);
			var UsedItems = document.getElementById("UsedItems").innerHTML;
			var SetResponse = document.getElementById("Response").innerHTML;
			localStorage.setItem("UsedItems", UsedItems);
			localStorage.setItem("Response", SetResponse);
			localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
			localStorage.removeItem("AlertIdsSelection");
			if (localStorage["AlertIdsResponse"]) {
				localStorage.removeItem("AlertIdsResponse");
			}
			ChangeIDs(RemovedKeyID, TypeID, RemovedTextfieldId, RemovedLinebreakId);
		}, 10);
	} else {
		KeyTypeAmounts[TypeID]--;
		localStorage.setItem("KeyTypeAmounts", KeyTypeAmounts);
		document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client removed '{" + Keys[TypeID] +"}' key. With an ID of: " + RemovedKeyID + "</span><br>";
		localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
		setTimeout( function() {
			var Key = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID);
			var KeyInResponse = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + "Response");
			Key.parentNode.removeChild(Key);
			KeyInResponse.parentNode.removeChild(KeyInResponse);
			var UsedItems = document.getElementById("UsedItems").innerHTML;
			var SetResponse = document.getElementById("Response").innerHTML;
			localStorage.setItem("UsedItems", UsedItems);
			localStorage.setItem("Response", SetResponse);
			localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
			ChangeIDs(RemovedKeyID, TypeID, RemovedTextfieldId, RemovedLinebreakId);
		}, 10);
	}
}

function ChangeIDs(RemovedKeyID, TypeID, RemovedTextfieldId, RemovedLBID) {
	"use strict";
	if ((KeyID + 1) === JSON.parse(localStorage.getItem("AmountOfKeysBeingUsed"))) {
		if (RemovedKeyID === 1) {
			var getNextKey = (RemovedKeyID - 1);
			var h = RemovedKeyID;
			var j = (RemovedKeyID + 1);
		} else {
			var getNextKey = ((RemovedKeyID * 2) - 2);
			var h = RemovedKeyID;
			var j = (RemovedKeyID + 1);
		} 
	} else {
		if (RemovedKeyID === 1) {
			var getNextKey = (RemovedKeyID - 1);
			var h = RemovedKeyID;
			var j = RemovedKeyID;
		} else {
			var h = RemovedKeyID;
			var j = RemovedKeyID;
			var getNextKey = ((RemovedKeyID * 2) - 2);
		}
	}
	var GetAmountOfTextFields = 0;
	if (TextfieldId === 0) {
		GetAmountOfTextFields = 1;
	} else {
		GetAmountOfTextFields = TextfieldId;
	}
	var GetAmountOfLinebreaks = 0;
	if (LinebreakID === 0) {
		GetAmountOfLinebreaks = 1;
	} else {
		GetAmountOfLinebreaks = LinebreakID;
	}
	var k = RemovedTextfieldId;
	var LB = RemovedLBID;
	var AmountOfKeys = JSON.parse(localStorage.getItem("AmountOfKeysBeingUsed"));
	var AmountOfTextFields = JSON.parse(localStorage.getItem("AmountOfTextFieldsBeingUsed"));
	var dom = document.getElementById("UsedItems").getElementsByTagName("div");
	var domInputRemove = document.getElementById("UsedItems").getElementsByTagName('button');
	var domResponse = document.getElementById("Response").getElementsByTagName("span");
	var SetResponse = document.getElementById("Response").innerHTML;
	var Response = document.getElementById("Response");
	if (RemovedKeyID <= AmountOfKeys) {
		if (AmountOfKeys > 0) {
			setTimeout(function() {
				document.getElementById("Processing").style = "background-image: linear-gradient(rgba(197, 197, 197, 0.5),rgba(197, 197, 197, 0.5)), url(https://echo.xtclabs.net/img/pw_maze_black_2X.png); border-radius: 3px; width: 100%;";
				document.getElementById("UsedItems").style = "pointer-events: none; opacity: 0.7;";
				if ((dom[getNextKey].id.includes("Type_100ARSKey_") === true) && (LinebreakID > 0)) {
					if (TypeID === 100) {
						document.getElementById("Type_100ARSKey_" + (j + 1) + "Linebreak_" + (LB + 1)).id = "Type_100ARSKey_" + h + "Linebreak_" + LB;
						document.getElementById("Type_100ARSKey_" + h + "Linebreak_" + LB).innerHTML = "<span class='bold'>" + h + ". Linebreak<div style='display:inline-block; float: right;'><button class='button' onClick='KeyID--; LinebreakID--; RemoveWhatItem(" + h + ", 100, " + k + ", " + LB + ");'>Remove</button></div></span>";
						document.getElementById("Type_100ARSKey_" + (j + 1) + "Linebreak_" + (LB + 1) + "Response").id = "Type_100ARSKey_" + h + "Linebreak_" + LB + "Response";
					} else {
						document.getElementById("Type_100ARSKey_" + (j + 1) + "Linebreak_" + LB).id = "Type_100ARSKey_" + h + "Linebreak_" + LB;
						document.getElementById("Type_100ARSKey_" + h + "Linebreak_" + LB).innerHTML = "<span class='bold'>" + h + ". Linebreak<div style='display:inline-block; float: right;'><button class='button' onClick='KeyID--; LinebreakID--; RemoveWhatItem(" + h + ", 100, " + k + ", " + LB + ");'>Remove</button></div></span>";
						document.getElementById("Type_100ARSKey_" + (j + 1) + "Linebreak_" + LB + "Response").id = "Type_100ARSKey_" + h + "Linebreak_" + LB + "Response";
					}
					LB++;
				} else if ((dom[getNextKey].id.includes("Type_0ARSKey_") === true) && (KeyTypeAmounts[0] > 0)) {
					var NewResponseId = "Type_0ARSKey_" + h + "TextField_" + k + "Response";
					document.getElementById("Type_0ARSKey_" + (j + 1) + "TextFieldDiv").id = "Type_0ARSKey_" + h + "TextFieldDiv";
					document.getElementById("Type_0ARSKey_" + j + "TextFieldDiv").innerHTML = '<label class="bold">' + h + '. Your Text: <input class="input" type="text" id="TextField_' + k + '" name="Type_0ARSKey_' + h + 'TextField_' + k + '" placeholder="You can put some text here..." value="" onchange="var Text = document.getElementById(' + Quote + 'TextField_' + k + Quote + ').value; document.getElementById(' + Quote + 'Type_0ARSKey_' + h + 'TextField_' + k + 'Response' + Quote + ').innerHTML = Text; var StoreResponse = document.getElementById(' + ResponseText + ').innerHTML; localStorage.setItem(' + ResponseText + ', StoreResponse); localStorage.setItem(' + Quote + 'TextField_' + k + Quote + ', Text);"></input><div style="display:inline-block; float: right;"><button class="button" onclick="KeyID--; TextfieldId--; RemoveWhatItem(' + h + ', 0, ' + k + ', ' + LB + ');">Remove</button></div></label>';
					if (TypeID === 0) {
						document.getElementById("Type_0ARSKey_" + (j + 1) + "TextField_" + (k + 1) + "Response").id = "Type_0ARSKey_" + h + "TextField_" + k + "Response";
						var SetValue = localStorage.getItem("TextField_" + (k + 1));
						document.getElementById("TextField_" + k).value = SetValue;
						localStorage.setItem("TextField_" + k, (localStorage.getItem("TextField_" + (k + 1))));
					} else {
						document.getElementById("Type_0ARSKey_" + (j + 1) + "TextField_" + k + "Response").id = "Type_0ARSKey_" + h + "TextField_" + k + "Response";
						var SetValue = localStorage.getItem("TextField_" + k);
						document.getElementById("TextField_" + k).value = SetValue;
					}
					k++;
				} else if ((dom[getNextKey].id.includes("Type_5ARSKey_") === true) && (KeyTypeAmounts[5] > 0)) {
					document.getElementById("Type_5ARSKey_" + (j + 1)).id = "Type_5ARSKey_" + h;
					document.getElementById("Type_5ARSKey_" + h).innerHTML = '<label class="bold">' + h + '. <span class="DCSL skipbold">{role}</span> Give a role: <input class="input" type="text" id="GiveRole" name="Type_5ARSKey_' + h + 'GiveRole" placeholder="Roles are CaSe-sensitive" value="" onchange="RoTaRoleValue(' + h + ', 5);"><div style="display:inline-block; float: right;"><button class="button" onclick="KeyID--; RemoveWhatItem(' + h + ', 5, ' + k + ', ' + LB + ');">Remove</button></div></label>';
					document.getElementById("Type_5ARSKey_" + (j + 1) + "GiveRoleResponse").id = "Type_5ARSKey_" + h + "GiveRoleResponse";
					if (localStorage.getItem("GiveRole") != "") {
						document.getElementById("GiveRole").value = localStorage.getItem("GiveRole");
						document.getElementById("Type_5ARSKey_" + h + "GiveRoleResponse").innerHTML = "{role:<span id='GiveRoleResponse'>" + localStorage.getItem("GiveRole") + "</span>}";
					} else {
						document.getElementById("Type_5ARSKey_" + h + "GiveRoleResponse").innerHTML = "{role<span id='GiveRoleResponse'></span>}";
					}
				} else if ((dom[getNextKey].id.includes("Type_6ARSKey_") === true) && (KeyTypeAmounts[6] > 0)) {
					document.getElementById("Type_6ARSKey_" + (j + 1)).id = "Type_6ARSKey_" + h;
					document.getElementById("Type_6ARSKey_" + h).innerHTML = '<label class="bold">' + h + '. <span class="DCSL skipbold">{take}</span> Take a role: <input class="input" type="text" id="TakeRole" name="Type_6ARSKey_' + h + 'TakeRole" placeholder="Roles are CaSe-sensitive" value="" onchange="RoTaRoleValue(' + h + ', 6);"><div style="display:inline-block; float: right;"><button class="button" onclick="KeyID--; RemoveWhatItem(' + h + ', 6, ' + k + ', ' + LB + ');">Remove</button></div></label>';
					document.getElementById("Type_6ARSKey_" + (j + 1) + "TakeRoleResponse").id = "Type_6ARSKey_" + h + "TakeRoleResponse";
					if (localStorage.getItem("TakeRole") != "") {
						document.getElementById("TakeRole").value = localStorage.getItem("TakeRole");
						document.getElementById("Type_6ARSKey_" + h + "TakeRoleResponse").innerHTML = "{take:<span id='TakeRoleResponse'>" + localStorage.getItem("TakeRole") + "</span>}";
					} else {
						document.getElementById("Type_6ARSKey_" + h + "TakeRoleResponse").innerHTML = "{take<span id='TakeRoleResponse'></span>}";
					}
				} else if ((dom[getNextKey].id.includes("Type_9ARSKey_") === true) && (KeyTypeAmounts[9] > 0)) {
					document.getElementById("Type_9ARSKey_" + (j + 1)).id = "Type_9ARSKey_" + h;
					document.getElementById("Type_9ARSKey_" + h).innerHTML = '<label class="bold">' + h + '. <span class="DCSL skipbold">{req}</span> Require a role: <input class="input" type="text" id="RequireRole" name="Type_9ARSKey_' + h + 'RequireRoles" placeholder="To add a role press Enter." value="" onkeypress="ReExRoleValue(' + h + ', 9, event);"><div style="display:inline-block; float: right;"><select name="RequireRoles" id="RequireRolesSelection" class="Selection"><option id="RequireRoleDefault" class="RoleOption" selected>Select Role you want to remove</option></select><button class="button" style="margin-right: 3px;" onClick="removeRole(' + h + ', 9);">Remove role</button><button class="button" onclick="KeyID--; RemoveWhatItem('+ h + ', 9, ' + k + ', ' + LB + ');">Remove</button></div></label>';
					document.getElementById("Type_9ARSKey_" + (j + 1) + "RequireRolesResponse").id = "Type_9ARSKey_" + h + "RequireRolesResponse";
					document.getElementById("RequireRolesSelection").innerHTML = localStorage.getItem("RequireRolesSelection");
					if (document.getElementById("RequireRolesSelection").lastChild.id != "RequireRoleDefault") {
						document.getElementById("Type_9ARSKey_" + h + "RequireRolesResponse").innerHTML = "{req:<span id='RequireRolesResponse'>" + document.getElementById("RequireRolesResponse").innerHTML + "</span>}";
					} else {
						document.getElementById("Type_9ARSKey_" + h + "RequireRolesResponse").innerHTML = "{req<span id='RequireRolesResponse'></span>}";
					}
				} else if ((dom[getNextKey].id.includes("Type_10ARSKey_") === true) && (KeyTypeAmounts[10] > 0)) {
					if (TypeID === 9) {
						var RemoveNotReq = document.getElementById("Type_10ARSKey_" + (j + 1));
						var RemoveNotReqResponse = document.getElementById("Type_10ARSKey_" + (j + 1) + "NotRequiredResponse");
						RemoveNotReq.parentNode.removeChild(RemoveNotReq);
						RemoveNotReqResponse.parentNode.removeChild(RemoveNotReqResponse);
						KeyID--;
						KeyTypeAmounts[10]--;
						localStorage.setItem("KeyType10Amount", KeyTypeAmounts[10]);
						if (h < localStorage.getItem("AmountOfKeysBeingUsed")) {
							return ChangeIDs(h, TypeID, k);
						} else {
							document.getElementById("Processing").style = "";
							document.getElementById("UsedItems").style = "opacity: 1;";
							var KeysBeingUsed = document.getElementById("UsedItems").innerHTML;
							var SetResponse = document.getElementById("Response").innerHTML;
							localStorage.setItem("KeysBeingUsed", KeysBeingUsed);
							localStorage.setItem("Response", SetResponse);
						}
					} else {
						document.getElementById("Type_10ARSKey_" + (j + 1)).id = "Type_10ARSKey_" + h;
						document.getElementById("Type_10ARSKey_" + h).innerHTML = '<label class="bold">' + h + '. <span class="DCSL skipbold">{notreq}</span> Take a role: <input class="input" type="text" id="NotRequired" name="Type_10ARSKey_' + h + 'NotRequired" placeholder="You can only use text in here" value="" onchange="isExnotReMessage(' + h + ', 10);"><div style="display:inline-block; float: right;"><button class="button" onclick="KeyID--; RemoveWhatItem(' + h + ', 10, ' + k + ', ' + LB + ');">Remove</button></div></label>';
						document.getElementById("Type_10ARSKey_" + (j + 1) + "NotRequiredResponse").id = "Type_10ARSKey_" + h + "NotRequiredResponse";
						if (localStorage.getItem("NotRequiredMessage") != "") {
							document.getElementById("NotRequired").value = localStorage.getItem("NotRequiredMessage");
							document.getElementById("Type_10ARSKey_" + h + "NotRequiredResponse").innerHTML = "{notreq:<span id='NotRequiredResponse'>" + localStorage.getItem("NotRequiredMessage") + "</span>}";
						} else {
							document.getElementById("NotRequired").value = "";
							document.getElementById("Type_10ARSKey_" + h + "NotRequiredResponse").innerHTML = "{notreq<span id='NotRequiredResponse'></span>}";
						}
					}
				} else if ((dom[getNextKey].id.includes("Type_11ARSKey_") === true) && (KeyTypeAmounts[11] > 0)) {
					document.getElementById("Type_11ARSKey_" + (j + 1)).id = "Type_11ARSKey_" + h;
					document.getElementById("Type_11ARSKey_" + h).innerHTML = '<label class="bold">' + h + '. <span class="DCSL skipbold">{exc}</span> Exclude a role: <input class="input" type="text" id="ExcludeRole" name="Type_11ARSKey_' + h + 'ExcludeRoles" placeholder="To add a role press Enter." value="" onkeypress="ReExRoleValue(' + h + ', 11, event);"><div style="display:inline-block; float: right;"><select name="ExcludeRoles" id="ExcludeRolesSelection" class="Selection"><option id="ExcludeRoleDefault" class="RoleOption" selected>Select Role you want to remove</option></select><button class="button" style="margin-right: 3px;" onClick="removeRole(' + h + ', 11);">Remove role</button><button class="button" onclick="KeyID--; RemoveWhatItem('+h+', 11, '+h+');">Remove</button></div></label>';
					document.getElementById("Type_11ARSKey_" + (j + 1) + "ExcludeRolesResponse").id = "Type_11ARSKey_" + h + "ExcludeRolesResponse";
					document.getElementById("ExcludeRolesSelection").innerHTML = localStorage.getItem("ExcludeRolesSelection");
					if (document.getElementById("ExcludeRolesSelection").lastChild.id != "ExcludeRoleDefault") {
						document.getElementById("Type_11ARSKey_" + h + "ExcludeRolesResponse").innerHTML = "{exc:<span id='ExcludeRolesResponse'>" + document.getElementById("ExcludeRolesResponse").innerHTML + "</span>}";
					} else {
						document.getElementById("Type_11ARSKey_" + h + "ExcludeRolesResponse").innerHTML = "{exc<span id='ExcludeRolesResponse'></span>}";
					}
				} else if ((dom[getNextKey].id.includes("Type_12ARSKey_") === true) && (KeyTypeAmounts[12] > 0)) {
					if (TypeID === 11) {
						var RemoveIsExc = document.getElementById("Type_12ARSKey_" + (j + 1));
						var RemoveIsExcResponse = document.getElementById("Type_12ARSKey_" + (j + 1) + "IsExcludedResponse");
						RemoveIsExc.parentNode.removeChild(RemoveIsExc);
						RemoveIsExcResponse.parentNode.removeChild(RemoveIsExcResponse);
						KeyID--;
						KeyTypeAmounts[12]--;
						localStorage.setItem("KeyType12Amount", KeyTypeAmounts[12]);
						if (h < localStorage.getItem("AmountOfKeysBeingUsed")) {
							return ChangeIDs(h, TypeID, k);
						} else {
							document.getElementById("Processing").style = "";
							document.getElementById("UsedItems").style = "opacity: 1;";
							var KeysBeingUsed = document.getElementById("UsedItems").innerHTML;
							var SetResponse = document.getElementById("Response").innerHTML;
							localStorage.setItem("KeysBeingUsed", KeysBeingUsed);
							localStorage.setItem("Response", SetResponse);
						}
					} else {
						document.getElementById("Type_12ARSKey_" + (j + 1)).id = "Type_12ARSKey_" + h;
						document.getElementById("Type_12ARSKey_" + h).innerHTML = '<label class="bold">' + h + '. <span class="DCSL skipbold">{isexc}</span> Take a role: <input class="input" type="text" id="IsExcluded" name="Type_12ARSKey_' + h + 'IsExcluded" placeholder="You can only use text in here" value="" onchange="RoTaRoleValue(' + h + ', 12);"><div style="display:inline-block; float: right;"><button class="button" onclick="KeyID--; RemoveWhatItem(' + h + ', 12, ' + k + ', ' + LB + ');">Remove</button></div></label>';
						document.getElementById("Type_12ARSKey_" + (j + 1) + "IsExcludedResponse").id = "Type_12ARSKey_" + h + "IsExcludedResponse";
						if (localStorage.getItem("IsExcludedMessage") != "") {
							document.getElementById("IsExcluded").value = localStorage.getItem("IsExcludedMessage");
							document.getElementById("Type_12ARSKey_" + h + "IsExcludedResponse").innerHTML = "{isexc:<span id='IsExcludedResponse'>" + localStorage.getItem("IsExcludedMessage") + "</span>}";
						} else {
							document.getElementById("IsExcluded").value = "";
							document.getElementById("Type_12ARSKey_" + h + "IsExcludedResponse").innerHTML = "{isexc<span id='IsExcludedResponse'></span>}";
						}
					}
				} else if ((dom[getNextKey].id.includes("Type_13ARSKey_") === true) && (KeyTypeAmounts[13] > 0)) {
					document.getElementById("Type_13ARSKey_" + (j + 1)).id = "Type_13ARSKey_" + h;
					document.getElementById("Type_13ARSKey_" + h).innerHTML = "<label class='bold'>" + h + ". <span class='DCSL skipbold'>{alert}</span> Alert Ids: <input class='input' type='text' id='AlertId' name='Type_13ARSKey_" + h + "' placeholder='To add an Id press Enter.' value='' maxLength=18 onkeydown='AlertIdValue(" + h + ", 13, event);'><div style='display:inline-block; float: right;'><select name='AlertIDs' id='AlertIdsSelection' class='Selection'><option id='AlertIdDefault' class='Option' selected>Select an Id you want to remove</option></select><button class='button' style='margin-right: 3px;' onClick='AlertRemoveId(" + h + ", 13);'>Remove Id</button><button class='button' onclick='KeyID--; RemoveWhatItem(" + h + ", 13, " + k + ", " + LB + ");'>Remove</button></div></label>";
					document.getElementById("Type_13ARSKey_" + (j + 1) + "AlertIdsResponse").id = "Type_13ARSKey_" + h + "AlertIdsResponse";
					document.getElementById("AlertIdsSelection").innerHTML = localStorage.getItem("AlertIdsSelection");
					document.getElementById("AlertId").value = localStorage.getItem("TempChangeAlertId");
					localStorage.removeItem("TempChangeAlertId");
					if (document.getElementById("AlertIdsSelection").lastChild.id !== "AlertIdDefault") {
						document.getElementById("Type_13ARSKey_" + h + "AlertIdsResponse").innerHTML = "{alert:<span id='AlertIdsResponse'>" + document.getElementById("AlertIdsResponse").innerHTML + "</span>}";
					} else {
						document.getElementById("Type_13ARSKey_" + h + "AlertIdsResponse").innerHTML = "{alert<span id='AlertIdsResponse'></span>}";
					}
				} else {
					if (h <= AmountOfKeys) {
						return ChangeSimpleKeys(h, j, k, LB, 1, TypeID);
					}
				}
				h++;
				if ((KeyID + 1) === JSON.parse(localStorage.getItem("AmountOfKeysBeingUsed"))) {
					if (h < AmountOfKeys) {
						ChangeIDs(h, TypeID, k, LB);
					} else {
						document.getElementById("Processing").style = "";
						document.getElementById("UsedItems").style = "opacity: 1;";
						var KeysBeingUsed = document.getElementById('UsedItems').innerHTML;
						var SetResponse = document.getElementById("Response").innerHTML;
						localStorage.setItem('KeysBeingUsed', KeysBeingUsed);
						localStorage.setItem("Response", SetResponse);
						localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
						/*TextfieldList.splice(-1, 1);
						localStorage.setItem("Linebreaks", JSON.stringify(TextfieldList));*/
						if (KeyTypeAmounts[0] > 0) {
							localStorage.removeItem("TextField_" + (AmountOfTextFields + 1));
						}
					}
				} else {
					if (j < AmountOfKeys) {
						ChangeIDs(h, TypeID, k, LB);
					} else {
						document.getElementById("Processing").style = "";
						document.getElementById("UsedItems").style = "opacity: 1;";
						var KeysBeingUsed = document.getElementById('UsedItems').innerHTML;
						var SetResponse = document.getElementById("Response").innerHTML;
						localStorage.setItem('KeysBeingUsed', KeysBeingUsed);
						localStorage.setItem("Response", SetResponse);
						localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
						/*TextfieldList.splice(-1, 1);
						localStorage.setItem("Linebreaks", JSON.stringify(TextfieldList));*/
						if (KeyTypeAmounts[0] > 0) {
							localStorage.removeItem("TextField_" + (AmountOfTextFields + 1));
						}
					}
				}
			}, 50);
		}
	} else {
		document.getElementById("Processing").style = "";
		document.getElementById("UsedItems").style = "opacity: 1;";
		var UsedItems = document.getElementById("UsedItems").innerHTML;
		var SetResponse = document.getElementById("Response").innerHTML;
		localStorage.setItem("UsedItems", UsedItems);
		localStorage.setItem("Response", SetResponse);
		localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
	}
}

function ChangeSimpleKeys(RemovedKeyId1, RemovedKeyId2, RemovedTextfieldId, RemovedLinebreakId, TypeId, OriginalTypeId) {
	if (RemovedKeyId1 === 1) {
		var getNextKey = (RemovedKeyId1 - 1);
	} else {
		var getNextKey = ((RemovedKeyId1 * 2) - 2);
	}
	var a = RemovedKeyId1;
	var b = RemovedKeyId2;
	var c = RemovedTextfieldId;
	var d = RemovedLinebreakId;
	var e = TypeId;
	var f = OriginalTypeId;
	var dom = document.getElementById("UsedItems").getElementsByTagName("div");
	setTimeout( function() {
		if (TypeId !== (0 || (5 || (6 || (9 || (10 || (11 || (12 || (13 || 100))))))))) {
			if ((dom[getNextKey].id.includes("Type_" + e + "ARSKey_") === true) && (KeyTypeAmounts[e] > 0)) {
				document.getElementById("Type_" + e + "ARSKey_" + (b + 1)).id = "Type_" + e + "ARSKey_" + a;
				document.getElementById("Type_" + e + "ARSKey_" + a).innerHTML = "<span class='bold'>" + a + ". <span class='DCSL skipbold'>{" + Keys[e] + "}</span><div style='display:inline-block; float: right;'><button class='button' onclick='KeyID--; RemoveWhatItem(" + a + ", " + e + ", " + c + ", " + d + ");'>Remove</button></div></span>";
				document.getElementById("Type_" + e + "ARSKey_" + (b + 1) + "Response").id = "Type_" + e + "ARSKey_" + a + "Response";
				a++;
				setTimeout( function() {
					ChangeIDs(a, f, c, d);
				}, 10);
			} else {
				e++;
				ChangeSimpleKeys(a, b, c, d, e, f);
			}
		} else if (e < 47) {
			e++;
			ChangeSimpleKeys(a, b, c, d, e, f);
		} else {
			a++;
			ChangeIDs(a, f, c, d);
		}
	}, 1);
}

function ChangeValues(TypeID, RemovedTextfieldId) {
	var l = RemovedTextfieldId;
	var AmountOfTextFields = localStorage.getItem("AmountOfTextFieldsBeingUsed");
	if (KeyTypeSubAmounts[0] > 0) {
			setTimeout(function() {
			if (TypeID == 0) {
				var SetValue = localStorage.getItem("TextField_" + (l + 1));
				document.getElementById("TextField_" + l).value = SetValue;
			} else {
				if (document.getElementById("TextField_" + l).value !== "") {
					document.getElementById("TextField_" + l).value = localStorage.getItem("TextField_" + l);
				} else {
					document.getElementById("TextField_" + l).value = "";
				}
			}
			l++;
			if (l <= AmountOfTextFields) {
				ChangeValues(TypeID, l);
			}
		}, 50);
	}
}

function SetSystemVars() {
	/* Global Variables */
		localStorage.setItem("KeyId", KeyID);
		localStorage.setItem("TextfieldId", TextfieldId);
		localStorage.setItem("KeyId", LinebreakID);
		localStorage.setItem("isAS", isAS);
		localStorage.setItem("TextfieldValuesList", JSON.stringify(TextfieldValuesList));
		localStorage.setItem("AlertIdsList", JSON.stringify(AlertIdsList));
		localStorage.setItem("KeyTypeAmounts", JSON.stringify(KeyTypeAmounts));
		localStorage.setItem("KeyTypeSubAmounts", JSON.stringify(KeyTypeSubAmounts));
	/* Log */
		localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
	/* Trigger */
		var UseParams = SetTrigger("GetParams");
		var TriggerName = document.getElementById("TriggerName").value;
		var CheckForWhiteSpaces = RegExp(/\s/g).test(TriggerName);
		localStorage.setItem("Trigger", document.getElementById("Trigger").innerHTML);
		localStorage.setItem("EchoPrefix", document.getElementById("EchoPrefix").value);
		localStorage.setItem("TriggerName", document.getElementById("TriggerName").value);
		localStorage.setItem("UseParams", JSON.stringify(UseParams));
		localStorage.setItem("MultipleWords", JSON.stringify(CheckForWhiteSpaces));
	/* Response + Items */
		localStorage.setItem("UsedItems", document.getElementById("UsedItems").innerHTML);
		localStorage.setItem("Response", document.getElementById("Response").innerHTML);
		if (document.getElementById("GiveRole") && document.getElementById("GiveRole").value !== "") {
			localStorage.setItem("GiveRole", document.getElementById("GiveRole").value);
		}
		if (document.getElementById("TakeRole") && document.getElementById("TakeRole").value !== "") {
			localStorage.setItem("TakeRole", document.getElementById("TakeRole").value);
		}
		if (document.getElementById("RequireRole") && document.getElementById("RequireRolesResponse").innerHTML !== "") {
			localStorage.setItem("RequireRolesResponse", document.getElementById("RequireRolesResponse").innerHTML);
			localStorage.setItem("RequireRolesSelection", document.getElementById("RequireRolesSelection").innerHTML);
		}
		if (document.getElementById("ExcludeRole") && document.getElementById("ExcludeRolesResponse").innerHTML !== "") {
			localStorage.setItem("ExcludeRolesResponse", document.getElementById("ExcludeRolesResponse").innerHTML);
			localStorage.setItem("ExcludeRolesSelection", document.getElementById("ExcludeRolesSelection").innerHTML);
		}
		if (document.getElementById("NotRequired") && document.getElementById("NotRequired").value !== "") {
			localStorage.setItem("NotRequired", document.getElementById("NotRequired").value);
		}
		if (document.getElementById("IsExcluded") && document.getElementById("IsExcluded").value !== "") {
			localStorage.setItem("IsExcluded", document.getElementById("IsExcluded").value);
		}
	/* End */
}
function GetSystemVars() {
	/* Global Variables */
		KeyID =  localStorage.getItem("KeyId");
		TextfieldId = localStorage.getItem("TextfieldId");
		LinebreakID = localStorage.getItem("LinebreakId");
		isAS = localStorage.getItem("isAS");
		TextfieldValuesList = localStorage.getItem("TextfieldValuesList");
		AlertIdsList = localStorage.getItem("AlertIdsList");
		KeyTypeAmounts = localStorage.getItem("KeyTypeAmounts");
		KeyTypeSubAmounts = localStorage.getItem("KeyTypeSubAmounts");
		setTimeout( function() {
			localStorage.removeItem("KeyId");
			localStorage.removeItem("TextfieldId");
			localStorage.removeItem("LinebreakId");
			localStorage.removeItem("isAS");
			localStorage.removeItem("TextfieldValuesList");
			localStorage.removeItem("AlertIdsList");
			localStorage.removeItem("KeyTypeAmounts");
			localStorage.removeItem("KeyTypeSubAmounts");
		}, 1000);
	/* Log */
		document.getElementById("LogContent").innerHTML = localStorage.getItem("Log");
		setTimeout( function() {
			localStorage.removeItem("Log");
			setTimeout(function() { 
				PageLoad(); 
			}, 1000);
		}, 10);
	/* Trigger */
		document.getElementById("Trigger").innerHTML = localStorage.getItem("Trigger");
		document.getElementById("EchoPrefix").value = localStorage.getItem("EchoPrefix");
		document.getElementById("TriggerName").value = localStorage.getItem("TriggerName");
		SetTrigger(JSON.parse(localStorage.getItem("UseParams")));
		var GetUseParamsKey = JSON.parse(localStorage.getItem("UseParams"));
		var GetMultipleWords = JSON.parse(localStorage.getItem("MultipleWords"));
		var AllowTriggerNameAfterParams = document.getElementById("TriggerNameAfterParams");
		setTimeout(function() {
			if (GetUseParamsKey == true && GetMultipleWords == true) {
				document.getElementById("UseParamsInTrigger").checked = true;
				MultipleWords = "&";
				UseParamsKey = "{params}";
				AllowTriggerNameAfterParams.disabled = false;
				AllowTriggerNameAfterParams.style = "opacity: 1;";
				document.getElementById("TriggerNameAfterParams").value = localStorage.getItem("TriggerNameAfterParams");
			} else if (GetUseParamsKey == true && GetMultipleWords == false) {
				document.getElementById("UseParamsInTrigger").checked = true;
				MultipleWords = "&";
				UseParamsKey = "{params}";
				AllowTriggerNameAfterParams.disabled = false;
				AllowTriggerNameAfterParams.style = "opacity: 1;";
				document.getElementById("TriggerNameAfterParams").value = localStorage.getItem("TriggerNameAfterParams");
			} else if (GetMultipleWords == true && GetUseParamsKey == false) {
				document.getElementById("UseParamsInTrigger").checked = false;
				MultipleWords = "&";
				UseParamsKey = "";
				AllowTriggerNameAfterParams.disabled = true;
				AllowTriggerNameAfterParams.style = "opacity: 0.5;";
			} else if (GetMultipleWords == false && GetUseParamsKey == false) {
				document.getElementById("UseParamsInTrigger").checked = false;
				MultipleWords = "";
				UseParamsKey = "";
				AllowTriggerNameAfterParams.disabled = true;
				AllowTriggerNameAfterParams.style = "opacity: 0.5;";
			}
		}, 100);
		setTimeout( function() {
			localStorage.removeItem("Trigger");
			localStorage.removeItem("EchoPrefix");
			localStorage.removeItem("TriggerName");
			localStorage.removeItem("TriggerNameAfterParams");
			localStorage.removeItem("UseParams");
			localStorage.removeItem("MultipleWords");
		}, 1000);
	/* Response + Items */
		document.getElementById("UsedItems").innerHTML =  localStorage.getItem("UsedItems");
		document.getElementById("Response").innerHTML =  localStorage.getItem("Response");
		setTimeout( function() {
			if (document.getElementById("GiveRole") && localStorage.getItem("GiveRole") !== "") {
				document.getElementById("GiveRole").value =  localStorage.getItem("GiveRole");
				setTimeout( function() {
					localStorage.removeItem("GiveRole");
				}, 1000);
			}
			if (document.getElementById("TakeRole") && localStorage.getItem("TakeRole") !== "") {
				document.getElementById("TakeRole").value =  localStorage.getItem("TakeRole");
				setTimeout( function() {
					localStorage.removeItem("TakeRole");
				}, 1000);
			}
			if (document.getElementById("RequireRolesResponse") && localStorage.getItem("RequireRolesResponse") !== "") {
				document.getElementById("RequireRolesResponse").innerHTML =  localStorage.getItem("RequireRolesResponse");
				document.getElementById("RequireRolesSelection").innerHTML = localStorage.getItem("RequireRolesSelection");
				setTimeout( function() {
					localStorage.removeItem("RequireRolesResponse");
					localStorage.removeItem("RequireRolesSelection");
				}, 1000);
			}
			if (document.getElementById("ExcludeRolesResponse") && localStorage.getItem("ExcludeRolesResponse") !== "") {
				document.getElementById("ExcludeRolesResponse").value =  localStorage.getItem("ExcludeRolesResponse");
				document.getElementById("ExcludeRolesSelection").value =  localStorage.getItem("ExcludeRolesSelection");
				setTimeout( function() {
					localStorage.removeItem("ExcludeRolesResponse");
					localStorage.removeItem("ExcludeRolesSelection");
				}, 1000);
			}
			if (document.getElementById("NotRequired")) {
				document.getElementById("NotRequired").value = localStorage.getItem("NotRequiredMessage");
				setTimeout( function() {
					localStorage.removeItem("NotRequiredMessage");
				}, 1000);
			}
			if (document.getElementById("IsExcluded")) {
				document.getElementById("IsExcluded").value = localStorage.getItem("IsExcludedMessage");
				setTimeout( function() {
					localStorage.removeItem("IsExcludedMessage");
				}, 1000);
			}
		}, 10);
	/* End */
	GetTextFieldValues(1);
}

function GetAmounts(Start) {
	var n = Start;
	var list = localStorage.getItem("KeyTypeAmounts");
	var sublist = localStorage.getItem("KeyTypeSubAmounts"); 
	setTimeout( function() {
		if (n < 47) {
			KeyTypeAmounts[n] = list[n];
			if (n === 0) {
				KeyTypeSubAmounts[n] = sublist[n];
			}
		}
		n++;
		if (n < 47) {
			GetAmounts(n);
		}
	}, 50);
}

function GetTextFieldValues(StartCounting) {
	var m = StartCounting;
	if (localStorage.getItem("AmountOfTextFieldsBeingUsed") > 0) {
		setTimeout(function() {
			if (localStorage.getItem("TextField_" + m) !== "") {
				document.getElementById("TextField_" + m).value = localStorage.getItem("TextField_" + m);
			} else {
				document.getElementById("TextField_" + m).value = "";
			}
			m++;
			if(m <= localStorage.getItem("AmountOfTextFieldsBeingUsed")) {
				GetTextFieldValues(m);
			}
		}, 20);
	}
}