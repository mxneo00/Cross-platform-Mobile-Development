import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type RootParamList = {
  Home: undefined;
  Journal: undefined;
  NewEntry: undefined;
};

const Tab = createBottomTabNavigator<RootParamList>();


function HomeTab() {
  return(
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
  </View>
  );
}

function JournalTab() {
  return(
  <View style={styles.container}>
    <Text style={styles.title}>Journal</Text>
  </View>
  );
}

function NewEntryTab() {
  return(
  <View style={styles.container}>
    <Text style={styles.title}>New Entry</Text>
  </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Journal" component={JournalTab} />
        <Tab.Screen name="NewEntry" component={NewEntryTab} />
      </Tab.Navigator>
    </NavigationContainer>
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
  },
});
