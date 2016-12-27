<?php
	include 'php/keys.php';
	$PrefixBeingUsed = $SetTriggerName = "";
	$PrefixBeingUsedEmpty = $SetTriggerNameEmpty = "";
	$TriggerOutput = $ResponseOutput =  "";
	$IsParEnabled = $UseParams = "";
	$AddParamsKeyCheck = "False";
	$KeyText = "";
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		if (isset($_POST['CheckPar']) AND $_POST['CheckPar']==='UseParams') {
			$IsParEnabled = "&";
			$UseParams = " {params}";
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
		} else {
			$PrefixBeingUsed = $_POST["PrefixBeingUsed"];
			$SetTriggerName = $_POST["SetTriggerName"];
			$TriggerOutput = $PrefixBeingUsed . "auto " . $IsParEnabled . $SetTriggerName . $UseParams . "=";
			$ResponseOuput = "Output";
		}
		if ($AddParamsKeyCheck = "True") {
			$ResponseOutput = $Params;
		} else {
			$ResponseOutput = "";
		}
	} 
	$Output=$TriggerOutput . $ResponseOutput;
?>