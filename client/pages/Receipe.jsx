import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Receipe = () => {
  const [ingredients, setIngredients] = useState(["", "", "", "", ""]);
  const navigation = useNavigation();

  const submit = async () => {
    const combinedString = ingredients.filter(Boolean).join(', ');

    const postData = {
      ingredients: combinedString,
    };
    try {
      // Replace with the correct API endpoint for your Flask backend
      const apiUrl = 'https://d356-203-212-25-167.ngrok-free.app/generate_recipe';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
      navigation.navigate('ReceipeFinal', {
        title: data.title,
        ingredients: data.ingredients,
        directions: data.directions
      });
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
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
        <Text style={styles.btnText} >Submit</Text>
      </TouchableOpacity>
    </View>
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
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    padding: 20,
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
