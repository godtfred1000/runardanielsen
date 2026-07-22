const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Lukk meny' : 'Åpne meny');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

async function delSide() {
  const delingsdata = {
    title: document.title,
    text: 'Se tidligere utførte jobber fra Malermester Runar Danielsen AS.',
    url: window.location.href
  };

  if (navigator.share) {
    try {
      await navigator.share(delingsdata);
    } catch (error) {
      // Brukeren lukket delingsvinduet.
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(window.location.href);
    alert('Lenken er kopiert.');
  } catch (error) {
    window.prompt('Kopier lenken:', window.location.href);
  }
}
