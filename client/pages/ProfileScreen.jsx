import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
// import { LineChart } from "react-native-gifted-charts";
import NavBarNew from "../components/UserInfo/NavBarNew";

const ProfileScreen = () => {
  const [blurHealth, setBlurHealth] = useState(false);
  const [blurMonthly, setBlurMonthly] = useState(false);

  const monthlyConsumptionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [150, 200, 180, 220, 250, 230],
      },
    ],
  };

  const healthRecord = [
    { label: "Weight", value: "65 kg" },
    { label: "Height", value: "170 cm" },
    { label: "Blood Pressure", value: "120/80 mmHg" },
    { label: "Cholesterol Level", value: "Normal" },
    { label: "Blood Sugar Level", value: "90 mg/dL" },
    { label: "Medical Conditions", value: "None" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Profile</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1285993433/photo/carefree-african-american-girl-in-studio.jpg?b=1&s=612x612&w=0&k=20&c=qOauVb2YeG_fRsdbYP8C5Zt3zYcv_tFhNoeXdDwz9ZA=",
            }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            {healthRecord.map((item, index) => (
              <View style={styles.infoRow} key={index}>
                <Text style={styles.label}>{item.label}:</Text>
                <Text style={styles.text}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <TouchableOpacity onPress={() => setBlurHealth(!blurHealth)}>
            <Text style={styles.toggle}>Toggle Health Record Blur</Text>
          </TouchableOpacity>
          <BlurView
            style={blurHealth ? styles.blurEffect : null}
            intensity={100}
          >
            <Text style={styles.sectionHeader}>Health Record</Text>
            {healthRecord.map((item, index) => (
              <View style={styles.recordItem} key={index}>
                <Text style={styles.recordLabel}>{item.label}</Text>
                <Text style={styles.recordValue}>{item.value}</Text>
              </View>
            ))}
          </BlurView>
        </View>

        <View style={styles.section}>
          <TouchableOpacity onPress={() => setBlurMonthly(!blurMonthly)}>
            {/* <Text style={styles.toggle}>Toggle Monthly Consumption Blur</Text> */}
          </TouchableOpacity>
          {/* <BlurView style={blurMonthly ? styles.blurEffect : null} intensity={100}>
                        <Text style={styles.sectionHeader}>Monthly Consumption Tracking</Text>
                        <LineChart
                            data={monthlyConsumptionData}
                            width={350}
                            height={200}
                            chartConfig={chartConfig}
                            bezier
                        />
                    </BlurView> */}
        </View>
      </ScrollView>
      <NavBarNew />
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  decimalPlaces: 0,
  color: (opacity = 1) => rgba(0, 122, 255, `${opacity}`),
  labelColor: (opacity = 1) => rgba(0, 0, 0, `${opacity}`),
  style: {
    borderRadius: 16,
  },
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 40,
  },
  header: {
    // backgroundColor: '#007bff',
    paddingVertical: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginRight: 5,
    color: "#333",
  },
  text: {
    color: "#333",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    padding: 20,
  },
  recordItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  recordLabel: {
    fontWeight: "bold",
    marginRight: 5,
    color: "#333",
  },
  recordValue: {
    color: "#333",
  },
  toggle: {
    marginBottom: 10,
    color: "blue",
  },
  blurEffect: {
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default ProfileScreen;
