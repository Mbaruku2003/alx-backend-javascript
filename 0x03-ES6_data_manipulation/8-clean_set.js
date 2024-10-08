const CleanSet = (Set, startString) => {
  const strings = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach(s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      strings.push(s.slice(startStrung.length));
    }
  });
  return strings.join('-');
};
export default cleanSet;
