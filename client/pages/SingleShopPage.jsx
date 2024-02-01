import React, { useState } from "react";
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
import { Video, ResizeMode } from "expo-av";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

const products = [
  {
    id: 1,
    name: "Lactose-Free Milk",
    description:
      "Milk that has been treated with lactase enzyme to break down lactose.",
    price: 100,
    image: "https://m.media-amazon.com/images/I/71VofBkeglL.jpg",
    isVeg: true,
    severity: "70%",
  },
  {
    id: 2,
    name: "Mixed Grain Loaf",
    description:
      "Wheat free | No Added Preservatives | Lactose Free | Excellent source of Fiber (Pack of 1, 320Gm)",
    price: 50,
    image: "https://m.media-amazon.com/images/I/71HwZ0TdgWL.jpg",
    isVeg: true,
    severity: "70%",
  },
  {
    id: 3,
    name: "Whipping Cream",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 500,
    image:
      "https://gourmet-foods.in/wp-content/uploads/2021/02/Whipping-Cream-35-Anchor.jpg",
    isVeg: false,
    severity: "70%",
  },

  {
    id: 4,
    name: "Amul Milk",
    description:
      "Cow's milk and other mammalian milks (goat, sheep, buffalo) contain lactose.",
    price: 150,
    image:
      "https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg",
    isVeg: false,
    severity: "70%",
  },
  {
    id: 5,
    name: "Amul Butter",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    price: 50,
    image: "https://m.media-amazon.com/images/I/51KrxEKN58L.jpg",
    isVeg: false,
    severity: "70%",
  },
];

export default function SingleShopPage() {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [displayVideoMap, setDisplayVideoMap] = useState(true);

  const handleToggleView = () => {
    setDisplayVideoMap(!displayVideoMap);
  };
  const handleAddToCart = (product) => {
    navigation.navigate("AddToCart", { products, selectedProduct: product });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="caret-back"
          size={40}
          onPress={() => navigation.navigate("HomePage")}
        />
        <Text style={styles.text}>DMART</Text>
      </View>
      <TouchableOpacity onPress={handleToggleView} style={styles.toggleButton}>
        <Text style={styles.btnText}>
          {displayVideoMap ? "Show Products" : "Show Video/Map"}
        </Text>
      </TouchableOpacity>
      {displayVideoMap ? (
        <View>
          <MapView
            style={styles.map}
            // provider={PROVIDER_GOOGLE}
            // showsUserLocation={true}
            // customMapStyle={MapViewStyle}
            region={{
              latitude: 19.2572,
              longitude: 72.8508,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: 19.2572,
                longitude: 72.8508,
              }}
            >
              <Image
                source={{
                  uri: "https://static.vecteezy.com/system/resources/thumbnails/017/178/337/small/location-map-marker-icon-symbol-on-transparent-background-free-png.png",
                }}
                style={{ width: 60, height: 60 }}
              />
            </Marker>
          </MapView>
          <Video
            ref={video}
            style={styles.video}
            source={require("../assets/video.mp4")}
            useNativeControls
            resizeMode={ResizeMode.COVER}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
      ) : (
        <ScrollView>
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
                <View style={{ flex: 1, flexDirection: "row" }}>
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
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "50%",
    marginBottom: 20,
  },
  video: {
    height: 300,
    marginBottom: 20,
  },
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
    backgroundColor: "rgb(110, 142, 251)",
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
  toggleButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgb(110, 142, 251)",
    width: 200,
    marginBottom: 15,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
  },
});
