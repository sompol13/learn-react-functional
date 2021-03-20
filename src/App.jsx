import React from 'react';
import { AppProvider, useApp } from './contexts/app-context';
import FirstLevel from './components/FirstLevel';

const App = () => {
  const { getToken, restoreToken } = useApp();

  return (
    <div>
      <button onClick={() => restoreToken('lCvWuxIVAi')}>Sign In</button>
      <h4>token: {getToken()}</h4>
      <FirstLevel />
    </div>
  );
}

export default () => {
  return (
    <AppProvider >
      <App />
    </AppProvider>
  )
}