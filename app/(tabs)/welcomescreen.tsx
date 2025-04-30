import * as React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 0.1, backgroundColor: 'yellow'}}>
    <Text
      style={{
        padding: 20,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
      }}>
      Welcome to Little Lemon
    </Text>
  </View>
  );
}