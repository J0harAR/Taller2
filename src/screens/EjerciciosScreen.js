import React, { useState } from 'react';
import { View, Text, TextInput,Button ,TouchableOpacity} from 'react-native';


const EjerciciosScreen = ({ route }) => {
  const { ejercicios } = route.params;
  const [answers, setAnswers] = useState(new Array(ejercicios.length).fill(''));
  const [isCorrect, setIsCorrect] = useState(new Array(ejercicios.length).fill(null));

  const checkAnswer = (exerciseIndex) => {
    const parsedAnswer = answers[exerciseIndex];
    const exercise = ejercicios[exerciseIndex];

    if (parsedAnswer === exercise.respuesta) {
      setIsCorrect((prevState) => {
        const newState = [...prevState];
        newState[exerciseIndex] = true;
        return newState;
      });
    } else {
      setIsCorrect((prevState) => {
        const newState = [...prevState];
        newState[exerciseIndex] = false;
        return newState;
      });
    }
  };

  return (
    <View className=" bg-black h-full">
      <Text className="text-gray-300 font-semibold text-2xl text-center mb-4">Ejercicios</Text>
      {ejercicios.map((exercise, index) => (
        <View key={index} className="mb-4 bg-[#464648] rounded-lg p-2">
          <Text className="text-lg font-bold mb-2 text-[#F1F1E6]" >{exercise.enunciado}</Text>
          <TextInput
            value={answers[index]}
            onChangeText={(text) => {
              const newAnswers = [...answers];
              newAnswers[index] = text;
              setAnswers(newAnswers);
            }}
            className="border border-gray-300 rounded-md p-2 placeholder:text-white text-white mb-2" 
            keyboardType="numeric"
            
          />
         
  <TouchableOpacity className="bg-[#6B78D0] rounded-xl"  onPress={() => checkAnswer(index)}>
      <View>
        <Text style={{ color: '#FFFFFF', textAlign: 'center', padding: 10 }}>Verificar</Text>
      </View>
    </TouchableOpacity>


          {isCorrect[index] !== null && (
            <Text className={`mt-2 ${isCorrect[index] ? "text-green-500" : "text-red-500"}`}>
              Tu respuesta es {isCorrect[index] ? 'correcta' : 'incorrecta'}
            </Text>
          )}
        </View>
      ))}
    </View>
  );
};

export default EjerciciosScreen;
