import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import TopNav from '../components/ui/TopNav';
import Footer from '../components/ui/Footer';
import { colors, spacing } from '../theme/theme';
import UIButton from '../components/ui/UIButton';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TopNav />

      {/* Brand */}
      <Text style={styles.brand}>FarmConnect</Text>

      {/* Illustration */}
      <Image
        source={require('../assets/icon.png')}
        resizeMode="contain"
        style={styles.heroImage}
      />

      {/* Headline */}
      <Text style={styles.headline}>Welcome to FarmConnect</Text>
      <Text style={styles.subheadline}>Connect farmers, buyers, and sellers easily.</Text>

      <UIButton variant="solid" onPress={() => router.push('/login')} style={{ marginBottom: spacing(3) }}>
        Get Started
      </UIButton>

      <View style={styles.bottomNav}>
        <Text style={styles.bottomLink}>Login · Profile · Advice</Text>
      </View>
      <Footer />
    </View>
  );
}

const GREEN = colors.primaryDark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing(3),
  },
  
  brand: {
    fontSize: 36,
    fontWeight: '700',
    color: GREEN,
    marginBottom: spacing(2),
  },
  heroImage: {
    width: 160,
    height: 160,
    marginBottom: spacing(2),
  },
  headline: {
    fontSize: 28,
    fontWeight: '700',
    color: GREEN,
    textAlign: 'center',
    marginBottom: spacing(0.75),
  },
  subheadline: {
    fontSize: 16,
    color: colors.text,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: spacing(3.5),
  },
  bottomNav: {
    flexDirection: 'row',
    gap: spacing(3),
  },
  bottomLink: {
    color: colors.primary,
    fontSize: 16,
  },
});
