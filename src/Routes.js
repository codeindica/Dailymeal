/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useSelector} from 'react-redux';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{headerShown: false}}
    />
  </AuthStack.Navigator>
);

const AppScreen = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  const token = useSelector(state => state.appData.token);
  return (
    <RootStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {token ? (
        <RootStack.Screen
          name="App"
          component={AppScreen}
          options={{headerShown: false}}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthScreen}
          options={{headerShown: false}}
        />
      )}
    </RootStack.Navigator>
  );
};

export default Routes;
