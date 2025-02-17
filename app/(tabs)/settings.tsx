import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
}

// Styles for the Settings screen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all available space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  title: {
    fontSize: 20, // Set font size
    fontWeight: 'bold', // Make text bold
  },
});