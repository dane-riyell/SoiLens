import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../app/contexts/ThemeContext'; // Import useTheme

interface SectionHeaderProps {
  header: string;
}

export function SectionHeader({ header }: SectionHeaderProps) {
  const { theme } = useTheme(); // Access the current theme

  return (
    <View style={[styles.container, theme === 'dark' && styles.darkContainer]}>
      <Text style={[styles.header, theme === 'dark' && styles.darkText]}>{header}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff', // Default background color
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background color (black)
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000', // Default text color
    textTransform: 'uppercase',
  },
  darkText: {
    color: '#fff', // Dark mode text color
  },
});