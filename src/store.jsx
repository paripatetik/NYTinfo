import {configureStore} from '@reduxjs/toolkit';
import booksReducer from './features/books/booksSlice';
import articlesReducer from './features/articles/articlesSlice';

export const store = configureStore({
    reducer: {
        books: booksReducer,
        articles: articlesReducer
    }
});