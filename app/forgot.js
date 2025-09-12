
import React, { useState } from 'react'; // Import React and useState for state management
import { View, StyleSheet } from 'react-native'; // View is like a div in HTML, StyleSheet is for styling
import { Text } from 'react-native-paper'; // Text is used to show text on the screen
import UIInput from '../components/ui/UIInput'; // Custom input field component
import UIButton from '../components/ui/UIButton'; // Custom button component
import { colors, spacing } from '../theme/theme'; // Custom colors and spacing for styling

// This is the Forgot Password screen component
export default function ForgotPassword() {
  const [email, setEmail] = useState(''); // State variable for the email input
  const onSubmit = () => alert('Password reset link sent (mock).'); // Function to handle button press

  return (
    <View style={styles.container}> {/* View is like a div, used for layout */}
      <Text style={styles.title}>Forgot Password</Text> {/* Text displays the title */}
      <View style={styles.form}> {/* View for the form fields */}
        <UIInput label="Email" value={email} onChangeText={setEmail} /> {/* Input field for email */}
        <UIButton variant="solid" onPress={onSubmit}>Send Reset Link</UIButton> {/* Button to send reset link */}
      </View>
    </View>
  );
}

// StyleSheet is used to define styles for the components, similar to CSS
const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) }, // flex:1 fills the screen
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) }, // style for the title text
  form: { width:'100%', maxWidth:420 }, // style for the form container
  input: { marginBottom:12 }, // style for input fields
});
