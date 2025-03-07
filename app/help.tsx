import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from './contexts/ThemeContext'; // Import useTheme

export default function HelpScreen() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      <View style={[styles.contentBox, theme === 'dark' && styles.darkContentBox]}>
        <Text style={[styles.title, theme === 'dark' && styles.darkText]}>Help</Text>
        <Text style={[styles.text, theme === 'dark' && styles.darkText]}>
          This is the help screen. Here you can provide information that can guide users.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // Default background color
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background color
  },
  contentBox: {
    width: '90%', // Adjust the width as needed
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background for the content box
    borderRadius: 10, // Rounded corners
    borderWidth: 1,
    borderColor: '#ddd', // Light border color
    marginTop: 20, // Moves content to the upper part of the screen
  },
  darkContentBox: {
    backgroundColor: '#333', // Dark background for the content box
    borderColor: '#444', // Dark border color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000', // Default text color
  },
  darkText: {
    color: '#fff', // Dark mode text color
  },
  text: {
    fontSize: 16,
    lineHeight: 24, // Adjust line height for better readability
    color: '#000', // Default text color
  },
});
 