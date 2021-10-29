import { AxiosResponse } from 'axios';

const axios = require('axios').default;

const baseUrl = (path: string | number): string => {
  return `${process.env.REACT_APP_API_URL}${path}`;
};

export default class HTTPService {
  static get(path = ''): Promise<any> {
    return axios({
      method: 'get',
      url: baseUrl(path),
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: string) => {
        throw new Error(err);
      });
  }
}
