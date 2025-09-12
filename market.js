
import React from 'react'; // Import React to use JSX and components
import { View, StyleSheet } from 'react-native'; // View is like a div in HTML, StyleSheet is for styling
import { Text } from 'react-native-paper'; // Text is used to show text on the screen
import { marketItems } from '../services/market'; // Import the list of market items
import UICard from '../components/ui/UICard'; // Custom card component for displaying items
import UIButton from '../components/ui/UIButton'; // Custom button component
import { colors, spacing } from '../theme/theme'; // Custom colors and spacing for styling

// This is the Market screen component
export default function Market() {
  return (
    <View style={styles.container}> {/* View is like a div, used for layout */}
      <Text style={styles.title}>Market</Text> {/* Title for the market page */}
      <View style={styles.grid}> {/* View for arranging items in a grid */}
        {marketItems.map((m) => (
          <UICard key={m.id} title={m.name} subtitle={`XAF ${m.price}/kg`} style={styles.card}> {/* Card for each market item */}
            <Text>{m.description}</Text> {/* Description of the item */}
            <UIButton variant="solid" style={{ marginTop: spacing(1) }}>Order</UIButton> {/* Button to order the item */}
          </UICard>
        ))}
      </View>
    </View>
  );
}

// StyleSheet is used to define styles for the components, similar to CSS
const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: colors.background, padding: spacing(3) }, // flex:1 fills the screen
  title: { fontSize:28, fontWeight:'700', color: colors.primaryDark, marginBottom: spacing(2), textAlign:'center', marginTop: spacing(6) }, // style for the title text
  grid: { flexDirection:'row', flexWrap:'wrap', gap:12, justifyContent:'center' }, // style for the grid layout
  card: { width:280 }, // style for each card
});
