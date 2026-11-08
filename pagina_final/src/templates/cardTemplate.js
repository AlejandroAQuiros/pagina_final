function createTechnologyCard(technology) {
  return `
    <article class="technology-card" data-id="${technology.id}">
      <div class="card-top">
        <span class="category-tag">${technology.category}</span>
        <button class="delete-btn" type="button" data-id="${technology.id}" aria-label="Eliminar ${technology.name}">
          Eliminar
        </button>
      </div>

      <h3>${technology.name}</h3>
      <p class="description">${technology.description}</p>

      <div class="card-stats">
        <div>
          <span>Impacto</span>
          <strong>${technology.impact}%</strong>
        </div>
        <div>
          <span>Año</span>
          <strong>${technology.year}</strong>
        </div>
      </div>
    </article>
  `;
}

export default createTechnologyCard;
