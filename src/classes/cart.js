import axios from 'axios';
// import store from './store.js';
import { Enviroments } from '../enviroments.js';

export class Cart {

  url = ''
  enviroments = null

  constructor() {
    this.enviroments = new Enviroments()
    this.url = this.enviroments.apiBaseUrl + '/users/'
  }

  async getCart(userId) {
    try {
      return (await axios.get(this.url+ userId + '/orders/')).data
    }
    catch(error) {
        console.error('Error en getCart: ' + error.message)
    }
  }

  async updateCart(userId, cart) {
        try {
        //   return await axios.put(this.url + id, product, this.enviroments.getApi())
        return (await axios.put(this.url + userId + '/orders/', cart, this.enviroments.getApi())).data
        }
        catch(error) {
            console.error('Error en updateCart: ' + error.message)
        }  
    }
}
