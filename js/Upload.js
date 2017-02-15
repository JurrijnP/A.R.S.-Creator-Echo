var obj;
var IsUARS;
var HasARSFile = false;
var IsParamsUsed = false;
document.getElementById("UploadButton").onclick = function() {
	document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Initialing <span class='italic'>autoresponse.json</span>...<br>";
	localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
	var files = document.getElementById("Uploader").files;
	if (files.length <= 0) {
		return false;
	}
	if (files.item(0).name.includes("autoresponse") === true) {
		var fr = new FileReader();
		fr.onload = function(e) { 
			var result = JSON.parse(e.target.result);
			obj = [ result ];
			Initialize(obj);
			IsUARS = 1;
		}
		fr.readAsText(files.item(0));
		document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'><i class='fa fa-info-circle' aria-hidden='true'></i></span>" + GetTimeDate() + "Initialized <span class='italic'>autoresponse.json</span> succesfully!<br>";
		localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
	} else {
		document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'><i class='fa fa-exclamation-triangle' aria-hidden='true'></i></span>" + GetTimeDate() + "Client tried to upload a file that wasn't an <span class='italic'>autoresponse.json</span><br>";
		localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
		return AlertDiv("You are trying to upload a file that is not allowed!");
	}
};

function UpdateARSFile(AddedContent) {
	if (HasARSFile === false) {
		obj = [{}];
		console.log(JSON.stringify(AddedContent).replace(/(\u0022)(.+)(\u0022)$/, `\$2`));
		obj[0][document.getElementById("TriggerName").value] = "";
		setTimeout( function() {
			obj[0][document.getElementById("TriggerName").value] += JSON.stringify(AddedContent).replace(/(\u0022)(.+)(\u0022)$/, `\$2`);
		}, 50);
		console.log(obj);
	} else {
		setTimeout( function() {
			obj[0][document.getElementById("TriggerName").value] += JSON.stringify(AddedContent).replace(/(\u0022)(.+)(\u0022)$/, `\$2`);
		}, 50);
		console.log(obj);
	}
	setTimeout( function() {
		HasARSFile = true;
		Initialize();
	}, 100);
}

function AddNewTriggerToFile(UseParams) {
	if (UseParams === true) {
		obj[0][("&" + document.getElementById("ANTTriggerName").value + " {params}")] = "";
	} else {
		obj[0][document.getElementById("ANTTriggerName").value] = "";
	}
	setTimeout( function() {
		Initialize(obj);
	}, 10);
}

document.getElementById("UsedItems").onchange = function() {
	/*ContentChanged(0);*/
}

function ContentChanged(CheckedValue) {
	var h = CheckedValue;
	var ContentCurrentTrigger = obj[0][document.getElementById("TriggerName").value]
	var dom = document.getElementById("UsedItems").getElementsByTagName("div");
	setTimeout( function() {
		if (document.getElementById("UsedItems").innerHTML !== "") {
			if (don[h].id.includes("Type_0ARSKey_")) {
				
			}
		}
	}, 100);
}

function GetUploadVars() {
	if (JSON.parse(localStorage.getItem("IsUARS")) === 1) {
		IsUARS = JSON.parse(localStorage.getItem("IsUARS"));
		obj = JSON.parse(localStorage.getItem("TempUploadedARS"));
		setTimeout( function() {
			localStorage.removeItem("TempUploadedARS");
			localStorage.removeItem("IsUARS");
			Initialize(obj);
		}, 100);
	} else {
		setTimeout( function() {
			localStorage.removeItem("IsUARS");
		}, 100);
	}
}

function SetUploadVars() {
	if (IsUARS === 1) {
		localStorage.setItem("IsUARS", 1);
		localStorage.setItem("TempUploadedARS", JSON.stringify(obj));
	} else {
		localStorage.setItem("IsUARS", 0);
	}
}

