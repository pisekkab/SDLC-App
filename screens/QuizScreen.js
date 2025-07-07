import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const quizData = [
  {
    question: "ข้อใดคือประเภทข้อมูลที่เก็บจำนวนเต็ม?",
    options: ["String", "Float", "Integer", "Boolean"],
    correctAnswer: "Integer"
  },
  {
    question: "คำสั่งใดใช้ในการวนซ้ำใน Python?",
    options: ["if", "else", "for", "while"],
    correctAnswer: "for"
  },
  // เพิ่มคำถามอื่นๆ
];

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      Alert.alert("ยังไม่ได้เลือกคำตอบ", "กรุณาเลือกคำตอบก่อนดำเนินการต่อ");
      return;
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ผลคะแนน</Text>
        <Text style={styles.resultText}>คุณได้คะแนน {score} จาก {quizData.length} ข้อ</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>ทำแบบทดสอบใหม่</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>แบบทดสอบ</Text>
      <ScrollView style={styles.quizContent}>
        <Text style={styles.questionText}>{currentQuestionIndex + 1}. {currentQuestion.question}</Text>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option && styles.selectedOption,
              showResult && option === currentQuestion.correctAnswer && styles.correctOption,
              showResult && selectedAnswer === option && selectedAnswer !== currentQuestion.correctAnswer && styles.wrongOption,
            ]}
            onPress={() => handleAnswer(option)}
            disabled={showResult}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>
          {currentQuestionIndex < quizData.length - 1 ? "ข้อต่อไป" : "ดูผลลัพธ์"}
        </Text>
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
    backgroundColor: '#4CAF50', // สีเขียวสำหรับคำตอบที่ถูกต้อง
  },
  wrongOption: {
    backgroundColor: '#F44336', // สีแดงสำหรับคำตอบที่ผิด
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#6A5ACD',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
  resetButton: {
    backgroundColor: '#FF6B8B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});