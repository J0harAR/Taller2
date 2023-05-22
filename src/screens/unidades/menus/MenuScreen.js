import { View, Text } from 'react-native'
import React from 'react'
import Subtemas from '../../../../components/Subtemas';

const MenuScreen = ({route}) => {
  const {id,nombre,subtemas}=route.params.unit;


    
  return (
      <View className="bg-black h-full">
        <Text className="text-center text-gray-300 font-semibold text-2xl mb-7">{nombre}</Text>
      {subtemas && Array.isArray(subtemas) ? (
        subtemas.map((item, index) => (
          
          <Subtemas key={index} item={item}/>
          
        ))
      ) : (
        <Text>No hay subtemas disponibles</Text>
      )}
    </View>
  )
}


export default MenuScreen