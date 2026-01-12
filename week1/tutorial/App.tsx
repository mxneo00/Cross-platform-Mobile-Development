import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const isHighlighted = true;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Text style={styles.subtitle}>Let's get started!</Text>
      <Text style={styles.body}>
        This is a simple React Native application built with Expo. 
        You can customize this template to create your own amazing app.
      </Text>
      {/* Inline Styling */}
      <Text style={{ fontSize: 12, color: 'blue'}}>Inline</Text>
      {/* Style Array - combines multiple styles */}
      <Text style={[styles.text, styles.bold]}>Style Array</Text>
      {/* Conditional Styling */}
      <Text style={{ color: isHighlighted ? 'red' : 'black' }}>Conditional Styling</Text>
      {/* Override with inline */}
      <Text style={[styles.body, { fontSize: 20 }]}>Override with inline</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 38, 
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  body: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
  },
  text: {
    fontSize: 16,
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
  },
});
