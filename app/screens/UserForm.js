import React, { useState } from 'react';
import { Text, StatusBar, View, StyleSheet } from 'react-native';
import { Appbar, Colors } from 'react-native-paper';

import Confirm from '../components/Confirm';
import Success from '../components/Success';
import FormUserDetails from '../components/FormUserDetails';
import FormPersonalDetails from '../components/FormPersonalDetails';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [forms, setForms] = useState({
    firstName: '',
    lastName: '',
    email: '',
    job: '',
    city: '',
    country: '',
  });

  const handleChange = inputName => value => {
    setForms({
      ...forms,
      [inputName]: value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderForm = () => {
    const { firstName, lastName, email, job, city, country } = forms;
    const values = { firstName, lastName, email, job, city, country };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            step={step}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        break;
    }
  };

  return (
    <View>
      <Appbar.Header style={Styles.appBar}>
        <StatusBar backgroundColor={Colors.red900} barStyle="light-content" />
        <Appbar.Content title="User Form Details" />
      </Appbar.Header>
      {step <= 2 && (
        <View style={Styles.stepContainer}>
          <Text style={Styles.step}>Step {step}/2</Text>
        </View>
      )}
      {renderForm()}
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
  stepContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  btn: {
    marginTop: 20,
  },
});

export default UserForm;
