// function createObjectURL(blob) {
//   const objURL = URL.createObjectURL(blob);
//   const objectURLs = objectURLs;
//   this.objectURLs.push(objURL);
//   return objURL;
// }
//
// const requestRemoteImage = (imageUrl, element) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', imageUrl);
//   xhr.responseType = 'blob';
//   xhr.onload = () => {
//     const img = document.createElement('img');
//     img.setAttribute('data-src', imageUrl);
//     img.className = 'icon';
//     const objURL = createObjectURL(xhr.response);
//     img.setAttribute('src', objURL);
//     return imageUrl;
//   };
//   xhr.send();
// };
//
// export default requestRemoteImage;
