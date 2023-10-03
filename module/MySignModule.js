import {NativeModules} from 'react-native';

const {MySignModule} = NativeModules;

export const init = async (userID, deviceID) => {
  console.log(`INIT SDK WITH USERID: ${userID} AND DEVICEID: ${deviceID}`)
  await MySignModule.init(userID, deviceID);
  console.log("DONE INIT")
};

export const registerDevice = authToken => {
  MySignModule.registerDevice(authToken);
};
