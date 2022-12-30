import * as React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isLoggedIn, loadingReset } from "@redux/loading/actions";
import { useSelector, useDispatch } from "react-redux";
import { userLoginPayload } from "@redux/loginReq/selectors";
import { GenericNavigationProps } from "@routes/types";
import {useNavigation} from '@react-navigation/native'
import {styles} from './styles'

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
        removeToken();
        dispatch(isLoggedIn(false))
        navigation.navigate('Main', {screen: 'Login'})
    }
    return (
        <View style={styles.settingCont}>
            <View style={styles.avatar}>
                <Image source={require('')}/>
                <Text>User Name</Text>
            </View>
            <View style={styles.userInformation}>

            </View>
            <View style={styles.logoutButton}>
                <TouchableOpacity
                    onPress={handleLogout}
                >
                    <Text>log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}