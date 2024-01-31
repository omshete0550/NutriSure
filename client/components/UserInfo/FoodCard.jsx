import { View, Text, Image, StyleSheet } from 'react-native';

const foods = [
  { title: "Pizza", image: require("../../assets/ghee.jpg") },
  { title: "Burger", image: require("../../assets/ghee.jpg") },
  { title: "Sushi", image: require("../../assets/ghee.jpg") }
];

const FoodCard = ({ title, image }) => (
  <View style={styles.foodCard}>
    <Text style={styles.title}>{title}</Text>
    <Image source={image} style={styles.image} />
  </View>
);

const FoodList = () => (
  <View style={styles.foodListContainer}>
    {foods.map((food, index) => (
      <FoodCard key={index} title={food.title} image={food.image} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  foodListContainer: {
        flexDirection: 'row',
        // backgroundColor: 'red',
      width:'100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Adjust as needed
  },
  foodCard: {
    width: 130,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    width: 70,
    height: '70px',
    borderRadius: 4,
    marginTop: 10,
  },
});

export default FoodList;
