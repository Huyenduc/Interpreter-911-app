import RNCallKeep from 'react-native-callkeep';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
// import { useEffect } from 'react';



export const handleCallNotification = async () => {
    console.log("Trting to call");
    if (Platform.OS === "android") await RegisterCallKeep();
    // notificationContent = data;
    const uid = "ddd"
    // currentUid = uid;
    RNCallKeep.displayIncomingCall(
      uid,
      "kdkkd",
      "kdkdk",
      "generic",
      true
    );

}

const callKeepConfig = {
    ios: {
        appName: "appname",
    },

    android: {
        alertTitle: "Permissions required",
        additionalPermissions: [],
        alertDescription: "This application needs to access your phone accounts",
        cancelButton: "Cancel",
        //   additionalPermissions: [],
        okButton: "ok",
    },
};
const answerCall = () => {
    // RNCallKeep.endAllCalls()
    RNCallKeep.backToForeground();
    console.log("dd3")
}
const endCall = () => {
    RNCallKeep.endAllCalls();
    console.log("call3")
}

const RegisterCallKeep = async () => {
    // RNCallKeep.removeEventListener("answerCall", answerCall);
    // RNCallKeep.removeEventListener("endCall", endCall);
    // await RNCallKeep.registerPhoneAccount(configSetup);
    await RNCallKeep.registerAndroidEvents();
    await RNCallKeep.setAvailable(true);
    RNCallKeep.addEventListener("answerCall", answerCall);
    // RNCallKeep.addEventListener("endCall", endCall);
};