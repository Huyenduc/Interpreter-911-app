import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { routeOverlayOption } from './routeOptions';
import { MainStackScreen } from './stacks/MainStack';

const RootStack = createStackNavigator();

export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator screenOptions={{ presentation: 'modal', ...routeOverlayOption }}>
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
