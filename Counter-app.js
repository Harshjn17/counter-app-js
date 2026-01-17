let count = 0;

const update = document.getElementById('text');

function render () {
  update.textContent = count;
}

document.getElementById('inc').addEventListener('click', () => {
  count++
  render();
});

document.getElementById('dec').addEventListener('click', () => {
  count--
  render();
});

document.getElementById('reset').addEventListener('click', () => {
  count = 0
  render();
});
