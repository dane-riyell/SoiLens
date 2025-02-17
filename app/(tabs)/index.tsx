import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
    </View>
  );
}

// Styles for the Home screen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all available space
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold', 
  },
});