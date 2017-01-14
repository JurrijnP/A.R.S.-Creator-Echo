<html>
	<head>
		<title>A.R.S. Echo Creator</title>
		<link rel="icon" href="https://images-ext-1.discordapp.net/eyJ1cmwiOiJodHRwczovL2VjaG8ueHRjbGFicy5uZXQvZmF2aWNvbi5wbmcifQ.e8gkaoxk2ywaxuE7RGln3c2thxA" type="image/x-icon">
		<link rel="stylesheet" type="text/css" media="all" href="css/arscreator.css?v=<?=time();?>" />
		<link rel="stylesheet" href="css/fontstyles.css" type="text/css">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-16" />
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
	</head>
	
	<body id="body" onmousemove="CheckStyle();">
		<form action="index.php" method="post" style="margin: 0;">
		<div id="Alert" class="alert" style="opacity: 0; transition: 0.2s;">
			<h3 style="float: left; padding: 0; margin: 0; color: rgb(226, 32, 32);">Error:</h3><br>
			<span id="AlertMessage" style="postion: absolute; float: left; padding: 0; padding-left: 0; padding-right: 50px; margin: 0;"></span><br><br><br>
			<button class="button" style="position: absolute; bottom: 13px; right: 10px;" onclick="CloseAlertDiv(); return false;">Ok</button>
		</div>
		<div id="Log" style="opacity: 0; transition: 1s;">
			<div id="outerLogContent" class="Log" style="margin: -50% auto; transition: margin 0.5s;">
				<h1>
					Creator Log.
				</h1>
				<button class="buttonkeyscontent" onclick="CloseLogDiv(); return false;">Close ⨉</button>
				<div class="LogContent">
					<div id="LogContent" class="innerLogContent">
					</div>
				</div>
			</div>
		</div>
		<div id="KeyList" style="opacity: 0; transition: 1s;" >
			<div id="KeyListContent" class="KeyListContent" style="margin: -50% auto; transition: margin 0.5s;">
				<h1>
					Pick a Key.
				</h1>
				<button class="buttonkeyscontent" onclick="CloseKeyDiv(); return false;">Close ⨉</button>
				<div class="KeyContent">
					<div class="KeyContentKey">
					<div class="KeyContentKey"><span class="bold" style="padding: 3px 0px 3px 0px;">Add a textfield.</span><input type="button" class="addbutton" onclick="AddKey(0);" value="Normal Text" /></div><br>
					<div class="KeyContentKey" id="AddParamsKeyDiv"><span class="bold" style="padding: 3px 0px 3px 0px;">Add a <label class="DCSL skipbold">{params}</label> key.</span><input type="button" id="AddParamsKey" class="addbutton" onclick="AddKey(1);" value="{params}" disabled="true" /></div><br>
					<div class="KeyContentKey"><span class="bold" style="padding: 3px 0px 3px 0px; margin-bottom: -3px;">Add a <label class="DCSL skipbold">{pm}</label> key.</span><input type="button" id="AddPMKey" class="addbutton" onclick="AddKey(2);" value="{pm}" /></div><br>
					<div class="KeyContentKey"><span class="bold" style="padding: 3px 0px 3px 0px; margin-bottom: -3px;">Add a <label class="DCSL skipbold">{user}</label> key.</span><input type="button" id="AddMUserKey" class="addbutton" onclick="AddKey(3);" value="{user}" /></div><br>
					<div class="KeyContentKey"><span class="bold" style="padding: 3px 0px 3px 0px; margin-bottom: -3px;">Add a <label class="DCSL skipbold">{/user}</label> key.</span><input type="button" id="AddNMUserKey" class="addbutton" onclick="AddKey(4);" value="{/user}" /></div><br>
					<div class="KeyContentKey"><span class="bold" style="padding: 3px 0px 3px 0px; margin-bottom: -3px;">Add a <label class="DCSL skipbold">{role}</label> key.</span><input type="button" class="addbutton" onclick="AddKey(5);" value="{role}" /></div><br>
					</div>
				</div>
			</div>
		</div>
		<!--
		<div id="AutoAddKeyForType5Div" style="display:none;">
			<div class="KeyListContent">
				<h1>
					Pick a Key.
				</h1>
				<button class="buttonkeyscontent" onclick="CloseAutoAddKeyForType5(); return false;">Close ⨉</button>
				<div class="keycontent">
					<div class="keycontent1"><span class="bold">Add a <label class="DCSL skipbold">{params}</label> key in your <label class="DCSL skipbold">{role}</label> key.</span><input type="button" class="addbutton" id="AddKey1ToKey5" onclick="AddKeyToKey5(1);" value="{params}" disabled="true"></input></div><br>
				</div>
			</div>
		</div>
		-->
		<div id="Content" class="content" style="opacity: 1; transition: 0.2s;">
			<button class="ClearButton" onclick="ClearStorage();">Clear Creator</button>
			<button class="LogButton" onclick="ShowLog(); return false;">Show Log</button>
			<h1>A.R.S. Creator for Echo Discord bot.</h1>
			<label class="bold">Echo's Prefix<label class="ReqTip">*<div class="ReqTipText">This field is required. Filled in by default.</div></label>: <input class="prefix bold input" type="text" name="EchoPrefix" id="EchoPrefix" placeholder="." maxlength="3" value="." onchange="SetTrigger();"></input></label>
			<label class="bold">Your Prefix: <input class="prefix bold input" type="text" name="Prefix" id="Prefix" placeholder="." maxlength="3" value="" onchange="SetTrigger();"></input></label>
			<label class="bold">Trigger name<label class="ReqTip">*<span class="ReqTipText">This field is required.</span></label>: <input class="input" type="text" name="TriggerName" id="TriggerName" placeholder="Trigger name" value="" onfocusout="SetTrigger();"></input></label>
			<label for="CheckPar" class="bold EnablePar"><input type="text" class="input" name="TriggerNameAfterParams" id="TriggerNameAfterParams" placeholder="Trigger text after {params}" value="" onchange="SetTrigger();" onFocus="SetTrigger();" disabled="true" style="opacity: 0.5;"></input><input class="EnableParBox" type="checkbox" name="UseParamsInTrigger" id="UseParamsInTrigger" value="UseParams" onchange="SetTrigger(); localStorage.setItem('UseParams', this.checked);"></input><label class="ReqTip">!<span class="ReqTipTextBig">If enabled, <label class="DCSL skipbold">{params}</label> is required in your response. If <label class="DCSL skipbold">{params}</label> isn't found it will be automatically be added at the beginning of the response.</label></span> Enable <label class="DCSL skipbold">{params}</label> in your trigger.</label>
		<div>
		<br>
		<br>
			
		</div>
		<div id="KeysList" class="Keys">
			<label class="bold" style="padding-bottom: 4px;">Used Keys:</label>
			<button class="button" onclick="KeyDiv(); return false;">Add a Key</button>
			<hr style="margin-top: 6px; border: 1px solid rgba(51, 51, 51, 1);">
			<div id="Processing" style="">
				<div id="UsedKeys" class="innerKeys" style></div>
			</div>
		</div>
		<div class="outputdiv">
			<label class="bold">Your Echo command:</label>
			<div id="Output" class="output"><label id="Trigger" style="cursor: text;"></label><label id="Response" style="cursor: text;"></label></div>
		</div>
		</div>
		<div style="height: 75px;"></div>
	</form>
	<script type="text/javascript">
		function CheckStyle() {
			if ($('#body').css('backgroundImage') != "radial-gradient(farthest-side at 10% 0px, rgb(21, 66, 101) 20%, rgb(115, 146, 194))") {
				$('#body').css('backgroundImage', "radial-gradient(farthest-side at 10% 0px, rgb(21, 66, 101) 20%, rgb(115, 146, 194))");
				document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'>&#9888</span>" + localStorage.getItem("DateAndTime") + "Client tried to change the background image of the body.<br>";
			}
			if ($('#Content').css('backgroundColor') != "rgba(51, 51, 51, 0.498039)") {
				$('#Content').css('backgroundColor', "rgba(51, 51, 51, 0.498039)");
				document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'>&#9888</span>" + localStorage.getItem("DateAndTime") + "Client tried to change the background color of the div with id Content.<br>";
			}
			if ($('#KeysList').css('backgroundColor') != "rgba(51, 51, 51, 0.498039)") {
				$('#KeysList').css('backgroundColor', "rgba(51, 51, 51, 0.498039)");
				document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'>&#9888</span>" + localStorage.getItem("DateAndTime") + "Client tried to change the background color of the div with id KeysList.<br>";
			}
			if ($('#UsedKeys').css('backgroundColor') != "rgba(0, 0, 0, 0)") {
				$('#UsedKeys').css('backgroundColor', "rgba(0, 0, 0, 0)");
				document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'>&#9888</span>" + localStorage.getItem("DateAndTime") + "Client tried to change the background color of the div with id UsedKeys.<br>";
			}
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
			document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'>&#128712</span>" + localStorage.getItem("DateAndTime") + "Page Was Loaded.<br>";
			localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
		}
		
		function ClearStorage() {
			document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'>&#9888</span>" + localStorage.getItem("DateAndTime") + "Creator was cleared by Client. <br>";
			localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
			var SavedLog = localStorage.getItem("Log");
			localStorage.clear();
			localStorage.setItem("Log", SavedLog);
			location.reload();
		}
		
		window.setInterval(function() {
			var d = new Date();
			Day = d.getDate();
			Seconds = d.getSeconds();
			Minutes = d.getMinutes();
			Hours = d.getHours();
			Month = d.getMonth() + 1;
			Year = d.getFullYear();
			if (Day < 10) {
				FullDay = "0" + Day;
			} else {
				FullDay = Day;
			}
			if (Month < 10) {
				FullMonth = "0" + Month;
			} else {
				FullMonth = Month;
			}
			if (Hours < 10) {
				FullHours = "0" + Hours;
			} else {
				FullHours = Hours;
			}
			if (Minutes < 10) {
				FullMinutes = "0" + Minutes;
			} else {
				FullMinutes = Minutes;
			}
			if (Seconds < 10) {
				FullSeconds = "0" + Seconds;
			} else {
				FullSeconds = Seconds;
			}
			UTCHours = d.getUTCHours();
			UTCMinutes = d.getUTCMinutes();
			UTCHoursNotation = FullHours - UTCHours;
			UTCMinutesNotation = FullMinutes - UTCMinutes;
			if ((0 < UTCHoursNotation < 10) && UTCMinutesNotation == 0) {
				FullUTCNotation = "+0" + UTCHoursNotation + ":00";
			} else if ((0 < UTCHoursNotation > 10) && UTCMinutesNotation == 0) {
				FullUTCNotation = "+" + UTCHoursNotation + ":00";
			} else if ((0 < UTCHoursNotation < 10) && UTCMinutesNotation == 30) {
				FullUTCNotation = "+0" + UTCHoursNotation + ":30";
			} else if ((0 < UTCHoursNotation > 10) && UTCMinutesNotation == 30) {
				FullUTCNotation = "+" + UTCHoursNotation + ":30";
			} else if ((0 < UTCHoursNotation < 10) && UTCMinutesNotation == 45) {
				FullUTCNotation = "+" + UTCHoursNotation + ":45";
			} else if ((0 > UTCHoursNotation < -10) && UTCMinutesNotation == 0) {
				FullUTCNotation = "-0" + UTCHoursNotation + ":00";
			} else if ((0 > UTCHoursNotation > -10) && UTCMinutesNotation == 0) {
				FullUTCNotation = "-" + UTCHoursNotation + ":00";
			} else if ((0 > UTCHoursNotation < -10) && UTCMinutesNotation == 30) {
				FullUTCNotation = "-0" + UTCHoursNotation + ":30";
			} else if (UTCHoursNotation == 0) {
				FullUTCNotation = "0" + UTCHoursNotation + ":00";
			}
			var DateAndTime = "[" + FullDay + "-" + FullMonth + "-" + Year + "][" + FullHours + ":" + FullMinutes + ":" + FullSeconds + " UTC" + FullUTCNotation + "] ";
			localStorage.setItem("DateAndTime", DateAndTime);
		}, 1000);
		
		function isOdd(Number) {
			return Number % 2;
		}
		
			var KeysBeingUsed = document.getElementById('UsedKeys').innerHTML;
			var KeyID = 0;
			var TextFieldID = 0;
			var Quote = "'";
			var SubStringsIndentifiers = ["GR", "TR", "RR", "NRR", "ER", "IER"];
			var TypeText = "'Type_";
			var KeyText = "ARSKey_";
			var TextFieldText = "TextField_";
			var SpanIDEnd = "Response'";
			var ResponseText = "'Response'";
			var TFText = "'TextField_";
			var UsedText = "'UsedKeys'";
			var Keys = ["", "params", "pm", "user", "/user", "role", "take", "kick", "ban", "req", "notreq", "exc", "isexc", "alert", "pref", "greet", "bye"];
			var KeyTypeAmounts = [0, 0, 0, 0, 0, 0, 0];
			var KeyTypeSubAmounts = [0, "", "", "", "", 0, ""];
			var KeyTypeAmountsMax = [1000, 50, 1, 50, 50, 1, 1];
			var AlertType = ["", "You reached the maximum amount of 50 keys.", "You can use this key only once."];
			var WarnMessage = [" Client tried to add key while no trigger was made yet.", "Client reached maximum amount of keys."];
			/* !!! The Indexes with "" of the above arrays should ALWAYS be blanc and therefore never be used. !!! */
			var KeyAmountType_0 = 0; //Normal Text; Maximum is on default set to 1000.
			var KeyAmountType_0_1 = 0; //Textfield Indentifier.
			var KeyAmountType_1 = 0; //{params} Key; Maximum is on default set to 50.
			var KeyAmountType_2 = 0; //{pm} Key; Maximum is set to 1, This should always be 1.
			var KeyAmountType_3 = 0; //{user} Key; Maximum is on default set to 50.
			var KeyAmountType_4 = 0; //{/user} Key; Maximum is on default set to 50.
			var KeyAmountType_5 = 0; //{role} Key; Maximum is set to 1, This should always be 1.
			var KeyAmountType_5_1 = 0; //Amount of roles that should be used in {role} Key; Maximum will always be 200.
			var KeyAmountType_6 = 0; //{take} Key; Maximum is set to 1, This should always be 1.
			var KeyAmountType_6_1 = 0; //Amount of roles that should be used in {take} Key; Maximum will always be 200.
			var KeyAmountType_7 = 0; //{kick} Key; Maximum is set to 1, This should always be 1.
			var KeyAmountType_8 = 0; //{ban} Key; Maximum is set to 1, This should always be 1.
			var KeyAmountType_9 = 0; //{req} Key; Maximum is set to 1, This should always be 1.
			var KeyAmountType_9_1 = 0; //Amount of roles that should be required in {req} Key; Maximum will always be 200.
			var KeyAmountType_10 = 0; //{notreq} Key; Maximum is set to 1, This should always be 1.
			var KeyAmountType_10_1 = 0; //Indentifier to check if {role} is used. Will automatically be set to 1 if {role} has been added; If still 0 error prevention message will show up and button will be red.
			var KeyAmountType_11 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_12 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_13 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_14 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_15 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_16 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_17 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_18 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_19 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_20 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_21 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_22 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_23 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_24 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_25 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_26 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_27 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_28 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_29 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_30 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_31 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_32 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_33 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_34 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_35 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_36 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_37 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_38 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_39 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_40 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_41 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_42 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_43 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_44 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_45 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_46 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_47 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_48 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_49 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_50 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_51 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_52 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_53 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_54 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_55 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_56 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_57 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_58 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_59 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_60 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_61 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_62 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_63 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_64 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_65 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_66 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_67 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_68 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_69 = 0; //{} Key; Maximum is default set to 50.
			var KeyAmountType_70 = 0; //{} Key; Maximum is default set to 50.
			
			
			
			function RoleValue(RoleKeyID) {
				var GivenRoles = document.getElementById("Roles").value;
				document.getElementById("RolesResponse").innerHTML = GivenRoles;
				var StoreResponse = document.getElementById("Response").innerHTML;
				localStorage.setItem("Response", StoreResponse); 
				localStorage.setItem("RolesText", GivenRoles); 
				if (GivenRoles != "") {
					document.getElementById("Type_5ARSKey_" + RoleKeyID + "RolesResponse").innerHTML = "{role:<span id='RolesResponse'>" + GivenRoles + "</span>}";
				} else {
					document.getElementById("Type_5ARSKey_" + RoleKeyID + "RolesResponse").innerHTML = "{role<span id='RolesResponse'></span>}";
				}
			}
			
			function AddLineBreak (TypeSpanID, KeySpanID, TextFieldSpanID, element) {
				var LineBreak = document.createElement("br");
				LineBreak.id = "ARSKey_" + KeySpanID + "LineBreak";
				if (TypeSpanID == 0) {
					var domABreak = document.getElementById("Type_" + TypeSpanID + "ARSKey_" + KeySpanID + "TextField_" + TextFieldSpanID + "Response");
				} else if (TypeSpanID == 5) {
					var domABreak = document.getElementById("Type_" + TypeSpanID + "ARSKey_" + KeySpanID + "RolesResponse");
				} else {
					var domABreak = document.getElementById("Type_" + TypeSpanID + "ARSKey_" + KeySpanID + "Response");
				}
				var domRBreak = document.getElementById("ARSKey_" + KeySpanID + "LineBreak");
				if (element.checked == true) {
					domABreak.parentNode.insertBefore(LineBreak, domABreak.nextSibling);
					localStorage.setItem("ARSKey_" + KeySpanID + "LineBreak", true);
				} else if (element.checked == false) {
					domRBreak.parentNode.removeChild(domRBreak);
					localStorage.setItem("ARSKey_" + KeySpanID + "LineBreak", false);
				}
				var SetResponse = document.getElementById("Response").innerHTML;
				localStorage.setItem("Response", SetResponse);
			}
			
			function KeyDiv() {
				var CheckSetTrigger = document.getElementById("Trigger");
				var GetUseParamsKey = JSON.parse(localStorage.getItem("UseParams"));
				if (CheckSetTrigger.innerHTML == "") {
					AlertDiv("Create a trigger first.");
					document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(212, 134, 0, 1);'>&#9888</span>" + localStorage.getItem("DateAndTime") + WarnMessage[0] + "<br>";
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
					document.getElementById("KeyList").style.opacity = "1";
					document.getElementById("KeyListContent").style.margin = "0px auto";
					document.getElementById("Content").style.opacity = "0.1";
					return;
				}
			}
			
			function CloseKeyDiv() {
				document.getElementById("KeyList").style.opacity = "0";
				document.getElementById("KeyListContent").style.margin = "-50% auto";
				document.getElementById("Content").style.opacity = "1";
			}
			
			function ShowLog() {
				document.getElementById("Log").style.opacity = "1";
				document.getElementById("outerLogContent").style.margin = "0px auto";
				document.getElementById("Content").style.opacity = "0.05";
				var element = document.getElementById("LogContent");
				element.scrollTop = element.scrollHeight - element.clientHeight;
			}
			
			function CloseLogDiv() {
				document.getElementById("Log").style.opacity = "0";
				document.getElementById("outerLogContent").style.margin = "-50% auto";
				document.getElementById("Content").style.opacity = "1";
			}
			
			function AlertDiv(Message) {
				document.getElementById("Alert").style.opacity = "1";
				document.getElementById("Content").style.opacity = "0.7";
				document.getElementById("AlertMessage").innerHTML = Message;
			}
			
			function CloseAlertDiv() {
				document.getElementById("Alert").style.opacity = "0";
				if (document.getElementById("Log").style.opacity == "0") {
					document.getElementById("Content").style.opacity = "1";
				}
				setTimeout(function() {
					document.getElementById("AlertMessage").innerHTML = "";
				}, 200);
			}
			
			function SetTrigger() {
				setTimeout(function() {
					var UseParamsKey = "";
					var MultipleWords = "";
					var GetUseParamsKey = JSON.parse(localStorage.getItem("UseParams"));
					var GetMultipleWords = JSON.parse(localStorage.getItem("MultipleWords"));
					var EchoPrefix = document.getElementById("EchoPrefix").value;
					var Prefix = document.getElementById("Prefix").value;
					var TriggerName = document.getElementById("TriggerName").value;
					var TriggerNameAfterParams = document.getElementById("TriggerNameAfterParams").value;
					var AllowTriggerNameAfterParams = document.getElementById("TriggerNameAfterParams");
					var Trigger = document.getElementById("Trigger");
					var SetEchoPrefix = document.getElementById("EchoPrefix").innerHTML;
					var SetPrefix = document.getElementById("Prefix").innerHTML;
					var SetTriggerName = document.getElementById("TriggerName").innerHTML;
					var SetMultipleWords = document.getElementById("MultipleWords");
					var SetUseParamsKey = document.getElementById("UseParamsKey");
					var SetResponse = document.getElementById("Response").innerHTML;
					var SetTrigger = document.getElementById("Trigger").innerHTML;
					var SetTriggerNameAfterParams = document.getElementById("TriggerNameAfterParamsTrigger");
					var CheckForWhiteSpaces = RegExp(/\s/g).test(TriggerName);
					localStorage.setItem("MultipleWords", CheckForWhiteSpaces);
					var GetUseParamsKey = JSON.parse(localStorage.getItem("UseParams"));
					var GetMultipleWords = JSON.parse(localStorage.getItem("MultipleWords"));
					
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
							document.getElementById("LogContent").innerHTML += "<div><span style='font-size: 15px; color: rgba(165, 34, 34, 1);'>&#9760FATAL ERROR</span>" + localStorage.getItem("DateAndTime") + "EchoPrefix and TriggerName were both empty, report this error to Staff, add the following text to your report:<br><span style='float:right'>Error: 2x202134" + TNE + EPE + "</span></div><br>";
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
							if (GetUseParamsKey == true && GetMultipleWords == true) {
								MultipleWords = "&";
								UseParamsKey = " {params} ";
								AllowTriggerNameAfterParams.disabled = false;
								AllowTriggerNameAfterParams.style = "opacity: 1;";
								localStorage.setItem("UseParams", true);
							} else if (GetUseParamsKey == true && GetMultipleWords == false) {
								MultipleWords = "&";
								UseParamsKey = " {params} ";
								AllowTriggerNameAfterParams.disabled = false;
								AllowTriggerNameAfterParams.style = "opacity: 1;";
								localStorage.setItem("UseParams", true);
							}
						}
						if (GetMultipleWords == true && GetUseParamsKey == false) {
							MultipleWords = "&";
							UseParamsKey = "";
							AllowTriggerNameAfterParams.disabled = true;
							AllowTriggerNameAfterParams.style = "opacity: 0.5;";
							document.getElementById("TriggerNameAfterParams").value = "";
							localStorage.setItem("TriggerNameAfterParams", "");
							localStorage.setItem("UseParams", false);
							localStorage.setItem("MultipleWords", true);
						} else if (GetMultipleWords == false && GetUseParamsKey == false) {
							MultipleWords = "";
							UseParamsKey = "";
							AllowTriggerNameAfterParams.disabled = true;
							AllowTriggerNameAfterParams.style = "opacity: 0.5;";
							document.getElementById("TriggerNameAfterParams").value = "";
							localStorage.setItem("TriggerNameAfterParams", "");
						}
						
						//Check the value that should be put after the {params}.
						if (GetUseParamsKey == true) {
							setTimeout(function() {
								SetTriggerNameAfterParams.innerHTML = TriggerNameAfterParams;
								localStorage.setItem("TriggerNameAfterParams", TriggerNameAfterParams);
							}, 100);
						} else if (GetUseParamsKey == false) {
							setTimeout(function() {
								document.getElementById("TriggerNameAfterParams").value = "";
								localStorage.setItem("TriggerNameAfterParams", "");
							}, 100);
						}
					}, 100);
							
					if (EchoPrefix !== "" && TriggerName !== "") {
						setTimeout(function() {
							SetEchoPrefix = '<span id="EchoPrefixTrigger">' + EchoPrefix + '</span>';
							SetPrefix = '<span id="PrefixTrigger">' + Prefix + '</span>';
							SetTriggerName = '<span id="TriggerNameTrigger">' + TriggerName + '</span>';
							SetMultipleWords = '<span id="MultipleWords">' + MultipleWords + '</span>';
							SetUseParamsKey = '<span id="UseParamsKeyTrigger">' + UseParamsKey + '</span>';
							SetTriggerNameAfterParams = '<span id="TriggerNameAfterParamsTrigger">' + document.getElementById("TriggerNameAfterParams").value + '</span>';
							Trigger.innerHTML = SetEchoPrefix + "<span>auto </span>" + SetMultipleWords + SetPrefix + SetTriggerName + SetUseParamsKey + SetTriggerNameAfterParams + "<span>={init}</span>";
							localStorage.setItem("Prefix", Prefix); 
							localStorage.setItem("EchoPrefix", EchoPrefix); 
							localStorage.setItem("TriggerName", TriggerName); 
							localStorage.setItem("Trigger", Trigger.innerHTML); 
							localStorage.setItem("Response", "");
							document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'>&#128712</span>" + localStorage.getItem("DateAndTime") + "Client made a trigger:<br>Echo's Prefix: " + EchoPrefix + "<br>Trigger Prefix: " + Prefix + "<br>Trigger Name: " + TriggerName + "<br>";
							localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
						}, 300);
					}
				}, 100);
			}
			
			function AddKey(TypeID) {
				var KeyDiv = document.createElement('div');
				var SetTrigger = document.getElementById("Trigger").innerHTML;
				var SetResponse = document.getElementById("Response").innerHTML;
				var Response = document.getElementById("Response");
				if (TypeID == 0) {
					if (KeyTypeAmounts[TypeID] < KeyTypeAmountsMax[TypeID]) {
						KeyID++;
						TextFieldID++;
						KeyTypeAmounts[TypeID]++;
						KeyTypeSubAmounts[TypeID]++;
						KeyDiv.id = "Type_" + TypeID + "ARSKey_" + KeyID + "TextFieldDiv";
						KeyDiv.style = 'padding: 4px 4px 4px 0;';
						KeyDiv.innerHTML = '<label class="bold">' + KeyID + '. Your Text: <input class="input" type="text" id="TextField_' + TextFieldID + '" name="Type_' + '0' + 'ARSKey_' + KeyID + 'TextField_' + TextFieldID + '" placeholder="You can put some text here..." value="" onchange="var Text = document.getElementById(' + Quote + 'TextField_' + TextFieldID + Quote + ').value; document.getElementById(' + Quote + 'Type_' + TypeID + 'ARSKey_' + KeyID + 'TextField_' + TextFieldID + 'Response' + Quote + ').innerHTML = Text; var StoreResponse = document.getElementById(' + ResponseText + ').innerHTML; localStorage.setItem(' + ResponseText + ', StoreResponse); localStorage.setItem(' + Quote + 'TextField_' + TextFieldID + Quote + ', Text);"></input><div class="AddLineBreakDiv"><input type="checkbox" id="ARSKey_' + KeyID + 'LineBreakCheckBox" class="AddLineBreakBox" onclick="AddLineBreak(' + TypeID + ', ' + KeyID + ', ' + TextFieldID + ', this);">Add Linebreak.</div><button class="button" onclick="setTimeout(function() {KeyID--; TextFieldID--; RemoveWhatKey(' + KeyID + ', 0, ' + TextFieldID + ');}, 100); return false;">Remove</button></label>';
						document.getElementById('UsedKeys').appendChild(KeyDiv);
						Response.innerHTML = SetResponse + '<span id="Type_0ARSKey_' + KeyID + 'TextField_' + TextFieldID + 'Response"></span>';
						localStorage.setItem("KeyType" + TypeID + "Amount", KeyTypeAmounts[TypeID]);
						localStorage.setItem("KeyType" + TypeID + "SubAmount", KeyTypeSubAmounts[TypeID]);
						localStorage.setItem('AmountOfTextFieldsBeingUsed', TextFieldID);
						document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'>&#128712</span>" + localStorage.getItem("DateAndTime") + "Client added a textfield. With an ID of: " + KeyID + "<br>";
						localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
					} else {
						alert("You reached the maximum amount of 1000 textfields.");
					}
				} else if (TypeID == 1 || TypeID == 2 || TypeID == 3 || TypeID == 4) {
					if (KeyTypeAmounts[TypeID] < KeyTypeAmountsMax[TypeID]) {
						KeyID++;
						KeyTypeAmounts[TypeID]++;
						KeyDiv.id = 'Type_' + TypeID + 'ARSKey_' + KeyID;
						KeyDiv.style = 'padding: 4px 4px 4px 0;';
						KeyDiv.innerHTML = '<label class="bold">' + KeyID + '. <span class="DCSL skipbold">{' + Keys[TypeID] + '}</span><div class="AddLineBreakDiv"><input type="checkbox" id="ARSKey_' + KeyID + 'LineBreakCheckBox" class="AddLineBreakBox" onclick="AddLineBreak(' + TypeID + ', ' + KeyID + ', 0, this);">Add Linebreak.</div><button class="button" onclick="KeyID--; RemoveWhatKey('+KeyID+', '+TypeID + ', ' + KeyID + ');">Remove</button></label>';
						document.getElementById('UsedKeys').appendChild(KeyDiv);
						Response.innerHTML = SetResponse + '<span class="skipbold" id="Type_' + TypeID + 'ARSKey_' + KeyID + 'Response">{' + Keys[TypeID] + '}</span>';
						localStorage.setItem("KeyType" + TypeID + "Amount", KeyTypeAmounts[TypeID]);
						document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'>&#128712</span>" + localStorage.getItem("DateAndTime") + "Client added a {" + Keys[TypeID] +"} key. With an ID of: " + KeyID + "<br>";
						localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
					} else {
						AlertDiv(AlertType[TypeID]);
						console.warn(WarnMessage[1]);
					}
				} else if (TypeID == 5) {
					if (KeyTypeAmounts[TypeID] < KeyTypeAmountsMax[TypeID]) {
						KeyID++;
						KeyTypeAmounts[TypeID]++;
						KeyTypeSubAmounts[TypeID]++;
						KeyDiv.id = 'Type_' + TypeID + 'ARSKey_' + KeyID;
						KeyDiv.style = 'padding: 4px 4px 4px 0;';
						KeyDiv.innerHTML = '<label class="bold">' + KeyID + '. <span class="DCSL skipbold">{role}</span> Roles: <input class="input" type="text" id="Roles" name="Type_5' + 'ARSKey_' + KeyID + 'Roles" placeholder="Seperate roles by a ," value="" onchange="RoleValue(' + KeyID + ');"><div class="AddLineBreakDiv"><input type="checkbox" id="ARSKey_' + KeyID + 'LineBreakCheckBox" class="AddLineBreakBox" onclick="AddLineBreak(' + TypeID + ', ' + KeyID + ', 0, this);">Add Linebreak.</div><button class="button" onclick="KeyID--; RemoveWhatKey('+KeyID+', '+TypeID + ', ' + KeyID + ');">Remove</button></label>';
						document.getElementById('UsedKeys').appendChild(KeyDiv);
						Response.innerHTML = SetResponse + '<label id="Type_' + TypeID + 'ARSKey_' + KeyID + 'RolesResponse">{role<span id="RolesResponse"></span>}</label>';
						localStorage.setItem("KeyType" + TypeID + "Amount", KeyTypeAmounts[TypeID]);
						localStorage.setItem("KeyType" + TypeID + "SubAmount", KeyTypeSubAmounts[TypeID]);
					} else {
						alert('You can only use this key once.');
					}
				}
				var Number = ((KeyID*2)-4);
				if (1 < KeyID && document.getElementById("UsedKeys").getElementsByTagName("div")[Number].id.includes("Type_0ARSKey_") == true && TypeID !== 0) {
					if (document.getElementById("TextField_" + TextFieldID).value !== "") {
						document.getElementById("TextField_" + TextFieldID).value += " ";
						document.getElementById("Type_0ARSKey_" + (KeyID - 1) + "TextField_" + TextFieldID + "Response").innerHTML += " ";
						localStorage.setItem("TextField_" + TextFieldID, document.getElementById("TextField_" + TextFieldID).value);
					}
				}
				if (1 < KeyID && document.getElementById("UsedKeys").getElementsByTagName("div")[Number].id.includes("Type_0ARSKey_") == false && TypeID == 0) {
					document.getElementById("TextField_" + TextFieldID).value += " ";
					document.getElementById("Type_0ARSKey_" + KeyID + "TextField_" + TextFieldID + "Response").innerHTML += " ";
					localStorage.setItem("TextField_" + TextFieldID, document.getElementById("TextField_" + TextFieldID).value);
				}
				var KeysBeingUsed = document.getElementById('UsedKeys').innerHTML;
				var SetResponse = document.getElementById("Response").innerHTML;
				localStorage.setItem('KeysBeingUsed', KeysBeingUsed);
				localStorage.setItem("Response", SetResponse);
				localStorage.setItem('AmountOfKeysBeingUsed', KeyID);
				localStorage.setItem("ARSKey_" + KeyID + "LineBreak", false);
			}
			function RemoveWhatKey(RemovedKeyID, TypeID, RemovedTextFieldID) {
				if (TypeID == 0) {
					KeyTypeAmounts[TypeID]--;
					KeyTypeSubAmounts[TypeID]--;
					localStorage.setItem("KeyType" + TypeID + "Amount", KeyTypeAmounts[TypeID]);
					localStorage.setItem("KeyType" + TypeID + "SubAmount", KeyTypeSubAmounts[TypeID]);
					document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'>&#128712</span>" + localStorage.getItem("DateAndTime") + "Client removed textfield. With an ID of: " + RemovedKeyID + "<br>";
					localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
					RemoveKey(RemovedKeyID, TypeID, RemovedTextFieldID);
				} else if (TypeID == 1 || TypeID == 2 || TypeID == 3 || TypeID == 4) {
					KeyTypeAmounts[TypeID]--;
					localStorage.setItem("KeyType" + TypeID + "Amount", KeyTypeAmounts[TypeID]);
					document.getElementById("LogContent").innerHTML += "<span style='font-size: 15px; color: rgba(0, 93, 185, 1);'>&#128712</span>" + localStorage.getItem("DateAndTime") + "Client removed '{" + Keys[TypeID] +"}' key. With an ID of: " + RemovedKeyID + "</span><br>";
					localStorage.setItem("Log", document.getElementById("LogContent").innerHTML);
					RemoveKey(RemovedKeyID, TypeID, RemovedTextFieldID, 1);
				} else if (TypeID == 5) {
					KeyTypeAmounts[TypeID]--;
					KeyTypeSubAmounts[TypeID]--;
					localStorage.setItem("KeyType" + TypeID + "Amount", KeyTypeAmounts[TypeID]);
					localStorage.setItem("KeyType" + TypeID + "SubAmount", KeyTypeSubAmounts[TypeID]);
					RemoveKey(RemovedKeyID, TypeID, RemovedTextFieldID, 2);
				}
			}		
			function RemoveKey(RemovedKeyID, TypeID, RemovedTextFieldID, SkipTextFieldID) {
				if (SkipTextFieldID == 1) {
					var Key = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID);
					var KeyInResponse = document.getElementById('Type_' + TypeID + 'ARSKey_' + RemovedKeyID + 'Response');
					Key.parentNode.removeChild(Key);
					KeyInResponse.parentNode.removeChild(KeyInResponse);
					if (JSON.parse(localStorage.getItem("ARSKey_" + RemovedKeyID + "LineBreak")) == true) {
						var LinebreakInResponse = document.getElementById("ARSKey_" + RemovedKeyID + "LineBreak");
						LinebreakInResponse.parentNode.removeChild(LinebreakInResponse);
					}
					var KeysBeingUsed = document.getElementById('UsedKeys').innerHTML;
					var Response = document.getElementById('Response').innerHTML;
					localStorage.setItem('KeysBeingUsed', KeysBeingUsed);
					localStorage.setItem("Response", Response);
					localStorage.setItem('AmountOfKeysBeingUsed', KeyID);
					ChangeIDs(RemovedKeyID, TypeID, RemovedTextFieldID);
				} else if (SkipTextFieldID == 2) {
					var Key = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID);
					var GivenRolesInResponse = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + "RolesResponse");
					Key.parentNode.removeChild(Key);
					GivenRolesInResponse.parentNode.removeChild(GivenRolesInResponse);
					if (JSON.parse(localStorage.getItem("ARSKey_" + RemovedKeyID + "LineBreak")) == true) {
						var LinebreakInResponse = document.getElementById("ARSKey_" + RemovedKeyID + "LineBreak");
						LinebreakInResponse.parentNode.removeChild(LinebreakInResponse);
					}
					var KeysBeingUsed = document.getElementById('UsedKeys').innerHTML;
					var SetResponse = document.getElementById("Response").innerHTML;
					localStorage.setItem("KeysBeingUsed", KeysBeingUsed);
					localStorage.setItem("Response", SetResponse);
					localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
					ChangeIDs(RemovedKeyID, TypeID, RemovedTextFieldID);
				} else {
					var Key = document.getElementById('Type_' + TypeID + 'ARSKey_' + RemovedKeyID + "TextFieldDiv");
					var TextFieldInResponse = document.getElementById("Type_" + TypeID + "ARSKey_" + RemovedKeyID + "TextField_" + RemovedTextFieldID + "Response");
					Key.parentNode.removeChild(Key);
					TextFieldInResponse.parentNode.removeChild(TextFieldInResponse);
					if (JSON.parse(localStorage.getItem("ARSKey_" + RemovedKeyID + "LineBreak")) == true) {
						var LinebreakInResponse = document.getElementById("ARSKey_" + RemovedKeyID + "LineBreak");
						LinebreakInResponse.parentNode.removeChild(LinebreakInResponse);
					}
					var KeysBeingUsed = document.getElementById('UsedKeys').innerHTML;
					var SetResponse = document.getElementById("Response").innerHTML;
					localStorage.setItem("KeysBeingUsed", KeysBeingUsed);
					localStorage.setItem("Response", SetResponse);
					localStorage.setItem("AmountOfKeysBeingUsed", KeyID);
					localStorage.setItem("AmountOfTextFieldsBeingUsed", TextFieldID);
					ChangeIDs(RemovedKeyID, TypeID, RemovedTextFieldID);
				}
			}
			function ChangeIDs(RemovedKeyID, TypeID, RemovedTextFieldID) {
				var j = RemovedKeyID;
				if (RemovedKeyID == 1) {
					var getNextKey = (RemovedKeyID - 1);
				} else {
					var getNextKey = ((RemovedKeyID*2)-2);
				}
				var k = RemovedTextFieldID;
				var AmountOfKeys = JSON.parse(localStorage.getItem("AmountOfKeysBeingUsed"));
				var AmountOfTextFields = JSON.parse(localStorage.getItem("AmountOfTextFieldsBeingUsed"));
				var dom = document.getElementById("UsedKeys").getElementsByTagName("div");
				var domInputRemove = document.getElementById('UsedKeys').getElementsByTagName('button');
				var domResponse = document.getElementById("Response").getElementsByTagName("span");
				var SetResponse = document.getElementById("Response").innerHTML;
				var Response = document.getElementById("Response");
				if (AmountOfKeys > 0) {
					setTimeout(function() {
						document.getElementById("Processing").style = "background-image: linear-gradient(rgba(197, 197, 197, 0.5),rgba(197, 197, 197, 0.5)), url(https://echo.xtclabs.net/img/pw_maze_black_2X.png); border-radius: 3px; width: 100%;";
						document.getElementById("UsedKeys").style = "pointer-events: none; opacity: 0.7;";
						if ((dom[getNextKey].id.includes("Type_0ARSKey_") == true) && (KeyTypeAmounts[0] > 0)) {
							var NewResponseId = "Type_0ARSKey_" + j + "TextField_" + k + "Response";
							document.getElementById("Type_0ARSKey_" + (j + 1) + "TextFieldDiv").id = "Type_0ARSKey_" + j + "TextFieldDiv";
							document.getElementById("Type_0ARSKey_" + j + "TextFieldDiv").innerHTML = '<label class="bold">' + j + '. Your Text: <input class="input" type="text" id="TextField_' + k + '" name="Type_0ARSKey_' + j + 'TextField_' + k + '" placeholder="You can put some text here..." value="" onchange="var Text = document.getElementById(' + Quote + 'TextField_' + k + Quote + ').value; document.getElementById(' + Quote + 'Type_0ARSKey_' + j + 'TextField_' + k + 'Response' + Quote + ').innerHTML = Text; var StoreResponse = document.getElementById(' + ResponseText + ').innerHTML; localStorage.setItem(' + ResponseText + ', StoreResponse); localStorage.setItem(' + Quote + 'TextField_' + k + Quote + ', Text);"></input><div class="AddLineBreakDiv"><input type="checkbox" id="ARSKey_' + j + 'LineBreakCheckBox" class="AddLineBreakBox" onclick="AddLineBreak(0, ' + j + ', ' + k + ', this);">Add Linebreak.</div><button class="button" onclick="KeyID--; TextFieldID--; RemoveWhatKey(' + j + ', 0, ' + k + ');">Remove</button></label>';
							if (TypeID == 0) {
								document.getElementById("Type_0ARSKey_" + (j + 1) + "TextField_" + (k + 1) + "Response").id = "Type_0ARSKey_" + j + "TextField_" + k + "Response";
								var SetValue = localStorage.getItem("TextField_" + (k + 1));
								document.getElementById("TextField_" + k).value = SetValue;
								localStorage.setItem("TextField_" + k, (localStorage.getItem("TextField_" + (k + 1))));
							} else {
								document.getElementById("Type_0ARSKey_" + (j + 1) + "TextField_" + k + "Response").id = "Type_0ARSKey_" + j + "TextField_" + k + "Response";
								var SetValue = localStorage.getItem("TextField_" + k);
								document.getElementById("TextField_" + k).value = SetValue;
							}
							k++;
						} else if ((dom[getNextKey].id.includes("Type_1ARSKey_") == true) && (KeyTypeAmounts[1] > 0)) {
							document.getElementById("Type_1ARSKey_" + (j + 1)).id = "Type_1ARSKey_" + j;
							document.getElementById("Type_1ARSKey_" + j).innerHTML = '<label class="bold">' + j + '. <span class="DCSL skipbold">{params}</span><div class="AddLineBreakDiv"><input type="checkbox" id="ARSKey_' + j + 'LineBreakCheckBox" class="AddLineBreakBox" onclick="AddLineBreak( 1, ' + j + ', 0, this);">Add Linebreak.</div><button class="button" onclick="KeyID--; RemoveWhatKey(' + j + ', 1, ' + j + ');">Remove</button></label>';
							document.getElementById("Type_1ARSKey_" + (j + 1) + "Response").id = "Type_1ARSKey_" + j + "Response";
						} else if ((dom[getNextKey].id.includes("Type_2ARSKey_") == true) && (KeyTypeAmounts[2] > 0)) {
							document.getElementById("Type_2ARSKey_" + (j + 1)).id = "Type_2ARSKey_" + j;
							document.getElementById("Type_2ARSKey_" + j).innerHTML = '<label class="bold">' + j + '. <span class="DCSL skipbold">{pm}</span><div class="AddLineBreakDiv"><input type="checkbox" id="ARSKey_' + j + 'LineBreakCheckBox" class="AddLineBreakBox" onclick="AddLineBreak( 2, ' + j + ', 0, this);">Add Linebreak.</div><button class="button" onclick="KeyID--; RemoveWhatKey(' + j + ', 2, ' + j + ');">Remove</button></label>';
							document.getElementById("Type_2ARSKey_" + (j + 1) + "Response").id = "Type_2ARSKey_" + j + "Response";
						} else if ((dom[getNextKey].id.includes("Type_3ARSKey_") == true) && (KeyTypeAmounts[3] > 0)) {
							document.getElementById("Type_3ARSKey_" + (j + 1)).id = "Type_3ARSKey_" + j;
							document.getElementById("Type_3ARSKey_" + j).innerHTML = '<label class="bold">' + j + '. <span class="DCSL skipbold">{user}</span><div class="AddLineBreakDiv"><input type="checkbox" id="ARSKey_' + j + 'LineBreakCheckBox" class="AddLineBreakBox" onclick="AddLineBreak( 3, ' + j + ', 0, this);">Add Linebreak.</div><button class="button" onclick="KeyID--; RemoveWhatKey(' + j + ', 3, ' + j + ');">Remove</button></label>';
							document.getElementById("Type_3ARSKey_" + (j + 1) + "Response").id = "Type_3ARSKey_" + j + "Response";
						} else if ((dom[getNextKey].id.includes("Type_4ARSKey_") == true) && (KeyTypeAmounts[4] > 0)) {
							document.getElementById("Type_4ARSKey_" + (j + 1)).id = "Type_4ARSKey_" + j;
							document.getElementById("Type_4ARSKey_" + j).innerHTML = '<label class="bold">' + j + '. <span class="DCSL skipbold">{/user}</span><div class="AddLineBreakDiv"><input type="checkbox" id="ARSKey_' + j + 'LineBreakCheckBox" class="AddLineBreakBox" onclick="AddLineBreak( 4, ' + j + ', 0, this);">Add Linebreak.</div><button class="button" onclick="KeyID--; RemoveWhatKey(' + j + ', 4, ' + j + ');">Remove</button></label>';
							document.getElementById("Type_4ARSKey_" + (j + 1) + "Response").id = "Type_4ARSKey_" + j + "Response";
						} else if ((dom[getNextKey].id.includes("Type_5ARSKey_") == true) && (KeyTypeAmounts[5] > 0)) {
							document.getElementById("Type_5ARSKey_" + (j + 1)).id = "Type_5ARSKey_" + j;
							document.getElementById("Type_5ARSKey_" + j).innerHTML = '<label class="bold">' + j + '. <span class="DCSL skipbold">{role}</span> Roles: <input class="input" type="text" id="Roles" name="Type_5' + 'ARSKey_' + j + 'Roles" placeholder="Seperate roles by a ," value="" onchange="RoleValue(' + j + ');"><div class="AddLineBreakDiv"><input type="checkbox" id="ARSKey_' + j + 'LineBreakCheckBox" class="AddLineBreakBox" onclick="AddLineBreak( 5, ' + j + ', 0, this);">Add Linebreak.</div><button class="button" onclick="KeyID--; RemoveWhatKey(' + j + ', 5, 0);">Remove</button></label>';
							document.getElementById("Type_5ARSKey_" + (j + 1) + "RolesResponse").id = "Type_5ARSKey_" + j + "RolesResponse";
							if (localStorage.getItem("RolesText") != "" || localStorage.getItem("RolesText") != "null") {
								document.getElementById("Roles").value = localStorage.getItem("RolesText");
							}
							var GivenRoles = document.getElementById("Roles").value;
							if (GivenRoles != "") {
								document.getElementById("Type_5ARSKey_" + j + "RolesResponse").innerHTML = "{role:<span id='RolesResponse'>" + GivenRoles + "</span>}";
							} else {
								document.getElementById("Type_5ARSKey_" + j + "RolesResponse").innerHTML = "{role<span id='RolesResponse'></span>}";
							}
						}
						if (JSON.parse(localStorage.getItem("ARSKey_" + (j + 1) + "LineBreak")) == true) {
							document.getElementById("ARSKey_" + (j + 1) + "LineBreak").id = "ARSKey_" + j + "LineBreak";
							localStorage.setItem(("ARSKey_" + j + "LineBreak"), localStorage.getItem("ARSKey_" + (j + 1) + "LineBreak"));
							document.getElementById("ARSKey_" + j + "LineBreakCheckBox").checked = true;
						} else if (JSON.parse(localStorage.getItem("ARSKey_" + (j + 1) + "LineBreak")) == false) {
							localStorage.setItem(("ARSKey_" + j + "LineBreak"), localStorage.getItem("ARSKey_" + (j + 1) + "LineBreak"));
						}
						j++;
						if (j <= AmountOfKeys) {
							ChangeIDs(j, TypeID, k);
						} else {
							document.getElementById("Processing").style = "";
							document.getElementById("UsedKeys").style = "opcaity: 1;";
							var KeysBeingUsed = document.getElementById('UsedKeys').innerHTML;
							var SetResponse = document.getElementById("Response").innerHTML;
							localStorage.setItem('KeysBeingUsed', KeysBeingUsed);
							localStorage.setItem("Response", SetResponse);
							localStorage.removeItem("ARSKey_" + (AmountOfKeys + 1) + "LineBreak");
							if (KeyTypeAmounts[0] > 0) {
								localStorage.removeItem("TextField_" + (AmountOfTextFields + 1));
							}
						}
					}, 50);
				}
			}
			
			function ChangeValues(TypeID, RemovedTextFieldID) {
				var l = RemovedTextFieldID;
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
			
			window.onload = function() {
				if (!localStorage["haslocalStorage"]) {
					var KeysBeingUsed = document.getElementById("UsedKeys").innerHTML;
					var SetResponse = document.getElementById("Response").innerHTML;
					var SetTrigger = document.getElementById("Trigger").innerHTML;
					var SetEchoPrefix = document.getElementById("EchoPrefix").value;
					var SetPrefix = document.getElementById("Prefix").innerHTML;
					var SetTriggerName = document.getElementById("TriggerName").innerHTML;
					localStorage.setItem("UseParams", false);
					localStorage.setItem("MultipleWords", false);
					localStorage.setItem('EchoPrefix', SetEchoPrefix); 
					localStorage.setItem('Prefix', SetPrefix); 
					localStorage.setItem('TriggerName', SetTriggerName); 
					localStorage.setItem('Trigger', SetTrigger);
					localStorage.setItem('AmountOfKeysBeingUsed', KeyID);
					localStorage.setItem('AmountOfTextFieldsBeingUsed', TextFieldID);
					localStorage.setItem('KeysBeingUsed', KeysBeingUsed);
					localStorage.setItem('Response', SetResponse);
					localStorage.setItem("KeyType0Amount", KeyTypeAmounts[0]);
					localStorage.setItem("KeyType0SubAmount", KeyTypeSubAmounts[0]);
					localStorage.setItem("KeyType1Amount", KeyTypeAmounts[1]);
					localStorage.setItem("KeyType2Amount", KeyTypeAmounts[2]);
					localStorage.setItem("KeyType3Amount", KeyTypeAmounts[3]);
					localStorage.setItem("KeyType4Amount", KeyTypeAmounts[4]);
					localStorage.setItem("KeyType5Amount", KeyTypeAmounts[5]);
					localStorage.setItem("KeyType5SubAmount", KeyTypeAmounts[5]);
					document.getElementById("LogContent").innerHTML = localStorage.getItem("Log");
					setTimeout(function() { 
						PageLoad(); 
					}, 1010);
					localStorage["haslocalStorage"] = true;

				} else {
					document.getElementById("LogContent").innerHTML = localStorage.getItem("Log");
					setTimeout(function() { 
						PageLoad(); 
					}, 1010);
					document.getElementById("Trigger").innerHTML = localStorage.getItem('Trigger');
					document.getElementById("EchoPrefix").value = localStorage.getItem('EchoPrefix');
					document.getElementById("Prefix").value = localStorage.getItem('Prefix'); 
					document.getElementById("TriggerName").value = localStorage.getItem('TriggerName');  
					KeyID =  localStorage.getItem('AmountOfKeysBeingUsed');
					TextFieldID = localStorage.getItem('AmountOfTextFieldsBeingUsed');
					document.getElementById('UsedKeys').innerHTML =  localStorage.getItem('KeysBeingUsed');
					document.getElementById('Response').innerHTML =  localStorage.getItem('Response');
					KeyTypeAmounts[0] = localStorage.getItem("KeyType0Amount");
					KeyTypeSubAmounts[0] = localStorage.getItem("KeyType0SubAmount");
					KeyTypeAmounts[1] = localStorage.getItem("KeyType1Amount");
					KeyTypeAmounts[2] = localStorage.getItem("KeyType2Amount");
					KeyTypeAmounts[3] = localStorage.getItem("KeyType3Amount");
					KeyTypeAmounts[4] = localStorage.getItem("KeyType4Amount");
					KeyTypeAmounts[5] = localStorage.getItem("KeyType5Amount");
					KeyTypeSubAmounts[5] = localStorage.getItem("KeyType5SubAmount");
					var dom2 = document.getElementById("UsedKeys").getElementsByTagName("input");
					for (TypeAmount=0; TypeAmount<=KeyID; TypeAmount++) {
						if (TypeAmount !== 0 || TypeAmount !== 5 || TypeAmount !== 6) {
							KeyTypeAmounts[TypeAmount] = localStorage.getItem("KeyTypeAmountType" + TypeAmount);
						}
					}
					var GetUseParamsKey = JSON.parse(localStorage.getItem("UseParams"));
					var GetMultipleWords = JSON.parse(localStorage.getItem("MultipleWords"));
					var SetMultipleWords = document.getElementById("MultipleWords");
					var SetUseParamsKey = document.getElementById("UseParamsKey");
					var UseParamsKey = "";
					var MultipleWords = "";
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
					//KeyAmountType_ = localStorage.getItem('KeyAmountType');
					GetTextFieldValues(1);
					GetLineBreaks(1);
				}
			}
			
			function GetLineBreaks(Start) {
				var l = Start;
				var GetTrueFalse = JSON.parse(localStorage.getItem("ARSKey_" + l + "LineBreak"));
				if (localStorage.getItem("AmountOfKeysBeingUsed") > 0) {
					setTimeout(function() {
						if (GetTrueFalse == true) {
							document.getElementById("ARSKey_" + l + "LineBreakCheckBox").checked = true;
						} else if (GetTrueFalse == false) {
							document.getElementById("ARSKey_" + l + "LineBreakCheckBox").checked = false;
						}
						l++;
						if (l <= localStorage.getItem("AmountOfKeysBeingUsed")) {
							GetLineBreaks(l);
						}
					}, 50);
				}
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
		</script>
		<div class="footer">
			<div>
				<p>© xTech Labs. All Rights Reserved</p><br>
				 <a class="link" href="https://echo.xtclabs.net/home.php" target=_blank>Echo 2.0</a> by Proxy#0814. <button class="link" href="" onclick="var X = window.pageXOffset; var Y = window.pageYOffset; SmoothScrollToTop(X, Y);">A.R.S. Creator</button> by JurrijnP#1676.
			</div>
		</div>
	</body>
</html>