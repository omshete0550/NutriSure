import React, { useEffect, useState } from "react";
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const dietaryRestrictions = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [other, setOther] = useState("");
  const options = [
    { label: "Lactose intolerance", value: "Lactose intolerance" },
    { label: "Gluten intolerance", value: "Gluten intolerance" },
    { label: "Nut allergies", value: "Nut allergies" },
    { label: "Shellfish allergies", value: "Shellfish allergies" },
  ];
  
  const [id, setId] = useState("");
  useEffect(()=>{
    getid();
  },[])
  const getid=async()=>{
    setId(await AsyncStorage.getItem("id"))
  }

  const next = async () => {
    const id = await AsyncStorage.getItem("id");
    let newArray = []

    if (other) {
      newArray = [
        ...selectedOptions.map((item) => item.value),
        other,
      ];
    }
    else {
      newArray = [
        ...selectedOptions.map((item) => item.value)
      ];
    }

    const apiUrl = `https://ce2e-103-184-126-47.ngrok-free.app/${id}/resignup`;

    const postData = {
      diet_resctriction: newArray,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      navigation.navigate("dietaryPreferences")

    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.progreeBar}>
        <ProgressBar progress={0.334} width={375} />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.text}>
          Do you have any dietary restrictions or allergies?
        </Text>

        <View style={styles.radiocontainer}>
          <RadioButton
            options={options}
            selectedOptions={selectedOptions}
            onSelect={(options) => setSelectedOptions(options)}
          />
          <View>
            <Text style={styles.textSmall}>Other:</Text>
            <TextInput
              placeholder="Please specify...."
              value={other}
              onChangeText={(text) => setOther(text)}
              style={styles.textInput}
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={next}
            >
              <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
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
    padding: 20,
  },
  textSmall: {
    fontSize: 18,
    marginTop: 30,
    fontWeight: 600,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 50,
    paddingHorizontal: 20,
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
  textInput: {
    borderWidth: 0.5,
    borderColor: "#d3d3d3",
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    marginTop: 20,
    width: 375,
    borderRadius: 10,
    shadowOffset: { width: -3, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: "rgb(110, 142, 251)",
    paddingHorizontal: 70,
    paddingVertical: 12,
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

export default dietaryRestrictions;
