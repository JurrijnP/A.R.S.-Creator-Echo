<!DOCTYPE html>
<html>
	<head>
		<title>A.R.S. Echo Creator</title>
		<link rel="icon" href="https://cdn.discordapp.com/app-icons/249891250117804032/8006c62af129d35355732de574da495c.jpg" type="image/x-icon">
		<link rel="stylesheet" href="css/arscreator.css" type="text/css">
		<link rel="stylesheet" href="css/fontstyles.css" type="text/css">
	</head>
	
	<body>
		<?php
			include 'php/creator.php';
			include 'php/params.php';
		?>
		<div class="content">
			<h1>
				A.R.S. Creator for Echo Discord bot.
			</h1>
		<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
			<label for="pref" class="bold">Your Prefix<label class="ReqTip">*<span class="ReqTipText">This field is required.</span></label>: <input class="prefix bold input" type="text" name="pref" id="pref" placeholder="." maxlength="3" value="<?php echo $pref;?>"></label><label class="VarError"><?php echo $prefEmp?></label>
			<label for="Tname" class="bold">Trigger name<label class="ReqTip">*<span class="ReqTipText">This field is required.</span></label>: <input class="input" type="text" name="Tname" id="Tname" placeholder="Trigger name" value="<?php echo $Tname;?>"></label><label class="VarError"><?php echo $TnameEmp?></label>
			<label for="CheckPar" class="bold EnablePar"><input class="EnableParBox" type="checkbox" name="CheckPar" id="CheckPar" value="UseParams" <?php if(isset($_POST['CheckPar'])) echo "checked='checked'"; ?>/><label class="ReqTip">!<span class="ReqTipText">If enabled <label class="DCSL skipbold">{params}</label> is required in your response.</span></label> Enable <label class="DCSL skipbold">{params}</label> in your trigger.</label>
		<br>
		<br>
			<input class="MkARS" type="submit" name="submit" value="Make it!" />
		</form>
		<br>
		<label>Your Echo command:</label><textarea class="output" rows="10" cols="50" readonly>
<?php
echo $output;
?>
</textarea>
		</div>
	</body>
</html>