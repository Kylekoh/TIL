function solution(s) {
	let answer = true;
	let count = { p: 0, y: 0 };
	for (let i = 0; i < s.length; i++) {
		if (s[i].toUpperCase() === 'P') {
			count.p++;
		} else if (s[i].toUpperCase() === 'Y') {
			count.y++;
		}
	}
	if (count.p === count.y) {
		answer = true;
	} else if (count.p === 0 && count.y === 0) {
		answer = true;
	} else {
		answer = false;
	}

	return answer;
}

// solution('pPoooyY');
solution('Pyy');
