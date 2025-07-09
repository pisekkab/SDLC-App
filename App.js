import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// ไม่ควรมี View, Text หรือ Component อื่นๆ ที่ไม่ได้อยู่ใน screens/ ใน App.js โดยตรง
// import { View, Text, StyleSheet } from 'react-native'; // บรรทัดนี้อาจจะถูกลบออกไปถ้าไม่มีการใช้ View/Text ใน App.js โดยตรง

import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'; // สำหรับไอคอน

// นำเข้าหน้าจอต่างๆ
import HomeScreen from './screens/HomeScreen';
import LessonsMenuScreen from './screens/LessonsMenuScreen';
import LessonDetailScreen from './screens/LessonDetailScreen';
import QuizScreen from './screens/QuizScreen';
// import ProfileScreen from './screens/ProfileScreen'; // หากมีหน้า Profile

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LessonsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LessonsMenu" component={LessonsMenuScreen} />
      <Stack.Screen name="LessonDetail" component={LessonDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
              return <AntDesign name={iconName} size={size} color={color} />;
            } else if (route.name === 'Lessons') {
              iconName = focused ? 'book' : 'book';
              return <Feather name={iconName} size={size} color={color} />;
            } else if (route.name === 'Quiz') {
              iconName = focused ? 'questioncircleo' : 'questioncircleo';
              return <AntDesign name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#6A5ACD',
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: {
            backgroundColor: '#2A2A5A',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 80,
            paddingBottom: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Lessons" component={LessonsStack} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ไม่ควรมี StyleSheet.create หรือโค้ด UI อื่นๆ สำหรับ App.js โดยตรง ถ้า App.js ทำหน้าที่เป็นแค่ Navigator
// const styles = StyleSheet.create({
//   // ...
// });