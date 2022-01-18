import { types } from "../types/types";

export const getAbi = () => ({
  type: types.LAN_ABILITIES_ES_EN,
});

export const getAbiSet = (abilities) => ({
  type: types.LAN_ABILITIES_ES_EN_SET,
  payload: abilities,
});
