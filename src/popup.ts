//document is the global DOM object
const button = document.getElementById('hello');
const statusHeading = document.getElementById('status-heading');

//returns either HTMLElement or null
if (!button || !statusHeading) {
  console.error('popup: missing required element');
} else {
  button.removeAttribute('disabled');
  button.textContent = 'Click me';

  let clicks = 0;

  button.addEventListener('click', () => {
    clicks += 1;
    const message = `Clicked ${clicks} time${clicks === 1 ? '' : 's'}.`;
    console.log('popup:', message);
    statusHeading.textContent = message;
  });

  console.log('popup: ready');
}
