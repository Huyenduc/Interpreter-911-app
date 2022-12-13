import { 
    View,
    Button,
    Link,
    Box,
    Stack, useToast,
    Spinner
 } from 'native-base';
import React, { FC, useState, useCallback } from 'react';
import { 
    Text, 
    TextInput, 
    TouchableOpacity, Image,
    BackHandler
} from 'react-native';
import type { UserLogin } from '@redux/reqres/types';
import { useDispatch, useSelector } from 'react-redux';
import styles from '@scenes/LoginPage/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
// import { userLoginRequest } from '@redux/loginReq/actions';
import { userLoginRequestt } from '@redux/actions';
import { userLoginLoading } from '@redux/loginReq/selectors';
// import { put } from 'redux-saga/effects';
// import ApiClient from '@api';
// import { navigate } from '@routes/navigationUtils';
// import { propsHandlerFullInfo } from '@redux/propsHandler/selectors';
const LoginPage: FC = () => {
    const dispatch = useDispatch()
    const toast = useToast()
    const navigation = useNavigation<GenericNavigationProps>();
    // const {loadingStatus} = useSelector(loadingGetStatus)
    const loading = useSelector(userLoginLoading)
    const [showPass, setShowPass] = React.useState(true);
    const [payloadLogin, setPayloadLogin] = React.useState<UserLogin>({
        // dataLogin: {
            email: '',
            password: ''
        // }
    })
    const onLogin = async () => {
        console.log(payloadLogin);
        dispatch(userLoginRequestt({email: payloadLogin.email, password: payloadLogin.password}))
        
    }
    
    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                return true;
            };
        
            BackHandler.addEventListener('hardwareBackPress', onBackPress);
            
            return () =>
                BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, []),
      );
    return (
    <Box style={styles.container}>
        <Box style={styles.headerInner}>
            <Image style={styles.imgLogo} source={require('../../../assets/logo-resize.png')}/>
        </Box>
        <Box style={styles.centerInner}>
            <Box style={styles.formView} mb={1}>
            <Stack space={4} w="100%" mx="auto">
                <View style={styles.InputCont}>
                    <TextInput style={styles.InputPass} 
                        placeholder='Username or Email'
                        placeholderTextColor='grey'
                        onChangeText={value => setPayloadLogin({...payloadLogin, email: value})}
                    /> 
                </View>
                <View style={styles.InputCont}>
                    <TextInput style={styles.InputPass} 
                        placeholder='Password'
                        secureTextEntry={showPass}
                        placeholderTextColor='grey'
                        onChangeText={value => setPayloadLogin({...payloadLogin, password: value})}
                    /> 
                    <View style={styles.ShowIcon}>
                        <TouchableOpacity
                            onPress={() => setShowPass(!showPass)}
                        >
                        <Icon name={showPass ? "eye" : "eye-off"} size={25} color="#5b5b5b" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Stack>
            </Box>
            <Box
                mt={8}
                style={styles.loginButtonSection}
            >
                <Button 
                    backgroundColor='red.500'
                    rounded='md'
                    h='60px'
                    onPress={onLogin}
                    _text={{color: 'white', fontWeight: 'bold', fontSize: '22', letterSpacing: '2'}}
                >
                    {loading ? <Spinner color='white'/> : 'Sign In'}
                    {/* Sign In */}
                </Button>
                <Box mt={5} style={styles.centerLink} >
                    <Link href="" _text={{fontSize: '15', textDecoration: 'none', color: 'blue.500'}}>
                        Forgot password?
                    </Link>
                </Box>
            </Box>
        </Box>
        <Box style={styles.footerInner}>
            <Text style={styles.createLabel}>You are an Interpreter?</Text>
            <Box style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main', {screen: 'Register'})}
                >
                    <Box style={styles.createButton}>
                        <Text style={styles.buttonLabel}>Signin Now</Text>
                    </Box>
                </TouchableOpacity>
            </Box>
        </Box>
    </Box>
  );
};
export default LoginPage;
