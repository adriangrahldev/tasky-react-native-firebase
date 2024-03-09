import {
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import { LoginScreenStyles } from './LoginScreenStyles';
import { useState } from "react";
import { auth, signInWithEmailAndPassword } from '../../../../firebaseConfig';
import { FirebaseError } from "@firebase/util";

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {

  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async ()=> {
    if (!validateEmail(email)) {
      setEmailError("* Email no válido");
      return;
    }
    if( password.length < 6){
      setPasswordError("* Ingresa mínimo 6 caracteres");
      return;
    }

    await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigation.navigate("App");
    }).catch((error: FirebaseError) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode === 'auth/invalid-credential'){
        setEmailError("* Email no válido");
      }
      if(errorCode === 'auth/user-not-found'){
        setEmailError("* Email no registrado");
      }
    });
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  return (
    <View style={LoginScreenStyles.container}>
      <View style={LoginScreenStyles.headerView} >
        <Text style={LoginScreenStyles.title}>Tasky</Text>
      </View>
      
      <View style={LoginScreenStyles.formView}>
        <Text style={LoginScreenStyles.subTitle}>Inicia Sesión</Text>
        <TextInput
          placeholder="Correo Electrónico"
          onChangeText={newText => {
            setEmail(newText);
            setEmailError("");
          }}
          style={LoginScreenStyles.textInput}
        />
        {emailError ? <Text style={LoginScreenStyles.errorText}>{emailError}</Text> : null}
        <TextInput
          placeholder="Contraseña"
          onChangeText={newText => setPassword(newText)}
          style={LoginScreenStyles.textInput}
          secureTextEntry
        />
        {passwordError ? <Text style={LoginScreenStyles.errorText}>{passwordError}</Text> : null}
        <Pressable onPress={handleLogin}>
          <View style={LoginScreenStyles.button}>
            <Text style={LoginScreenStyles.buttonText}>Iniciar Sesión</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={LoginScreenStyles.noAccountLink}>¿No tienes cuenta? Regístrate</Text>
        </Pressable>
        <Pressable>
          <Text style={LoginScreenStyles.link}>¿Olvidaste tu contraseña?</Text>
        </Pressable>
       
      </View>
    </View>
  );
};

export default LoginScreen;
