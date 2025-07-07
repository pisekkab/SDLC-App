import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';

export default function LessonDetailScreen({ route, navigation }) {
  const { lessonId, lessonTitle } = route.params;

  // จำลองข้อมูลเนื้อหาบทเรียนตาม ID
  const getLessonContent = (id) => {
    switch (id) {
      case '1':
        return "นี่คือเนื้อหาสำหรับบทเรียนที่ 1: พื้นฐาน Python. คุณจะได้เรียนรู้เกี่ยวกับตัวแปร, ชนิดข้อมูลพื้นฐาน เช่น integer, float, string, boolean และวิธีการประกาศตัวแปรต่างๆ รวมถึงการดำเนินการทางคณิตศาสตร์และการเชื่อมต่อสตริง.";
      case '2':
        return "นี่คือเนื้อหาสำหรับบทเรียนที่ 2: Control Flow. คุณจะได้เข้าใจวิธีการควบคุมการทำงานของโปรแกรมโดยใช้คำสั่งเงื่อนไข (if, elif, else) และคำสั่งวนซ้ำ (for loop, while loop) พร้อมตัวอย่างการใช้งานจริง.";
      case '3':
        return "นี่คือเนื้อหาสำหรับบทเรียนที่ 3: ฟังก์ชัน. เรียนรู้การสร้างฟังก์ชันเพื่อจัดระเบียบโค้ดให้เป็นหมวดหมู่, การส่งผ่านพารามิเตอร์, และการส่งคืนค่า นอกจากนี้ยังจะได้เรียนรู้เกี่ยวกับขอบเขตของตัวแปร (scope) ในฟังก์ชัน.";
      default:
        return "ไม่พบเนื้อหาสำหรับบทเรียนนี้";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{lessonTitle}</Text>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.lessonContent}>
          {getLessonContent(lessonId)}
        </Text>
        {/* คุณสามารถเพิ่มรูปภาพ, โค้ดตัวอย่าง, หรือวิดีโอได้ที่นี่ */}
      </ScrollView>
      <TouchableOpacity 
        style={styles.quizButton}
        onPress={() => navigation.navigate('Quiz')} // สามารถไปหน้า Quiz ได้จากที่นี่
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
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#2A2A5A',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  lessonContent: {
    fontSize: 16,
    color: '#ccc',
    lineHeight: 24,
  },
  quizButton: {
    backgroundColor: '#6A5ACD',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  quizButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});