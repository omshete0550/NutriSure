import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const products = [
  {
    id: 1,
    name: "Amul Milk",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 50,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg",
    isVeg: true,
    severity: "70%",
  },
  {
    id: 2,
    name: "Choco Milk",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 50,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg",
    isVeg: false,
    severity: "70%",
  },
  {
    id: 3,
    name: "Amul Milk",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 50,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg",
    isVeg: true,
    severity: "70%",
  },
  {
    id: 4,
    name: "Amul Milk",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 50,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg",
    isVeg: true,
    severity: "70%",
  },
  {
    id: 5,
    name: "Amul Milk",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 50,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg",
    isVeg: true,
    severity: "70%",
  },
];

export default function SingleShopPage() {
  const navigation = useNavigation();

  const handleAddToCart = (product) => {
    navigation.navigate("AddToCart", { products, selectedProduct: product });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="menu"
          size={30}
          onPress={() => navigation.navigate("Step2")}
        />
        <Text style={styles.text}>Big Bazaar</Text>
      </View>

      {products.map((product) => (
        <View key={product.id} style={styles.content}>
          {/* Veg/Non-Veg logo */}
          {product.isVeg ? (
            <Ionicons
              name="leaf"
              size={20}
              color="green"
              style={styles.vegIcon}
            />
          ) : (
            <Ionicons
              name="skull"
              size={20}
              color="red"
              style={styles.nonVegIcon}
            />
          )}

          <Image source={{ uri: product.image }} style={styles.logoImage} />

          <View style={styles.infoCont}>
            <Text style={styles.text}>{product.name}</Text>
            <Text style={{ marginBottom: 5 }}>{product.description}</Text>
            <Text style={styles.price}>Price: ₹{product.price}</Text>
            <View style={{flex: 1, flexDirection: "row"}}>
              <TouchableOpacity
                style={styles.Pbtn}
                onPress={() => handleAddToCart(product)}
              >
                <Text style={styles.btnText}>Add</Text>
                <Ionicons name="cart" size={18} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Pbtn}
                onPress={() => navigation.navigate("SingleProductPage")}
              >
                <Text style={styles.btnText}>View</Text>
                {/* <Ionicons name="cart" size={20} color="#fff" /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  infoCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 5,
  },
  price: {
    fontSize: 21,
    fontWeight: 600,
  },
  content: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 15,
    position: "relative", // Position relative for absolute positioning of icons
  },
  logoImage: {
    width: 100,
    height: 150,
    borderColor: "#d3d3d3",
    resizeMode: "contain",
    shadowOffset: { width: -3, height: 4 },
    shadowColor: "#d3d3d3",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  Pbtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#0484ac",
    width: 115,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
  },
  btnText: {
    fontWeight: 600,
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  vegIcon: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  nonVegIcon: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});
