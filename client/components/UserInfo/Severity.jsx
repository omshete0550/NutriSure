import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ProgressBar from "react-native-progress/Bar";
import RadioButton from "../RadioButton/RadioButton";

const Severity = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [other, setOther] = useState("");
  const [favFood, setFavFood] = useState("");
  const options = [
    { label: "Mild", value: "Mild" },
    { label: "Low", value: "Low" },
    { label: "High", value: "High" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.progreeBar}>
        <ProgressBar progress={1} width={325} />
      </View>
      <View style={{ flex: 1, marginTop: 10, alignItems: "center" }}>
        <View>
          <Text style={styles.text}>Severity</Text>

          <View style={styles.radiocontainer}>
            <RadioButton
              options={options}
              selectedOptions={selectedOptions}
              onSelect={(options) => setSelectedOptions(options)} // Update to pass the array
            />

            <View style={{marginTop: 20}} >
              <Text style={styles.textSmall}>Other:</Text>
              <TextInput
                placeholder="Please specify...."
                value={other}
                onChangeText={(text) => setOther(text)}
                style={styles.textInput}
              />
            </View>
            <View>
              <View style={{marginTop: 50}}>
                <Text style={styles.textSmall}>Favourite Food:</Text>
                <TextInput
                  placeholder="Enter your favorite food"
                  value={favFood}
                  onChangeText={(text) => setFavFood(text)}
                  style={styles.textInput}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Allergies")}
              >
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.btnText}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  radiocontainer: {
    flex: 1,
  },
  textSmall: {
    fontSize: 16,
    fontWeight: 600,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    padding: 20,
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
    paddingHorizontal: 50,
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 10,
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

export default Severity;
