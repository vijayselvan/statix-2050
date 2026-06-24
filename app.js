const data = {
  heroTitle: "AI Powered MetaPix",
  heroDesc: "Future digital platform",

  clients: 120,
  projects: 300,
  success: 96,

  services: [
    "Web Development",
    "SEO",
    "Marketing",
    "Mobile Apps"
  ]
};

// Inject hero
document.getElementById("heroTitle").innerText = data.heroTitle;
document.getElementById("heroDesc").innerText = data.heroDesc;

// Inject stats
document.getElementById("clients").innerText = data.clients;
document.getElementById("projects").innerText = data.projects;
document.getElementById("success").innerText = data.success + "%";

// Inject services
data.services.forEach((s, i) => {
  document.getElementById("service" + (i+1)).innerText = s;
});


//Add Chart (Analytics Section)

new Chart(document.getElementById("chart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [{
      label: "Growth",
      data: [10, 30, 50, 80],
      borderColor: "#00f2ff"
    }]
  }
});
