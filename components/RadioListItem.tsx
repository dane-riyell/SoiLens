import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../app/contexts/ThemeContext'; // Import useTheme

interface RadioListItemProps {
  icon?: React.ReactNode; // Allow React components as icons
  title: string;
  checked: boolean;
  onPress: () => void;
}

export function RadioListItem({ icon, title, checked, onPress }: RadioListItemProps) {
  const { theme } = useTheme(); // Access the current theme

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        theme === 'dark' && styles.darkContainer, // Apply dark mode styles
      ]}
    >
      <View style={styles.content}>
        {/* Render the icon if provided */}
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={[styles.title, theme === 'dark' && styles.darkText]}>{title}</Text>
      </View>
      <View style={[styles.radio, checked && styles.radioChecked]}>
        {checked && <View style={styles.radioInner} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff', // Default background color
  },
  darkContainer: {
    backgroundColor: '#333', // Dark mode background color
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    color: '#000', // Default text color
  },
  darkText: {
    color: '#fff', // Dark mode text color
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc', // Default radio border color
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioChecked: {
    borderColor: '#007AFF', // Checked radio border color
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF', // Checked radio inner color
  },
});