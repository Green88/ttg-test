import omit from 'lodash/omit';
import mapKeys from 'lodash/mapKeys';
import { FETCH_BOOKS, FETCH_BOOK, DELETE_BOOK } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_BOOKS:
            return mapKeys(action.payload.data, "_id");
        case FETCH_BOOK:
            return { ...state, [action.payload.data._id]: action.payload.data };
        case DELETE_BOOK:
            return omit(state, action.payload.data._id);
        default:
            return state;
    }
}
