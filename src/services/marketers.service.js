import axios from 'axios';
import authHeader from './auth-header';
import router from '../router';
const API_URL = 'https://proguardpeercover.herokuapp.com/marketers/';
class MarketerService {
  getAllMarketers() {
    return axios.get(API_URL, { headers: authHeader() }).catch((error) => {
      if (error.response.status === 401) router.push({ name: 'Login' })
    });
  }
  updateMarketer(marketer) {
    return axios.put(API_URL, marketer, { headers: authHeader() }).catch((error) => {
      if (error.response.status === 401) router.push({ name: 'Login' })
    });
  }
  createMarketer(marketer) {
    return axios.post(API_URL, marketer, { headers: authHeader() }).catch((error) => {
      if (error.response.status === 401) router.push({ name: 'Login' })
    });
  }
  getMarketer(MarketerId) {
    return axios.get(API_URL + MarketerId, { headers: authHeader() }).catch((error) => {
      if (error.response.status === 404) router.push({ name: 'NotFound', params: { catchAll: '404' } })
      if (error.response.status === 401) router.push({ name: 'Login' })
    });
  }
  delMarketer(MarketerId) {
    return axios.delete(API_URL + MarketerId, { headers: authHeader() });
  }
}
export default new MarketerService();