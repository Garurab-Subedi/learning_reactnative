import { View, Text} from 'react-native';
import * as React from 'react';
// import WelcomeScreen from './welcomescreen';
// import FeedbackForm from './FeedBackForm';
import LoginScreen from './LoginScreen';
// import MenuItems from './MenuItems';


export default function HomeScreen() {
  return (
    <View style={{ flex: 1}}> 
    {/* <WelcomeScreen/> */}
    {/* <MenuItems/> */}
    {/* <FeedbackForm/> */}
    <LoginScreen/>
    </View>
  );
}

