import { types } from "../types/types";

export const getType = () => ({
  type: types.GET_TYPE_SP,
});

export const getTypeSet = (type) => ({
  type: types.GET_TYPE_SP_SET,
  payload: type,
});
