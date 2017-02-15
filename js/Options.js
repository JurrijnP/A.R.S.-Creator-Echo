var Options = ["DNU", 0, 0];
/*
	TypeOfOption 1: Disable/Enable autocompletion.
	TypeOfOption 2: Disable/Enable automatically adding whitespaces.
*/

function GetOptionValues(TypeOfOption) {
	return Options[TypeOfOption];
}

document.getElementById("OptionAutocomplete").onclick = function() {
	if (Options[1] === 0) {
		document.getElementById("OptionAutocomplete").innerHTML = "<i class='fa fa-check-square-o' aria-hidden='true'></i><span> Disable autocompletion.</span>";
		$("input[type='text']").attr("autocomplete", "off");
		Options[1] = 1;
	} else {
		document.getElementById("OptionAutocomplete").innerHTML = "<i class='fa fa-square-o' aria-hidden='true'></i><span> Disable autocompletion.</span>";
		$("input[type='text']").attr("autocomplete", "on");
		Options[1] = 0;
	}
}

document.getElementById("OptionAutoSpacing").onclick = function() {
	if (Options[2] === 0) {
		document.getElementById("OptionAutoSpacing").innerHTML = "<i class='fa fa-check-square-o' aria-hidden='true'></i><span> Disable automatically adding whitespaces.</span>";
		Options[2] = 1;
	} else {
		document.getElementById("OptionAutoSpacing").innerHTML = "<i class='fa fa-square-o' aria-hidden='true'></i><span> Disable automatically adding whitespaces.</span>";
		Options[2] = 0;
	}
}