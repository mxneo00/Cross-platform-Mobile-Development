import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type Entry = {
  id: string;
  content: string;
};

type RootParamList = {
  Home: undefined;
  Journal: undefined;
  NewEntry: undefined;
};

const Tab = createBottomTabNavigator<RootParamList>();

function HomeTab() {
  return(
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to your Journal!</Text>
    <Text>Use the tabs below to navigate.</Text>
  </View>
  );
}

function JournalTab({entries}: {entries: Entry[]}) {
  return (
    <View style={styles.entryContainer}>
      <Text style={styles.title}>Journal Entries</Text>
      {entries.length === 0 && <Text style={styles.text}>No entries yet.</Text>}
      {entries.map((entry, index)=> (
        <View key={entry.id} style={styles.entryItem}>
          <Text style={styles.entryLabel}>Entry {index + 1}:</Text>
          <Text>{entry.content}</Text>
        </View>
      ))}
    </View>
  );
}

function NewEntryTab({entries, setEntries}: {entries: Entry[], setEntries: React.Dispatch<React.SetStateAction<Entry[]>>}) {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.entryContainer}>
      <Text style={styles.title}>New Journal Entry</Text>

      <TextInput
        placeholder="Write something..."
        multiline={true}
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      <Button title="Save Entry" onPress={() => {
        if (text.trim() !== '') {
          setEntries(prevEntries => [...prevEntries, { id: Date.now().toString(), content: text }]);
          setText('');
        }
      }} />
    </View>
  );
}


export default function App() {
  const [entries, setEntries] = useState<Entry[]>([]);
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Journal">
          {() => <JournalTab entries={entries} />}
        </Tab.Screen>
        <Tab.Screen name="NewEntry">
          {() => (
            <NewEntryTab
              entries={entries}
              setEntries={setEntries}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  entryContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
  input: {
  height: 150,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 12,
  marginBottom: 16,
  },
  entryItem: {
    marginBottom: 12,
  },
  entryLabel: {
    fontWeight: 'bold',
  },
});
