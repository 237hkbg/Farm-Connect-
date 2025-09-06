import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useCrops } from '../stores/crops';
import { useAuth } from '../stores/auth';
import UIInput from '../components/ui/UIInput';
import UIButton from '../components/ui/UIButton';
import { spacing, colors } from '../theme/theme';

export default function AddCrop() {
  const router = useRouter();
  const user = useAuth((s) => s.user);
  const addCrop = useCrops((s) => s.addCrop);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const onSubmit = () => {
    if (!name || !quantity || !price) {
      alert('Please fill in name, quantity and price.');
      return;
    }
    addCrop({ name, quantity, price, location });
    alert('Crop submitted! Waiting for admin approval.');
    router.replace('/(seller)/dashboard');
  };

  if (!user || user.role !== 'seller') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sellers Only</Text>
        <Text style={{ textAlign:'center', marginBottom: spacing(2) }}>Please log in as a seller to add crops.</Text>
        <UIButton variant="solid" onPress={() => router.replace('/login')}>Go to Login</UIButton>
      </View>
    );
  }

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
