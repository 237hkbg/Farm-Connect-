// Centralized theme based on Green & White Guidelines
import { MD3LightTheme } from 'react-native-paper';

export const colors = {
  primary: '#16A34A',
  primaryDark: '#FFFFFF',
  primaryLight: '#22C55E',
  accent: '#10B981',
  background: '#E8F5E9',
  surface: '#F8FAFC',
  border: '#E2E8F0',
  text: '#0F172A',
  muted: '#475569',
  success: '#16A34A',
  warning: '#F59E0B',
  error: '#DC2626',
};

export const radius = { sm: 8, md: 12, lg: 16, pill: 999 };
export const spacing = (n) => n * 8;
export const shadow = {
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
};

export const appTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: colors.primary,
    secondary: colors.accent,
    background: colors.background,
    surface: colors.surface,
    outline: colors.border,
    onPrimary: '#FFFFFF',
    onBackground: colors.text,
    onSurface: colors.text,
    error: colors.error,
  },
  roundness: radius.md,
};

export default appTheme;
