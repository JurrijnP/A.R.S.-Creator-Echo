<?php
	$pref = $Tname = "";
	$prefEmp = $TnameEmp = "";
	$output = "";
			
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (empty($_POST["Tname"]) AND empty($_POST["pref"])) {
			$TnameEmp = " You need to give your trigger a name.";
			$prefEmp = " A prefix is required.";
			$output="";
		} elseif (empty($_POST["Tname"])) {
			$pref = $_POST["pref"];
			$TnameEmp = " You need to give your trigger a name.";
			$output="";
		} elseif (empty($_POST["pref"])) {
			$Tname = $_POST["Tname"];
			$prefEmp = " A prefix is required.";
			$output="";
		} else {
			$pref = $_POST["pref"];
			$Tname = $_POST["Tname"];
			$output = $pref . "auto " . $Tname . "=";
		}
	}
?>