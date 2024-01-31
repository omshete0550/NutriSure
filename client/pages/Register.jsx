import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
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
      alert("Check Password")
    }
    else {
      const apiUrl = 'http://localhost:3001/signup';

      const postData = {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        password: password
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
        const data = await response.json();

        console.log('Data received:', data);
        if (data.status === "Success") {
          navigation.navigate('Login');
        }
        else {
          navigation.navigate('Register');
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

  };


  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{fontSize:"1.25rem",fontWeight:"600"}}>User Sign Up</Text>
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
      <TouchableOpacity
        style={styles.btn}
        onPress={signup}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
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
