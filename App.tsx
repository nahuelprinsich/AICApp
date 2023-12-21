import { Provider } from 'react-redux';
import ApplicationNavigator from './src/navigators/Application';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { store, persistor } from './src/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;