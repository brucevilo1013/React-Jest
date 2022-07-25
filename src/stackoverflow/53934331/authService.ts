import axios from 'axios';

export async function postAuthUser(auth) {
  return axios.post('https://github.com/brucevilo1013', auth);
}
