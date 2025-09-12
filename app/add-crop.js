// Importing necessary libraries and components
import React, { useState } from 'react'; // useState lets us create variables that can change (state)
import { View, StyleSheet } from 'react-native'; // View is like a div in HTML, StyleSheet is for styling
import { Text } from 'react-native-paper'; // Text is used to show text on the screen
import { useRouter } from 'expo-router'; // useRouter lets us navigate between screens
import { useCrops } from '../stores/crops'; // Custom hook to access crops store
import { useAuth } from '../stores/auth'; // Custom hook to access authentication store
import UIInput from '../components/ui/UIInput'; // Custom input field component
import UIButton from '../components/ui/UIButton'; // Custom button component
import { spacing, colors } from '../theme/theme'; // Custom colors and spacing for styling

// This is the AddCrop screen component
export default function AddCrop() {
  const router = useRouter(); // Used to navigate to other screens
  const user = useAuth((s) => s.user); // Get the current user from the auth store
  const addCrop = useCrops((s) => s.addCrop); // Get the addCrop function from the crops store
  // State variables for the form fields
  const [name, setName] = useState(''); // Crop name
  const [quantity, setQuantity] = useState(''); // Crop quantity
  const [price, setPrice] = useState(''); // Crop price
  const [location, setLocation] = useState(''); // Crop location

  // Function to handle form submission
  const onSubmit = () => {
    if (!name || !quantity || !price) { // Check if required fields are filled
      alert('Please fill in name, quantity and price.'); // Show alert if not
      return;
    }
    addCrop({ name, quantity, price, location }); // Add the crop to the store
    alert('Crop submitted! Waiting for admin approval.'); // Show success message
    router.replace('/(seller)/dashboard'); // Go to seller dashboard
  };

  // If user is not a seller, show a message and a button to go to login
  if (!user || user.role !== 'seller') {
    return (
      <View style={styles.container}> {/* View is like a div, used for layout */}
        <Text style={styles.title}>Sellers Only</Text> {/* Text displays a title */}
        <Text style={{ textAlign:'center', marginBottom: spacing(2) }}>Please log in as a seller to add crops.</Text>
        <UIButton variant="solid" onPress={() => router.replace('/login')}>Go to Login</UIButton> {/* Button to go to login screen */}
      </View>
    );
  }

  // If user is a seller, show the add crop form
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Crop</Text>
      <View style={styles.form}>
        <UIInput label="Crop Name" value={name} onChangeText={setName} />
        <UIInput label="Quantity (kg)" value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
        <UIInput label="Price per kg (XAF)" value={price} onChangeText={setPrice} keyboardType="numeric" />
        <UIInput label="Location" value={location} onChangeText={setLocation} />
        <UIButton variant="solid" onPress={onSubmit}>Submit</UIButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) },
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) },
  form: { width:'100%', maxWidth:420 },
  input: { marginBottom: 12 },
});
