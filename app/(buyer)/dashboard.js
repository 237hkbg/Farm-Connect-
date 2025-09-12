import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import UIButton from '../../components/ui/UIButton';
import { colors, spacing } from '../../theme/theme';
import { useAuth } from '../../stores/auth';
import { useRouter } from 'expo-router';

export default function BuyerDashboard() {
  const user = useAuth((s) => s.user);
  const router = useRouter();

  if (!user || user.role !== 'buyer') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Buyers Only</Text>
        <Text style={{ textAlign:'center', marginBottom: spacing(2) }}>Please log in as a buyer to access this dashboard.</Text>
        <UIButton variant="solid" onPress={() => router.replace('/login')}>Go to Login</UIButton>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buyer Dashboard</Text>
      <Text>Browse crops, place orders, leave comments.</Text>
      <UIButton variant="solid" style={{marginTop: spacing(2)}} onPress={() => router.push('/market')}>Go to Market</UIButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) },
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) },
});
