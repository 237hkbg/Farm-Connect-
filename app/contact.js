
import React from 'react'; // Import React to use JSX and components
import { View, StyleSheet } from 'react-native'; // View is like a div in HTML, StyleSheet is for styling
import { Text } from 'react-native-paper'; // Text is used to show text on the screen
import { colors, spacing } from '../theme/theme'; // Custom colors and spacing for styling

// This is the Contact screen component
export default function Contact() {
  return (
    <View style={styles.container}> {/* View is like a div, used for layout */}
      <Text style={styles.title}>Contact & Help</Text> {/* Text displays the title */}
      <Text>Email: support@farmconnect.africa</Text> {/* Text displays the support email */}
      <Text>FAQ: Coming soon.</Text> {/* Text displays FAQ info */}
    </View>
  );
}

// StyleSheet is used to define styles for the components, similar to CSS
const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) }, // flex:1 fills the screen
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) }, // style for the title text
});
