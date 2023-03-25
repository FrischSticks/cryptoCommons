import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'fbd3629303mshd7930d1fc5a989cp173f88jsnc077a54f6bdc',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseURL = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL, headers: cryptoApiHeaders}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => `/coin/${coinId}`
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => `/coin/${coinId}/history?timeperiod=${timePeriod}`
        })
    }),
})

export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} = cryptoApi;

// Code below copied from RAPID API (Coinranking)
    // const axios = require("axios");

    // const options = {
    //   method: 'GET',
    //   url: 'https://coinranking1.p.rapidapi.com/coins',
    //   params: {
    //     referenceCurrencyUuid: 'yhjMzLPhuIDl',
    //     timePeriod: '24h',
    //     'tiers[0]': '1',
    //     orderBy: 'marketCap',
    //     orderDirection: 'desc',
    //     limit: '50',
    //     offset: '0'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': 'fbd3629303mshd7930d1fc5a989cp173f88jsnc077a54f6bdc',
    //     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    //   }
    // };

    // axios.request(options).then(function (response) {
    // 	console.log(response.data);
    // }).catch(function (error) {
    // 	console.error(error);
    // });