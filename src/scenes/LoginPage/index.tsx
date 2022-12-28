import { 
    View,
    Button,
    Link,
    Box,
    Stack, useToast,
 } from 'native-base';
import React, { FC, useState } from 'react';
import { 
    Text, 
    TextInput, 
    TouchableOpacity, Image
} from 'react-native';
import type { UserLogin } from '@redux/reqres/types';
import { useDispatch, useSelector } from 'react-redux';
import styles from '@scenes/LoginPage/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import { testHandlerPayload } from '@redux/testHandler/types';
const LoginPage: FC = () => {
    const dispatch = useDispatch()
    const toast = useToast()
    const navigation = useNavigation<GenericNavigationProps>();
   
    const [showPass, setShowPass] = React.useState(true);
    const [payloadLogin, setPayloadLogin] = React.useState<UserLogin>({
        // dataLogin: {
            email: '',
            password: ''
        // }
    })
    const [payloadData, setPayloadData] = useState<testHandlerPayload>({
        payloads: ''
    })
    const handleShowPass = () => setShowPass(!showPass);
    const onLogin = async () => {
        console.log(payloadLogin);
        // dispatch(loginUserRequest({email: username, password: passWord}))
        // ApiClient.post('http://10.0.2.2:3001/auth/login', payloadLogin)
        // .then(res => {
        //     console.log(res.data)
        //     toast.show({
        //         placement: 'top',
        //         render: () => {
        //             return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={1}>
        //                         <Text>Sign-In Successful</Text>
        //                 </Box>;
        //             }
        //         });
        //         navigation.navigate('Main', {screen: 'MainPage'})
        // })
        // .catch(err =>  {
        //     console.log(err)
        //     toast.show({
        //         placement: 'top',
        //         render: () => {
        //             return <Box bg="red.500" color='white' px="2" py="1" rounded="sm" mb={1}>
        //                         <Text>Sign-In Error</Text>
        //                 </Box>;
        //             }
        //         });
        // })
        // dispatch(testHandlerSet(payloadData))
        navigation.navigate('Main', {screen: 'HomePreCall'});
    }
    // const {props} = useSelector(propsHandlerFullInfo)
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
                    // onPress={() => {
                    //     socket.on("connect", () => {
                    //         console.log(socket.id); // x8WIv7-mJelg7on_ALbx
                    //       });
                    // }}
                    _text={{color: 'white', fontWeight: 'bold', fontSize: '22', letterSpacing: '2'}}
                >
                    Sign In
                </Button>
                <Box mt={5} style={styles.centerLink} >
                    <Link href="" _text={{fontSize: '15', textDecoration: 'none', color: 'blue.500'}}>
                        Forgot password?
                    </Link>
                </Box>
            </Box>
        </Box>
        <Box style={styles.footerInner}>
            <Text style={styles.createLabel}>Don't have an account?</Text>
            <Box style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Main', {screen: 'Register'})}
                >
                    <Box style={styles.createButton}>
                        <Text style={styles.buttonLabel}>Create New</Text>
                    </Box>
                </TouchableOpacity>
            </Box>
        </Box>
    </Box>
  );
};
export default LoginPage;
