function GetChangelog() {
	$.getJSON("https://api.trello.com/1/cards/587b6d4a242974237d23a30c/desc", {})
	.success(function(responseObj) {
		document.getElementById('Changelog').innerHTML = "<div class='version'>" + JSON.stringify(responseObj);
	});
	setTimeout( function() {
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/\\n/g, "<br>");
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/(<br>)[-]{3}/g, "---");
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/[-]{3}(<br>)/g, "---");
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/[:](<br>)(<br>)/g, ":<br>");
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/(-\s)([^-]{0,1000})(<br>)/g, "<li>" + `\$2` + "</li>");
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/[-]{3}/g, "</div><hr><div class='version'>");
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/({"_value":")/, "");
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/("})/, "");
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/(\u0060)([^\u0060]{0,100})(\u0060)/g, ("<span class='skipbold DCSL'>" + `\$2` + "</span>"));
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/(\u002A)([^\u002A]{0,100})(\u002A)/g, ("<span class='italic'>" + `\$2` + "</span>"));
		document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/(\u002A\u002A)([^\u002A]{0,100})(\u002A\u002A)/g, ("<span class='bold'>" + `\$2` + "</span>"));
		setTimeout( function() {
			document.getElementById("Changelog").innerHTML = document.getElementById("Changelog").innerHTML.replace(/(\u005B)([^\u005D]{0,100})(\u005D)(\u0028)([^\u0029]{0,2000})(\u0029)/g, ("<a class='link' href='" + `\$5` + "' target=_blank>" + `\$2` + "</a>"));
		}, 100);
		document.getElementById("Changelog").innerHTML += "</div>";
		var CalculateY = window.innerHeight * (60 / 100);
		var TotalY = Math.round(CalculateY, 2)
		var offSetY = document.getElementById("Changelog").lastElementChild.offsetTop;
		document.getElementById("Changelog").lastElementChild.style = "margin-bottom: calc(" + (TotalY + 50) + "px - " + offSetY + "px);";
	}, 500);
}