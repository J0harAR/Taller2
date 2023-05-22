import { View, Text,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
const Subtemas = ({item}) => {

  const [subtema, setSubtema] = useState(item);
  
  const handleNavigate = () => {
    setSubtema(item);
    navigation.navigate('SubtemaScreen',{subtema})

  };

  const navigation = useNavigation();
    
  return (
   
    <View className="mb-2">
      <View className="bg-gray-800 w-full h-20 flex-row mt-6 justify-center items-center rounded-lg">
        
        <Text className="flex-1 mr-2 text-gray-300">{item.nombre}</Text>
        
        <TouchableOpacity className="bg-blue-500 w-12 h-8 flex justify-center items-center rounded-lg mr-2" onPress={handleNavigate}>
          <Text className="text-gray-800">Ir</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
  
}

export default Subtemas