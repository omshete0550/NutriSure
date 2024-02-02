import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function AddToCart() {
  const route = useRoute();
  const navigation = useNavigation();
  const { products, selectedProduct } = route.params;
  const [quantities, setQuantities] = useState({ [selectedProduct.id]: 1 });

  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    if (quantities[productId] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const product of products) {
      total += (quantities[product.id] || 0) * product.price;
    }
    return total;
  };

  useEffect(() => {
    setQuantities({ [selectedProduct.id]: 1 });
  }, [selectedProduct]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add To Cart</Text>
      </View>

      <View>
        <Text style={styles.text}>Cart Total: ₹{calculateTotalPrice()}</Text>
      </View>

      {products
        .filter((product) => product.id === selectedProduct.id)
        .map((product) => (
          <View key={product.id} style={styles.content}>
            <Image source={{ uri: product.image }} style={styles.logoImage} />

            <View style={styles.infoCont}>
              <Text style={styles.text}>{product.name}</Text>
              <Text style={{ marginBottom: 5 }}>{product.description}</Text>
              <Text style={styles.price}>
                Price: ₹{product.price * (quantities[product.id] || 0)}
              </Text>

              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleDecrement(product.id)}
                >
                  <Ionicons name="remove" size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.quantity}>
                  {quantities[product.id] || 0}
                </Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => handleIncrement(product.id)}
                >
                  <Ionicons name="add" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

      <TouchableOpacity
        style={styles.payBtn}
        onPress={() => navigation.navigate("payment")}
      >
        <Text style={styles.btnText}>Proceed To Pay</Text>
      </TouchableOpacity>
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
    justifyContent: "center",
    marginBottom: 20,
  },
  infoCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: 500,
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
  payBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgb(110, 142, 251)",
    width: 375,
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
  },
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgb(110, 142, 251)",
    width: 200,
    paddingHorizontal: 40,
    paddingVertical: 7,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
  },
  btnText: {
    fontWeight: 600,
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: "rgb(110, 142, 251)",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: "600",
  },
});
