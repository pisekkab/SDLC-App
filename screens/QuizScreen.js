import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const quizData = [
  {
    question: "SDLCย่อมาจากอะไร?",
    options: [
      "System Design Life Cycle",
      "Software Development Life Cycle",
      "System Development Life Cycle",
      "Software Design Life Cycle"
    ],
    correctAnswer: "System Development Life Cycle"
  },
  {
    question: "วงจรการพัฒนาระบบ (SDLC)แบ่งกระบวนการพัฒนาออกเป็นกี่ขั้นตอนหลัก?",
    options: [
      "3 ขั้นตอน",
      "4 ขั้นตอน",
      "5 ขั้นตอน",
      "6ขั้นตอน"
    ],
    correctAnswer: "6ขั้นตอน"
  },
  {
    question: "ขั้นตอนแรกของ SDLCคือข้อใด?",
    options: [
      "การวิเคราะห์ (Analysis)",
      "การวางแผน (Planning)",
      "การออกแบบ (Design)",
      "การพัฒนาและติดตั้ง (Implementation)"
    ],
    correctAnswer: "การวางแผน (Planning)"
  },
  {
    question: "การเก็บรวบรวมข้อมูลปัญหาและความต้องการต่างๆ เพื่อนำมาวิเคราะห์หาขอบเขตของฟังก์ชันงานในระบบใหม่ เกิดขึ้นในขั้นตอนใดของ SDLC?",
    options: [
      "การวางแผน",
      "การวิเคราะห์",
      "การออกแบบ",
      "การบำรุงรักษา"
    ],
    correctAnswer: "การวิเคราะห์"
  },
  {
    question: "ขั้นตอนใดที่เน้นการกำหนดวิธีการแก้ปัญหาต่างๆ จากขั้นตอนการวิเคราะห์?",
    options: [
      "การวางแผน",
      "การวิเคราะห์",
      "การออกแบบ",
      "การพัฒนาและติดตั้ง"
    ],
    correctAnswer: "การออกแบบ"
  },
  {
    question: "กิจกรรมใดที่เกิดขึ้นในขั้นตอนการวางแผน (Planning)?",
    options: [
      "การแก้ไขข้อบกพร่อง",
      "การสัมภาษณ์ผู้ใช้งาน",
      "การสำรวจความต้องการของผู้ใช้",
      "การเขียนโปรแกรม"
    ],
    correctAnswer: "การสำรวจความต้องการของผู้ใช้"
  },
  {
    question: "ข้อใดอธิบาย \"การวางแผน\" (Planning)ได้ถูกต้องที่สุด?",
    options: [
      "การเขียนโปรแกรมเพื่อสร้างระบบ",
      "การสำรวจความต้องการของผู้ใช้และนำมาวิเคราะห์หาโครงการที่เหมาะสม",
      "การแก้ไขปัญหาหรือข้อบกพร่องของระบบ",
      "การกำหนดวิธีการแก้ปัญหาและขั้นตอนการทำงาน"
    ],
    correctAnswer: "การกำหนดวิธีการแก้ปัญหาและขั้นตอนการทำงาน"
  },
  {
    question: "เหตุใดจึงต้องมีการสัมภาษณ์ผู้ใช้งานในขั้นตอนการวิเคราะห์ (Analysis)?",
    options: [
      "เพื่อให้ผู้ใช้งานเข้าใจการทำงานของระบบ",
      "เพื่อเก็บรวบรวมข้อมูลปัญหาและความต้องการของผู้ใช้งาน",
      "เพื่อสอนผู้ใช้งานถึงวิธีการใช้ระบบใหม่",
      "เพื่อทดสอบระบบกับผู้ใช้งานจริง"
    ],
    correctAnswer: "เพื่อเก็บรวบรวมข้อมูลปัญหาและความต้องการของผู้ใช้งาน"
  },
  {
    question: "หลังจากที่ระบบใหม่ได้ถูกติดตั้งในสภาพแวดล้อมการทำงานจริงแล้ว ขั้นตอนต่อไปที่สำคัญคืออะไร?",
    options: [
      "การออกแบบหน้าจอติดต่อกับผู้ใช้งานเพิ่มเติม",
      "การนำเสนอโครงการให้ผู้บริหาร",
      "การดูแลและบำรุงรักษาระบบ",
      "การวิเคราะห์ความต้องการใหม่"
    ],
    correctAnswer: "การดูแลและบำรุงรักษาระบบ"
  },
  {
    question: "ข้อใดคือความแตกต่างที่สำคัญระหว่างขั้นตอน \"การวิเคราะห์\" และ \"การออกแบบ\"?",
    options: [
      "การวิเคราะห์เน้นการเขียนโปรแกรม ส่วนการออกแบบเน้นการทดสอบ",
      "การวิเคราะห์เน้นการทำความเข้าใจปัญหา ส่วนการออกแบบเน้นการหากำหนดวิธีการแก้ปัญหา",
      "การวิเคราะห์เน้นการดูแลระบบ ส่วนการออกแบบเน้นการติดตั้ง",
      "การวิเคราะห์เน้นการสำรวจความต้องการ ส่วนการออกแบบเน้นการแก้ไขข้อบกพร่อง"
    ],
    correctAnswer: "การวิเคราะห์เน้นการทำความเข้าใจปัญหา ส่วนการออกแบบเน้นการหากำหนดวิธีการแก้ปัญหา"
  },
  {
    question: "บริษัทแห่งหนึ่งต้องการพัฒนาระบบบริหารจัดการลูกค้าสัมพันธ์ (CRM) หากพวกเขากำลังประชุมทีมเพื่อสำรวจความต้องการและศึกษาความเป็นไปได้ของโครงการ บริษัทกำลังอยู่ในขั้นตอนใดของ SDLC?",
    options: [
      "การวิเคราะห์",
      "การออกแบบ",
      "การวางแผน",
      "การพัฒนาและติดตั้ง"
    ],
    correctAnswer: "การวางแผน"
  },
  {
    question: "ทีมพัฒนาเริ่มเขียนโค้ดโปรแกรม และนำโปรแกรมที่ได้ไปทดสอบในเครื่องจำลองเพื่อหาข้อผิดพลาดก่อนนำไปใช้งานจริง กิจกรรมนี้อยู่ในขั้นตอนใด?",
    options: [
      "การวางแผน",
      "การวิเคราะห์",
      "การพัฒนาและติดตั้ง",
      "การบำรุงรักษา"
    ],
    correctAnswer: "การพัฒนาและติดตั้ง"
  },
  {
    question: "การที่ไม่มีการวางแผนที่ดีในขั้นตอนแรกของSDLCอาจส่งผลกระทบที่สำคัญที่สุดต่อโครงการอย่างไร?",
    options: [
      "ทำให้ระบบที่พัฒนาขึ้นมามีข้อผิดพลาดน้อยลง",
      "ทำให้โครงการล่าช้าหรือได้ระบบที่ไม่ตรงตามความต้องการของผู้ใช้",
      "ทำให้การบำรุงรักษาระบบง่ายขึ้น",
      "ทำให้ทีมงานมีอิสระในการทำงานมากขึ้น"
    ],
    correctAnswer: "ทำให้โครงการล่าช้าหรือได้ระบบที่ไม่ตรงตามความต้องการของผู้ใช้"
  },
  {
    question: "การ \"อัปเกรดระบบ\" เพื่อเพิ่มความสามารถใหม่ๆ หรือรองรับเทคโนโลยีที่ทันสมัยขึ้น จัดอยู่ในส่วนใดของวงจร SDLC และเหตุใด?",
    options: [
      "การพัฒนาและติดตั้ง เพราะเป็นการสร้างฟังก์ชันใหม่",
      "การบำรุงรักษา เพราะเป็นการเพิ่มความสามารถและปรับเปลี่ยนการทำงาน",
      "การวางแผน เพราะต้องมีการสำรวจความต้องการใหม่",
      "การออกแบบ เพราะต้องมีการกำหนดวิธีการใหม่"
    ],
    correctAnswer: "การบำรุงรักษา เพราะเป็นการเพิ่มความสามารถและปรับเปลี่ยนการทำงาน"
  },
  {
    question: "การที่ผู้พัฒนาไม่ได้พิจารณา \"หน้าจอติดต่อกับผู้ใช้งาน\" (User Interface) อย่างรอบคอบในขั้นตอนการออกแบบ จะส่งผลเสียต่อโครงการอย่างไร?",
    options: [
      "ทำให้ระบบใช้เวลาน้อยลงในการพัฒนา",
      "ผู้ใช้งานจะใช้งานระบบได้ยาก ทำให้ระบบไม่เป็นที่ยอมรับ",
      "การบำรุงรักษาจะซับซ้อนมากขึ้น",
      "ทำให้การติดตั้งระบบเป็นไปอย่างรวดเร็ว"
    ],
    correctAnswer: "ผู้ใช้งานจะใช้งานระบบได้ยาก ทำให้ระบบไม่เป็นที่ยอมรับ"
  },
];

