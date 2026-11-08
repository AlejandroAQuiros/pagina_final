import initialTechnologies from './data/products.js';
import { renderTechnologyList, updateTechnologyCount } from './components/productList.js';

const technologyCatalog = [...initialTechnologies];
const technologyList = document.querySelector('#technology-list');
const technologyCount = document.querySelector('#technology-count');
const technologyForm = document.querySelector('#technology-form');

function renderCatalog() {
  renderTechnologyList(technologyCatalog, technologyList);
  updateTechnologyCount(technologyCatalog, technologyCount);
}

technologyForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(technologyForm);
  const name = String(formData.get('name') || '').trim();
  const category = String(formData.get('category') || '').trim();
  const impact = Number(formData.get('impact'));
  const year = Number(formData.get('year'));
  const description = String(formData.get('description') || '').trim();

  if (!name || !category || !Number.isFinite(impact) || !Number.isFinite(year)) {
    return;
  }

  technologyCatalog.unshift({
    id: Date.now(),
    name,
    category,
    impact,
    year,
    description: description || 'Proyecto tecnológico con impacto relevante en la actualidad.'
  });

  technologyForm.reset();
  renderCatalog();
});

technologyList.addEventListener('click', (event) => {
  const button = event.target.closest('.delete-btn');

  if (!button) {
    return;
  }

  const technologyId = Number(button.dataset.id);
  const index = technologyCatalog.findIndex((technology) => technology.id === technologyId);

  if (index !== -1) {
    technologyCatalog.splice(index, 1);
    renderCatalog();
  }
});

renderCatalog();
