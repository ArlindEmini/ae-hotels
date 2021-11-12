import { screenConstants } from "../constants/Index";

export const setItemId = (id) => ({
  type: screenConstants.ADD_ITEM_ID,
  payload: id,
});

export const setItemText = (text) => ({
  type: screenConstants.ADD_ITEM_TEXT,
  payload: text,
});

export const setItemPic = (pic) => ({
  type: screenConstants.ADD_ITEM_TEXT,
  payload: pic,
});
