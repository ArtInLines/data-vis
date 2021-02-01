const ctx = document.getElementById('canvas');

const data = { labels: {}, datasets: { data: [], backgroundColor: [], borderColor: [] } };

const chart = new Chart(ctx, {
	type: 'bar',
	data: data,
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
