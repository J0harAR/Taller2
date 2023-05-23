import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Subtemas from '../../../../components/Subtemas';
import Icon from 'react-native-vector-icons/FontAwesome';
const MenuScreen = ({route}) => {
  const {id,nombre,subtemas,ejercicios}=route.params.unit;


  const FloatingButton = ({ onPress }) => (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress} className="bg-emerald-600">
        <Icon name="plus" size={20} color="#FFF" />
        
      </TouchableOpacity>
    </View>
  );

  const handleButtonPress = () => {
   console.log(ejercicios[0].enunciado)
  };
    
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

        <FloatingButton onPress={handleButtonPress}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  button: {
    
    borderRadius: 28,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});

export default MenuScreen