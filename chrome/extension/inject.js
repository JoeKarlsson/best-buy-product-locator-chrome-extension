import getModelNumber from './get-model';

window.addEventListener('load', () => {
  const script = document.createElement('script');
  script.innerHTML = getModelNumber;
  document.body.appendChild(script);
});
