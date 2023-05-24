import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Library from "./src/screens/Library";
import Intro from "./src/screens/intro";
import Boarding from "./components/Boarding/boarding";
import MenuScreen from "./src/screens/unidades/menus/MenuScreen";
import Subtemas from "./components/Subtemas";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SubtemaScreen from "./src/screens/SubtemaScreen";
import EjerciciosScreen from "./src/screens/EjerciciosScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialBottomTabNavigator();


  return (
    
    <NavigationContainer>
  <Stack.Navigator>
         <Stack.Screen name="onboarding" component={Boarding} 
        options={{title:'',headerStyle:{
          backgroundColor: '#000'
        }}}/>
        <Stack.Screen name="library" component={Library} options={{title:'',headerStyle:{
          backgroundColor: '#000'
        }}}/>
        <Stack.Screen name="MenuScreen" component={MenuScreen} 
        options={{title:'',headerStyle:{
          backgroundColor: '#000'
        }}}/>
         <Stack.Screen name="subTemas" component={Subtemas} 
        options={{
          
          title:'',headerStyle:{
          backgroundColor: '#000'}
          
          
          }}/>
           <Stack.Screen name="SubtemaScreen" component={SubtemaScreen} 
        options={{
          
          title:'',headerStyle:{
          backgroundColor: '#000'}
          
          
          }}/>
           <Stack.Screen name="EjerciciosScreen" component={EjerciciosScreen} 
        options={{
          
          title:'',headerStyle:{
          backgroundColor: '#000'}
          
          
          }}/>
          


      
    </Stack.Navigator>
    </NavigationContainer>
  );
}
