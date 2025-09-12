// Importing necessary libraries and components
import React from 'react'; // Import React to use JSX and components
import { View, StyleSheet } from 'react-native'; // View is like a div in HTML, StyleSheet is for styling
import { Text } from 'react-native-paper'; // Text is used to show text on the screen
import UICard from '../components/ui/UICard'; // Custom card component for displaying crops
import { colors, spacing } from '../theme/theme'; // Custom colors and spacing for styling
import { useCrops } from '../stores/crops'; // Custom hook to access crops store
import { useAuth } from '../stores/auth'; // Custom hook to access authentication store
import UIButton from '../components/ui/UIButton'; // Custom button component
import { useRouter } from 'expo-router'; // useRouter lets us navigate between screens

// This is the ViewCrops screen component
export default function ViewCrops() {
  const router = useRouter(); // Used to navigate to other screens
  const user = useAuth((s) => s.user); // Get the current user from the auth store
  const approved = useCrops((s) => s.approved()); // Get the list of approved crops

  // If user is not a seller, show a message and a button to go to login
  if (!user || user.role !== 'seller') {
    return (
      <View style={styles.container}> {/* View is like a div, used for layout */}
        <Text style={styles.title}>Sellers Only</Text> {/* Title for the page */}
        <Text style={{ textAlign:'center', marginBottom: spacing(2) }}>Please log in as a seller to view your approved crops.</Text> {/* Info message */}
        <UIButton variant="solid" onPress={() => router.replace('/login')}>Go to Login</UIButton> {/* Button to go to login screen */}
      </View>
    );
  }

  // If user is a seller, show the list of approved crops
  return (
    <View style={styles.container}> {/* View for the main content */}
      <Text style={styles.title}>Your Approved Crops</Text> {/* Title for the crops list */}
      <View style={styles.grid}> {/* View for arranging crops in a grid */}
        {approved.map((c) => (
          <UICard key={c.id} title={c.name} subtitle={`${c.quantity} kg 2 XAF ${c.price}/kg`} style={styles.card}> {/* Card for each crop */}
            <Text>{c.location}</Text> {/* Location of the crop */}
          </UICard>
        ))}
      </View>
    </View>
  );
}

// StyleSheet is used to define styles for the components, similar to CSS
const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, padding: spacing(3) },
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(2), textAlign:'center', marginTop: spacing(6) },
  grid: { flexDirection:'row', flexWrap:'wrap', gap:12, justifyContent:'center' },
  card: { width:280 },
});
