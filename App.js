import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Let's do this</Text>
        <Button
          title="Button title"
          color="#16A085"
          onPress={() => Alert.alert("Alert")}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
