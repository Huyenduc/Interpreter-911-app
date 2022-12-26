import RNCallKeep from 'react-native-callkeep';
import { Platform } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import { navigate } from '../routes/navigationUtils';
import { NativeModules } from "react-native";


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


const answerCall = () => {
    RNCallKeep.endAllCalls();
    RNCallKeep.setCurrentCallActive("YOUR CALL UUID");

    if (Platform.OS === "android") {
        const { CallkeepHelperModule } = NativeModules;
        CallkeepHelperModule.startActivity();
        RNCallKeep.endAllCalls();
    }
    // this.IsRinging = false;
    // navigate("somewhere");
    RNCallKeep.backToForeground();
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
    RNCallKeep.addEventListener("endCall", endCall);
};