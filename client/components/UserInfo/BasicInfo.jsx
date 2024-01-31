// StepOne.js
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ProgressBar from "react-native-progress/Bar";

const StepOne = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  console.log(name, age, gender)
  return (
    <View style={styles.container}>
      <View style={styles.progreeBar}>
        <ProgressBar progress={0.167} width={325} />
      </View>
      <View style={{ flex: 1, marginTop: 10, alignItems: "center" }}>
        <View style={styles.titleCont}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Hey user!</Text>
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            tempora maxime consequuntur nulla quidem iure?
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Age"
            value={age}
            onChangeText={(text) => setAge(text)}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Gender"
            value={gender}
            onChangeText={(text) => setGender(text)}
            style={styles.textInput}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            title="Next"
            onPress={() => navigation.navigate("dietaryRestrictions")}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    borderWidth: 1,
    borderColor: "#3f3f3f",
    padding: 10,
    margin: 10,
    width: 300,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#0484ac",
    marginTop: 30,
    paddingHorizontal: 50,
    paddingVertical: 8,
    borderRadius: 5,
  },
  btnText: {
    fontWeight: 600,
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default StepOne;
