import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../components/UserInfo/SearchBar";
import FoodCard from "../components/UserInfo/FoodCard";
import StoreCard from "../components/UserInfo/StoreCard";
import Navbar from "../components/UserInfo/NavBarNew";
import { useNavigation } from "@react-navigation/native";

const Homepage = ({ user = { name: "Sarah" }, location = "Mumbai" }) => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const icons = [
    { name: "home", label: "Home", screen: "Homepage" },
    {
      name: "chatbubble-ellipses",
      label: "Community",
      screen: "CommunityScreen",
    },
    { name: "person-circle", label: "Profile", screen: "ProfileScreen" },
    { name: "restaurant", label: "Recipe", screen: "RecipeScreen" },
  ];

  const toggleMenu = () => {
    const toValue = menuOpen ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
    setMenuOpen(!menuOpen);
  };

  const slideMenuAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["-100%", "0%"],
  });

  const handleMenuItemPress = (item) => {
    //   console.log(Pressed: ${item});
    // Ensure item.screen is set correctly
    console.log(item);

    navigation.navigate(item);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ height: "630px" }}>
        <LinearGradient
          colors={["#6E8EFB", "#4A66E3"]}
          start={[0, 0.5]}
          end={[1, 0.5]}
          style={styles.header}
        >
          <TouchableOpacity style={styles.menuIcon} onPress={toggleMenu}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.searchBarContainer}>
            <SearchBar />
            <Text style={styles.title}>Welcome {user.name} to NutriSure!</Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={28} color="white" />
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.cartIcon}
            onPress={() => {
              /* Handle cart click */
            }}
          >
            <Ionicons name="cart" size={24} color="white" />
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.recommendedFoodSection}>
          <Text style={styles.recommendedFoodTitle}>Recommended Stores</Text>
          <TouchableOpacity style={styles.exploreMoreButton}>
            <Text style={styles.exploreMoreButtonText}>Explore More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.recommendedFoodContainer}>
          <StoreCard />
        </View>
        <View style={styles.recommendedFoodSection}>
          <Text style={styles.recommendedFoodTitle}>Recommended Food</Text>
          <TouchableOpacity style={styles.exploreMoreButton}>
            <Text style={styles.exploreMoreButtonText}>Explore More</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.recommendedFoodContainer}>
          <FoodCard />
        </View>
      </ScrollView>
      <Animated.View style={[styles.menuBar, { left: slideMenuAnimation }]}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleMenuItemPress("Report")}
        >
          <Text style={styles.menuItemText}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handleMenuItemPress("Favorites")}
        >
          <Text style={styles.menuItemText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeIcon} onPress={toggleMenu}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </Animated.View>
      {menuOpen && <View style={styles.overlay} />}
      <Navbar icons={icons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
    justifyContent: "flex-start",
    // paddingTop: 50
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
    // height: ,
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: -250,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "white",
  },
  searchBarContainer: {
    flex: 1,
    alignItems: "center",
  },
  menuIcon: {
    marginRight: 15,
    marginTop: 10,
  },
  cartIcon: {
    marginLeft: 15,
    marginTop: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationText: {
    color: "white",
    marginLeft: 5,
    fontSize: 21,
  },
  recommendedFoodSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  recommendedFoodTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A66E3",
  },
  exploreMoreButton: {
    padding: 10,
  },
  exploreMoreButtonText: {
    fontWeight: "bold",
    color: "#4A66E3",
  },
  recommendedFoodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  menuBar: {
    width: "50%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    zIndex: 1,
    paddingVertical: 80,
    paddingHorizontal: 10,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuItemText: {
    fontSize: 20,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    right: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 0,
  },
});

export default Homepage;
