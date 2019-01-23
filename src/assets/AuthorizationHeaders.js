export function headers() {
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    'Authorization': 'Token token=' + localStorage.getItem('jwt')
  }
}
