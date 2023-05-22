import { View, Text ,Image,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'



const styles=StyleSheet.create({

  icon:{
    marginLeft:'auto'
  },

})
 


const BookListItem = ({book,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}> 
 <View className=" flex-row py-4 pl-4 border-b border-b-black ">
      <Image className="w-[50] h-[50] mr-3"source={{uri:book.name}}/>
      <Text>{book.name}</Text>
      <Ionicons name="chevron-forward-outline" size={20}  style={styles.icon}/>
      
      
    </View>

    </TouchableOpacity>
   
  )
}

export default BookListItem