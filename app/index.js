// Importing necessary libraries and components
import React from 'react'; // Import React to use JSX and components
import { View, Image, StyleSheet } from 'react-native'; // View is like a div, Image is for images, StyleSheet is for styling
import { Text } from 'react-native-paper'; // Text is used to show text on the screen
import TopNav from '../components/ui/TopNav'; // Custom top navigation bar
import Footer from '../components/ui/Footer'; // Custom footer component
import { colors, spacing } from '../theme/theme'; // Custom colors and spacing for styling
import UIButton from '../components/ui/UIButton'; // Custom button component
import { useRouter } from 'expo-router'; // useRouter lets us navigate between screens

// This is the Home screen component
export default function HomeScreen() {
  const router = useRouter(); // Used to navigate to other screens
  return (
    <View style={styles.container}> {/* View is like a div, used for layout */}
      <TopNav /> {/* Top navigation bar at the top of the screen */}

      {/* Brand */}
      <Text style={styles.brand}>FarmConnect</Text> {/* Text displays the app name */}

      {/* Illustration */}
      <Image
        source={require('../assets/icon.png')} // Image to show the app icon
        resizeMode="contain" // Makes the image fit nicely
        style={styles.heroImage} // Custom style for the image
      />

      {/* Headline */}
      <Text style={styles.headline}>Welcome to FarmConnect</Text> {/* Main headline text */}
      <Text style={styles.subheadline}>Connect farmers, buyers, and sellers easily.</Text> {/* Subheadline text */}

      <UIButton variant="solid" onPress={() => router.push('/login')} style={{ marginBottom: spacing(3) }}>
        Get Started {/* Button to go to the login screen */}
      </UIButton>

      <View style={styles.bottomNav}> {/* View for the bottom navigation links */}
        <Text style={styles.bottomLink}>Login · Profile · Advice</Text> {/* Text for navigation links */}
      </View>
      <Footer /> {/* Footer at the bottom of the screen */}
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
