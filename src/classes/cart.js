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

    axios.get(this.url + userId)
    .then(response => {
        let purchase = response.data;
        purchase.orders = cart; 

        axios.put(this.url + userId, purchase)
        .then(response => {
            //console.log('Objeto actualizado:', response.data);
        })
        .catch(error => {
            //console.error('Error al actualizar el objeto:', error);
        });
    })
    .catch(error => {
        console.error('Error al obtener el objeto:', error);
    });
        // try {
        // //   return await axios.put(this.url + id, product, this.enviroments.getApi())
        // return (await axios.put(this.url + userId + '/orders/', cart, this.enviroments.getApi())).data
        // }
        // catch(error) {
        //     console.error('Error en updateCart: ' + error.message)
        // }  
    }
}
