(() => {
  'use strict';
  const search = document.getElementById('service-search');
  const category = document.getElementById('service-category');
  const categories = Array.from(document.querySelectorAll('.menu-category'));
  const resultCount = document.getElementById('result-count');
  const emptyResult = document.getElementById('empty-result');

  function filterServices() {
    const query = search.value.trim().toLocaleLowerCase();
    let total = 0;
    categories.forEach(section => {
      const categoryMatches = category.value === 'all' || section.dataset.category === category.value;
      const title = section.querySelector('h3').textContent.toLocaleLowerCase();
      let visible = 0;
      section.querySelectorAll('.service-row').forEach(row => {
        const textMatches = (title + ' ' + row.textContent.toLocaleLowerCase()).includes(query);
        row.hidden = !categoryMatches || !textMatches;
        if (!row.hidden) visible++;
      });
      section.hidden = visible === 0;
      section.querySelector('.category-heading p').textContent = visible + (visible === 1 ? ' service' : ' services');
      total += visible;
    });
    resultCount.textContent = total + (total === 1 ? ' service found' : ' services found');
    emptyResult.hidden = total > 0;
  }

  search.addEventListener('input', filterServices);
  category.addEventListener('change', filterServices);
  document.querySelector('.menu-controls').addEventListener('submit', event => event.preventDefault());
  document.getElementById('reset-search').addEventListener('click', () => {
    search.value = '';
    category.value = 'all';
    filterServices();
    search.focus();
  });
  filterServices();
})();
