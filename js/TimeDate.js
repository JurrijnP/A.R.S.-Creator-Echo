function GetTimeDate() {
	var d = new Date();
	Day = d.getDate();
	Seconds = d.getSeconds();
	Minutes = d.getMinutes();
	Hours = d.getHours();
	Month = d.getMonth() + 1;
	Year = d.getFullYear();
	if (Day < 10) {
		FullDay = "0" + Day;
	} else {
		FullDay = Day;
	}
	if (Month < 10) {
		FullMonth = "0" + Month;
	} else {
		FullMonth = Month;
	}
	if (Hours < 10) {
		FullHours = "0" + Hours;
	} else {
		FullHours = Hours;
	}
	if (Minutes < 10) {
		FullMinutes = "0" + Minutes;
	} else {
		FullMinutes = Minutes;
	}
	if (Seconds < 10) {
		FullSeconds = "0" + Seconds;
	} else {
		FullSeconds = Seconds;
	}
	UTCHours = d.getUTCHours();
	UTCMinutes = d.getUTCMinutes();
	UTCHoursNotation = FullHours - UTCHours;
	UTCMinutesNotation = FullMinutes - UTCMinutes;
	if ((0 < UTCHoursNotation < 10) && UTCMinutesNotation == 0) {
		FullUTCNotation = "+0" + UTCHoursNotation + ":00";
	} else if ((0 < UTCHoursNotation > 10) && UTCMinutesNotation == 0) {
		FullUTCNotation = "+" + UTCHoursNotation + ":00";
	} else if ((0 < UTCHoursNotation < 10) && UTCMinutesNotation == 30) {
		FullUTCNotation = "+0" + UTCHoursNotation + ":30";
	} else if ((0 < UTCHoursNotation > 10) && UTCMinutesNotation == 30) {
		FullUTCNotation = "+" + UTCHoursNotation + ":30";
	} else if ((0 < UTCHoursNotation < 10) && UTCMinutesNotation == 45) {
		FullUTCNotation = "+" + UTCHoursNotation + ":45";
	} else if ((0 > UTCHoursNotation < -10) && UTCMinutesNotation == 0) {
		FullUTCNotation = "-0" + UTCHoursNotation + ":00";
	} else if ((0 > UTCHoursNotation > -10) && UTCMinutesNotation == 0) {
		FullUTCNotation = "-" + UTCHoursNotation + ":00";
	} else if ((0 > UTCHoursNotation < -10) && UTCMinutesNotation == 30) {
		FullUTCNotation = "-0" + UTCHoursNotation + ":30";
	} else if (UTCHoursNotation == 0) {
		FullUTCNotation = "0" + UTCHoursNotation + ":00";
	}
	return DateAndTime = "[" + FullDay + "-" + FullMonth + "-" + Year + "][" + FullHours + ":" + FullMinutes + ":" + FullSeconds + " UTC" + FullUTCNotation + "] ";
}