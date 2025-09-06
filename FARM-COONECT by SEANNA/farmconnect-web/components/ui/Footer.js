import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { colors, spacing } from '../../theme/theme';

export default function Footer() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>© {new Date().getFullYear()} FarmConnect</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { position:'absolute', bottom: spacing(1.5), width:'100%', alignItems:'center' },
  text: { color: colors.primaryDark, opacity: 0.6 },
});
