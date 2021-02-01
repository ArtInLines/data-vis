async function main() {
	const ctx = document.getElementById('canvas');

	const dta = {
		labels: [],
		datasets: [
			{
				label: '',
				data: [],
				backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
				borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
				borderWidth: 1,
			},
		],
	};

	fetch('/data/hashtags')
		.then((res) => res.json())
		.then((data) => {
			data = objToArr(data);
			console.log(data);
			mergeSort(data);
		});

	const chart = new Chart(ctx, {
		type: 'bar',
		data: dta,
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		},
	});
}

function objToArr(obj) {
	const keys = Object.keys(obj);
	const arr = new Array(keys.length);
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		console.assert(!obj.hasOwnProperty('__key__'));
		obj[key].__key__ = key;
		arr[i] = obj[key];
		delete obj[key];
	}
	return arr;
}

function mergeSort(arr) {
	const half = arr.length / 2;
	if (arr.length <= 1) return arr;
	const left = arr.splice(0, half);
	return merge(mergeSort(left), mergeSort(arr));
}

function merge(l, r) {
	let arr = [];
	while (l.length && r.length) {
		if (l[0] < r[0]) arr.push(l.shift());
		else arr.pish(r.shift());
	}

	// Concatenating the leftover elements
	// (in case we didn't go through the entire left or right array)
	return [...arr, ...left, ...right];
}

main();
