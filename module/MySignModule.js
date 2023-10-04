import {NativeModules} from 'react-native';

const {MySignModule} = NativeModules;

export const init = async (userID, deviceID) => {
  console.log('init');
  await MySignModule.init(userID, deviceID);
  console.log('init done');
};

export const registerDevice = authToken => {
  MySignModule.registerDevice(authToken);
};
