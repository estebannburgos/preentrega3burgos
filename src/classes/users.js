import axios from 'axios';
import { Enviroments } from '../enviroments.js';

export class Users {

  url = ''
  enviroments = null

  constructor() {
    this.enviroments = new Enviroments()
    this.url = this.enviroments.apiBaseUrl + '/users/'
  }

  async getUsers() {
    try {
        return await axios.get(this.url)
    }
    catch(error) {
        console.error('Error en función getUsers: ' + error.message)
    }
  }

  async storeUser(user) {
    try {
        return await axios.post(this.url, user, this.enviroments.getApi())
    }
    catch(error) {
        console.error('Error en función storeUser: ' + error.message)
    }
  }  
 
}
