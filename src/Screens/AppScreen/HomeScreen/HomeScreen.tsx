import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { auth } from "../../../../firebaseConfig";
import { HomeScreenStyles } from "./HomeScreenStyles";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreen = () => {
  const [userInfo, setUserInfo] = useState({});

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const checkUser = async () => {
    const user = await getLocalUser();
    setUserInfo(await user);
  };

  const lastActivities = [
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripcion de la tarea 1",
      date: "2021-06-30",
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripcion de la tarea 2",
      date: "2021-06-30",
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "Descripcion de la tarea 3",
      date: "2021-06-30",
    },
    {
      id: 4,
      title: "Tarea 4",
      description: "Descripcion de la tarea 4",
      date: "2021-06-30",
    },
  ];

  useEffect(() => {
    checkUser();
  }, []);

  return (
    (userInfo.user && (
      <View style={HomeScreenStyles.container}>
        <View style={HomeScreenStyles.header}>
          <Image
            source={{ uri: userInfo.user.picture }}
            alt="alt"
            width={100}
            height={100}
          />
          <Text style={HomeScreenStyles.headerUsername}>
            {userInfo.type === "google"
              ? userInfo.user.given_name + userInfo.user.family_name
              : ""}
          </Text>
          <Text style={HomeScreenStyles.headerEmail}>
            {userInfo.user.email}
          </Text>
          <Pressable>
            <Text style={{ color: "#FFF" }}>Logout</Text>
          </Pressable>
        </View>
      </View>
    )) || <></>
  );
};

export default HomeScreen;
