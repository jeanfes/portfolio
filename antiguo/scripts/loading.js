// Verificar si es la primera visita
const hasVisited = localStorage.getItem("hasVisited");

if (!hasVisited) {
  // Es la primera visita, mostrar loading
  htmlElement.classList.add("lock-scroll");
  
  window.onload = function() {
      const loading = document.getElementById("loading");
      if (loading) {
        loading.style.display = "block"; // Mostrar el loading
        setTimeout(function() {
          htmlElement.classList.remove("lock-scroll");
          loading.style.display = "none"; // Ocultar el loading después de 2 segundos
          // Marcar que ya visitó el sitio
          localStorage.setItem("hasVisited", "true");
        }, 2000); // 2000 milisegundos
      }
  };
} else {
  // Ya visitó antes, no mostrar loading
  window.onload = function() {
      const loading = document.getElementById("loading");
      if (loading) {
        loading.style.display = "none";
      }
  };
}
  