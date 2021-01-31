import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, Button, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {

  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setPersonagens(data.results)
      })
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        data={personagens}
        keyExtractor={(personagens) => personagens.name}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => {
          return <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail', { data: item })
            }}
          >
            <MostrarPersonagem data={item}></MostrarPersonagem>
          </TouchableOpacity>;
        }}
      >
      </FlatList>
    </SafeAreaView>
  )
}

function MostrarPersonagem(personagem) {
  const { name, id, image } = personagem.data

  return (
    <View style={{ flexDirection: 'row' }}>
      <Image style={{ width: 50, height: 50 }} source={{ uri: image }} />
      <Text>{name}</Text>
      <Text>_{id}</Text>
    </View>

  )
}
