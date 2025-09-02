import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, RadioButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import UIInput from '../components/ui/UIInput';
import UIButton from '../components/ui/UIButton';
import { colors, spacing } from '../theme/theme';

export default function RegisterScreen() {
  const router = useRouter();
  const [role, setRole] = useState('farmer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.form}>
        <UIInput label="Full Name" value={name} onChangeText={setName} />
        <UIInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
        <UIInput label="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Text style={{marginBottom:8}}>Role</Text>
        <RadioButton.Group onValueChange={setRole} value={role}>
          <View style={styles.radioRow}><RadioButton value="farmer" /><Text>Farmer/Seller</Text></View>
          <View style={styles.radioRow}><RadioButton value="buyer" /><Text>Buyer</Text></View>
        </RadioButton.Group>
        <UIButton variant="solid" onPress={onSubmit} style={styles.button}>Create Account</UIButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) },
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) },
  form: { width:'100%', maxWidth:460 },
  input: { marginBottom:12 },
  radioRow: { flexDirection:'row', alignItems:'center', gap:8 },
  button: { marginTop:12 }
});
