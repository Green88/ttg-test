import axios from 'axios';
import {FETCH_BOOKS, FETCH_BOOK, DELETE_BOOK, CREATE_BOOK } from './types';

const BOOKS_BASE_URL = '/api/books';

export function fetchBooks () {
    const request = axios.get(BOOKS_BASE_URL);

    return { type: FETCH_BOOKS, payload: request };
};

export const fetchBook = (id) => {
    const request = axios.get(`${BOOKS_BASE_URL}/${id}`);

    return { type: FETCH_BOOK, payload: request };
};

export const deleteBook = (id) => {
    const request = axios.delete(`${BOOKS_BASE_URL}/${id}`);

    return { type: DELETE_BOOK, payload: request };
};

export const createBook = (book, callback) => {
    const request = axios
        .post(BOOKS_BASE_URL, book)
        .then(() => callback());

    return { type: CREATE_BOOK, payload: request };
};