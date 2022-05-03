export function formatDate(date) {

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  let today = new Date(date);

  const formatted = today.toLocaleDateString('sv-SV', options);
  return formatted;
}

export function metaDescription(str) {
  return str.replace(/^(.{135}[^\s]*).*/, '$1').trim() + '...';
}

export function removeTags(str) {
  return str.toString().replace(/(<([^>]+)>)/gi, '');
}

