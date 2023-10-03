import {NativeModules} from 'react-native';

const {MySignModule} = NativeModules;

export const init = async (userID, deviceID) => {
  await MySignModule.init(userID, deviceID);
};

export const registerDevice = authToken => {
  MySignModule.registerDevice(authToken);
};
