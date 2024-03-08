import {
  NavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { Button, Pressable, Text, TextInput, View } from "react-native";
import { RegisterScreenStyles } from "./RegisterScreenStyles";
import { useState } from "react";
import {
  auth,
    createUserWithEmailAndPassword,
  updateProfile,
} from "../../../../firebaseConfig";
import { FirebaseError } from "@firebase/util";

const RegisterScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleRegister = async () => {
    if (!name) {
      setNameError("* Ingresa tu nombre");
      return;
    }
    if (name.length < 3) {
      setNameError("* Ingresa mínimo 3 caracteres");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("* Email no válido");
      return;
    }
    if (password.length < 6) {
      setPasswordError("* Ingresa mínimo 6 caracteres");
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            console.log("User updated");
            navigation.navigate("Home");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error: FirebaseError) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-email") {
          setEmailError("* Email no válido");
        }
        if (errorCode === "auth/email-already-in-use") {
          setEmailError("* Email ya registrado");
        }
      });

    
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={RegisterScreenStyles.container}>
      <View style={RegisterScreenStyles.headerView}>
        <Text style={RegisterScreenStyles.title}>Tasky</Text>
      </View>

      <View style={RegisterScreenStyles.formView}>
        <Text style={RegisterScreenStyles.subTitle}>
          ¡Te damos la bienvenida!
        </Text>
        <Text style={RegisterScreenStyles.subTitleHelp}>Ingresa tus datos</Text>
        <TextInput
          placeholder="Nombre"
          onChangeText={(newText) => {
            setName(newText);
            setNameError("");
          }}
          style={RegisterScreenStyles.textInput}
        />
        <TextInput
          placeholder="Correo Electrónico"
          onChangeText={(newText) => {
            setEmail(newText);
            setEmailError("");
          }}
          style={RegisterScreenStyles.textInput}
        />
        {emailError ? (
          <Text style={RegisterScreenStyles.errorText}>{emailError}</Text>
        ) : null}
        <TextInput
          placeholder="Contraseña"
          onChangeText={(newText) => setPassword(newText)}
          style={RegisterScreenStyles.textInput}
          secureTextEntry
        />
        {passwordError ? (
          <Text style={RegisterScreenStyles.errorText}>{passwordError}</Text>
        ) : null}
        <Pressable onPress={handleRegister}>
          <View style={RegisterScreenStyles.button}>
            <Text style={RegisterScreenStyles.buttonText}>Crear cuenta</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={RegisterScreenStyles.hasAccountLink}>
            ¿Ya eres usuario? Inicia sesión
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterScreen;
