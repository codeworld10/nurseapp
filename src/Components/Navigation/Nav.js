import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientLogin from '../../screens/ClientLogin';
import Welcome from '../../screens/Welcome';
import NurseLogin from '../../screens/NurseLogin';
import ClientSignup from '../../screens/ClientSignup';
import NurseSignup from '../../screens/NurseSignup';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="ClientLogin" component={ClientLogin} />
    <Stack.Screen name="NurseLogin" component={NurseLogin} />
    <Stack.Screen name="ClientSignup" component={ClientSignup} />
    <Stack.Screen name="NurseSignup" component={NurseSignup} />
  </Stack.Navigator>
  )
}

export default Nav;
