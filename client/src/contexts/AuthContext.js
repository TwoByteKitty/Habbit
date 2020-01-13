import React from 'react';

const AuthContext = React.createContext({
  user: undefined,
  authToken: undefined,
  updateUser: () => undefined,
  addTask: () => undefined,
  completeTask: () => undefined,
  woundPet: () => undefined,
  healPet: () => undefined,
  onLogin: () => undefined,
  onLogout: () => undefined
});

export default AuthContext;
