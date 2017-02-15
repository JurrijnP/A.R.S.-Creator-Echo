function SearchForKeys(Amount, SubC) {
	var i = Amount;
	var j = (i * 3);
	var k = (i * 2);
	var l = SubC;
	var dom = document.getElementById("UsedKeys").getElementsByTagName("div");
	setTimeout( function() {
		if (document.getElementById("SearchForKeysInput").value == "") {
			document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
		} else if (document.getElementById("SearchForKeysInput").value != "") {
			var typeOfStatement = document.getElementById("SearchForKeysInput").value.replace(/([^:]{1,5})(:)([^0-9]{1,2})([0-9]{1,4})/g, `\$1`);
			if (typeOfStatement.includes("id")) {
				var typeOfComp = document.getElementById("SearchForKeysInput").value.replace(/([^:]{1,5})(:)([^0-9]{1,2})([0-9]{1,4})/g, `\$3`);
				var CompNumb = document.getElementById("SearchForKeysInput").value.replace(/([^:]{1,5})(:)([^0-9]{1,2})([0-9]{1,4})/g, `\$4`);
				if (typeOfComp.includes(">") && typeOfComp.includes("=") === false) {
					if (i > (CompNumb - 1)) {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
					} else {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
					}
				} else if (typeOfComp.includes("<") === true && typeOfComp.includes("=") === false) {
					if (i < (CompNumb - 1)) {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
					} else {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
					}
				} else if (typeOfComp.includes("<=")) {
					if (i <= (CompNumb - 1)) {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
					} else {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
					}
				} else if (typeOfComp.includes(">=")) {
					if (i >= (CompNumb - 1)) {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
					} else {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
					}
				} else if (typeOfComp.includes("=") === true && typeOfComp.includes("<") === false && typeOfComp.includes(">") === false && typeOfComp.includes("%") === false) {
					if (i == (CompNumb - 1)) {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
					} else {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
					}
				} else if (typeOfComp.includes("%=")) {
					if (document.getElementById("UsedKeys").getElementsByTagName("div")[j].innerText.substring(0,3).includes(CompNumb) === true) {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
					} else {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
					}
				}
			} else if (typeOfStatement.includes("tfval")) {
				var searchForValue = document.getElementById("SearchForKeysInput").value.replace(/(tfval:)(.{1,1000})/g, `\$2`);
				if (document.getElementById("UsedKeys").getElementsByTagName("div")[j].id.includes("Type_0ARSKey_") === true) {
					if (document.getElementById("UsedKeys").getElementsByTagName("input")[(k - l)].id.includes("TextField_") === true) {
						if (document.getElementById("UsedKeys").getElementsByTagName("input")[(k - l)].value.includes(searchForValue) === true) {
							document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
						} else {
							document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
						}
					} else {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
					}
					l = 0;
				} else {
					document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
					l = 1;
				}
			} else if (typeOfStatement.includes("key")) {
				var typeOfKey = document.getElementById("SearchForKeysInput").value.replace(/(key:)(.{1,30})/g, `\$2`);
				var whatKey = document.getElementById("UsedKeys").getElementsByTagName("div")[j].innerText.replace(/([^\u007D]{1,20})(\u007D)(.{0,100})/g, `\$1`).length;
				if (typeOfKey === "all") {
					if (document.getElementById("UsedKeys").getElementsByTagName("div")[j].id.includes("Type_0ARSKey_") === true) {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
					} else {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
					}
				} else {
					var o = (i > 99) ? 6:5;
					var n = ((i > 10) || i === 10) ? 5:o;
					var m = ((i < 9) && i !== 10) ? 4:n;
					if (document.getElementById("UsedKeys").getElementsByTagName("div")[j].id.includes("Type_0ARSKey_") === true) {
						document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
					} else {
						if (document.getElementById("UsedKeys").getElementsByTagName("div")[j].innerText.substring(m, whatKey) === typeOfKey) {
							document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
						} else {
							document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "none";
						}
					}
				}
			}
		} else {
			document.getElementById("UsedKeys").getElementsByTagName("div")[j].style.display = "block";
		}
		i++;
		if (i < JSON.parse(localStorage.getItem("AmountOfKeysBeingUsed"))) {
			SearchForKeys(i, l);
		} else {
			return;
		}
	}, 1);
}