import { StyleSheet } from "react-native";

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    paddingVertical: 30,
    width: "110%",
    alignSelf: "center",
  },
  headerUsername: {
    color: "#1D24CA",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerEmail: {
    color: "#c4c7c4",
    fontSize: 16,
  },
  main: {
    zIndex: 10,
    padding: 20,
    backgroundColor: "#1D24CA",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mainTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  activityBlock: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,

  },
  activityBlockTitle: {
    color: "#1D24CA",
    fontSize: 20,
    fontWeight: "bold",
  },
  activityBlockDescription: {
    color: "#1D24CA",
    fontSize: 16,
  },
  activityBlockDate: {
    color: "#1D24CA",
    fontSize: 14,
  },
});
