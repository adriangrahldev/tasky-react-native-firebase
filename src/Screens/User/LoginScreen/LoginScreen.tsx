import { NavigationProp } from "@react-navigation/native";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FirebaseError } from "@firebase/util";
import { LoginScreenStyles } from "./LoginScreenStyles";
import { signIn } from "../../../../auth";

import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [userInfo, setUserInfo] = useState({});

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "975130523286-9ppffqfc3l45feq065ng02pop93p2nab.apps.googleusercontent.com",
    webClientId:
      "975130523286-ifm4neiv061auikna08p5fkcaqvl5d6c.apps.googleusercontent.com",
      
  });

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setEmailError("* Email no válido");
      return;
    }
    if (password.length < 6) {
      setPasswordError("* Ingresa mínimo 6 caracteres");
      return;
    }

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("App");
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-credential") {
          setEmailError("* Email no válido");
        }
        if (errorCode === "auth/user-not-found") {
          setEmailError("* Email no registrado");
        }
      });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getUserInfo = async (token: any) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://www.googleapis.com/userinfo/v2/me`);
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) 
        console.log(xhr.responseText);
        const user = JSON.parse(xhr.responseText);
        AsyncStorage.setItem("user", JSON.stringify(user));
        setUserInfo({user: user, type: "google"});
      };
      xhr.send();
  };

  React.useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const handleSignInWithGoogle = async () => {
    console.log("Sign in with google");
    
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        getUserInfo(response.authentication?.accessToken);
        navigation.navigate("App");
      }
    } else {
      setUserInfo({type: "google", user: user});
      navigation.navigate("App");
    }
  };

  return (
    <View style={LoginScreenStyles.container}>
      <View style={LoginScreenStyles.headerView}>
        <Text style={LoginScreenStyles.title}>Tasky</Text>
      </View>

      <View style={LoginScreenStyles.contentView}>
        <View style={LoginScreenStyles.formView}>
          <Text style={LoginScreenStyles.subTitle}>Inicia Sesión</Text>
          <TextInput
            placeholder="Correo Electrónico"
            onChangeText={(newText) => {
              setEmail(newText);
              setEmailError("");
            }}
            style={LoginScreenStyles.textInput}
          />
          {emailError ? (
            <Text style={LoginScreenStyles.errorText}>{emailError}</Text>
          ) : null}
          <TextInput
            placeholder="Contraseña"
            onChangeText={(newText) => setPassword(newText)}
            style={LoginScreenStyles.textInput}
            secureTextEntry
          />
          {passwordError ? (
            <Text style={LoginScreenStyles.errorText}>{passwordError}</Text>
          ) : null}
          <Pressable onPress={handleLogin}>
            <View style={LoginScreenStyles.button}>
              <Text style={LoginScreenStyles.buttonText}>Iniciar Sesión</Text>
            </View>
          </Pressable>
        </View>
        <View style={LoginScreenStyles.bottomView}>
          <Text style={LoginScreenStyles.orText}>o</Text>
          <Pressable
            style={LoginScreenStyles.googleButton}
            onPress={() => {
              promptAsync();
            }}
          >
            <Image
              style={LoginScreenStyles.googleButtonImage}
              source={require("./Google_logo.png")}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={LoginScreenStyles.noAccountLink}>
              ¿No tienes cuenta? Regístrate
            </Text>
          </Pressable>
          <Pressable>
            <Text style={LoginScreenStyles.link}>
              ¿Olvidaste tu contraseña?
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
