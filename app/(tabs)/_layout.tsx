import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme

export default function TabsLayout() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#333' : '#fff', // Dynamic tab bar background
        },
        tabBarActiveTintColor: theme === 'dark' ? '#fff' : '#000', // Dynamic active tab color
        tabBarInactiveTintColor: theme === 'dark' ? '#888' : '#666', // Dynamic inactive tab color
      }}
    >
      <Tabs.Screen
        name="index" // Route name for the Home screen
        options={{
          title: 'Home', // Display name for the tab
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings" // Route name for the Settings screen
        options={{
          title: 'Settings', // Display name for the tab
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} /> // Settings icon
          ),
        }}
      />
    </Tabs>
  );
}