import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ResultScreen } from './screens/result';
import { UserData } from './data/leaderboard';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Result: {
    data:UserData[] | null
    searchData:UserData | null
  };
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
