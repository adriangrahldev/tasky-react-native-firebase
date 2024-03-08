import {
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import { LoginScreenStyles } from './LoginScreenStyles';
import { useState } from "react";

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {

  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [apsswordError, setPasswordError] = useState("");

  const handleLogin = ()=> {
    if (!validateEmail(email)) {
      setEmailError("* Email no válido");
      return;
    }
    if( password.length < 6){
      setPasswordError("* Ingresa mínimo 6 caracteres");
      return;
    }
    navigation.navigate("Home");
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
        {apsswordError ? <Text style={LoginScreenStyles.errorText}>{apsswordError}</Text> : null}
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
