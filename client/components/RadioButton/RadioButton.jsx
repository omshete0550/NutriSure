import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const RadioButton = ({ options, selectedOptions, onSelect }) => {
  const isOptionSelected = (option) =>
    selectedOptions.some((selected) => selected.value === option.value);

  const toggleOption = (option) => {
    const updatedSelection = isOptionSelected(option)
      ? selectedOptions.filter((selected) => selected.value !== option.value)
      : [...selectedOptions, option];

    onSelect(updatedSelection);
  };

  return (
    <View style={styles.radioGroup}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.radioButton,
            isOptionSelected(option) && styles.selectedRadioButton,
          ]}
          onPress={() => toggleOption(option)}
        >
          <View
            style={[
              styles.radioOuterCircle,
              isOptionSelected(option) && styles.selectedOuterCircle,
            ]}
          >
            {isOptionSelected(option) && (
              <View
                style={[
                  styles.radioInnerCircle,
                  isOptionSelected(option) && styles.selectedInnerCircle,
                ]}
              />
            )}
          </View>
          <Text style={styles.radioText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  radioOuterCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: "rgb(110, 142, 251)", // Outer circle color
    borderWidth: 2,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "rgb(110, 142, 251)", // Inner circle color
  },

  radioText: {
    marginLeft: 8,
  },
});

export default RadioButton;
