<?php
	include 'php/keys.php';
	$PrefixBeingUsed = $SetTriggerName = "";
	$PrefixBeingUsedEmpty = $SetTriggerNameEmpty = "";
	$TriggerOutput = $ResponseOutput =  "";
	$IsParEnabled = $UseParams = "";
	$KeyText = "";
	$_POST['AddParamsKeyCheck'] = "False";
	$EnabledOrDisabled = "disabled";
	$Dummy = "";
	
	function AddParamsKey () {
		$_POST['AddParamsKeyCheck'] = "True";
	}
	
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
			$ResponseOuput = "";
		} elseif (empty($_POST["SetTriggerName"])) {
			$PrefixBeingUsed = $_POST["PrefixBeingUsed"];
			$SetTriggerNameEmpty = " You need to give your trigger a name.";
			$TriggerOutput = "";
			$ResponseOuput = "";
		} elseif (empty($_POST["PrefixBeingUsed"])) {
			$SetTriggerName = $_POST["SetTriggerName"];
			$PrefixBeingUsedEmpty = " A prefix is required.";
			$TriggerOutput="";
		} elseif ($Dummy == "") {
			$PrefixBeingUsed = $_POST["PrefixBeingUsed"];
			$SetTriggerName = $_POST["SetTriggerName"];
			$TriggerOutput = $PrefixBeingUsed . "auto " . $IsParEnabled . $SetTriggerName . $UseParams . "=";
			$ResponseOuput = "Output";
			$EnabledOrDisabled = "enabled";
		} elseif (isset($_POST['CheckPar']) AND $_POST['CheckPar']=='UseParams' AND $EnabledOrDisabled = "enabled") {
			if ($_POST['AddParamsKeyCheck'] == "True" AND $TriggerOutput !== "") {
				$PrefixBeingUsed = $_POST["PrefixBeingUsed"];
				$SetTriggerName = $_POST["SetTriggerName"];
				$TriggerOutput = $PrefixBeingUsed . "auto " . $IsParEnabled . $SetTriggerName . $UseParams . "=";
				$EnabledOrDisabled = "enabled";
				$ResponseOutput = $Params;
			} else {
			$ResponseOutput = "Output";
			}
		} else {
			$Params = "";
		}
	}
	
	$Output=$TriggerOutput . $ResponseOutput;
?>