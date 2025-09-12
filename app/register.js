// Importing necessary libraries and components
import React, { useState } from 'react'; // useState lets us create variables that can change (state)
import { View, StyleSheet } from 'react-native'; // View is like a div, StyleSheet is for styling
import { Text, RadioButton } from 'react-native-paper'; // Text is used to show text, RadioButton for selecting roles
import { useRouter } from 'expo-router'; // useRouter lets us navigate between screens
import UIInput from '../components/ui/UIInput'; // Custom input field component
import UIButton from '../components/ui/UIButton'; // Custom button component
import { colors, spacing } from '../theme/theme'; // Custom colors and spacing for styling

// This is the Register screen component
export default function RegisterScreen() {
  const router = useRouter(); // Used to navigate to other screens
  const [role, setRole] = useState('farmer'); // State variable for user role
  const [name, setName] = useState(''); // State variable for name input
  const [email, setEmail] = useState(''); // State variable for email input
  const [password, setPassword] = useState(''); // State variable for password input

  // Function to handle register button press
  const onSubmit = () => {
    router.replace('/login'); // Go to login screen after registration
  };

  return (
    <View style={styles.container}> {/* View is like a div, used for layout */}
      <Text style={styles.title}>Register</Text> {/* Title for the register page */}
      <View style={styles.form}> {/* View for the form fields */}
        <UIInput label="Full Name" value={name} onChangeText={setName} /> {/* Input for full name */}
        <UIInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" /> {/* Input for email */}
        <UIInput label="Password" value={password} onChangeText={setPassword} secureTextEntry /> {/* Input for password */}
        <Text style={{marginBottom:8}}>Role</Text> {/* Label for role selection */}
        <RadioButton.Group onValueChange={setRole} value={role}> {/* Group for radio buttons */}
          <View style={styles.radioRow}><RadioButton value="farmer" /><Text>Farmer/Seller</Text></View> {/* Option for farmer/seller */}
          <View style={styles.radioRow}><RadioButton value="buyer" /><Text>Buyer</Text></View> {/* Option for buyer */}
        </RadioButton.Group>
        <UIButton variant="solid" onPress={onSubmit} style={styles.button}>Create Account</UIButton> {/* Button to create account */}
      </View>
    </View>
  );
}

// StyleSheet is used to define styles for the components, similar to CSS
const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) }, // flex:1 fills the screen
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) }, // style for the title text
  form: { width:'100%', maxWidth:460 },
  input: { marginBottom:12 },
  radioRow: { flexDirection:'row', alignItems:'center', gap:8 },
  button: { marginTop:12 }
});
