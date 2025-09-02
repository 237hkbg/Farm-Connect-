import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import UIInput from '../components/ui/UIInput';
import UIButton from '../components/ui/UIButton';
import { colors, spacing } from '../theme/theme';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const onSubmit = () => alert('Password reset link sent (mock).');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <View style={styles.form}>
        <UIInput label="Email" value={email} onChangeText={setEmail} />
        <UIButton variant="solid" onPress={onSubmit}>Send Reset Link</UIButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) },
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) },
  form: { width:'100%', maxWidth:420 },
  input: { marginBottom:12 },
});
