import Axios from "axios";
import authHeader from './Header';

const API_URL = `${process.env.REACT_APP_SERVER_URI}/`;
const API_VERSION = 'api/v1/';

export default function call({ path, method, data, headerType="" }) {
  return new Promise((resolve, reject) => {
    Axios({
      url: API_URL + API_VERSION + path,
      method,
      data,
      headers: authHeader(headerType),
    })
    .then((d) => {
      resolve(d.data);
    })
    .catch((err) => {
        let status = err?.response?.data?.status;
      
        if (status === 403 || status === 401) 
        {
          let e = err?.response?.data;
          if (!e) return;
          reject(e);
          // setTimeout(function(){window.location.href = "/login";}, 1000)
        }
      });
  });
}
