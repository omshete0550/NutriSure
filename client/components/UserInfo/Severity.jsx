import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import ProgressBar from "react-native-progress/Bar";
import RadioButton from "../RadioButton/RadioButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Severity = ({ navigation }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [other, setOther] = useState("");
  const [favFood, setFavFood] = useState("");
  const options = [
    { label: "Mild", value: "Mild" },
    { label: "Low", value: "Low" },
    { label: "High", value: "High" },
  ];

  const [id, setId] = useState("");
  useEffect(()=>{
    getid();
  },[])
  const getid=async()=>{
    setId(await AsyncStorage.getItem("id"))
  }

  const next = async () => {
    const newArray = selectedOptions[0].value;

    const apiUrl = `https://ce2e-103-184-126-47.ngrok-free.app/${id}/resignup`;

    const postData = {
      severity: newArray,
      fav_cuisine: favFood,
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
      navigation.navigate("HomePage");
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.progreeBar}>
        <ProgressBar progress={1} width={375} />
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

            <View style={{ marginTop: 20 }}>
              <Text style={styles.textSmall}>Other:</Text>
              <TextInput
                placeholder="Please specify...."
                value={other}
                onChangeText={(text) => setOther(text)}
                style={styles.textInput}
              />
            </View>
            <View>
              <View style={{ marginTop: 50 }}>
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
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.btnText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={next}>
                <Text style={styles.btnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    backgroundColor: "rgb(110, 142, 251)",
    marginLeft: 8,
  },
});

export default Severity;
