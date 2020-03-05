import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Components/Home';
import OTPScreen from './Components/OTPScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
   render() {
     return (      
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
    </Stack.Navigator>
  </NavigationContainer>
   );
  }
 }


