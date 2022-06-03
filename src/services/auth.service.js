import axios from 'axios';
import router from '../router';
const API_URL = 'https://proguardpeercover.herokuapp.com/';
class AuthService {
  login(user) {
      console.log( "username: ", user.username, ", password: ", user.password);
    return axios
      .post(API_URL + 'consultant_auth', {
        "username": user.username,
        "password": user.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('token', response.data.token);
          router.push({ name: 'AllMarketers' });
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    router.push({ name: 'Login' });
  }
}
export default new AuthService();
