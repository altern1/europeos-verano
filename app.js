const inventoryEl = document.querySelector('.inventory');
const filters = document.querySelectorAll('.filter');
const money = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 });
const number = new Intl.NumberFormat('es-MX');

function placeholder(unit) {
  const initials = `${unit.brand} ${unit.model}`.split(' ').filter(Boolean).slice(0,2).map(w => w[0]).join('');
  return `<div class="car-placeholder"><span>${initials}</span><small>${unit.brand}</small></div>`;
}

function render(filter = 'all') {
  const units = window.EUROPEOS_INVENTORY.filter(unit => {
    if (filter === 'all') return true;
    if (filter === 'under-700') return unit.price <= 700000;
    return unit.tags.includes(filter);
  });

  inventoryEl.innerHTML = units.map(unit => `
    <article class="card">
      <div class="media">
        ${unit.image ? `<img src="${unit.image}" alt="${unit.brand} ${unit.model} ${unit.year}" loading="lazy" />` : placeholder(unit)}
        <span class="badge">${unit.armor}</span>
      </div>
      <div class="card-body">
        <p class="year">${unit.year}</p>
        <h3>${unit.brand} ${unit.model}</h3>
        <dl>
          ${unit.color ? `<div><dt>Color</dt><dd>${unit.color}</dd></div>` : ''}
          <div><dt>Kilometraje</dt><dd>${unit.km ? `${number.format(unit.km)} km` : 'Consultar'}</dd></div>
          <div><dt>Condición</dt><dd>${unit.armor}</dd></div>
        </dl>
        <p class="price">${money.format(unit.price)}</p>
        <a class="card-cta" href="https://wa.me/525543619902?text=${encodeURIComponent(`Hola, quiero información sobre ${unit.brand} ${unit.model} ${unit.year} de la promoción Viaja Seguro Este Verano.`)}" target="_blank" rel="noopener">Contactar</a>
      </div>
    </article>
  `).join('');
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    render(button.dataset.filter);
  });
});

render();
