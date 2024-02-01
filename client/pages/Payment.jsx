import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Payment() {
  const navigation = useNavigation();
  const showToast = (message) => {
    // Use Alert.alert for iOS
    Alert.alert("", message);
    navigation.navigate("HomePage");
  };

  const onPress = () => {
    showToast("Payment Successful!");
  };

  return (
    <View style={styles.cont}>
      <Text style={styles.text}>Payment</Text>
      <Text style={styles.textSmall}>Your Total Pay: ₹580</Text>
      <View style={styles.innerCont}>
        <TextInput
          placeholder="Flat, House no., Building, Company, Apartment"
          // value={name}
          // onChangeText={(text) => setName(text)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Area, Street, Sector, Village"
          // value={age}
          // onChangeText={(text) => setAge(text)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Landmark"
          // value={gender}
          // onChangeText={(text) => setGender(text)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Town/City"
          // value={gender}
          // onChangeText={(text) => setGender(text)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="State"
          // value={gender}
          // onChangeText={(text) => setGender(text)}
          style={styles.textInput}
        />
        <View>
          <TouchableOpacity style={styles.btn} title="Next" onPress={onPress}>
            <Text style={styles.btnText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    padding: 20,
    marginTop: 50,
  },
  innerCont: {
    marginTop: 30,
  },
  textSmall: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 50,
  },
  text: {
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
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
    fontSize: 21,
    textAlign: "center",
  },
});
