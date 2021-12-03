/* eslint-disable no-unused-vars */
import {
  CHANGE_LANGUAGE,
  REMOVE_ITEM,
  RESET_STORE,
  SAVE_DATA,
  SAVE_TOKEN,
  UPDATE_DATA,
} from './types';

export const saveToken = data => ({
  type: SAVE_TOKEN,
  payload: data,
});

export const selectLanguage = val => ({
  type: CHANGE_LANGUAGE,
  payload: val,
});

export const saveData = val => ({
  type: SAVE_DATA,
  payload: val,
});

export const updateData = val => ({
  type: UPDATE_DATA,
  payload: val,
});

export const removeItem = val => ({
  type: REMOVE_ITEM,
  payload: val,
});

export const resetStore = () => {
  return {
    type: RESET_STORE,
  };
};
