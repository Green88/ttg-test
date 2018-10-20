import omit from 'lodash/omit';
import mapKeys from 'lodash/mapKeys';
import { FETCH_BOOKS, FETCH_BOOK, DELETE_BOOK, CREATE_BOOK } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_BOOKS:
            return mapKeys(action.payload, "_id");
        case FETCH_BOOK:
            return { ...state, [action.payload._id]: action.payload };
        case CREATE_BOOK:
            return { ...state, [action.payload._id]: action.payload };
        case DELETE_BOOK:
            return omit(state, action.payload._id);
        default:
            return state;
    }
}
