import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { COLORS } from './constants';

export default function TopNav() {
  return (
    <View style={styles.topNav}>
      <Link href="/" style={styles.link}>Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  topNav: { position:'absolute', top:16, right:16, flexDirection:'row', flexWrap:'wrap', gap:16 },
  link: { color: COLORS.greenDark, fontSize: 16 },
});
