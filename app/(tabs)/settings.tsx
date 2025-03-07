import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView, Linking, Image } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme
import { Divider } from 'expo-dev-client-components'; // Assuming you're using expo-dev-client-components
import { RadioListItem } from '../../components/RadioListItem'; // Import RadioListItem
import { SectionHeader } from '../../components/SectionHeader'; // Import SectionHeader
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router'; // Import Link from Expo Router

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
      <View style={[styles.radioListContainer, theme === 'dark' && styles.darkRadioListContainer]}>
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
// AboutSection Component
function AboutSection() {
  const appVersion = '1.0.0';
  const githubRepoUrl = 'https://github.com/dane-riyell/SoiLens';

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutText}>About</Text>
      <View style={styles.infoContainer}>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.appName}>SoiLens</Text>
        <Text style={styles.appDescription}>
          Empower farmers, gardeners, and enthusiasts to predict soil properties quickly, effortlessly, and affordably with cutting-edge AI technology.
        </Text>
        <Text style={styles.versionText}>Version: {appVersion}</Text>
        <TouchableOpacity
          style={styles.githubButton}
          onPress={() => Linking.openURL(githubRepoUrl)}
          activeOpacity={0.7}
        >
          <Text style={styles.githubButtonText}>View Source Code on GitHub</Text>
        </TouchableOpacity>
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
      <AboutSection />

      {/* Add the Help box at the bottom of the screen */}
      <View style={[styles.helpContainer, theme === 'dark' && styles.darkHelpContainer]}>
        <Link href="/help" asChild>
          <TouchableOpacity
            style={[styles.helpBox, theme === 'dark' && styles.darkHelpBox]}
          >
            <View style={[styles.helpTitleContainer, theme === 'dark' && styles.darkHelpTitleContainer]}>
              <Text style={[styles.helpTitle, theme === 'dark' && styles.darkText]}>Help</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
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
    marginBottom: 20, // Add margin to separate the theme section from the Help box
  },
  radioListContainer: {
    backgroundColor: '#fff', // Light background for the radio list
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd', // Light border color
    overflow: 'hidden',
  },
  darkRadioListContainer: {
    backgroundColor: '#333', // Dark background for the radio list
    borderColor: '#eee', // Dark border color
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
  helpContainer: {
    position: 'absolute', // Position the Help box absolutely
    bottom: 20, // Place it 20 units from the bottom
    left: 16, // Align it to the left with 16 units padding
    right: 16, // Align it to the right with 16 units padding
  },
  darkHelpContainer: {
    backgroundColor: '#121212', // Dark mode background for the container
  },
  helpBox: {
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: '#333', // Dark background for the radio list
    borderColor: '#eee', // Dark border color
  },
  darkHelpBox: {
    backgroundColor: '#333', // Dark background for the radio list
    borderColor: '#000', // Dark border color
  },
  helpTitleContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0', // Light mode box for text
  },
  darkHelpTitleContainer: {
    backgroundColor: '#444', // Dark mode box for text
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Default text color
  },
  aboutContainer: {
    width: '100%',
    marginTop: 20,
  },
  aboutText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  infoContainer: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderColor: '#666',
    borderWidth: 2,
    padding: 16,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  appName: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  appDescription: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  versionText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  githubButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
    marginBottom: 10,
  },
  githubButtonText: {
    fontSize: 17,
    color: 'white',
  },
});


