import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
  const icons = [
    { name: 'home', label: 'Home', screen: 'Homepage' },
    { name: 'chatbubble-ellipses', label: 'Community', screen: 'CommunityScreen' },
    { name: 'person-circle', label: 'Profile', screen: 'ProfileScreen' },
    { name: 'restaurant', label: 'Recipe', screen: 'Receipe' },
  ];
  const animatedValues = icons.map(() => new Animated.Value(0));

  const handlePressIn = (index) => {
    Animated.timing(animatedValues[index], {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = (index) => {
    Animated.timing(animatedValues[index], {
      toValue: 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navigationBar}>
      {/* Navigation icons */}
      <View style={styles.navIconsContainer}>
        {icons.map((icon, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigateToScreen(icon.screen)}
            onPressIn={() => handlePressIn(index)}
            onPressOut={() => handlePressOut(index)}
            style={styles.touchable}
          >
            <Animated.View
              style={[
                styles.navIconWrapper,
                {
                  transform: [
                    {
                      scale: animatedValues[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 1.2],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Ionicons
                name={icon.name}
                size={25}
                color="#1A3567"
                style={styles.navIcon}
              />
              <Text style={styles.navLabel}>{icon.label}</Text>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </View>
      {/* Barcode icon */}
      <TouchableOpacity
  style={styles.barcodeIconContainer}
  onPress={() => navigateToScreen('ScanResults')}
>
  <Ionicons name="barcode" size={25} style={styles.barcodeIcon} />
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: "#4A66E3",
    padding: 7,
    position: 'relative', // Ensure relative positioning for containing absolute positioned elements
  },
  navIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  touchable: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  navIcon: {
    marginBottom: 5,
    color: 'white',
  },
  navIconWrapper: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    color: 'white',
  },
barcodeIconContainer: {
    position: 'absolute',
    bottom: 45, // Adjust as needed
    left: '50%', // Center horizontally
    transform: [{ translateX: -25 }], // Half the width of the circle container
    width: 50,
    height: 50,
    borderRadius: 25, // Half the width and height to make it circular
    backgroundColor: '#4A66E3', // Blue color
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 3, // Shadow radius
    elevation: 3, // Elevation for Android (affects shadow)
  },

  barcodeIcon: {
    color: 'white', // Icon color
  },

});

export default Navbar;
