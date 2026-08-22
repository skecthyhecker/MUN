// ===== Navdoot 1.0 — SU-30MKI cursor + shared nav behaviour =====

(function () {
  const isTouch = window.matchMedia('(pointer: coarse)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isTouch) return;

  const jet = document.createElement('div');
  jet.id = 'jet-cursor';
  jet.innerHTML = `
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="#e7ecef" stroke="#0f6e5d" stroke-width="1">
        <path d="M32 2 L36 20 L58 40 L58 44 L36 36 L34 54 L44 60 L44 62 L32 59 L20 62 L20 60 L30 54 L28 36 L6 44 L6 40 L28 20 Z"/>
      </g>
    </svg>`;
  document.body.appendChild(jet);

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my, angle = -90;
  let lastTrail = 0;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
  });

  function spawnTrail(x, y) {
    const t = document.createElement('div');
    t.className = 'jet-trail';
    t.style.left = x + 'px';
    t.style.top = y + 'px';
    document.body.appendChild(t);
    let op = 0.55, size = 5;
    const fade = setInterval(() => {
      op -= 0.045; size += 0.6;
      if (op <= 0) { clearInterval(fade); t.remove(); return; }
      t.style.opacity = op;
      t.style.width = size + 'px';
      t.style.height = size + 'px';
    }, 30);
  }

  function tick(ts) {
    const dx = mx - cx, dy = my - cy;
    cx += dx * 0.18;
    cy += dy * 0.18;
    const speed = Math.hypot(dx, dy);
    if (speed > 1.2) {
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      let diff = targetAngle - angle;
      diff = ((diff + 180) % 360 + 360) % 360 - 180;
      angle += diff * 0.25;
    }
    jet.style.transform = `translate(${cx}px, ${cy}px) rotate(${angle}deg)`;

    if (!reduced && speed > 3 && ts - lastTrail > 45) {
      lastTrail = ts;
      spawnTrail(cx, cy);
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

function showSidebar(){
  const h = document.querySelector('.hamburger');
  if (h) h.style.display = 'flex';
}
function hideSidebar(){
  const h = document.querySelector('.hamburger');
  if (h) h.style.display = 'none';
}
