function GetChangelog() {
	setTimeout( function() {
		$.getJSON("https://api.trello.com/1/cards/587b6d4a242974237d23a30c/desc", {})
		.success(function(responseObj) {
			document.getElementById('ChangelogContent').innerHTML = "<div class='version'>" + JSON.stringify(responseObj);
		});
		setTimeout( function() {
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/\\n/g, "<br>");
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/(<br>)[-]{3}/g, "---");
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/[-]{3}(<br>)/g, "---");
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/[:](<br>)(<br>)/g, ":<br>");
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/(-\s)([^-]{0,1000})(<br>)/g, "<li>" + `\$2` + "</li>");
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/[-]{3}/g, "</div><hr><div class='version'>");
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/({"_value":")/, "");
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/("})/, "");
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/(\u0060)([^\u0060]{0,100})(\u0060)/g, ("<span class='skipbold DCSL'>" + `\$2` + "</span>"));
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/(\u002A{2})([^\u002A]{0,100})(\u002A{2})/g, ("<span class='bold'>" + `\$2` + "</span>"));
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/(\u002A{1})([^\u002A]{0,100})(\u002A{1})/g, ("<span class='italic'>" + `\$2` + "</span>"));
			document.getElementById("ChangelogContent").innerHTML = document.getElementById("ChangelogContent").innerHTML.replace(/(\u005B)([^\u005D]{0,100})(\u005D)(\u0028)([^\u0029]{0,2000})(\u0029)/g, ("<a class='link' href='" + `\$5` + "' target=_blank>" + `\$2` + "</a>"));
			document.getElementById("ChangelogContent").innerHTML += "</div>";
			var CalculateY = window.innerHeight * (60 / 100);
			var TotalY = Math.round(CalculateY, 2)
			var offSetY = document.getElementById("ChangelogContent").lastElementChild.offsetTop;
			document.getElementById("ChangelogContent").lastElementChild.style = "margin-bottom: calc(" + (TotalY + 50) + "px - " + offSetY + "px);";
		}, 400);
	}, 200);
}