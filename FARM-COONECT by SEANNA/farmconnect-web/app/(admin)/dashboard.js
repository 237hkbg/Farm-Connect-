import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Badge } from 'react-native-paper';
import { useCrops } from '../../stores/crops';
import { useAuth } from '../../stores/auth';
import UICard from '../../components/ui/UICard';
import UIButton from '../../components/ui/UIButton';
import { spacing, colors } from '../../theme/theme';
import { useRouter } from 'expo-router';

export default function AdminDashboard() {
  const router = useRouter();
  const user = useAuth((s) => s.user);
  const items = useCrops((s) => s.items);
  const approve = useCrops((s) => s.approve);
  const reject = useCrops((s) => s.reject);

  const pending = items.filter((c) => c.status === 'pending');
  const approved = items.filter((c) => c.status === 'approved');
  const rejected = items.filter((c) => c.status === 'rejected');

  if (!user || user.role !== 'admin') {
    return (
      <View style={styles.container}> 
        <Text style={styles.title}>Admin Only</Text>
        <Text style={{ textAlign:'center', marginBottom: spacing(2) }}>Please log in as an admin to review submissions.</Text>
        <UIButton variant="solid" onPress={() => router.replace('/login')}>Go to Login</UIButton>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <Text style={{marginBottom:12}}>Review crop submissions from farmers and approve or reject.</Text>

      <Text style={styles.section}>Pending <Badge>{pending.length}</Badge></Text>
      <View style={styles.grid}>
        {pending.map((c) => (
          <UICard key={c.id} title={c.name} subtitle={`${c.quantity} kg • XAF ${c.price}/kg • ${c.location}`} style={styles.card}>
            <Text>Seller: {c.seller}</Text>
            <View style={styles.row}>
              <UIButton variant="solid" onPress={() => approve(c.id)} style={styles.btnApprove}>Approve</UIButton>
              <UIButton variant="outline" onPress={() => reject(c.id)} style={styles.btnReject}>Reject</UIButton>
            </View>
          </UICard>
        ))}
      </View>

      <Text style={styles.section}>Approved <Badge>{approved.length}</Badge></Text>
      <View style={styles.grid}>
        {approved.map((c) => (
          <UICard key={c.id} title={c.name} subtitle={`${c.quantity} kg • XAF ${c.price}/kg • ${c.location}`} style={styles.card}>
            <Text>Status: Approved</Text>
          </UICard>
        ))}
      </View>

      <Text style={styles.section}>Rejected <Badge>{rejected.length}</Badge></Text>
      <View style={styles.grid}>
        {rejected.map((c) => (
          <UICard key={c.id} title={c.name} subtitle={`${c.quantity} kg • XAF ${c.price}/kg • ${c.location}`} style={styles.card}>
            <Text>Status: Rejected</Text>
          </UICard>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, padding: spacing(3) },
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(1.5), textAlign:'center' },
  section: { marginTop:16, marginBottom:8, fontSize:20, fontWeight:'700', color: colors.primaryDark, textAlign:'center' },
  grid: { flexDirection:'row', flexWrap:'wrap', gap:12, justifyContent:'center' },
  card: { width:300, marginBottom: spacing(1) },
  row: { flexDirection:'row', gap:8, marginTop: spacing(1) },
  btnApprove: {},
  btnReject: {},
});
