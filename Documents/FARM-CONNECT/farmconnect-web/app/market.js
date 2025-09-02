import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { marketItems } from '../services/market';
import UICard from '../components/ui/UICard';
import UIButton from '../components/ui/UIButton';
import { colors, spacing } from '../theme/theme';

export default function Market() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market</Text>
      <View style={styles.grid}>
        {marketItems.map((m) => (
          <UICard key={m.id} title={m.name} subtitle={`XAF ${m.price}/kg`} style={styles.card}>
            <Text>{m.description}</Text>
            <UIButton variant="solid" style={{ marginTop: spacing(1) }}>Order</UIButton>
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
