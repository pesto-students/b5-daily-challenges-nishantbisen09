const ERROR_MESSAGE = 'Invalid Input';

const isString = (str) => typeof str === 'string';

function getAbbreviatedString(strings) {
  const stringsLength = strings.length;
  const firstWord = strings[0];
  const abbreviatedInitial = strings[stringsLength - 1].charAt(0).toUpperCase();
  return `${firstWord} ${abbreviatedInitial}.`;
}

function abbreviateString(str) {
  if (!isString(str)) throw ERROR_MESSAGE;
  const strings = str.split(' ');
  if (strings.length > 1) {
    return getAbbreviatedString(strings);
  }
  return str;
}

export { abbreviateString };
