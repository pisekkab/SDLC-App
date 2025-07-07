import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'; // สำหรับไอคอน

// นำเข้าหน้าจอต่างๆ
import HomeScreen from './screens/HomeScreen';
import LessonsMenuScreen from './screens/LessonsMenuScreen';
import LessonDetailScreen from './screens/LessonDetailScreen';
import QuizScreen from './screens/QuizScreen';
// import ProfileScreen from './screens/ProfileScreen'; // หากมีหน้า Profile

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator สำหรับหน้า Lessons (เพื่อให้สามารถกดเข้าสู่ LessonDetail ได้)
function LessonsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // ซ่อน Header ของ Stack Navigator
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
            // เพิ่มเงื่อนไขสำหรับ Profile ถ้ามี
            // else if (route.name === 'Profile') {
            //   iconName = focused ? 'user' : 'user';
            //   return <AntDesign name={iconName} size={size} color={color} />;
            // }
          },
          tabBarActiveTintColor: '#6A5ACD', // สีของไอคอนและข้อความเมื่อ Active
          tabBarInactiveTintColor: '#ccc', // สีเมื่อ Inactive
          tabBarStyle: {
            backgroundColor: '#2A2A5A', // สีพื้นหลังของ Tab Bar
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 80, // ความสูงของ Tab Bar
            paddingBottom: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          headerShown: false, // ซ่อน Header ของ Tab Navigator
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Lessons" component={LessonsStack} /> {/* ใช้ Stack Navigator สำหรับ Lessons */}
        <Tab.Screen name="Quiz" component={QuizScreen} />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}