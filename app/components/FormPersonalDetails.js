import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Button } from 'react-native-paper';
import { TextField } from 'react-native-material-textfield';

import { useBackHandler } from '../hooks/useBackHandler';

const FormPersonalDetails = props => {
  const { nextStep, prevStep, values, handleChange } = props;

  const next = () => {
    nextStep();
  };

  const prev = () => {
    prevStep();
  };

  const handleBackPress = () => {
    prevStep();
    return true;
  };

  useBackHandler(handleBackPress);

  return (
    <View style={Styles.container}>
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
      <View style={Styles.btnContainer}>
        <Button
          mode="contained"
          onPress={prev}
          color={Colors.red700}
          style={Styles.btn}>
          Prev Step
        </Button>
        <Button
          mode="contained"
          onPress={next}
          color={Colors.red700}
          style={Styles.btn}>
          Next Step
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
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default FormPersonalDetails;