function Initialize() {
	console.log(JSON.stringify(obj[0]));
	document.getElementById("UContentDefault").style.display = "none";
	document.getElementById("UContent").style.display = "block";
	document.getElementById("UploadField").style.border = "1px solid rgba(51, 51, 51, 1)";
	document.getElementById("UploadField").style.padding = "10px";
	document.getElementById("UploadField").style.background = "rgba(51, 51, 51, 0.5)";
	document.getElementById("UploadField").style.textAlign = "left";
	document.getElementById("UContent").innerHTML = JSON.stringify(obj[0]);
	document.getElementById("UContent").innerHTML = document.getElementById("UContent").innerHTML.replace(/(\u005C)(\u005C[ntrb])/g, `\$2`); 
	document.getElementById("UContent").innerHTML = document.getElementById("UContent").innerHTML.replace(/^\u007B/, "");
	document.getElementById("UContent").innerHTML = document.getElementById("UContent").innerHTML.replace(/\u007D$/, "");
	document.getElementById("UContent").innerHTML = document.getElementById("UContent").innerHTML.replace(/((\u0022)([^\u0022]+)(\u0022))(\u003A)((\u0022)([^\u0022]*)(\u0022))(\u002C|)/g, "<span id='" + i + j + "' class='bold'>" + `\$3` + ":</span> <span id='" + i + j + "Content' class='italic'>" + JSON.stringify(`\$8`).replace(/(\u0022)(.+)(\u0022)$/, `\$2`) + "</span><br>");
	var count = Object.keys(obj[0]).length;
	document.getElementById("UARSList").innerHTML = '<option id="UARSDefault">Upload your file!</option>';
	for(var i = 1; i < (count + 1); ++i){
		var trigger = Object.keys(obj[0])[(i - 1)];
		var HasParams = RegExp(/(\u007Bparams\u007D)/).test(trigger);
		if (HasParams === true) {
			var j = 1;
		} else {
			var j = 0;
		}
		document.getElementById("UContent").getElementsByTagName("span")[((i * 2) - 1)].id = "UARSC_" + i + j;
		document.getElementById("UContent").getElementsByTagName("span")[((i * 2) - 2)].id = "UARST_" + i + j;
		document.getElementById("UARSList").innerHTML += "<option id='UARS_" + (i - 1) + j + "'>" + trigger.replace(/(\u0026)/, "") + "</option>";
		CheckTriggerContent(i, j);
	}
}

function CheckTriggerContent(trigger, up) {
	console.log(0);
	var ItemIdList = 1;
	var LinebreakIdList = 1;
	var TextfieldIdList = 1;
	var dom = document.getElementById("UARSC_" + trigger + up);
	if (dom.innerHTML.startsWith("\\n")) {
		dom.innerHTML = dom.innerHTML.replace(/^(\u005Cn)(.*)/, "<span id='Type_100ARSFile_" + ItemIdList + "'>" + `$1` + "</span>" + `\$2`);
	} else if (dom.innerHTML.startsWith("{")) {
		
	} else {
		
	}
}

var GetKeys = ["", "params", "pm", "user", "/user", "role", "take", "kick", "ban", "req", "notreq", "exc", "isexc", "alert", "pref", "greet", "bye", "del", "chan", "ismaster", "listroles", "allroles", "joined", "channels", "meme", "joke", "ass", "boobs", "sky", "cats", "wrecks", "space", "dbz", "cute", "cars", "trucks", "protect", "timestamp", "usernick", "self", "getid", "rawid", "usericon", "membercount", "rolecount", "channelcount", "myperms"];
var GetRoleKeyTypes = ["", "", "", "", "", "Give", "Take", "", "", "Require", "NotRequired", "Exclude", "IsExcluded"];

document.getElementById("IUARSButton").onclick = function() {
	Reset();
	setTimeout( function() {
		var list = document.getElementById("UARSList");
		var SelectedT = list.options[list.selectedIndex].innerText;
		var SelectedId = list.options[list.selectedIndex].id;
		if (SelectedId.length === 7) {
			var j = 1;
		} else if (SelectedId.length === 8) {
			var j = 2;
		} else if (SelectedId.length === 9) {
			var j = 3;
		}
		var trigger = Object.keys(obj[0])[SelectedId.substr(5, j)];
		if (SelectedId !== "UARSDefault") {
			document.getElementById("TriggerName").value = SelectedT.replace(/(\u0026|(\s\u007Bparams\u007D))/, "");
			if (SelectedId.endsWith("1") === true) {
				IsParamsUsed = true;
				document.getElementById("UseParamsInTrigger").checked = true;
				SetTrigger();
				setTimeout( function() {
					InitializeContent(0, SelectedId, 0);
				}, 800);
				var strobj = JSON.stringify(obj[0][trigger]);
				localStorage.setItem("TempUARSInitializing", strobj.replace(/(\u0022)(.+)(\u0022)$/, `\$2`));
			} else {
				IsParamsUsed = false;
				document.getElementById("UseParamsInTrigger").checked = false;
				SetTrigger();
				setTimeout( function() {
					InitializeContent(0, SelectedId, 0);
				}, 800);
				var strobj = JSON.stringify(obj[0][trigger]);
				localStorage.setItem("TempUARSInitializing", strobj.replace(/(\u0022)(.+)(\u0022)$/, `\$2`));
			}
		}
	}, 200);
}

