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
			include 'php/creator.php'
		?>
		<div class="content">
			<h1>
				A.R.S. Creator for Echo Discord bot.
			</h1>
		<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
			<label for="pref" class="bold">Your Prefix*: <input class="prefix bold" type="text" name="pref" id="pref" placeholder="." maxlength="3" value="<?php echo $pref;?>"></label><?php echo $prefEmp?>
			<label for="Tname" class="bold">Trigger name*: <input class="bold" type="text" name="Tname" id="Tname" placeholder="Trigger name" value="<?php echo $Tname;?>"></label><?php echo $TnameEmp?>
			<input type="submit" name="submit" value="Submit">
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