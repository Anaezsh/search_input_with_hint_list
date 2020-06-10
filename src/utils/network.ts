import {AxiosRequestConfig, AxiosResponse} from 'axios';

export const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'http://demo4258569.mockable.io',
    timeout: 60000,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
    const {
        method = '',
        url,
        baseURL,
        params,
        data,
        headers,
    } = config;
    const methodToUpperCase: string = method.toLocaleUpperCase();

    console.log(`${methodToUpperCase} ${baseURL}${url}`);
    console.log('headers', headers);

    if (methodToUpperCase === 'GET' || methodToUpperCase === 'DELETE') {
        console.log('params: ', params);
    }

    if (methodToUpperCase === 'POST' || methodToUpperCase === 'PUT') {
        console.log('data: ', data);
    }

    return config;
}, (err: Error) => {
    console.log('requestError: ', err);

    return Promise.reject(err);
});

instance.interceptors.response.use(function (response: AxiosResponse) {
    console.log('response ', response);

    return response;
}, (err: Error) => {
    console.log(err);

    return Promise.reject(`responseError: ${err}`);
});

export const get = (url: string, data?: any) => data
    ? instance.get(url, {params: data})
    : instance.get(url);

