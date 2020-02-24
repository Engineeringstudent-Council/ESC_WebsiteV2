var officers = ["leanne","tasha", "tom", "andrew","arthur", "anna", "stacy","anthony","stacey","mihir","patrick","baiyu","sarah"];
function show(name) {
for (i = 0; i < officers.length; i++) {
	document.getElementById(officers[i]).style.display = "none";
}
document.getElementById(name).style.display = "block";
}