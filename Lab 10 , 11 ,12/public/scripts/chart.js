function randomDatos(n, max = 100) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * max));
  }
  
  window.onload = () => {
    new Chart(document.getElementById("graficaVentas"), {
      type: "bar",
      data: {
        labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
        datasets: [
          {
            label: "Ventas ($)",
            data: randomDatos(7, 500),
            backgroundColor: "#468FAF",
          },
        ],
      },
      options: { responsive: true },
    });
  
    new Chart(document.getElementById("graficaUsuarios"), {
      type: "line",
      data: {
        labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
        datasets: [
          {
            label: "Usuarios",
            data: randomDatos(7, 300),
            backgroundColor: "#468FAF",
            borderColor: "#468FAF",
            fill: false,
            tension: 0.3,
          },
        ],
      },
      options: { responsive: true },
    });
  
    new Chart(document.getElementById("graficaCategorias"), {
      type: "pie",
      data: {
        labels: ["Electrónica", "Ropa", "Comida", "Otros"],
        datasets: [
          {
            label: "Ingresos",
            data: randomDatos(4, 1000),
            backgroundColor: ["#468FAF", "#6fb3d2", "#82c2db", "#a7d3e5"],
          },
        ],
      },
      options: { responsive: true },
    });
  
    new Chart(document.getElementById("graficaComparativa"), {
      type: "bar",
      data: {
        labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
        datasets: [
          {
            label: "Esta semana",
            data: randomDatos(7, 400),
            backgroundColor: "#468FAF",
          },
          {
            label: "Semana pasada",
            data: randomDatos(7, 400),
            backgroundColor: "#a7d3e5",
          },
        ],
      },
      options: { responsive: true },
    });
  };
  