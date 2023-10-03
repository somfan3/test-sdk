package com.testsdk.MySign;

import android.app.Application;
import android.content.Context;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.gson.Gson;
import com.testsdk.MainActivity;
import com.viettel.biometrics.signature.helpers.GoSignSDKSetup;
import com.viettel.biometrics.signature.helpers.MySignSDK;
import com.viettel.biometrics.signature.listener.ServiceApiListener;
import com.viettel.biometrics.signature.network.response.CertificateResponse;
import com.viettel.biometrics.signature.network.response.ResponseError;
import com.viettel.biometrics.signature.ultils.BiometricApiType;


public class MySignModule extends ReactContextBaseJavaModule {
    String userID;
    String deviceID;
    Gson gson = new Gson();
    Context context;
    Application application;

    //constructor
    public MySignModule(ReactApplicationContext reactContext, Application application) {
        super(reactContext);
        context = reactContext.getApplicationContext();
        this.application = application;
    }

    @NonNull
    @Override
    public String getName() {
        return "MySignModule";
    }

    @ReactMethod
    public void init(String userID, String deviceID, Promise promise) {
        this.userID = userID;
        this.deviceID = deviceID;

        System.out.println("INIT SDK WITH USER_ID: " + userID + " AND DEVICE_ID: " + deviceID);

        GoSignSDKSetup.initialize(application, "https://remotesigning.viettel.vn:8773/", "Unlock to register device");

        promise.resolve(true);
    }

    @ReactMethod
    public void registerDevice(String authToken, Promise promise) {
        try {
            new MySignSDK.Builder()
                    .withUserId(userID)
                    .withDeviceId(deviceID)
                    .withToken(authToken)
                    .withActivity(MainActivity.getActivity()).withBiometricApiType(BiometricApiType.AUTO)
                    .registerDevice(new ServiceApiListener<>() {
                @Override
                public void onSuccess(CertificateResponse certificateResponse) {
                    promise.resolve(gson.toJson(certificateResponse));
                }

                @Override
                public void onFail(ResponseError responseError) {
                    promise.reject("REGISTER_FAIL", gson.toJson(responseError));
                }

                @Override
                public void showLoading() {

                }

                @Override
                public void hideLoading() {

                }
            }).build();


        } catch (Exception e) {
            Log.e("registerDevice",e.toString());
        }
    }

    @ReactMethod
    public void requestSign(String authToken) {
//        new MySignSDK.Builder()
//                .withUserId(userID).
//                withDeviceId(deviceID).
//                withToken(authToken).
//                withActivity((MainActivity) getCurrentActivity())
//                .withBiometricApiType(BiometricApiType.AUTO)
//                .authorisationListPendingRequest();
    }
}


