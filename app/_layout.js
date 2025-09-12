
// Importing necessary libraries and components
import { Stack } from 'expo-router'; // Stack is used for navigation between screens
import { PaperProvider } from 'react-native-paper'; // PaperProvider provides theming for UI components
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'; // useFonts loads custom fonts
import { View } from 'react-native'; // View is like a div in HTML
import React from 'react'; // Import React to use JSX and components
import OptionsMenu from '../components/ui/OptionsMenu'; // Custom options menu for the header
import appTheme from '../theme/theme'; // Custom theme for the app

const theme = appTheme; // Assign the custom theme to a variable

// This is the root layout component for the app
export default function RootLayout() {
  const [loaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold }); // Load custom fonts
  if (!loaded) return <View />; // If fonts are not loaded, show an empty view

  return (
    <PaperProvider theme={theme}> {/* Provides the theme to all child components */}
      <Stack
        screenOptions={{ // Options for the navigation header
          headerTintColor: theme.colors.onPrimary, // Color for header text/icons
          headerStyle: { backgroundColor: theme.colors.primary }, // Background color for header
          headerRight: () => <OptionsMenu />, // Show the options menu on the right
          headerTitle: 'FarmConnect', // Title for the header
        }}
      />
    </PaperProvider>
  );
}
