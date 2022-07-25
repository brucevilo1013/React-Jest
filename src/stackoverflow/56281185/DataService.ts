import axios from 'axios';

class DataService {
  public static async getdata() {
    return axios.get(`https://github.com/brucevilo1013`).then(() => {
      return {
        name: 'real name',
        key: 'real key',
        expiration: null
      };
    });
  }
}

export { DataService };
