import { screenConstants } from "../constants/Index";

const initialstate = {
  id: 0,
  text: "",
  pic: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case screenConstants.ADD_ITEM_ID:
      return {
        ...state,
        id: action.payload,
      };
    case screenConstants.ADD_ITEM_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case screenConstants.ADD_ITEM_PIC:
      return {
        ...state,
        pic: action.payload,
      };
  }
  return state;
};
