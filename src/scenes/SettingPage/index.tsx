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
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
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
            <View style={styles.headerCont}>
                <Image style={styles.headerImage} source={require('../../../assets/logo-resize.png')}/>
            </View>
            <View style={styles.avatarCont}>
                <View style={styles.avatar}>
                    <Image source={require('')}/>
                    <Icon name="person" color='white' size={30}/>
                </View>
                <Text>User Name</Text>
            </View>
            <View style={styles.userInformation}>
                <Text style={styles.userInforText}> FullName: User Name </Text>
                <Text style={styles.userInforText}> Phone Number: +0123465789 </Text>
                <Text style={styles.userInforText}> Email: abc@gmail.com </Text>
                <Text style={styles.userInforText}> Gender: Female/Male </Text>
                <Text style={styles.userInforText}> Created at: 30/10/2022 </Text>
                <Text style={styles.userInforText}> Updated at: 08/12/2022 </Text>
            </View>
            <View style={styles.logoutCont}>
                <TouchableOpacity
                    onPress={handleLogout}
                    style={styles.logoutButton}
                >
                    <Text style={styles.logoutText}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}