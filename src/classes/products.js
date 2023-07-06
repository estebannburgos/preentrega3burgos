import axios from 'axios';
import { Enviroments } from '../enviroments.js';

export class Products {

  url = ''
  enviroments = null

  constructor() {
    this.enviroments = new Enviroments()
    this.url = this.enviroments.apiBaseUrl + '/products/'
  }

  async getProducts() {
    try {
        return await axios.get(this.url)
    }
    catch(error) {
        console.error('Error en función getProducts: ' + error.message)
    }
  }

  async getProduct(id) {
    try {
      return (await axios.get(this.url+(id||'')))
    }
    catch(error) {
        console.error('Error en getProduct: ' + error.message)
    }
  }

  async storeProduct(product) {
    try {
        return await axios.post(this.url, product, this.enviroments.getApi())
    }
    catch(error) {
        console.error('Error en función storeProduct: ' + error.message)
    }
  }  

  async destroyProduct(id) {
    try {
      return (await axios.delete(this.url + id)).data
    }
    catch(error) {
        console.error('Error en destroyProduct: ' + error.message)
    }    
  } 

  async updateProduct(product, id) {
    try {
      //   return await axios.put(this.url + id, product, this.enviroments.getApi())
      return (await axios.put(this.url + id, product, this.enviroments.getApi())).data
    }
    catch(error) {
        console.error('Error en updateProduct: ' + error.message)
    }    
}
 
}
