import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function App() {
  // Declare state variable 'count' with initial value 0
  // setCount is the function to update it
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.buttonRow}>
      <Button
      title="Decrease"
      onPress={() => setCount(count - 1)}
      color="#F44336"
      />
      <Button
      title="Increase"
      onPress={() => setCount(count + 1)}
      color="#4CAF50"
      />
      </View>
      <Button
      title="Reset"
      onPress={() => setCount(0)}
      color="#9E9E9E"
      />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    },
    count: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 30,
    },
    buttonRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
    },
});