import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './src/design/colors';
import {Provider} from 'react-redux';
import {Store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Routes';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor={colors.bg} barStyle="dark-content" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
      <FlashMessage position="bottom" duration={10000} />
    </Provider>
  );
}
