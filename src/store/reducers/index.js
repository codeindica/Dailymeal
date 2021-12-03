import {languages} from '../../assets/lang';
import {
  CHANGE_LANGUAGE,
  REMOVE_ITEM,
  RESET_STORE,
  SAVE_DATA,
  SAVE_TOKEN,
  UPDATE_DATA,
} from '../actions/types';

const initialState = {
  token: '',
  lang: languages.english,
  data: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case CHANGE_LANGUAGE:
      return {
        ...state,
        lang: action.payload,
      };

    case SAVE_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case REMOVE_ITEM:
      const remData = state.data.filter(item => item.time !== action.payload);
      return {
        ...state,
        data: remData,
      };

    case UPDATE_DATA:
      const updatedData = state.data.map(item => {
        if (item.time === action.payload.time) {
          item.select = !item.select;
        }
        return item;
      });

      return {
        ...state,
        data: updatedData,
      };

    case RESET_STORE: {
      return initialState;
    }

    default:
      return state;
  }
};

export default Reducer;
