const numbers = document.querySelector('.numbers');
const sum = document.querySelector('span');
const adjacentNumber = document.getElementById('adjacentNumbers');
const totalNumber = document.getElementById('totalNumber');

const matrix = [
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
	[31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
	[41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
	[51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
	[61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
	[71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
	[81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
	[91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];

// Big O notation O(n^2)
const sumOfAdjacentNumsHandler = (number, coloredNums) => {
	let arr = [];
	let row, column;

	// Place of the number in the matrix
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (number === matrix[i][j]) {
				row = i;
				column = j;
			}
		}
	}

	const rows = matrix.length;
	const columns = matrix[0].length;

	// Adjacent numbers
	for (let i = row - 1; i <= row + 1; i++) {
		for (let j = column - 1; j <= column + 1; j++) {
			if (i >= 0 && j >= 0 && i < columns && j < rows) {
				arr.push(matrix[i][j]);
			}
		}
	}

	let map = {};
	let displayAdjacentNumbers = '[';
	for (let i = 0; i < arr.length; i++) {
		map[arr[i]] = true;
		displayAdjacentNumbers += String(arr[i]) + ' ';
	}

	// Changing background color of adjacent numbers
	for (let j = 0; j < coloredNums.length; j++) {
		if (map[Number(coloredNums[j].innerHTML)]) {
			coloredNums[j].classList.add('brown');
		} else {
			coloredNums[j].classList.remove('brown');
		}
	}

	// Sum of adjacent numbers, including the selected number
	const total = arr.reduce((acc, cur) => acc + cur, 0);
	totalNumber.textContent = total;
	adjacentNumber.textContent = `${displayAdjacentNumbers} ]`;
};

// Displaying all numbers of matrix
const displayNumbers = () => {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			const html = `<p class="number"> ${matrix[i][j]} </p>`;
			numbers.insertAdjacentHTML('beforeend', html);
		}
	}

	const nums = document.querySelectorAll('.number');

	numbers.addEventListener('click', function (e) {
		if (e.target.classList.contains('number')) {
			sumOfAdjacentNumsHandler(Number(e.target.innerHTML), nums);
		}
	});
};

displayNumbers();
