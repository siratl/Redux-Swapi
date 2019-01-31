import {
  FETCHING_CHARACTERS,
  FETCHING_CHARACTERS_SUCCESS,
  FETCHING_CHARACTERS_FAILURE,
} from '../actions';

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isLoading: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARACTERS:
      return {
        ...state,
        isLoading: true,
        error: '',
      };

    case FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        isLoading: false,
        error: '',
      };

    case FETCHING_CHARACTERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
