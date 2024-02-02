// StepOne.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import ProgressBar from "react-native-progress/Bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StepOne = ({ navigation }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [id, setId] = useState("");

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };
  useEffect(() => {
    getid();
  }, []);
  const getid = async () => {
    setId(await AsyncStorage.getItem("id"));
  };
  const next = async () => {
    const apiUrl = `https://ce2e-103-184-126-47.ngrok-free.app/${id}/resignup`;

    const postData = {
      age: age,
      gender: gender,
      city: city,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      navigation.navigate("dietaryRestrictions");
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.progreeBar}>
        <ProgressBar progress={0.167} width={375} />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={styles.titleCont}>
          <Text style={{ fontSize: 45, fontWeight: "bold" }}>Hey User!</Text>
          <Text style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            tempora maxime consequuntur nulla quidem iure?
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="City"
            value={city}
            onChangeText={(text) => setCity(text)}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Age"
            value={age}
            onChangeText={(text) => setAge(text)}
            keyboardType="numeric"
            style={styles.textInput}
          />

          <Text style={styles.text}>Gender</Text>
          <View style={{flexDirection: "row", gap: 40, padding: 20}}>
            <TouchableWithoutFeedback
              onPress={() => handleGenderChange("male")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "black",
                    marginRight: 8,
                    backgroundColor: gender === "male" ? "blue" : "transparent",
                  }}
                />
                <Text style={styles.textMd}>Male</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => handleGenderChange("female")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "black",
                    marginRight: 8,
                    backgroundColor:
                      gender === "female" ? "pink" : "transparent",
                  }}
                />
                <Text style={styles.textMd}>Female</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btn} title="Next" onPress={next}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  progreeBar: {
    marginTop: 50,
    padding: 20,
  },
  titleCont: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    fontWeight: "bold"
  },
  textMd: {
    fontSize: 18,
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
    backgroundColor: "rgb(110, 142, 251)",
    marginTop: 30,
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 5,
  },
  btnText: {
    fontWeight: 600,
    color: "white",
    fontSize: 21,
    textAlign: "center",
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default StepOne;
