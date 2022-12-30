import * as React from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isLoggedIn, loadingReset } from "@redux/loading/actions";
import { useSelector, useDispatch } from "react-redux";
import { userLoginPayload } from "@redux/loginReq/selectors";
import { GenericNavigationProps } from "@routes/types";
import {useNavigation} from '@react-navigation/native'
export default function SettingPage(){
    const dispatch = useDispatch()
    const navigation = useNavigation<GenericNavigationProps>()
    const userInfor =  useSelector(userLoginPayload)
    // console.log(userInfor)
    const removeToken = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log(error);
        } 
    }
    const handleLogout = () => {
        // removeToken();
        dispatch(isLoggedIn(false))
        navigation.navigate('Main', {screen: 'Login'})
    }
    return (
        <View>
            <Text>Setting Page</Text>
            <TouchableOpacity
                onPress={handleLogout}
            >
                <Text>log out</Text>
            </TouchableOpacity>
        </View>
    )
}