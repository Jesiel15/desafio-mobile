import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

import styles from '../../Style/styles.js'

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
  // console.log('personagem', personagem)

  const { name, image } = personagem.data
  // console.log('image', origin.image)

  return (
    <View style={{ marginLeft: 50, flexDirection: 'row', }}>
      <Image style={{ width: 100, height: 100 }} source={{ uri: image }} />
      <Text style={styles.baseText}>{name}</Text>
    </View>

  )
}
