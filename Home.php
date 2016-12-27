<!DOCTYPE html>
<html>
	<head>
		<title>A.R.S. Echo Creator</title>
		<link rel="icon" href="https://cdn.discordapp.com/app-icons/249891250117804032/8006c62af129d35355732de574da495c.jpg" type="image/x-icon">
		<link rel="stylesheet" href="css/arscreator.css" type="text/css">
		<link rel="stylesheet" href="css/fontstyles.css" type="text/css">
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-16" />
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
		<script type="text/javascript">
			function KeyDiv() {
				document.getElementById('KeyList').style.display = "block";
				document.getElementById('Content').style.opacity = "0.1";
				return;
			}
			function CloseKeyDiv() {
				document.getElementById('KeyList').style.display = "none";
				document.getElementById('Content').style.opacity = "1";
			}
			function ParamsKey() {
				document.getElementById('Key1').className = "KeyParams";
				document.getElementById('Key1').innerHTML = "<label class='bold'>Params Key</label>";
			}
		</script>
	</head>
	
	<body>
	<?php
		include 'php/creator.php';
		$AddParamsKey = "False";
	?>
	
		<div id="KeyList" style="display: none;">
			<div class="KeyListContent">
				<h1>
					Pick a Key.
				</h1>
				<button class="KeysButtonContent" onclick="CloseKeyDiv(); return false;">Close ⨉</button>
				<input type="button" onload="<?php echo $AddParamsKey = "False";?>" onclick="<?php echo $AddParamsKey; ?>"/>
			</div>
		</div>
		<div id="Content" class="content" style="opacity: 1;">
			<h1>
				A.R.S. Creator for Echo Discord bot.
			</h1>			
		<div>
		<form id="Requirements" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
			<input type="hidden" name="Requirements" id="Requirements" value="Test">
			<label for="PrefixBeingUsed" class="bold">Your Prefix<label class="ReqTip">*<div class="ReqTipText">This field is required.</div></label>: <input class="prefix bold input" type="text" name="PrefixBeingUsed" id="PrefixBeingUsed" placeholder="." maxlength="3" value="<?php echo $PrefixBeingUsed;?>"></label><label class="VarError"><?php echo $PrefixBeingUsedEmpty?></label>
			<label for="SetTriggerName" class="bold">Trigger name<label class="ReqTip">*<span class="ReqTipText">This field is required.</span></label>: <input class="input" type="text" name="SetTriggerName" id="SetTriggerName" placeholder="Trigger name" value="<?php echo $SetTriggerName;?>"></label><label class="VarError"><?php echo $SetTriggerNameEmpty?></label>
			<label for="CheckPar" class="bold EnablePar"><input class="EnableParBox" type="checkbox" name="CheckPar" id="CheckPar" value="UseParams" <?php if(isset($_POST['CheckPar'])) echo "checked='checked'"; ?>/><label class="ReqTip">!<span class="ReqTipTextBig">If enabled, <label class="DCSL skipbold">{params}</label> is required in your response. If <label class="DCSL skipbold">{params}</label> isn't found it will be automatically be added at the beginning of the response.</label></span> Enable <label class="DCSL skipbold">{params}</label> in your trigger.</label>
		<br>
		<br>
			<input class="MkARS" type="submit" name="submit" value="Make it!" form="Requirements"/>
		</div>
		<div class="Keys">
			<label class="bold">Used Keys:</label>
			<button class="KeysButton" onclick="KeyDiv(); return false;">Add a Key</button>
			<div id="Key1" class="Key1"><?php echo $KeyText; ?></div>
		</div>
		<div class="outputdiv">
		<label class="bold">Your Echo command:</label>
		<textarea class="output" rows="10" cols="50" readonly>
<?php
echo $Output;
?>
</textarea>
		</div>
		</div>
	</form>
	</body>
</html>