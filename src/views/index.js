import React, {useState} from 'react';
import User from './User';
import Home from './Home';
import Introduction from './Introduction';
import Rank from './Rank';
import Play from './Play';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default RootComponents = () => {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState('');
  const [maxScore, setMaxScore] = useState(0);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="User"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="User">
          {props => <User {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => <Home {...props} user={user} maxScore={maxScore} />}
        </Stack.Screen>
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="Rank" component={Rank} />
        <Stack.Screen name="Play">
          {props => (
            <Play {...props} maxScore={maxScore} setMaxScore={setMaxScore} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
