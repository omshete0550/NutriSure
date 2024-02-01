import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NavBarNew from "../components/UserInfo/NavBarNew";

const ProfileScreen = () => {
  return (
    <>
      <View style={{ height: 900 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Profile</Text>
        </View>
        <View style={{ height: "550px" }}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://media.istockphoto.com/id/1285993433/photo/carefree-african-american-girl-in-studio.jpg?b=1&s=612x612&w=0&k=20&c=qOauVb2YeG_fRsdbYP8C5Zt3zYcv_tFhNoeXdDwz9ZA=",
                }}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.section}>
              <View style={styles.itemContainer}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.text}>Melissa Peters</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.itemContainer}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.text}>melpeters@gmail.com</Text>
              </View>
            </View>
            {/* Repeat the above structure for other fields */}
            <View style={styles.section}>
              <View style={styles.itemContainer}>
                <Text style={styles.label}>Date of Birth</Text>
                <Text style={styles.text}>23/05/1995</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.itemContainer}>
                <Text style={styles.label}>Country/Region</Text>
                <Text style={styles.text}>Nigeria</Text>
              </View>
            </View>
            {/* Repeat the above structure for other fields */}
            <View style={styles.section}>
              <View style={styles.itemContainer}>
                <Text style={styles.label}>Known Allergies</Text>
                <Text style={styles.text}>None</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.itemContainer}>
                <Text style={styles.label}>Dietary Restrictions</Text>
                <Text style={styles.text}>Vegetarian</Text>
              </View>
            </View>
            <View style={styles.section}>
              <View style={styles.itemContainer}>
                <Text style={styles.label}>Severity of Allergies</Text>
                <Text style={styles.text}>Low</Text>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.itemContainer}>
                <Text style={styles.label}>Medical Conditions</Text>
                <Text style={styles.text}>None</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <NavBarNew />
    </>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#007bff",
    paddingBottom: 20,
    alignItems: "center",
    marginBottom: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 100,
  },
  section: {
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  text: {
    marginBottom: 10,
    color: "#555",
  },
});

export default ProfileScreen;
