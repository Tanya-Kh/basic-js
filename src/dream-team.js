module.exports = function createDreamTeam(members) {

	if (Array.isArray(members)) {
		var firstLetters = [];
		members.forEach((el) => {
			if (typeof el === "string" && el !== null) {
				firstLetters.push(el.trim()[0].toUpperCase());
			}
		});
		return firstLetters.sort().join("");
	} else {
		return false;
	}
}

