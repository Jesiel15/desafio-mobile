import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native'

import styles from '../../Style/styles.js'

export default function Home({ navigation }) {
  const [personagens, setPersonagens] = useState([])

  useEffect(() => {
    atualizandoEndpoint('https://rickandmortyapi.com/api/character', setPersonagens)
  }, [])

  return (
    <SafeAreaView style={styles.containerHome}>
      <FlatList
        data={personagens.results}
        keyExtractor={(personagens) => personagens.id.toString()}

        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => {
          return <TouchableOpacity
            onPress={() => {
              navigation.navigate('Detail', { data: item })
            }}
          >
            <MostrarPersonagem data={item}></MostrarPersonagem>
          </TouchableOpacity>
        }}
      >
      </FlatList>
      <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
        <TouchableOpacity onPress={() => { atualizandoEndpoint(personagens.info.next, setPersonagens) }}>

          <ButtonValidateNext data={personagens.info}></ButtonValidateNext>

        </TouchableOpacity >
        <TouchableOpacity onPress={() => { atualizandoEndpoint(personagens.info.prev, setPersonagens) }}>

          <ButtonValidatePrev data={personagens.info}></ButtonValidatePrev>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function MostrarPersonagem(personagem) {
  // console.log('personagem', personagem)
  const { name, image } = personagem.data
  // console.log('personagem.data', personagem.data)
  return (
    <View style={styles.containerHome1}>
      <View style={{ flexDirection: 'row', }}>
        <Image style={styles.imgHome} source={{ uri: image }} />
        <Text style={styles.titleText}>{name}</Text>
      </View>
    </View>

  )
}

function ButtonValidatePrev(info) {

  let prevNull = info && info.data && info.data.prev

  if (prevNull) {
    return (
      <View style={styles.button} >
        <Text style={styles.textButton}>
          Voltar
      </Text>
      </View>

    )
  } else {
    return (
      <View></View>
    )
  }
}

function ButtonValidateNext(info) {
  let nextNull = info && info.data && info.data.next

  if (nextNull) {
    const contPag = nextNull && nextNull.replace('https://rickandmortyapi.com/api/character?page=', '')

    return (
      <View style={styles.button} >
        <Text style={styles.textButton}>
          Ver mais
        </Text>
      </View>
    )

  } else {
    return (
      <></>
    )
  }
}

function atualizandoEndpoint(url, setPersonagens) {
  console.log('setPersonagens', setPersonagens)

  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      setPersonagens(data)
    })
}
