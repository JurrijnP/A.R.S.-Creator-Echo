<?php
	include 'php/keys.php';
	$PrefixBeingUsed = $SetTriggerName = "";
	$PrefixBeingUsedEmpty = $SetTriggerNameEmpty = "";
	$TriggerOutput = $ResponseOutput = "";
	$IsParEnabled = $UseParams = "";
	$KeyText = "";
	$EnabledOrDisabled = "disabled";
	$Dummy = "";
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (isset($_POST['CheckPar']) AND $_POST['CheckPar']=='UseParams') {
			$IsParEnabled = "&";
			$UseParams = " {params}";
			$AddParamsKeyCheck = "False";
		} else {
			$IsParEnabled = "";
			$UseParams = "";
		}
		if (empty($_POST["SetTriggerName"]) AND empty($_POST["PrefixBeingUsed"])) {
			$SetTriggerNameEmpty = " You need to give your trigger a name.";
			$PrefixBeingUsedEmpty = " A prefix is required.";
			$TriggerOutput= "";
		} elseif (empty($_POST["SetTriggerName"])) {
			$PrefixBeingUsed = $_POST["PrefixBeingUsed"];
			$SetTriggerNameEmpty = " You need to give your trigger a name.";
			$TriggerOutput = "";
		} elseif (empty($_POST["PrefixBeingUsed"])) {
			$SetTriggerName = $_POST["SetTriggerName"];
			$PrefixBeingUsedEmpty = " A prefix is required.";
			$TriggerOutput="";
		} else {
			$PrefixBeingUsed = $_POST["PrefixBeingUsed"];
			$SetTriggerName = $_POST["SetTriggerName"];
			$TriggerOutput = $PrefixBeingUsed . "auto " . $IsParEnabled . $SetTriggerName . $UseParams . "=";
			$EnabledOrDisabled = "enabled";
		} 
		if (isset($_POST['CheckPar']) AND $_POST['CheckPar'] == "UseParams" AND $EnabledOrDisabled = "enabled" AND $_REQUEST['AddParamsKeyCheck'] == "True") {
			$TriggerOutput;
			$ResponseOutput = $Params;
		}
	}
	$Output = $TriggerOutput . $ResponseOutput;
?>