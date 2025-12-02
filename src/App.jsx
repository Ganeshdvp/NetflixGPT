import React from 'react';
import { Body } from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { useFirebaseAuthChange } from './hooks/useFirebaseAuthChange';

function AppWrapper(){
  useFirebaseAuthChange(); // initialize auth listner and calling inside component under Provider

  return <Body/>;
}



function App() {
  
  return (
    <>
      <Provider store={appStore}>
        <AppWrapper/>
      </Provider>
    </>
  )
}

export default App
