import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import UIButton from '../../components/ui/UIButton';
import { colors, spacing } from '../../theme/theme';
import { useAuth } from '../../stores/auth';

export default function SellerDashboard() {
  const router = useRouter();
  const user = useAuth((s) => s.user);

  if (!user || user.role !== 'seller') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sellers Only</Text>
        <Text style={{ textAlign:'center', marginBottom: spacing(2) }}>Please log in as a seller to access this dashboard.</Text>
        <UIButton variant="solid" onPress={() => router.replace('/login')}>Go to Login</UIButton>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seller/Farmer Dashboard</Text>
      <Text>Manage your crops, view buyer requests.</Text>
      <UIButton variant="solid" style={{marginTop: spacing(2)}} onPress={() => router.push('/add-crop')}>Add a Crop</UIButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, alignItems:'center', justifyContent:'center', padding: spacing(3) },
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5) },
});
