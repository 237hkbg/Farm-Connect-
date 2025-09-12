// Importing necessary libraries and components
import React, { useState } from 'react'; // useState lets us create variables that can change (state)
import { View, StyleSheet, Image } from 'react-native'; // View is like a div, Image is for images, StyleSheet is for styling
import { Text, RadioButton } from 'react-native-paper'; // Text is used to show text, RadioButton for selecting roles
import { Link, useRouter } from 'expo-router'; // useRouter lets us navigate between screens
import { useAuth } from '../stores/auth'; // Custom hook to access authentication store
import UIInput from '../components/ui/UIInput'; // Custom input field component
import UIButton from '../components/ui/UIButton'; // Custom button component
import { colors, spacing } from '../theme/theme'; // Custom colors and spacing for styling

// This is the Login screen component
export default function LoginScreen() {
  const router = useRouter(); // Used to navigate to other screens
  const [email, setEmail] = useState(''); // State variable for email input
  const [password, setPassword] = useState(''); // State variable for password input
  const [role, setRole] = useState('seller'); // State variable for user role
  const loginStore = useAuth(); // Get authentication functions from the store

  // Function to handle login button press
  const onLogin = () => {
    loginStore.login(email, password); // Call login function
    loginStore.setRole(role); // Set the selected role
    // Navigate to the correct dashboard based on role
    if (role === 'buyer' || role === 'customer') router.replace('/(buyer)/dashboard');
    else if (role === 'admin') router.replace('/(admin)/dashboard');
    else router.replace('/(seller)/dashboard');
  };

  return (
    <View style={styles.container}> {/* View is like a div, used for layout */}

      <Text style={styles.brand}>FarmConnect</Text> {/* App name at the top */}
      <Image source={require('../assets/icon.png')} resizeMode="contain" style={styles.heroImage} /> {/* App icon image */}

      <Text style={styles.headline}>Welcome to FarmConnect</Text> {/* Main headline text */}
      <Text style={styles.subheadline}>Connect farmers, buyers, and sellers easily.</Text> {/* Subheadline text */}

      <View style={styles.form}> {/* View for the form fields */}
        <UIInput
          label="Email" // Label for the input field
          value={email} // Value of the input
          onChangeText={setEmail} // Function to update value
          keyboardType="email-address" // Keyboard type for email
          autoCapitalize="none" // Do not auto-capitalize
        />
        <UIInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={{marginBottom:8}}>Role</Text>
        <RadioButton.Group onValueChange={setRole} value={role}>
          <View style={styles.radioRow}><RadioButton value="seller" /><Text>Seller</Text></View>
          <View style={styles.radioRow}><RadioButton value="buyer" /><Text>Buyer</Text></View>
          <View style={styles.radioRow}><RadioButton value="customer" /><Text>Customer</Text></View>
          <View style={styles.radioRow}><RadioButton value="admin" /><Text>Admin</Text></View>
        </RadioButton.Group>
        <UIButton variant="solid" onPress={onLogin} style={styles.button}>Login</UIButton>
        <View style={styles.linksRow}>
          <Link href="/register" style={styles.link}>Create account</Link>
          <Link href="/forgot" style={styles.link}>Forgot password?</Link>
        </View>
      </View>
    </View>
  );
}

const GREEN = '#2E7D32';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing(3),
  },
  brand: { fontSize: 36, fontWeight: '700', color: GREEN, marginBottom: 16 },
  heroImage: { width: 120, height: 120, marginBottom: 16 },
  headline: { fontSize: 28, fontWeight: '700', color: GREEN, textAlign: 'center', marginBottom: 6 },
  subheadline: { fontSize: 16, color: '#3A3A3A', textAlign: 'center', marginBottom: 20 },
  form: { width: '100%', maxWidth: 420 },
  input: { marginBottom: 12 },
  button: { marginTop: 8, paddingVertical: 4 },
  linksRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  link: { color: GREEN },
  radioRow: { flexDirection:'row', alignItems:'center', gap:8 },
});
