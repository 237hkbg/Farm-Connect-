import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { View } from 'react-native';
import React from 'react';
import OptionsMenu from '../components/ui/OptionsMenu';
import appTheme from '../theme/theme';

const theme = appTheme;

export default function RootLayout() {
  const [loaded] = useFonts({ Poppins_400Regular, Poppins_600SemiBold });
  if (!loaded) return <View />;

  return (
    <PaperProvider theme={theme}>
      <Stack
        screenOptions={{
          headerTintColor: theme.colors.onPrimary,
          headerStyle: { backgroundColor: theme.colors.primary },
          headerRight: () => <OptionsMenu />,
          headerTitle: 'FarmConnect',
        }}
      />
    </PaperProvider>
  );
}
