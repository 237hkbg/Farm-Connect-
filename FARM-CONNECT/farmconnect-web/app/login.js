import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, RadioButton } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { useAuth } from '../stores/auth';
import UIInput from '../components/ui/UIInput';
import UIButton from '../components/ui/UIButton';
import { colors, spacing } from '../theme/theme';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const loginStore = useAuth();

  const onLogin = () => {
    loginStore.login(email, password);
    loginStore.setRole(role);
    if (role === 'buyer' || role === 'customer') router.replace('/(buyer)/dashboard');
    else if (role === 'admin') router.replace('/(admin)/dashboard');
    else router.replace('/(seller)/dashboard');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.brand}>FarmConnect</Text>
      <Image source={require('../assets/icon.png')} resizeMode="contain" style={styles.heroImage} />

      <Text style={styles.headline}>Welcome to FarmConnect</Text>
      <Text style={styles.subheadline}>Connect farmers, buyers, and sellers easily.</Text>

      <View style={styles.form}>
        <UIInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
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
