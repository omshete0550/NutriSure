import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const stores = [
  { title: "DMART", image: require("../../assets/bigbazar.jpg") },
  { title: "Walmart", image: require("../../assets/bigbazar.jpg") },
  { title: "Shop99", image: require("../../assets/bigbazar.jpg") },
];

const StoreCard = ({ title, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("SingleShopPage")}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const StoreList = () => (
  <View style={styles.container}>
    {stores.map((store, index) => (
      <StoreCard key={index} title={store.title} image={store.image} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 50,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    width: 165,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 10,
    margin: 10,
  },
  title: {
    margin: 0,
    fontSize: 18,
    fontWeight: "500",
  },
  image: {
    marginTop: 10,
    width: 100,
    height: 80,
    borderRadius: 4,
  },
});

export default StoreList;
