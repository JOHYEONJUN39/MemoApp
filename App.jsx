import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import MemoListScreen from './src/screens/MemoListScreen.tsx';
import MemoEditScreen from './src/screens/MemoEditScreen.tsx';
import MemoCreateScreen from './src/screens/MemoCreateScreen.tsx';
import MemoDetailScreen from './src/screens/MemoDetailScreen.tsx';
import LoginScreen from './src/screens/LoginScreen.tsx';
import SignUpScreen from './src/screens/SignUpScreen.tsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#fff' },
          headerTitle: 'MemoApp',
          headerTintColor: '#fff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
