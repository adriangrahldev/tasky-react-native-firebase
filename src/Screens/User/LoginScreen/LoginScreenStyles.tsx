import { StyleSheet } from "react-native";

export const LoginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D24CA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1D24CA',
        width: '100%',
    },
    formView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 20,
        color: '#fff',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        left: 30,
        alignSelf: 'flex-start',
    },
    subTitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    textInput: {
        width: 300,
        height: 40,
        padding: 10,
        backgroundColor: '#f2f2f2',
        marginBottom: 10,
        borderRadius: 5,
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        marginBottom: 20,
    },
    input: {
        width: 300,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    button: {
        width: 300,
        height: 40,
        padding: 10,
        backgroundColor: '#1D24CA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
    },
    link: {
        color: '#C4C4C4',
    },
    noAccountLink: {
        color: '#1D24CA',
        marginBottom: 10,
    }
});