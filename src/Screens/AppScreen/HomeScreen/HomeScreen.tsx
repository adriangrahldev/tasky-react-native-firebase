import { ScrollView, StyleSheet, Text, View } from "react-native";
import { auth } from "../../../../firebaseConfig";
import { HomeScreenStyles } from "./HomeScreenStyles";

export const HomeScreen = () => {

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


  return (
    <View style={HomeScreenStyles.container}>
      <View style={HomeScreenStyles.header}>
        <Text style={HomeScreenStyles.headerUsername}>
          {auth.currentUser?.displayName}
        </Text>
        <Text style={HomeScreenStyles.headerEmail}>
          {auth.currentUser?.email}
        </Text>
      </View>
      <View style={HomeScreenStyles.main}>
        
        <Text style={HomeScreenStyles.mainTitle}>Ultimas actividades</Text>
        <ScrollView>
          {lastActivities.map((activity) => (
            <View key={activity.id} style={HomeScreenStyles.activityBlock}>
              <Text style={HomeScreenStyles.activityBlockTitle}>{activity.title}</Text>
              <Text style={HomeScreenStyles.activityBlockDescription}>{activity.description}</Text>
              <Text style={HomeScreenStyles.activityBlockDate}>{activity.date}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
