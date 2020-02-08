import React from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { Colors } from 'react-native-paper';

import { useBackHandler } from '../hooks/useBackHandler';

const Success = () => {
  const exitApp = () => {
    BackHandler.exitApp();
    return true;
  };

  useBackHandler(exitApp);

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>
        Congratulation! your data has been completed filled, make sure you
        waiting for email confirmation
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginHorizontal: 25,
    textAlign: 'center',
    paddingTop: 300,
    lineHeight: 30,
    fontSize: 18,
    color: Colors.black,
  },
});

export default Success;
