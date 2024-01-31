import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Report = () => {
  const navigation = useNavigation();

  const [storeName, setStoreName] = useState('');
  const [productName, setProductName] = useState('');
  const [productIssues, setProductIssues] = useState([]);

  const handleCheckboxChange = (value, checked) => {
    if (checked) {
      setProductIssues(productIssues.filter(issue => issue !== value));
    } else {
      setProductIssues([...productIssues, value]);
    }
  };

  const handleSubmit = () => {
    console.log('Submit button pressed');
    if (storeName.trim() === '' || productName.trim() === '' || productIssues.length === 0) {
           
           window.alert('Please fill out all fields and select at least one product issue.');

    } else {
      // Perform submission logic (e.g., send report to server)
     window.alert('Your report has been submitted. We will get back to you shortly.');

      setStoreName('');
      setProductName('');
      setProductIssues([]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Store Name:</Text>
      <TextInput
        style={styles.input}
        value={storeName}
        onChangeText={text => setStoreName(text)}
        placeholder="Enter store name"
      />

      <Text style={styles.label}>Product Name:</Text>
      <TextInput
        style={styles.input}
        value={productName}
        onChangeText={text => setProductName(text)}
        placeholder="Enter product name"
      />

      <Text style={styles.label}>Product Issues:</Text>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => handleCheckboxChange('Expired', productIssues.includes('Expired'))}>
          <Text style={styles.checkboxText}>Expired</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCheckboxChange('Damaged', productIssues.includes('Damaged'))}>
          <Text style={styles.checkboxText}>Damaged</Text>
        </TouchableOpacity>
        {/* Add more checkboxes for other product issues as needed */}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  checkboxText: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Report;