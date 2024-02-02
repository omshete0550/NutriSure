import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ScanResults = () => {
  // Mock data for demonstration
  const heatValue = 80; // Example heat value
  // console.log(item.imageUrl);
  const navigation = useNavigation();
  const alternativeRecommendations = [
    {
      name: "Almond Milk",
      imageUrl:
        "https://media.bluediamond.com/uploads/2022/11/03104320/almond-breeze-almondmilk-unsweetened-original.png",
    },
    {
      name: "Soy Milk",
      imageUrl:
        "https://soy.com.au/wp-content/uploads/2017/08/UHT-Soy-Milk-Original-3D.png",
    },
    {
      name: "Oat Milk",
      imageUrl:
        "http://t0.gstatic.com/images?q=tbn:ANd9GcTHcSdj9ghZO4UEd4OLnRqpusM5AVn17XGZkI6heSnluLl52OoTHAUOitYbt8gAhPbfNvF0KA",
    },
    // Add more alternative products as needed
  ];
  const navigateToRecipes = () => {
    navigation.navigate("Receipe");
  };
  const product = {
    name: "Amul Milk",
    ingredients: "Milk (100%)",
    nutritionalInfo: {
      calories: 150,
      carbohydrates: 12,
      proteins: 8,
      fats: 10,
      vitamins: ["Vitamin D", "Calcium"],
      minerals: ["Potassium", "Phosphorus"],
    },
    certifications: ["FSSAI", "ISO"],
    reviews: [
      { user: "User1", rating: 4, comment: "Great milk, very creamy!" },
      {
        user: "User2",
        rating: 3,
        comment: "Good quality but a bit expensive.",
      },
    ],
  };

  return (
    <View style={{ height: 1000, padding: 20, marginTop: 50 }}>
      <Text style={styles.heading}>Scan Results for {product.name}</Text>
      <ScrollView style={{ marginBottom: 80 }}>
        <View style={styles.box}>
          <Text style={styles.sectionHeading}>Heatmeter</Text>
          {/* Heatmeter component indicating safety */}
          <View style={styles.heatmeter}>
            <View style={[styles.heatbar, { width: `${heatValue}%` }]}></View>
          </View>
        </View>

        <View style={styles.box}>
          <Text style={styles.sectionHeading}>Ingredient Details</Text>
          <Text style={styles.text}>{product.ingredients}</Text>
          {/* Detailed breakdown of ingredients */}
        </View>
        <View style={styles.box}>
          <Text style={styles.sectionHeading}>Nutritional Information</Text>
          <Text style={styles.text}>
            Calories: {product.nutritionalInfo.calories}
          </Text>
          <Text style={styles.text}>
            Carbohydrates: {product.nutritionalInfo.carbohydrates}g
          </Text>
          <Text style={styles.text}>
            Proteins: {product.nutritionalInfo.proteins}g
          </Text>
          <Text style={styles.text}>Fats: {product.nutritionalInfo.fats}g</Text>
          <Text style={styles.text}>
            Vitamins: {product.nutritionalInfo.vitamins.join(", ")}
          </Text>
          <Text style={styles.text}>
            Minerals: {product.nutritionalInfo.minerals.join(", ")}
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.sectionHeading}>Product Reviews and Ratings</Text>
          {product.reviews.map((review, index) => (
            <View key={index} style={styles.commentBox}>
              <Text style={styles.review}>
                <Text style={styles.bold}>{review.user}</Text> - Rating:{" "}
                {review.rating}
              </Text>
              <Text style={styles.comment}>{review.comment}</Text>
            </View>
          ))}
        </View>
        <View style={styles.box}>
          <Text style={styles.sectionHeading}>
            Alternative Recommendations for Lactose Intolerant
          </Text>

          {alternativeRecommendations.map((item, index) => (
            <View key={index} style={styles.alternativeBox}>
              <View style={{ display: "flex", flexDirection: "row", gap: 15 }}>
                <Text style={styles.text}>{item.name}</Text>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
            </View>
          ))}
        </View>
        <View style={styles.box}>
          <Text style={styles.sectionHeading}>Suggested Uses and Recipes</Text>
          <TouchableOpacity onPress={navigateToRecipes} style={styles.btn}>
            <Text style={styles.linkText}>View Recipes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "rgb(110, 142, 251)",
    paddingHorizontal: 70,
    paddingVertical: 12,
    borderRadius: 5,
    marginRight: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  alternativeBox: {
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  box: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  heatmeter: {
    width: "100%",
    height: 20,
    backgroundColor: "#f4f4f4",
    borderRadius: 5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  heatbar: {
    height: "100%",
    backgroundColor: "red", // Default color
    borderRadius: 5,
  },
  review: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  commentBox: {
    marginBottom: 10,
  },
  comment: {
    fontStyle: "italic",
  },
  bold: {
    fontWeight: "bold",
  },
});

export default ScanResults;
