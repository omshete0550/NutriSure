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
import * as ImagePicker from 'expo-image-picker'

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
    { label: "Fruits", value: "Fruits" }
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
      setImage(result.assets[0].uri);
    }
  };

  const id = localStorage.getItem("shopid")

  const next = async () => {

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

    const apiUrl = `http://localhost:3001/${id}/reshopsignup`;

    const postData = {
      "address": address,
      "city": city,
      "certification": image,
      "blueprint": blueprint,
      "timing": timing,
      "categories": newArray,
      "gstin": gstin
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
      navigation.navigate("ShopAdminLogin")

    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  return (
    <ScrollView style={{ height: 500 }}>
      <View >
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
        {/* <View>
          <Text style={styles.textSmall}>Certificate:</Text>
          <TextInput
          placeholder="Enter your Certificate"
          value={certificate}
          onChangeText={(text) => setCertificate(text)}
          style={styles.textInput}
          />
        </View> */}
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.textSmall}>Certificate:</Text>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
        {/* <View>
          <Text style={styles.textSmall}>Blueprint:</Text>
          <TextInput
            placeholder="Enter your Blueprint"
            style={styles.textInput}
            value={blueprint}
            onChangeText={(text) => setBlueprint(text)}
          />
        </View> */}
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.textSmall}>Blueprint:</Text>
          <Button title="Pick an image from camera roll" onPress={pickBlueprint} />
          {blueprint && <Image source={{ uri: blueprint }} style={{ width: 200, height: 200 }} />}
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
        <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={next}
        >
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
    padding: 20,
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
