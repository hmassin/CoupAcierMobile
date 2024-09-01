import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientTypeSelectionScreen from './app/(tabs)/SelectionInscription';
import ParticulierInscriptionScreen from './screens/ParticulierInscription';
import ProfessionnelInscriptionScreen from './screens/ProfessionnelInscription';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectionInscription">
        <Stack.Screen
          name="SelectionInscription"
          component={ClientTypeSelectionScreen}
          options={{ title: 'Sélection de Client' }}
        />
        <Stack.Screen
          name="ParticulierInscription"
          component={ParticulierInscriptionScreen}
          options={{ title: 'Inscription Particulier' }}
        />
        <Stack.Screen
          name="ProfessionnelInscription"
          component={ProfessionnelInscriptionScreen}
          options={{ title: 'Inscription Professionnel' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
