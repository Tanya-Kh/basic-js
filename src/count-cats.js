module.exports = function countCats(backyard) {
	var cats = 0;
	for (var i = 0; i < backyard.length; i++) {
		for (var j = 0; j < backyard[i].length; j++) {
			if (backyard[i][j] == "^^") {
				cats++;
			}
		}
	}

	return(cats);
}
