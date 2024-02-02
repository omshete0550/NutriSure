import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="gray"
        // Implement onChangeText and value props as needed for search functionality
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
});

export default SearchBar;
