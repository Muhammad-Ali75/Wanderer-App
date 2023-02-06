import React from 'react';
import { Provider as AuthProvider } from './src/Context/AuthContext';
import { NavContainer } from './src/Screens/NavContainer';

export default function App() {
  return (
    <AuthProvider>
      <NavContainer />
    </AuthProvider>
  );
}
