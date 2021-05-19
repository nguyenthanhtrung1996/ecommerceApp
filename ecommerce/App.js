import React, { useState } from "react";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage";
import { createStore } from 'redux';
import rootReducer from "./reducers";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CartPage from "./pages/CartPage";

const Stack = createStackNavigator();

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Cart" component={CartPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;