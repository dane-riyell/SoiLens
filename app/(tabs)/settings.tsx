import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme
import { Divider } from 'expo-dev-client-components'; // Assuming you're using expo-dev-client-components
import { RadioListItem } from '../../components/RadioListItem'; // Import RadioListItem
import { SectionHeader } from '../../components/SectionHeader'; // Import SectionHeader
import { MaterialIcons } from '@expo/vector-icons';


type ColorSchemeName = 'light' | 'dark';

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

export default function SettingsScreen() {
  const { theme } = useTheme();

  return (
    <ScrollView style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      <ThemeSection />
      <AboutSection />
    </ScrollView>
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
  themeSectionContainer: {
    width: '100%',
    marginBottom: 20,
  },
  radioListContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  darkRadioListContainer: {
    backgroundColor: '#333',
    borderColor: '#444',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
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
    fontSize: 16,
    color: 'white',
  },
});