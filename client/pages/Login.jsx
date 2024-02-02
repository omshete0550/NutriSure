import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const apiUrl = "https://ce2e-103-184-126-47.ngrok-free.app/login";

    const postData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      console.log("Data received:", data);
      if (data.status === "userFound") {
        await AsyncStorage.setItem("id", data.id);
        navigation.navigate("BasicInfo");
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <View style={styles.Lcontainer}>
      <View>
        <View style={{justifyContent: "center", alignItems: "center", marginBottom: 50}}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 100, height: 100, aspectRatio: "3/2" }}
          />
        </View>
        <Text style={styles.textLarge}>User Login</Text>
        <Text style={styles.textSmall}>Email:</Text>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
        />
      </View>
      <View>
        <Text style={styles.textSmall}>Password:</Text>
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={login}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Sign Up");
        }}
      >
        <Text style={styles.btnText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Lcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignContent: "center",
    padding: 20,
    paddingTop: 80,
  },
  textSmall: {
    fontSize: 16,
    // fontWeight: 600,
  },
  textLarge: {
    fontSize: 32,
    // fontWeight: 600,
    textAlign: "center",
    marginBottom: 100,
  },
  text: {
    fontSize: 16,
    // fontWeight: 600,
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
    marginTop: 10,
  },
  btnN: {
    backgroundColor: "rgb(110, 142, 251)",
    paddingHorizontal: 70,
    paddingVertical: 12,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 40,
  },
  btnText: {
    // fontWeight: 600,
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
