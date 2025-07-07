import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const lessonsData = [
  { id: '1', title: 'บทเรียนที่ 1: พื้นฐาน Python', description: 'เรียนรู้ตัวแปรและชนิดข้อมูล' },
  { id: '2', title: 'บทเรียนที่ 2: Control Flow', description: 'การใช้งาน if/else และ loop' },
  { id: '3', title: 'บทเรียนที่ 3: ฟังก์ชัน', description: 'สร้างและเรียกใช้ฟังก์ชัน' },
  // เพิ่มบทเรียนอื่นๆ
];

export default function LessonsMenuScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.lessonItem}
      onPress={() => navigation.navigate('LessonDetail', { lessonId: item.id, lessonTitle: item.title })}
    >
      <Text style={styles.lessonTitle}>{item.title}</Text>
      <Text style={styles.lessonDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>เลือกบทเรียน</Text>
      <FlatList
        data={lessonsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
});