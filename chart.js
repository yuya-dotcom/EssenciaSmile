/* global Chart */
document.addEventListener("DOMContentLoaded", () => {
  // --- Monthly Sales Chart ---
  const salesCanvas = document.getElementById("myChartSales");
  if (salesCanvas instanceof HTMLCanvasElement) {
    const salesCtx = salesCanvas.getContext("2d");
    new Chart(salesCtx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: "Sales (₱)",
          data: [500000, 290000, 300000, 210000, 200000, 140000, 170000, 125000, 170000, 310000, 110000],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

  // --- Monthly Patients Chart ---
  const patientsCanvas = document.getElementById("myChartPatients");
  if (patientsCanvas instanceof HTMLCanvasElement) {
    const patientsCtx = patientsCanvas.getContext("2d");
    new Chart(patientsCtx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: "New Patients",
          data: [12, 18, 20, 25, 15, 14, 17, 6, 11, 15, 7],
          backgroundColor: "rgba(153, 102, 255, 0.4)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 2,
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
});

