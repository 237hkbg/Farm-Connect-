import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { colors, spacing } from '../theme/theme';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About FarmConnect</Text>
      <Text style={{textAlign:'center', maxWidth:700}}>
        FarmConnect connects small-scale farmers with buyers, equipment, crop advice, and real-time prices.
        Our mission is to reduce post-harvest losses and increase profits across Africa.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) },
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) },
});
