import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme
import { Divider } from 'expo-dev-client-components'; // Assuming you're using expo-dev-client-components
import { RadioListItem } from '../../components/RadioListItem'; // Import RadioListItem
import { SectionHeader } from '../../components/SectionHeader'; // Import SectionHeader
import { MaterialIcons } from '@expo/vector-icons';

type ColorSchemeName = 'light' | 'dark'; // Remove 'undefined' (Automatic)

// ThemeSection Component
function ThemeSection() {
  const { theme, toggleTheme } = useTheme(); // Use your custom useTheme hook

  const onSelectAppearance = (preferredAppearance: ColorSchemeName) => {
    toggleTheme(preferredAppearance); // Use your toggleTheme function
  };

  return (
    <View style={styles.themeSectionContainer}>
      <SectionHeader header="Theme" />
      <View style={styles.radioListContainer}>
        {/* Light Theme */}
        <RadioListItem
          icon={<MaterialIcons name="wb-sunny" size={24} color={theme === 'dark' ? '#fff' : '#000'} />}
          title="Light"
          checked={theme === 'light'}
          onPress={() => onSelectAppearance('light')}
        />
        <Divider style={styles.divider} />

        {/* Dark Theme */}
        <RadioListItem
          icon={<MaterialIcons name="nights-stay" size={24} color={theme === 'dark' ? '#fff' : '#000'} />}
          title="Dark"
          checked={theme === 'dark'}
          onPress={() => onSelectAppearance('dark')}
        />
      </View>
    </View>
  );
}

// SettingsScreen Component
export default function SettingsScreen() {
  const { theme } = useTheme(); // Access global theme state

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      <ThemeSection /> {/* Include the ThemeSection component here */}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  darkText: {
    color: '#fff',
  },
  themeSectionContainer: {
    width: '100%',
  },
  radioListContainer: {
    backgroundColor: '#fff', // Adjust based on your theme
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd', // Adjust based on your theme
    overflow: 'hidden',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee', // Adjust based on your theme
  },
  footer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#666', // Adjust based on your theme
  },
});