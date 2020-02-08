import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import UserForm from './app/screens/UserForm';

const App = () => {
  return (
    <PaperProvider>
      <UserForm />
    </PaperProvider>
  );
};

export default App;
