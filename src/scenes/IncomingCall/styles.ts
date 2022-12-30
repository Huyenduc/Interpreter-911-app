import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
    },
    topCont:{
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightGray',
    },
    titleName:{
        fontSize: 18,
        marginBottom: 10
    },
    username:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 10
    },
    phoneNumber:{
        color: 'gray'
    },
    botCont:{
        width: '100%',
        height: '50%',
        paddingBottom: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    buttonCont:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    acceptButton:{
        width: 70,
        height: 70,
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        marginTop: 15
    },
    rejectButton:{
        width: 70,
        height: 70,
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        marginTop: 15
    },
    icon:{
        color: 'white'
    },
    iconReject:{
        color: 'white',
    }
})