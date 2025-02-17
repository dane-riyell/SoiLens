import { Tabs } from 'expo-router'; 
import { MaterialIcons } from '@expo/vector-icons'; 

// Defines the structure of the tab navigation
export default function TabsLayout() {
  return (
    <Tabs>
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