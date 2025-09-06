import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import UICard from '../components/ui/UICard';
import { colors, spacing } from '../theme/theme';
import { useCrops } from '../stores/crops';
import { useAuth } from '../stores/auth';
import UIButton from '../components/ui/UIButton';
import { useRouter } from 'expo-router';

export default function ViewCrops() {
  const router = useRouter();
  const user = useAuth((s) => s.user);
  const approved = useCrops((s) => s.approved());

  if (!user || user.role !== 'seller') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sellers Only</Text>
        <Text style={{ textAlign:'center', marginBottom: spacing(2) }}>Please log in as a seller to view your approved crops.</Text>
        <UIButton variant="solid" onPress={() => router.replace('/login')}>Go to Login</UIButton>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Approved Crops</Text>
      <View style={styles.grid}>
        {approved.map((c) => (
          <UICard key={c.id} title={c.name} subtitle={`${c.quantity} kg • XAF ${c.price}/kg`} style={styles.card}>
            <Text>{c.location}</Text>
          </UICard>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, padding: spacing(3) },
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(2), textAlign:'center', marginTop: spacing(6) },
  grid: { flexDirection:'row', flexWrap:'wrap', gap:12, justifyContent:'center' },
  card: { width:280 },
});
