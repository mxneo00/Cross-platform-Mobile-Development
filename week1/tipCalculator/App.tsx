import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [totalAmount, setTotalAmount] = useState('0.00');

  const calcTip = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercentage);
    const total = bill + (bill * tip /100);
    setTotalAmount(total.toFixed(2));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tip Calculator</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Bill Amount:</Text>
        {/* Bill TextInput */}
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter bill amount"
          value={billAmount}
          onChangeText={setBillAmount}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tip Percentage:</Text>
        {/* Tip Percentage TextInput */}
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Enter tip percentage"
          value={tipPercentage}
          onChangeText={setTipPercentage}
        />
      </View>
      {/* Calculate Button */}
      <View style={styles.buttonContainer}>
        <Button title="Calculate Tip" onPress={calcTip} />
      </View>
      {/* Display Result */}
      <View style={styles.resultContainer}>
        <Text style={styles.label}>Total Amount:</Text>
        {/* Display calculated total amount */}
        <Text>${totalAmount}</Text>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
});