function InitializeContent(Start, GetSelectedId, StartString) {
	var k = Start;
	var l = StartString;
	if (GetSelectedId.length === 7) {
		var j = 1;
	} else if (GetSelectedId.length === 8) {
		var j = 2;
	} else if (GetSelectedId.length === 9) {
		var j = 3;
	}
	var trigger = Object.keys(obj[0])[GetSelectedId.substr(5, j)];
	if (l === 0) {
		var string = JSON.stringify(obj[0][trigger]);
	} else {
		var string = obj[0][trigger];
	}
	console.log(string);
	string = string.replace(/(\u0022)(.+)(\u0022)$/, `\$2`);
	console.log(string);
	if (string != JSON.stringify("")) {
		document.getElementById("Processing").style = "background-image: linear-gradient(rgba(197, 197, 197, 0.5),rgba(197, 197, 197, 0.5)), url(https://echo.xtclabs.net/img/pw_maze_black_2X.png); border-radius: 3px; width: 100%;";
		document.getElementById("UsedItems").style = "pointer-events: none; opacity: 0.7;";
		var TestKey = RegExp(/((\u007B)([^\u007D]+)(\u007D))(.*)/y).test(string);
		var TestText = RegExp(/([^\u007B\u005C]+)(.*)/y).test(string);
		var TestLinebreak = RegExp(/(\u005Cn)(.*)/y).test(string);
		/* (([^\u003A]+)(\u003A)([^\u002C]+)(\u002C(\s|\S))) */
		console.log("|" + TestKey + "|" + TestText + "|" + TestLinebreak + "|");
		if (TestKey === true && TestText === false && TestLinebreak === false) {
			var TypeKey = string.replace(/((\u007B)([^\u003A]*)(\u003A|)([^\u007D]*)(\u007D))(.*)/, `\$3`);
			var KeyContent = string.replace(/((\u007B)([^\u003A]*)(\u003A|)([^\u007D]*)(\u007D))(.*)/, `\$5`);
			var TempContent = KeyContent;
			setTimeout( function () {
				if (GetKeys[k] === TypeKey) {
					AddItem(k);
					if (GetKeys[k] === ("req" || "exc") || GetKeys[k] === ("notreq" || "isexc") || GetKeys[k] === ("role" || "take")) {
						if (GetKeys[k] === ("req" || "exc")) {
							return ReExContent(k, TempContent, GetSelectedId, string);
						} else if (GetKeys[k] === ("notreq" || "isexc")) {
							var AmountOfKeys = Get(1);
							document.getElementById(GetRoleKeyTypes[k]).value = KeyContent;
							isExnotReMessage(AmountOfKeys, k);
							obj[0][trigger] = string.replace(/((\u007B)([^\u003A]*)(\u003A|)([^\u007D]*)(\u007D))(.*)/, JSON.stringify(`\$7`));
							InitializeContent(0, GetSelectedId, 1);
						} else if (GetKeys[k] === ("role" || "take")) {
							var AmountOfKeys = Get(1);
							document.getElementById(GetRoleKeyTypes[k] + "Role").value = KeyContent;
							RoTaRoleValue(AmountOfKeys, k);
							obj[0][trigger] = string.replace(/((\u007B)([^\u003A]*)(\u003A|)([^\u007D]*)(\u007D))(.*)/, JSON.stringify(`\$7`));
							InitializeContent(0, GetSelectedId, 1);
						}
					} else if (GetKeys[k] === "alert") {
						return AlertContent(k, TempContent, GetSelectedId, string);
					} else {
						obj[0][trigger] = string.replace(/((\u007B)([^\u003A]*)(\u003A|)([^\u007D]*)(\u007D))(.*)/, JSON.stringify(`\$7`));
						InitializeContent(0, GetSelectedId, 1);
					}
				} else {
					k++;
					if (document.getElementById("UsedItems").innerHTML === "") {
						InitializeContent(k, GetSelectedId, 0);
					} else {
						InitializeContent(k, GetSelectedId, 1);
					}
				}
			}, 50);
		} else if (TestKey === false && TestText === true && TestLinebreak === false) {
			AddItem(0);
			console.log(string);
			var TextContent = string.replace(/(([^\u007B\u005C]*)(.*))/, `\$2`);
			console.log(TextContent);
			setTimeout( function () {
				var AmountOfKeys = Get(1);
				var AmountOfTextFields = Get(2);
				document.getElementById("TextField_" + AmountOfTextFields).value = TextContent;
				localStorage.setItem("TextField_" + AmountOfTextFields, TextContent);
				document.getElementById("Type_0ARSKey_" + AmountOfKeys + "TextField_" + AmountOfTextFields + "Response").innerHTML = TextContent;
				obj[0][trigger] = string.replace(/(([^\u007B\u005C]*)(.*))/, JSON.stringify(`\$3`));
				console.log(obj[0][trigger]);
				InitializeContent(0, GetSelectedId, 1);
			}, 50);
		} else if (TestKey === false && TestText === false && TestLinebreak === true) {
			AddItem(100);
			setTimeout( function () {
				obj[0][trigger] = string.replace(/((\u005Cn)(.*))/, JSON.stringify(`\$3`));
				InitializeContent(0, GetSelectedId, 1);
			}, 50);
		}
	} else {
		obj[0][trigger] = localStorage.getItem("TempUARSInitializing");
		setTimeout( function () {
			localStorage.removeItem("TempUARSInitializing");
		}, 100);
		var UsedItems = document.getElementById("UsedItems").innerHTML;
		var SetResponse = document.getElementById("Response").innerHTML;
		localStorage.setItem("Response", SetResponse);
		localStorage.setItem("UsedItems", UsedItems);
		document.getElementById("Processing").style = "";
		document.getElementById("UsedItems").style = "opacity: 1;";
	}
}

