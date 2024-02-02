import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const foods = [
  { title: "Amul Milk", image: require("../../assets/amul.jpg") },
  { title: "Cheese", image: require("../../assets/cheese.jpg") },
  { title: "Ice Cream", image: require("../../assets/icecream.jpg") },
];

const FoodCard = ({ title, image }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("SingleProductPage")}>
      <View style={styles.foodCard}>
        <Text style={styles.title}>{title}</Text>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const FoodList = () => (
  <View style={styles.foodListContainer}>
    {foods.map((food, index) => (
      <FoodCard key={index} title={food.title} image={food.image} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  foodListContainer: {
    flexDirection: "row",
    // backgroundColor: 'red',
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // Adjust as needed
  },
  foodCard: {
    width: 165,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontWeight: 600,
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 4,
    marginTop: 10,
  },
});

export default FoodList;
