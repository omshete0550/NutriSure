import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function ReceipeFinal({ route }) {
  // Extracting data passed through navigation
  const { title, ingredients, directions } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here's your recipe</Text>

      <Text style={styles.texttitle}>{title}</Text>

      <Text style={styles.texting}>Ingredients :</Text>
      {ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.textlong}>{ingredient}</Text>
      ))}

      <Text style={styles.texting}>Directions :</Text>
      {directions.map((direction, index) => (
        <Text key={index} style={styles.textlong}>{direction}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    padding: 20,
    textDecorationLine: "underline",
  },
  texttitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
    padding: 20,
  },
  texting: {
    fontSize: 10,
    fontWeight: 400,
    padding: 20,
  },
  textlong: {
    fontSize: 10,
    fontWeight: 400,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
