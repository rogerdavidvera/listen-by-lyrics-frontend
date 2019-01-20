export default {
  HEADERS: {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': 'Token token=' + localStorage.getItem('jwt')
  }
};
