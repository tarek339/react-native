import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {
  Authentication,
  CheckEmail,
  Home,
  ResetInfo,
  ResetPassword,
  SafeArea,
  Settings,
  VerifyAccount,
  VerifyInfo,
} from './src/screens';

axios.defaults.baseURL = 'http://192.168.188.65:4000';

const Stack = createNativeStackNavigator();
const customScreen = {
  headerShown: false,
  contentStyle: {backgroundColor: 'transparent'},
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeArea>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Authentication"
              component={Authentication}
              options={customScreen}
            />
            <Stack.Screen
              name="CheckEmail"
              component={CheckEmail}
              options={customScreen}
            />
            <Stack.Screen
              name="ResetInfo"
              component={ResetInfo}
              options={customScreen}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={customScreen}
            />
            <Stack.Screen
              name="VerifyInfo"
              component={VerifyInfo}
              options={customScreen}
            />
            <Stack.Screen
              name="VerifyEmail"
              component={VerifyAccount}
              options={customScreen}
            />
            <Stack.Screen name="Home" component={Home} options={customScreen} />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={customScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeArea>
    </Provider>
  );
}