export default function QuizScreen({ route, navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [canStartQuiz, setCanStartQuiz] = useState(false);

  useEffect(() => {
    if (route.params?.canStartQuiz) {
      setCanStartQuiz(true);
      Alert.alert("ข้อควรทราบ", "คุณสามารถทำแบบทดสอบนี้ได้เพียงครั้งเดียวเท่านั้น");
    } else {
      setCanStartQuiz(false);
      Alert.alert(
        "ไม่สามารถทำแบบทดสอบได้",
        "กรุณาเข้าชมบทเรียนทั้งหมดก่อนจึงจะสามารถทำแบบทดสอบได้",
        [{ text: "ตกลง", onPress: () => navigation.goBack() }]
      );
    }
  }, [route.params?.canStartQuiz, navigation]);

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (userAnswers[currentQuestionIndex] === null) {
      Alert.alert("ยังไม่ได้เลือกคำตอบ", "กรุณาเลือกคำตอบก่อนดำเนินการต่อ");
      return;
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // เมื่อถึงข้อสุดท้าย ให้แสดง Alert ยืนยันก่อนแสดงผลลัพธ์
      Alert.alert(
        "ยืนยันการส่งข้อสอบ",
        "คุณต้องการส่งข้อสอบเพื่อดูผลลัพธ์หรือไม่? เมื่อส่งแล้วจะไม่สามารถกลับมาแก้ไขได้",
        [
          {
            text: "ยกเลิก",
            style: "cancel"
          },
          {
            text: "ยืนยัน",
            onPress: () => {
              // คำนวณคะแนนเมื่อจบบททดสอบ
              let finalScore = 0;
              for (let i = 0; i < quizData.length; i++) {
                if (userAnswers[i] === quizData[i].correctAnswer) {
                  finalScore++;
                }
              }
              setScore(finalScore);
              setShowResult(true);
            }
          }
        ]
      );
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (!canStartQuiz) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>แบบทดสอบ</Text>
        <View style={styles.quizContent}>
          <Text style={styles.messageText}>กำลังตรวจสอบสิทธิ์...</Text>
        </View>
      </View>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];
  const selectedAnswerForCurrentQuestion = userAnswers[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>แบบทดสอบ</Text>
      <ScrollView style={styles.quizContent}>
        {showResult ? (
          <View>
            <Text style={styles.resultText}>คุณทำได้ {score} จาก {quizData.length} ข้อ</Text>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>กลับสู่หน้าบทเรียน</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButton,
                  selectedAnswerForCurrentQuestion === option && styles.selectedOption,
                ]}
                onPress={() => handleAnswer(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            <View style={styles.navigationButtons}>
              {currentQuestionIndex > 0 && (
                <TouchableOpacity style={styles.prevButton} onPress={handlePrevious}>
                  <Text style={styles.prevButtonText}>ย้อนกลับ</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>
                  {currentQuestionIndex === quizData.length - 1 ? 'ดูผลลัพธ์' : 'ถัดไป'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  quizContent: {
    flex: 1,
    backgroundColor: '#2A2A5A',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#4A4A7A',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: '#6A5ACD',
    borderWidth: 2,
  },
  correctOption: {
    backgroundColor: '#4CAF50',
  },
  wrongOption: {
    backgroundColor: '#F44336',
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  nextButton: {
    backgroundColor: '#6A5ACD',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  prevButton: {
    backgroundColor: '#FF6B8B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  prevButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#FF6B8B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageText: {
    fontSize: 18,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 50,
  },
});