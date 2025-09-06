import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { colors, spacing } from '../theme/theme';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact & Help</Text>
      <Text>Email: support@farmconnect.africa</Text>
      <Text>FAQ: Coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) },
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) },
});