function ReExContent(Getk, TempContent2, Id, String) {
	if (Id.length === 7) {
		var j = 1;
	} else if (Id.length === 8) {
		var j = 2;
	} else if (Id.length === 9) {
		var j = 3;
	}
	var trigger = Object.keys(obj[0])[Id.substr(5, j)];
	var AmountOfKeys = Get(1);
	var TempLeftContent = TempContent2.replace(/([^\u002C]+)(\u002C(\s|)|)(.*)/, `\$4`);
	document.getElementById(GetRoleKeyTypes[Getk] + "Role").value = TempContent2.replace(/([^\u002C]+)(\u002C(\s|)|)(.*)/, `\$1`);
	ReExRoleValue(AmountOfKeys, Getk, 13);
	setTimeout( function () {
		if (TempLeftContent !== "") {
			ReExContent(Getk, TempLeftContent, Id, String);
		} else {
			obj[0][trigger] = String.replace(/((\u007B)([^\u003A]*)(\u003A|)([^\u007D]*)(\u007D))(.*)/, JSON.stringify(`\$7`));
			InitializeContent(0, Id, 1);
		}
	}, 100);
}

function AlertContent(Getk, TempContent2, Id, String) {
	if (Id.length === 7) {
		var j = 1;
	} else if (Id.length === 8) {
		var j = 2;
	} else if (Id.length === 9) {
		var j = 3;
	}
	var trigger = Object.keys(obj[0])[Id.substr(5, j)];
	var AmountOfKeys = Get(1);
	var TempLeftContent = TempContent2.replace(/([^\u002C]+)(\u002C(\s|)|)(.*)/, `\$4`);
	var GetContent = TempContent2.replace(/([^\u002C]+)(\u002C(\s|)|)(.*)/, `\$1`);
	var CheckChars = GetContent.replace(/([^0-9]+)/, "");
	document.getElementById("AlertId").value = TempContent2.replace(/([^\u002C]+)(\u002C(\s|)|)(.*)/, `\$1`);
	ReExRoleValue(AmountOfKeys, Getk, 13);
	setTimeout( function () {
		if (TempLeftContent !== "") {
			AlertContent(Getk, TempLeftContent, Id, String);
		} else {
			obj[0][trigger] = String.replace(/((\u007B)([^\u003A]*)(\u003A|)([^\u007D]*)(\u007D))(.*)/, JSON.stringify(`\$7`));
			InitializeContent(0, Id, 1);
		}
	}, 100);
}