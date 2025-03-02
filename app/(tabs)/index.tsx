import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme

export default function HomeScreen() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      <Text style={[styles.title, theme === 'dark' && styles.darkText]}>
        Welcome to the Home Screen!
      </Text>
    </View>
  );
}

// Styles for the Home screen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all available space
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Default background color
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background color
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Default text color
  },
  darkText: {
    color: '#fff', // Dark mode text color
  },
});