const players = document.querySelectorAll('.player');
const positions = document.querySelectorAll('.position');
const bench = document.getElementById('bench');

let draggedPlayer = null;

players.forEach(player => {
  player.addEventListener('dragstart', () => {
    draggedPlayer = player;
    player.classList.add('dragging');
  });

  player.addEventListener('dragend', () => {
    draggedPlayer = null;
    player.classList.remove('dragging');
  });
});

positions.forEach(position => {
  position.addEventListener('dragover', e => {
    e.preventDefault();
    position.classList.add('over');
  });

  position.addEventListener('dragleave', () => {
    position.classList.remove('over');
  });

  position.addEventListener('drop', () => {
    position.classList.remove('over');

    if (!draggedPlayer) return;

    // Om platsen redan har en spelare -> tillbaka till bänken
    if (position.firstChild && position.firstChild.classList.contains('player')) {
      bench.appendChild(position.firstChild);
    }

    position.appendChild(draggedPlayer);
  });
});

// Tillåter att droppa tillbaka till bänken
bench.addEventListener('dragover', e => e.preventDefault());

bench.addEventListener('drop', () => {
  if (draggedPlayer) {
    bench.appendChild(draggedPlayer);
  }
});

