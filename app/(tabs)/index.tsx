import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme


export default function HomeScreen() {
  const { theme } = useTheme(); // Access the current theme
  const [filter, setFilter] = useState<'all' | 'favorites'>('all'); // State for the toggle switch
  const [userPictures, setUserPictures] = useState([
    { id: 1, imageUri: 'https://placehold.co/200', isFavorite: false },
    { id: 2, imageUri: 'https://placehold.co/200', isFavorite: true },
    { id: 3, imageUri: 'https://placehold.co/200', isFavorite: false },
    // Add more pictures here as needed
  ]);

  // Filter pictures based on the selected toggle
  const filteredPictures = filter === 'all'
    ? userPictures
    : userPictures.filter((picture) => picture.isFavorite);

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      {/* Logo and Short Phrase (Placeholder) */}
      <View style={styles.logoContainer}>
        <Text style={[styles.logoText, theme === 'dark' && styles.darkText]}>
          Your Logo Here
        </Text>
        <Text style={[styles.phraseText, theme === 'dark' && styles.darkText]}>
          A short phrase goes here.
        </Text>
      </View>

      {/* Toggle Switch */}
      <View style={[styles.toggleContainer, theme === 'dark' && styles.darkToggleContainer]}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            filter === 'all' && styles.activeToggleButton,
          ]}
          onPress={() => setFilter('all')}
        >
          <Text
            style={[
              styles.toggleText,
              filter === 'all' && styles.activeToggleText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            filter === 'favorites' && styles.activeToggleButton,
          ]}
          onPress={() => setFilter('favorites')}
        >
          <Text
            style={[
              styles.toggleText,
              filter === 'favorites' && styles.activeToggleText,
            ]}
          >
            Favorites
          </Text>
        </TouchableOpacity>
      </View>

      {/* 2-Column Grid of Boxes */}
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {filteredPictures.map((picture) => (
          <View
            key={picture.id}
            style={[styles.box, theme === 'dark' && styles.darkBox]}
          >
            {/* Display the picture */}
            <Image
              source={{ uri: picture.imageUri }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Styles for the Home screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff', // Default background color
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background color
  },
  logoContainer: {
    marginTop: 40, // Add space at the top for the logo and phrase
    marginBottom: 20, // Space between logo and toggle switch
    paddingHorizontal: 16, // Add padding for better alignment
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Default text color
  },
  phraseText: {
    fontSize: 16,
    color: '#000', // Default text color
    marginTop: 8, // Space between logo and phrase
  },
  darkText: {
    color: '#fff', // Dark mode text color
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0', // Light mode toggle background
    borderRadius: 25,
    padding: 5,
  },
  darkToggleContainer: {
    backgroundColor: '#333', // Dark mode toggle background
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeToggleButton: {
    backgroundColor: '#007AFF', // Active toggle background color
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Default text color
  },
  activeToggleText: {
    color: '#fff', // Active toggle text color
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  box: {
    width: '48%', // 2 columns with a small gap
    aspectRatio: 1, // Square boxes
    backgroundColor: '#f9f9f9', // Light mode box background
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden', // Ensure the image doesn't overflow the box
  },
  darkBox: {
    backgroundColor: '#333', // Dark mode box background
  },
  image: {
    width: '100%',
    height: '100%',
  },
});