import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Button } from 'react-native-paper';
import { TextField } from 'react-native-material-textfield';

const FormUserDetails = props => {
  const { values, handleChange, nextStep } = props;

  const next = () => {
    nextStep();
  };

  return (
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
        onSubmitEditing={next}
      />
      <Button
        mode="contained"
        onPress={next}
        color={Colors.red700}
        style={Styles.btn}>
        Next Step
      </Button>
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

export default FormUserDetails;
