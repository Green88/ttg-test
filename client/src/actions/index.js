import axios from 'axios';
import {FETCH_BOOKS, FETCH_BOOK, DELETE_BOOK, CREATE_BOOK } from './types';

const BOOKS_BASE_URL = '/api/books';

export const fetchBooks = () => async dispatch => {
    const res = await axios.get(BOOKS_BASE_URL);

    dispatch({ type: FETCH_BOOKS, payload: res.data });
};

export const fetchBook = (id) => async dispatch => {
    const res = await axios.get(`${BOOKS_BASE_URL}/${id}`);

    dispatch({ type: FETCH_BOOK, payload: res.data });
};

export const deleteBook = (id) => async dispatch => {
    const res = await axios.delete(`${BOOKS_BASE_URL}/${id}`);

    dispatch({ type: DELETE_BOOK, payload: res.data });
};

export const createBook = (book) => async dispatch => {
    const res = await axios.post(BOOKS_BASE_URL, book);

    dispatch({ type: CREATE_BOOK, payload: res.data });
};