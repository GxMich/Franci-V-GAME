const avvio = document.querySelector('#avvia-biliardo');
const finestra = document.querySelector('dialog');
const tavolo = document.querySelector('#tavolo');

if (typeof finestra.showModal === 'function') {
  avvio.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const gioco = document.createElement('iframe');
    gioco.title = '8 Ball Pool Billiards Multiplayer';
    gioco.allow = 'fullscreen; autoplay; gamepad';
    gioco.src = 'https://www.crazygames.com/embed/8-ball-pool-billiards-multiplayer';
    finestra.showModal();
    tavolo.replaceChildren(gioco);
  });
  finestra.addEventListener('close', () => tavolo.replaceChildren());
}
