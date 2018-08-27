import getModelNumber from './get-model';

window.addEventListener('load', () => {
  console.log('inject');
  const script = document.createElement('script');
  script.innerHTML = getModelNumber;
  document.body.appendChild(script);
});
