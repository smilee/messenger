import { reducers } from './reducer';

export const {
  addRandomChannel,
  changeChannel,
  changeDraftMessage,
  addRandomMessage,
  sendMessage,
} = Object.keys(reducers).reduce((acc, key) => ({
  ...acc,
  [key]: (payload) => ({ type: key, payload }),
}), {});
