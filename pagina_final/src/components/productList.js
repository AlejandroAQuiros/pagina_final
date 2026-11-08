import createTechnologyCard from '../templates/cardTemplate.js';

export function renderTechnologyList(technologies, container) {
  if (!technologies.length) {
    container.innerHTML = '<p class="empty-state">No hay tecnologías registradas.</p>';
    return;
  }

  container.innerHTML = technologies.map(createTechnologyCard).join('');
}

export function updateTechnologyCount(technologies, countLabel) {
  const total = technologies.length;
  countLabel.textContent = `${total} tarjeta${total === 1 ? '' : 's'}`;
}
