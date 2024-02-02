import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function Register({ navigation }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");

  const signup = async () => {
    if (conPass !== password) {
      alert("Check Password");
    } else {
      const apiUrl = "https://ce2e-103-184-126-47.ngrok-free.app/signup";

      const postData = {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
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

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        console.log("Data received:", data);
        if (data.status === "Success") {
          navigation.navigate("Login");
        } else {
          navigation.navigate("Register");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
  };

  return (
    <ScrollView style={styles.Lcontainer}>
      {/* <View style={{justifyContent: "center", alignItems: "center", marginBottom: 50}}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 100, height: 100, aspectRatio: "3/2" }}
          />
        </View> */}
      <Text style={styles.textLarge}>User Sign Up</Text>
      <View>
        <Text style={styles.textSmall}>First Name:</Text>
        <TextInput
          placeholder="Enter your first name"
          value={fname}
          onChangeText={(text) => setFname(text)}
          style={styles.textInput}
        />
      </View>
      <View>
        <Text style={styles.textSmall}>Last Name:</Text>
        <TextInput
          placeholder="Enter your last name"
          value={lname}
          onChangeText={(text) => setLname(text)}
          style={styles.textInput}
        />
      </View>
      <View>
        <Text style={styles.textSmall}>Email:</Text>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
          keyboardType="email-address"
        />
      </View>
      <View>
        <Text style={styles.textSmall}>Phone:</Text>
        <TextInput
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
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

      <View>
        <Text style={styles.textSmall}>Confirm Password:</Text>
        <TextInput
          placeholder="Confirm password"
          value={conPass}
          onChangeText={(text) => setConPass(text)}
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.btn} onPress={signup}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
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
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
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
  btnN: {
    backgroundColor: "rgb(110, 142, 251)",
    paddingHorizontal: 70,
    paddingVertical: 12,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 40,
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
