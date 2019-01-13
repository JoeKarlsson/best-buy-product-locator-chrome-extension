/**
    Making some assumptions with this regex:
    Trying to remove unsafe uri characters as well as characters that break API search
*/
export default function getSearchParams(searchTerms) {
  if (searchTerms && typeof searchTerms === 'string') {
    const unsafeChars = new RegExp(
      /([\/\,\!\\\^\$\{\}\[\]\(\)\*\+\?\|\<\>\&\#\%\=\;\:\@\"\`])|(\s-\s)/,
      'gi',
    );
    return searchTerms
      .replace(unsafeChars, ' ')
      .split(' ')
      .filter(term => term)
      .map(term => `search=${term}`)
      .join('&');
  }
}
