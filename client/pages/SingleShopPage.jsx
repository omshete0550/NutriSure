import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SingleShopPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row", gap: 20 }}>
        <Ionicons
          name="menu"
          size={30}
          onPress={() => navigation.navigate("Step2")}
        />
        <Text style={styles.text}>Big Bazaar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    padding: 20,
  },
  textSmall: {
    fontSize: 16,
    fontWeight: 600,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 35,
    fontWeight: 600,
  },
  progreeBar: {
    marginTop: 20,
    padding: 20,
  },
  titleCont: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: "#d3d3d3",
    paddingVertical: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    margin: 10,
    width: 375,
    borderRadius: 10,
    shadowOffset: { width: -3, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btn: {
    backgroundColor: "#0484ac",
    marginTop: 30,
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 5,
  },
  btnText: {
    fontWeight: 600,
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  radioGroup: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  radioText: {
    marginLeft: 8,
  },
  radioDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#0484ac",
    marginLeft: 8,
  },
});
