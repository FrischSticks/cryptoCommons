import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { cryptoApi } from "../api/cryptoApi";
import { cryptoNewsApi } from "../api/cryptoNewsApi";

const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware)
})

setupListeners(store.dispatch)

export default store;