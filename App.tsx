// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './screens/DetailsScreen';
import { Provider } from 'react-redux';
import store from './store';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

export default function App() {
    return (
      <Provider store={store}>
        <NavigationContainer independent={true}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Cart" component={CartStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
