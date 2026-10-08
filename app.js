const chips = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.catalog-card');

function applyFilter(filter){
  cards.forEach(card => card.classList.toggle('hidden', filter !== 'ALL' && card.dataset.church !== filter));
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.filter === filter));
  document.querySelector('#katalogus').scrollIntoView({behavior:'smooth'});
}

chips.forEach(btn => btn.addEventListener('click', () => applyFilter(btn.dataset.filter)));

document.querySelectorAll('[data-dialog]').forEach(btn => {
  btn.addEventListener('click', () => document.getElementById(btn.dataset.dialog).showModal());
});

document.querySelectorAll('dialog').forEach(dlg => {
  dlg.querySelector('.close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => {
    const r = dlg.getBoundingClientRect();
    const outside = e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    if(outside) dlg.close();
  });
});
