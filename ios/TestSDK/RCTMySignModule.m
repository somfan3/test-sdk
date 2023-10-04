//
//  RCTMySignModule.m
//  vContract
//
//  Created by Tuan Anh on 26/09/2023.
//

#import "RCTMySignModule.h"
#import <Foundation/Foundation.h>
#import <GoSignSDKLite/GoSignSDKLite-Swift.h>

@implementation RCTMySignModule

RCT_EXPORT_MODULE(MySignModule);


RCT_EXPORT_METHOD(init:(NSString *)userID
                  deviceID:(NSString *)deviceID
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *resultString = [NSString stringWithFormat:@"[RCTMySignModule] init -> userID: %@ , deviceID -> %@", userID, deviceID];
  NSLog(@"%@", resultString);
  [API setHost:@"https://remotesigning.viettel.vn"];
  [API setUserId: userID];
  [API setDeviceId: deviceID];
  resolve(@true);
}

RCT_EXPORT_METHOD(registerDevice:(NSString *)authToken
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  NSLog(@"[RCTMySignModule] registerDevice -> authToken: %@", authToken);
  [API registerDeviceWithToken:authToken localizedReason:@"Unlock to add device"
  completion:^(RegisterDeviceAPIResponse * _Nullable response, NSError * _Nullable error) {
    
  }];
  
  
}


@end

