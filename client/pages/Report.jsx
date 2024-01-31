import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Report = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report</Text>
      {/* Add your report content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Report;
