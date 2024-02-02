import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

export default function Step1({}) {
  const navigation = useNavigation();
  const [shopname, setShopname] = useState("");
  const [ownername, setOwnername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [phone, setPhone] = useState("");

  const next = async () => {
    if (confPassword !== password) {
      alert("Check Password");
    } else {
      const apiUrl = "https://ce2e-103-184-126-47.ngrok-free.app/shopsignup";

      const postData = {
        shopname: shopname,
        ownername: ownername,
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
          await AsyncStorage.setItem("shopid", data.inserted_id);
          navigation.navigate("Step2");
        } else {
          navigation.navigate("Step1");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
  };

  return (
    <ScrollView style={{marginTop: 100}}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 20 }}>
          ShopKeeper Sign Up
        </Text>
        <View>
          <Text style={styles.textSmall}>Shop Name:</Text>
          <TextInput
            placeholder="Enter your shop name"
            value={shopname}
            onChangeText={(text) => setShopname(text)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.textSmall}>Owner Name:</Text>
          <TextInput
            placeholder="Enter your owner name"
            value={ownername}
            onChangeText={(text) => setOwnername(text)}
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
          />
        </View>
        <View>
          <Text style={styles.textSmall}>Phone:</Text>
          <TextInput
            placeholder="Phone Number"
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
            value={confPassword}
            onChangeText={(text) => setConfPassword(text)}
            style={styles.textInput}
            secureTextEntry
          />
        </View>

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
    marginTop: 100
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
    backgroundColor: "rgb(110, 142, 251)",
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
    backgroundColor: "rgb(110, 142, 251)",
    marginLeft: 8,
  },
});
