import {
  SET_PAGE_DATA,
} from '../actions/wordpressActions';

const initState = {
  pages: [],
}

const wordpressReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_PAGE_DATA:
      return { ...state, pages: action.payload };
    default:
      return { ...state };
  }
};

export default wordpressReducer;
