
import React from 'react'; // Import React library to use JSX and components
import { View, StyleSheet } from 'react-native'; // Import View (like a div in HTML) and StyleSheet for styling
import { Text } from 'react-native-paper'; // Import Text component for displaying text
import { colors, spacing } from '../theme/theme'; // Import custom colors and spacing for styling

// This is the About screen component
export default function About() {
  return (
    <View style={styles.container}> {/* <View> is like a <div> in HTML, used to group elements and style them */}
      <Text style={styles.title}>About FarmConnect</Text> {/* <Text> displays text on the screen. style adds custom styles */}
      <Text style={{textAlign:'center', maxWidth:700}}>
        FarmConnect connects small-scale farmers with buyers, equipment, crop advice, and real-time prices.
        Our mission is to reduce post-harvest losses and increase profits across Africa.
      </Text>
    </View>
  );
}

// StyleSheet is used to define styles for the components, similar to CSS
const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) }, // flex:1 makes the view take all available space
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) }, // style for the title text
});
