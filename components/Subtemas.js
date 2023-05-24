import { View, Text,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
const Subtemas = ({item}) => {

  const [subtema, setSubtema] = useState(item);
  const [visto, setVisto] = useState(false);
  const handleNavigate = () => {
    setSubtema(item);
    navigation.navigate('SubtemaScreen',{subtema})

  };
  const handleToggleVisto = () => {
    setVisto(!visto);
  };


  const navigation = useNavigation();
    
  return (
   
    <View className="mb-1">
      <View className="bg-gray-800 w-full h-20 flex-row mt-6 justify-center items-center rounded-lg">
      <TouchableOpacity
          className={`bg-${visto ? 'gray-500' : 'gray-500 border-2 border-gray-700'} w-6 h-6 flex justify-center items-center rounded-lg mr-2 ml-2`}
          onPress={handleToggleVisto}
        >
          <Text className="text-white">{visto ? '✔' : ''}</Text>
        </TouchableOpacity>
        
        
        
        <Text className={`flex-1 mr-2 text-gray-300 ${visto?'line-through text-gray-500':'text-gray-300'}`} >{item.nombre}</Text>
        
        <TouchableOpacity className="bg-blue-500 w-12 h-8 flex justify-center items-center rounded-lg mr-2" onPress={handleNavigate}>
          <Text className="text-gray-800">Ir</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  )
  
}

export default Subtemas