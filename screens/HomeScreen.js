import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; // Import Image
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/logo.png')} // Adjust the path to your logo image
          style={styles.logo}
        />
        <Text style={styles.title}>SDLC</Text>
        <Text style={styles.title}>Software Development Life Cycle</Text>
        <Text style={styles.subtitle}>วงจรการพัฒนาระบบ</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Lessons')}
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
  logo: { // Add a new style for your logo
    width: 350, // Adjust width as needed
    height: 350, // Adjust height as needed
    marginBottom: -100, // Space between logo and text
    resizeMode: 'contain', // Or 'cover', 'stretch', etc.
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