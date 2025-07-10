import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

const { width } = Dimensions.get('window');

export default function LessonDetailScreen({ route, navigation }) {
  const { lessonId, lessonTitle, onLessonVisited } = route.params;

  useEffect(() => {
    if (onLessonVisited) {
      onLessonVisited(lessonId);
    }
  }, [lessonId, onLessonVisited]);

  const getLessonContent = (id) => {
    switch (id) {
      case '1':
        return [
          { type: 'text', content: `คือ ขั้นตอนการสำรวจความต้องการของผู้ใช้ระบบและนำมาวิเคราะห์เพื่อค้นหาโครงงานพัฒนาระบบที่สามารถตอบสนองความต้องการของผู้ใช้ จากนั้นคัดเลือกโครงงานที่เหมาะสม ศึกษาความเป็นไปได้ และวางแผนการดำเนินงาน.` },
          { type: 'text', content: `ประกอบด้วย:` },
          { type: 'text', content: `* **การประชุมทีมงาน:** เป็นการรวบรวมความคิดเห็นและความต้องการจากผู้เกี่ยวข้อง.` },
          { type: 'text', content: `* **ศึกษาความเป็นไปได้ของโครงงาน โดยใช้แนวคิดคำนวณ:** ประเมินความเป็นไปได้ทางเทคนิค, เศรษฐกิจ, การปฏิบัติงาน, และกฎหมายของโครงการ.` },
          { type: 'text', content: `* **กำหนดแผนงาน:** จัดทำแผนการดำเนินงาน รวมถึงตารางเวลา, ทรัพยากร, และงบประมาณ.` },
          { type: 'youtube', videoId: 'LIt3Sd6RP6U' },
        ];
      case '2':
        return [
          { type: 'text', content: `คือ ขั้นตอนการทำความเข้าใจกับระบบงาน จะต้องมีการเก็บรวบรวมข้อมูลของปัญหาและความต้องการต่าง ๆ เพื่อนำมาวิเคราะห์หาขอบเขตของฟังก์ชันงานในระบบงานใหม่ ซึ่งมีขั้นตอนย่อย ดังนี้:` },
          { type: 'text', content: `* **สัมภาษณ์ผู้ใช้งาน:** เป็นการรวบรวมข้อมูลโดยตรงจากผู้ใช้งานเพื่อทำความเข้าใจความต้องการและปัญหาที่เผชิญอยู่.` },
          { type: 'text', content: `* **วิเคราะห์ปัญหาและความต้องการ:** ตรวจสอบข้อมูลที่รวบรวมมาเพื่อระบุปัญหาหลักและความต้องการที่แท้จริงของผู้ใช้งาน.` },
          { type: 'text', content: `* **กำหนดขอบเขตของระบบ:** กำหนดขอบเขตและฟังก์ชันการทำงานที่ชัดเจนของระบบใหม่ที่จะพัฒนา.` },
          { type: 'text', content: `* **วิเคราะห์กลุ่มกระบวนการทำงานและกลุ่มข้อมูล:** ศึกษาและจัดกลุ่มกระบวนการทำงานและข้อมูลที่เกี่ยวข้องเพื่อออกแบบระบบที่มีประสิทธิภาพ.` },
          { type: 'youtube', videoId: 'MrXVUcNHrJg' },
        ];
      case '3':
        return [
          { type: 'text', content: `คือ ขั้นตอนการกำหนดวิธีการแก้ปัญหาต่าง ๆ จากขั้นตอนนี้วิเคราะห์ ซึ่งในขั้นตอนนี้จะกำหนดขั้นตอนการทำงานของระบบด้วยวิธีการต่าง ๆ ดังนี้:` },
          { type: 'text', content: `* **ผังงานแสดงลำดับขั้นตอนการทำงาน (Flowchart):** ใช้แสดงลำดับการทำงานของระบบหรืองานต่าง ๆ อย่างเป็นขั้นตอนและเข้าใจง่าย.` },
          { type: 'text', content: `* **แผนภาพแสดงความสัมพันธ์ของข้อมูล (ERD - Entity Relationship Diagram):** ใช้แสดงความสัมพันธ์ระหว่างข้อมูลต่าง ๆ ในระบบ.` },
          { type: 'text', content: `* **พจนานุกรมข้อมูล (Data Dictionary):** เป็นเอกสารที่รวบรวมคำอธิบายรายละเอียดของข้อมูลทั้งหมดที่ใช้ในระบบ.` },
          { type: 'text', content: `* **หน้าจอส่วนติดต่อกับผู้ใช้งาน (User Interface - UI):** ออกแบบหน้าจอที่ผู้ใช้จะโต้ตอบกับระบบ เพื่อให้ใช้งานง่ายและตรงตามความต้องการ.` },
          { type: 'youtube', videoId: 'LEiyuub_HqU' },
        ];
      case '4':
        return [
          { type: 'text', content: `คือ ขั้นตอนการสร้างระบบ โดยการเขียนโปรแกรมเพื่อพัฒนาระบบ และทำการทดสอบระบบในสภาพแวดล้อมจำลองและสภาพแวดล้อมจริง จากนั้นติดตั้งระบบด้วยการนำซอฟต์แวร์และระบบงานใหม่ที่เสร็จสมบูรณ์แล้วมาติดตั้งในสภาพแวดล้อมการทำงานจริง.` },
          { type: 'youtube', videoId: 'WEWSy3ixZVI' },
        ];
      case '5':
        return [
          { type: 'text', content: `คือ ขั้นตอนการดูแลและระบบต่าง ๆ เช่น การแก้ไขปัญหาหรือข้อบกพร่องที่เกิดขึ้นหลังจากการใช้งานในสภาพแวดล้อมจริง การเพิ่มความสามารถของระบบงานและการปรับเปลี่ยนการทำงานบางประการให้ทันสมัยมากขึ้น.` },
          { type: 'youtube', videoId: 'ciSNryA0KwU' },
        ];
      default:
        return [{ type: 'text', content: "ไม่พบเนื้อหาสำหรับบทเรียนนี้" }];
    }
  };

  const lessonContent = getLessonContent(lessonId);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.header}>{lessonTitle}</Text>
      <ScrollView style={styles.contentContainer}>
        {lessonContent.map((item, index) => {
          if (item.type === 'text') {
            return <Text key={index} style={styles.lessonContentText}>{item.content}</Text>;
          } else if (item.type === 'video') {
            return (
              <Video
                key={index}
                source={item.source}
                style={styles.videoPlayer}
                controls={true}
                resizeMode="contain"
              />
            );
          } else if (item.type === 'youtube') {
            return (
              <View key={index} style={styles.youtubeContainer}>
                <WebView
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{ uri: `https://www.youtube.com/embed/${item.videoId}?rel=0&autoplay=0&showinfo=0&controls=1` }}
                  style={styles.youtubePlayer}
                />
              </View>
            );
          }
          return null;
        })}
      </ScrollView>
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
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  header: {
    fontSize: 22,
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
  lessonContentText: {
    fontSize: 16,
    color: '#ccc',
    lineHeight: 24,
    marginBottom: 10,
  },
  videoPlayer: {
    width: '100%',
    height: width * 9 / 16,
    marginVertical: 10,
    backgroundColor: 'black',
  },
  youtubeContainer: {
    height: width * 9 / 16,
    marginVertical: 10,
    backgroundColor: 'black',
  },
  youtubePlayer: {
    flex: 1,
  },
});