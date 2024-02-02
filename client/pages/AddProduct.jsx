import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function AddProduct() {
  const [name, setName] = useState("");
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

  const showToast = (message) => {
    // Use Alert.alert for iOS
    Alert.alert("", message);
  };

  const onPress = () => {
    showToast("Product Added!");
    setImage(null)
    setName("")
  };

  return (
    <View style={styles.Lcontainer}>
      <View>
        <Text style={styles.textLarge}>Add Product</Text>
        <Text style={styles.textSmall}>Category:</Text>
        <TextInput
          placeholder="Enter the category"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.textInput}
        />
        <View>
          <Text style={styles.textSmall}>Bar Code:</Text>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 300, height: 300 }}
            />
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Lcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    padding: 20,
    paddingTop: 80,
  },
  textSmall: {
    fontSize: 16,
    fontWeight: 600,
  },
  textLarge: {
    fontSize: 32,
    fontWeight: 600,
    marginBottom: 40,
    textAlign: "center",
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
    paddingVertical: 15,
    paddingHorizontal: 15,
    fontSize: 18,
    marginTop: 20,
    width: 300,
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
    marginTop: 50,
  },
  btnN: {
    backgroundColor: "#0484ac",
    paddingHorizontal: 70,
    paddingVertical: 12,
    borderRadius: 5,
  },
  btnText: {
    fontWeight: 600,
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
