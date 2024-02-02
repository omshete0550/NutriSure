import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import RadioButton from "../RadioButton/RadioButton";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Step2({ navigation }) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [timing, setTiming] = useState("");
  // const [certificate, setCertificate] = useState("");
  // const [blueprint, setBlueprint] = useState("");
  const [gstin, setGstin] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [other, setOther] = useState("");
  const options = [
    { label: "Dairy Products", value: "Dairy Products" },
    { label: "Grains", value: "Grains" },
    { label: "Meat", value: "Meat" },
    { label: "SeaFood", value: "SeaFood" },
    { label: "Vegetables", value: "Vegetables" },
    { label: "Fruits", value: "Fruits" },
  ];

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const [blueprint, setblueprint] = useState(null);

  const pickBlueprint = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setblueprint(result.assets[0].uri);
    }
  };

  const [id, setId] = useState("");
  useEffect(() => {
    getid();
  }, []);
  const getid = async () => {
    setId(await AsyncStorage.getItem("shopid"));
  };

  console.log(id);

  const next = async () => {
    let newArray = [];

    if (other) {
      newArray = [...selectedOptions.map((item) => item.value), other];
    } else {
      newArray = [...selectedOptions.map((item) => item.value)];
    }

    const apiUrl = `https://ce2e-103-184-126-47.ngrok-free.app/${id}/reshopsignup`;

    const postData = {
      address: address,
      city: city,
      certification: image,
      blueprint: blueprint,
      timing: timing,
      categories: newArray,
      gstin: gstin,
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
      navigation.navigate("ShopLogin");
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <ScrollView style={{ height: 700, marginTop: 50, padding: 10 }}>
      <View style={{flex: 1, justifyContent: "center", padding: 10}}>
        <Text style={{fontSize: 32, fontWeight: "bold", textAlign: "center", marginBottom: 20}}>Step 2</Text>
        <View>
          <Text style={styles.textSmall}>Address:</Text>
          <TextInput
            placeholder="Enter your address"
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.textSmall}>City:</Text>
          <TextInput
            placeholder="Enter your City"
            value={city}
            onChangeText={(text) => setCity(text)}
            style={styles.textInput}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.textSmall}>Certificate:</Text>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.textSmall}>Blueprint:</Text>
          <Button
            title="Pick an image from camera roll"
            onPress={pickBlueprint}
          />
          {blueprint && (
            <Image
              source={{ uri: blueprint }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>
        <View>
          <Text style={styles.textSmall}>Timing:</Text>
          <TextInput
            placeholder="Enter the time"
            value={timing}
            onChangeText={(text) => setTiming(text)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.radiocontainer}>
          <Text style={styles.textSmall}>Categories:</Text>
          <RadioButton
            options={options}
            selectedOptions={selectedOptions}
            onSelect={(options) => setSelectedOptions(options)} // Update to pass the array
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
        </View>
        <View>
          <Text style={styles.textSmall}>GSTIN:</Text>
          <TextInput
            placeholder="Enter gstin number"
            value={gstin}
            onChangeText={(text) => setGstin(text)}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={next}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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
    marginBottom: 10
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
    borderWidth: 0.5,
    borderColor: "#d3d3d3",
    paddingVertical: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    marginVertical: 10,
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
    width: 250,
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
