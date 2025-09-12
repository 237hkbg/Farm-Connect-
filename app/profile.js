
import React from 'react'; // Import React to use JSX and components
import { View, StyleSheet } from 'react-native'; // View is like a div in HTML, StyleSheet is for styling
import { Text } from 'react-native-paper'; // Text is used to show text on the screen
import { colors, spacing } from '../theme/theme'; // Custom colors and spacing for styling

// This is the Profile screen component
export default function ProfileScreen() {
  return (
    <View style={styles.container}> {/* View is like a div, used for layout */}
      <Text style={styles.title}>Profile</Text> {/* Title for the profile page */}
      <Text>Placeholder profile page. We will add edit info, password, and role switching.</Text> {/* Info about future features */}
    </View>
  );
}

// StyleSheet is used to define styles for the components, similar to CSS
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: spacing(3) }, // flex:1 fills the screen
  title: { fontSize: 28, fontWeight: '700', color: colors.primaryDark, marginBottom: spacing(1.5) }, // style for the title text
});
