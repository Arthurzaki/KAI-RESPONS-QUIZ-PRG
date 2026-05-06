import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import DashboardScreen from '../screens/DashboardScreen';
import FormLaporanScreen from '../screens/FormLaporan';
import ListRiwayatScreen from '../screens/History';
import { MaterialIcons } from '@expo/vector-icons';
import DetailScreen from '../screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); 

function HistoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryList"
        component={ListRiwayatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Detail Laporan' }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Dashboard" component={DashboardScreen}           options={{
            tabBarLabel: 'Beranda',
            tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />
            }} />
                <Tab.Screen name="Form Laporan" component={FormLaporanScreen} options={{
            tabBarLabel: 'Buat Laporan',
            tabBarIcon: ({ color }) => <MaterialIcons name="add-box" size={24} color={color} />
          }} />
                <Tab.Screen name="History" component={HistoryStack} options={{
            tabBarLabel: 'Riwayat',
            tabBarIcon: ({ color }) => <MaterialIcons name="history" size={24} color={color} />
          }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}