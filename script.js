new Chart(document.getElementById("bar-chart-horizontal"), {
	type: 'horizontalBar',
	data: {
		labels: ["Gap Inc", "Chico’s FAS Inc", "Destination Maternity", "Shopko", "Dollar Tree Inc", "SB360 Capital Partners", "Bain Capital", "Ascena Retail Group", "GNC Holdings Inc", "Payless Finance Inc"],
		datasets: [
			{
				label: "Stores closed",
				backgroundColor: ["#E0582D", "#E89437", "#48A08D", "#B02732", "#B37374", "#B6B9A4", "#BF0C2B", "#A68365", "#F5900E", "#003055"],
				data: [230, 250, 280, 363, 390, 416, 805, 864, 900, 2500]
        }
      ]
	},
	options: {
		legend: { display: false },
		title: {
			display: true,
			text: 'Retailers closing shop in 2019'
		},


	}
});









// new Chart(document.getElementById("bar-chart-horizontal"), {
// 			type: 'horizontalBar',
// 			data: {
// 				labels: ["Gap Inc", "Chico’s FAS Inc", "Destination Maternity", "Shopko", "Dollar Tree Inc", "SB360 Capital Partners", "Bain Capital", "Ascena Retail Group", "GNC Holdings Inc", "Payless Finance Inc"],
// 				datasets: [
// 					{
// 						label: "Store Closures",
// 						backgroundColor: ["#E0582D", "#E89437", "#48A08D", "#B02732", "#E0582D", "#E89437", "#48A08D", "#B02732", "#E0582D", "#E89437"],
// 						borderColor: ["#06173C", "#06173C", "#06173C", "#06173C"],
// 						data: [230, 250, 280, 363, 390, 416, 805, 864, 900, 2500],
// 						borderWidth: [0, 0, 0, 2.5]
//         }
//       ]
// 			},
// 			options: {
// 				legend: { display: false },
// 				title: {
// 					display: true,
// 					text: 'Store Closures'
// 				},
// 				// 	},
// 				// 	scales: {
// 				// 		yAxes: [{
// 				// 			ticks: {
// 				// 				min: 200,
// 				// 				max: 3000,
// 				// 			},
// 				// 			scaleLabel: {
// 				// 				display: false,
// 				// 				labelString: 'Store Closures',
// 				//
// 				//
// 				// 			},
// 				// 						}],
// 				// 		xAxes: [{
// 				// 			barThickness: 100, // number (pixels) or 'flex'
// 				// 			maxBarThickness: 100, // number (pixels)
// 				// 			scaleLabel: {
// 				// 				display: true,
// 				// 				labelString: '2019'
// 				// 			},
// 				// 			            }]
// 				//
// 				// 	}
// 				// }
// 			});