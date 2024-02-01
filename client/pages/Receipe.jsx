import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavBarNew from "../components/UserInfo/NavBarNew";
const Receipe = () => {
  const [ingredients, setIngredients] = useState(["", "", "", "", ""]);
  const navigation = useNavigation();
  const [loading,setLoading]=useState(0)

  const submit = async () => {
    setLoading(1)
    const combinedString = ingredients.filter(Boolean).join(", ");

    const postData = {
      ingredients: combinedString,
    };
    try {
      // Replace with the correct API endpoint for your Flask backend
      const apiUrl =
        "https://cb82-203-212-25-167.ngrok-free.app/generate_recipe";

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

      // Store the id in AsyncStorage (assuming it's part of the response)
      // await AsyncStorage.setItem("id", data.id.toString());

      // Navigate to 'ReceipeFinal' with the generated recipe data
      setIngredients(["", "", "", "", ""])
      setLoading(0)
      navigation.navigate("ReceipeFinal", {
        title: data.title,
        ingredients: data.ingredients,
        directions: data.directions,
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Enter the Ingredients</Text>

        {ingredients.map((ingredient, index) => (
          <View key={index}>
            <Text style={styles.textSmall}>{`Ingredient ${index + 1}:`}</Text>
            <TextInput
              placeholder={`Enter Ingredient ${index + 1}`}
              value={ingredient}
              onChangeText={(text) => {
                const updatedIngredients = [...ingredients];
                updatedIngredients[index] = text;
                setIngredients(updatedIngredients);
              }}
              style={styles.textInput}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.btn} onPress={submit}>
          <Text style={styles.btnText}>{loading?"Loading..":"Submit"}</Text>
        </TouchableOpacity>
      </View>
      <NavBarNew />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  textSmall: {
    fontSize: 16,
    fontWeight: 600,
  },
  text: {
    marginTop: 50,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
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
    paddingHorizontal: 50,
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
  },
  btnText: {
    fontWeight: 600,
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Receipe;
