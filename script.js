function abrirModal(src) {
  document.getElementById('modal').classList.add('active');
  document.getElementById('imagenModal').src = src;
}

function cerrarModal() {
  document.getElementById('modal').classList.remove('active');
}

function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('active');
}