import { 
    View,
    Button,
    Link,
    Box,
    Stack, useToast,
    Spinner, HStack, Heading
 } from 'native-base';
import React, { FC, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    Text, 
    TextInput, 
    TouchableOpacity, Image,
    BackHandler
} from 'react-native';
import i18n from '@i18n';
import type { UserLogin } from '@redux/reqres/types';
import { useDispatch, useSelector } from 'react-redux';
import styles from '@scenes/LoginPage/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import { messageHandlerSet } from '@redux/messageHandler/actions';
import { userLoginSuccess } from '@redux/loginReq/actions';
const LoginPage: FC = () => {
    const dispatch = useDispatch()
    const toast = useToast()
    const navigation = useNavigation<GenericNavigationProps>();
    // const {loadingStatus} = useSelector(loadingGetStatus)
    // const loading = useSelector(userLoginLoading)
    const [showPass, setShowPass] = React.useState(true);
    const [payloadLogin, setPayloadLogin] = React.useState<UserLogin>({
        // dataLogin: {
            email: '',
            password: ''
        // }
    })
    
    const [loading, setLoading] = useState(false)
    const handleLogin = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3001/auth/login',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: payloadLogin.email,
                    password: payloadLogin.password
                })
            });
            const json = await response.json();
            if(response.status === 201){
                dispatch(messageHandlerSet({ message: i18n.t('Login Successful'), status: 'success' }))
                setTimeout(() => {
                    navigation.navigate('Main', {screen: 'LanguagePage'});
                }, 1200)
                dispatch(userLoginSuccess(json))
            } else{
                dispatch(messageHandlerSet({ message: i18n.t('Wrong email or password'), status: 'error' }))
                
            }
            console.log('json', json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
     }
    const onLogin = async () => {
        console.log(payloadLogin);
        setLoading(true)
        // dispatch(userLoginRequest({email: payloadLogin.email, password: payloadLogin.password}))
        await handleLogin()
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
    // const getToken = async () => {
    //     try{
    //         const token = await AsyncStorage.getItem('@access-token')
    //         if(token){
    //             navigation.navigate('Main', {screen: 'LanguagePage'})
    //         }
    //     } catch (err) {
    //         console.log('get token error')
    //     }
    // }
    // const token = AsyncStorage.getItem('@access-token')
    // useEffect(() =>{
    //     if(token !== undefined){
    //         navigation.navigate('Main', {screen: 'LanguagePage'})
    //     }
    // },[token])
    useEffect(() =>{
        console.log('loading: ', loading);
        // getToken()
    },[loading])
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
                    {loading ? 
                        <HStack space={2} justifyContent="center">
                            <Spinner color="white"/>
                            <Heading color="white" fontSize="md">
                                Signing In
                            </Heading>
                        </HStack>
                        : 
                        'Sign In'
                    }
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
