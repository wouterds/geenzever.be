import axios from 'axios';
import qs from 'qs';

export default axios.create({
  baseURL: process.env.API_BASE_URL,
  paramsSerializer: (params: any) => qs.stringify(params),
});
