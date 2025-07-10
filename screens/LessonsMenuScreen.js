import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const lessonsData = [
  { id: '1', title: 'ขั้นตอนที่ 1 : การวางแผน', description: 'Planning' },
  { id: '2', title: 'ขั้นตอนที่ 2 : การวิเคราะห์', description: 'Analysis' },
  { id: '3', title: 'ขั้นตอนที่ 3 : การออกแบบ', description: 'Design' },
  { id: '4', title: 'ขั้นตอนที่ 4 : การพัฒนาและติดตั้ง', description: 'Implementation' },
  { id: '5', title: 'ขั้นตอนที่ 5 : การบำรุงรักษา', description: 'Maintenance' },
];

export default function LessonsMenuScreen({ navigation }) {
  const [visitedLessons, setVisitedLessons] = useState(new Set());
  const allLessonsVisited = visitedLessons.size === lessonsData.length;

  // Add this useEffect hook
  useEffect(() => {
    Alert.alert(
      "หมายเหตุ",
      "คุณต้องเข้าชมบทเรียนทั้งหมดก่อนจึงจะสามารถทำแบบทดสอบได้"
    );
  }, []); // The empty array ensures this runs only once when the component mounts

  const handleLessonVisited = (lessonId) => {
    setVisitedLessons(prev => new Set(prev).add(lessonId));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.lessonItem}
      onPress={() => navigation.navigate('LessonDetail', {
        lessonId: item.id,
        lessonTitle: item.title,
        onLessonVisited: handleLessonVisited
      })}
    >
      <Text style={styles.lessonTitle}>{item.title}</Text>
      <Text style={styles.lessonDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  const handleQuizPress = () => {
    if (allLessonsVisited) {
      // ส่งพารามิเตอร์ canStartQuiz ไปยัง QuizScreen
      navigation.navigate('Quiz', { canStartQuiz: true });
    } else {
      Alert.alert("ยังไม่ครบทุกบทเรียน", "กรุณาเข้าชมบทเรียนทั้งหมดก่อนจึงจะสามารถทำแบบทดสอบได้");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>เลือกบทเรียน</Text>
      <FlatList
        data={lessonsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={[styles.quizButton, !allLessonsVisited && styles.quizButtonDisabled]}
        onPress={handleQuizPress}
        disabled={!allLessonsVisited}
      >
        <Text style={styles.quizButtonText}>ทำแบบทดสอบ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E3F',
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  lessonItem: {
    backgroundColor: '#2A2A5A',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  lessonDescription: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,
  },
  quizButton: {
    backgroundColor: '#6A5ACD',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  quizButtonDisabled: {
    backgroundColor: '#555',
  },
  quizButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});