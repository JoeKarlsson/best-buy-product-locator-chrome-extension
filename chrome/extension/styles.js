import { DIV_ID } from './constants/constants';
// import HumanBBYWoff from '../assets/fonts/HumanBBY-55Regular-Web.woff';
// import HumanBBYWoff2 from '../assets/fonts/HumanBBY-55Regular-Web.woff2';
// import HumanBBYEot from '../assets/fonts/HumanBBY-55Regular-Web.eot';
// import HumanBBYSvg from '../assets/fonts/HumanBBY-55Regular-Web.svg';

const fileName = 'HumanBBY-55Regular-Web';
const ext = 'woff2';

const fontPath = `chrome-extension://__MSG_@@${chrome.runtime.id}/fonts/${fileName}.${ext}`;

// const fontPath = `./fonts/${fileName}.${ext}`;

// const fontPath = chrome.runtime.getURL('fonts/${fileName}.${ext}');

// const fontPath = `chrome-extension://__MSG_@@extension_id__/fonts/${fileName}.${ext}`;

export default `
  @font-face {
    font-family: "Human BBY Web";
    src: url('${fontPath}') format('${ext}');
  }

  #${DIV_ID} {
    font-family: "Human BBY Web" !important;
  }
`;
