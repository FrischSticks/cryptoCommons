import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'fbd3629303mshd7930d1fc5a989cp173f88jsnc077a54f6bdc',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseURL = 'https://bing-news-search1.p.rapidapi.com/news';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL, headers: cryptoNewsApiHeaders}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (newsCategory, count) => `/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&limit=${count}`
        }),
    }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;




// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {textFormat: 'Raw', safeSearch: 'Off'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': 'fbd3629303mshd7930d1fc5a989cp173f88jsnc077a54f6bdc',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });