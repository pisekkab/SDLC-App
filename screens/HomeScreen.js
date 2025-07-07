import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Unlock your coding</Text>
        <Text style={styles.title}>potential!</Text>
        <Text style={styles.subtitle}>Learn to code today!</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('LessonsMenu')} // เมื่อกดจะไปที่หน้า LessonsMenu
        >
          <LinearGradient
            colors={['#FF6B8B', '#6A5ACD']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Start Learning</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.indicatorContainer}>
          <View style={[styles.indicator, styles.activeIndicator]} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E3F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    borderRadius: 30,
    width: 250,
    height: 60,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#555',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#fff',
  },
});