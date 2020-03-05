import { createStackNavigator } from 'react-navigation';
import Home from './Components/Home';
import OTPScreen from './Components/OTPScreen';

const Route = createStackNavigator({
  Home: { screen: Home },
  OTPScreen: { screen: OTPScreen},
},
{
    initialRouteName: 'Home',
}
);

export default Route;
