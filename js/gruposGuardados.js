document.getElementById('borrar-btn').addEventListener('click', borrarCartel);

function borrarCartel() {
  localStorage.removeItem('nombresGuardados');
  document.getElementById('cartel-nombres').textContent = '';
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const nombresGuardados = JSON.parse(localStorage.getItem('nombresGuardados')) || [];
  const cartelNombres = document.getElementById('cartel-nombres');
  nombresGuardados.forEach(nombre => {
      const div = document.createElement('div');
      div.textContent = nombre;
      cartelNombres.appendChild(div);
  });
});
