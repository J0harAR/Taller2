import { View, Text ,TouchableHighlight,FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import BookListItem from '../../components/Book/BookListItem'
import { useQuery } from 'react-query'


const Home = ({navigation}) => {
    const [books,setBook] =useState(null);


function handleOnPress(){
    navigation.navigate('library');
}


  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home