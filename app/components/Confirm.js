import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Button } from 'react-native-paper';
import { TextField } from 'react-native-material-textfield';

import { useBackHandler } from '../hooks/useBackHandler';

const Confirm = props => {
  const { nextStep, prevStep, values, handleChange } = props;

  const next = () => {
    nextStep();
  };

  const handleBackPress = () => {
    prevStep();
    return true;
  };

  useBackHandler(handleBackPress);

  return (
    <View>
      <Text style={Styles.step}>Confirm your data</Text>
      <View style={Styles.container}>
        <TextField
          label="Enter your First Name"
          value={values.firstName}
          onChangeText={handleChange('firstName')}
        />
        <TextField
          label="Enter your Last Name"
          value={values.lastName}
          onChangeText={handleChange('lastName')}
        />
        <TextField
          label="Enter your Email"
          value={values.email}
          onChangeText={handleChange('email')}
          keyboardType="email-address"
        />
        <TextField
          label="Enter your Job"
          value={values.job}
          onChangeText={handleChange('job')}
        />
        <TextField
          label="Enter your City"
          value={values.city}
          onChangeText={handleChange('city')}
        />
        <TextField
          multiline
          label="Enter your Country"
          value={values.country}
          onChangeText={handleChange('country')}
          onSubmitEditing={next}
        />
        <Button
          mode="contained"
          onPress={next}
          color={Colors.red700}
          style={Styles.btn}>
          Confirm and Continue
        </Button>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  appBar: {
    backgroundColor: Colors.red600,
  },
  step: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20,
    fontWeight: 'bold',
    color: Colors.grey600,
  },
  btn: {
    marginTop: 20,
  },
});

export default Confirm;
