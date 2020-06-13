import axios from 'axios';
import {Loading} from 'element-ui';
let loading;
let loadingOption = {
    lock: true
};
function showLoading () {
  loading = Loading.service(loadingOption);
}

function closeLoading () {
  loading.close();
}
axios.interceptors.request.use(request => {
  showLoading();
  return request;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  closeLoading();
  return response;
}, error => {
    loading.setText(error);

  return Promise.reject(error);
});
export default axios;
