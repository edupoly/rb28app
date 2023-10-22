import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todolist/todolistSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { countriesApi } from '../services/countries';
import { productsApi } from '../services/products';
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    t:todoReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [productsApi.reducerPath]:productsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware),
})
setupListeners(store.dispatch)