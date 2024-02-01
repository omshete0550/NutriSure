import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SingleProductPage() {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    navigation.navigate("AddToCart");
    console.log(`Added ${quantity} item(s) to the cart`);
  };

  return (
    <View style={styles.main}>
      <View style={styles.section}>
        <View style={styles.container}>
          <View style={styles.wrapperColumn}>
            <View style={styles.wrapperFigure}>
              <Image
                source={{
                  uri: "https://m.media-amazon.com/images/I/71VofBkeglL.jpg",
                }}
                style={styles.wrapperImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.wrapperContent}>
              <View style={styles.wrapperInform}>
                {/* <Text style={styles.badgeDarken}>Lactose Intolerance</Text> */}
                <Text style={styles.headingSm}>Amul Milk</Text>
                <Text style={styles.textMd}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatem incidunt nisi, nulla esse at magni mollitia. Fugit
                  error non vel quae facere blanditiis nemo.
                </Text>
                <Text style={styles.textMdSemi}>Severity: 70%</Text>
              </View>
              <View style={styles.wrapperDetail}>
                <View style={styles.price}>
                  <Text style={styles.textMdSemi}>Price:</Text>
                  <Text style={styles.textXxlBold}>₹100.00</Text>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={decrementQuantity}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={incrementQuantity}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.wrapperAction}>
                <TouchableOpacity
                  style={styles.btnDarken}
                  onPress={handleAddToCart}
                >
                  <Text style={styles.btnText}>Add to Bag</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    paddingTop: 100,
    // marginTop: 50,
    backgroundColor: "#fff",
  },
  wrapperColumn: {
    flexDirection: "column",
    height: "100%",
  },
  wrapperFigure: {
    marginRight: 50,
    flex: 1,
  },
  wrapperImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  wrapperContent: {
    flex: 1,
  },
  wrapperInform: {
    marginBottom: 10,
  },
  badgeDarken: {
    fontFamily: "inherit",
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "center",
    color: "#fff",
    width: "100%",
    backgroundColor: "red",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  headingSm: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 30
  },
  textMd: {
    fontSize: 14,
    fontWeight: "normal",
    marginBottom: 10,
  
  },
  wrapperDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
  },
  textMdSemi: {
    fontSize: 18,
    fontWeight: "600",
  },
  textXxlBold: {
    fontSize: 24,
    fontWeight: "bold",
  },
  sizesList: {
    flexDirection: "row",
  },
  sizesItem: {
    marginRight: 5,
    fontSize: 14,
  },
  wrapperAction: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnDarken: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#000",
    borderRadius: 3,
    marginRight: 10,
    marginTop: 15,
  },
  btnNeutral: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  btnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "rgb(110, 142, 251)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
