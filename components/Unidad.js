import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'



const Unidad = ({item,navigation}) => {
const [unit,setUnit]=useState(
  {
    id:item.id,
    nombre:item.nombre,
    subtemas:item.subtemas,
    ejercicios:item.ejercicios,
  }
  );

  return (
    <TouchableOpacity className={"bg-blue-900 h-[71] w-[95] mb-12 mt-8 rounded shadow-inner"} onPress={()=>navigation.navigate('MenuScreen',{unit})}>
    <View className="flex justify-center items-center mt-3">
      <Image resizeMethod='scale'
        className="h-10 w-10"
        source={{
          uri: item.imagen,
        }}
      />
    </View>
    <Text className="text-gray-300">{item.numeroUnidad}</Text>
    <Text className="text-center text-white">
      {item.nombre}
    </Text>
  </TouchableOpacity>
  )
}

export default Unidad