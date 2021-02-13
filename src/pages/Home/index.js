import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native'

import styles from '../../Style/styles.js'

import api from '../../services/api'

export default function Home({ navigation }) {
  const [personagens, setPersonagens] = useState([])
  const [showButtonPrev, setShowButtonPrev] = useState(false)

  useEffect(() => {

    // axios
    // .get("https://rickandmortyapi.com/api")
    // .then(response => setUsers(response.data));

    atualizandoEndpoint('', setPersonagens)

  }, [])

  const atualizandoEndpoint = async (url, setPersonagens) => {
    const pageNum = url.replace('https://rickandmortyapi.com/api/character?page=', '')
    console.log('pageNum', pageNum)

    api.get("character?page=" + pageNum)
      .then((response) => {
        setShowButtonPrev(response.data.info.prev !== null)
        setPersonagens(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }
  const renderItem = ({ item }) => {
    return <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', { data: item })
      }}
    >
      <MostrarPersonagem data={item}></MostrarPersonagem>
    </TouchableOpacity>
  }
  return (
    <SafeAreaView style={styles.containerHome}>
      <FlatList
        data={personagens.results}
        keyExtractor={(personagens) => personagens.id.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={renderItem}
      >
      </FlatList>
      <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
        <TouchableOpacity onPress={() => { atualizandoEndpoint(personagens.info.next, setPersonagens) }}>
          <ButtonValidateNext data={personagens.info}></ButtonValidateNext>
        </TouchableOpacity >
        {showButtonPrev && <TouchableOpacity onPress={() => { atualizandoEndpoint(personagens.info.prev, setPersonagens) }}>
          <ButtonValidatePrev />
        </TouchableOpacity>}
      </View>
    </SafeAreaView>
  )
}

function MostrarPersonagem(personagem) {
  const { name, image } = personagem.data
  return (
    <View style={styles.containerHome1}>
      <View style={{ flexDirection: 'row', }}>
        <Image style={styles.imgHome} source={{ uri: image }} />
        <Text style={styles.titleText}>{name}</Text>
      </View>
    </View>

  )
}

function ButtonValidatePrev() {

  return (
    <View style={styles.button} >
      <Text style={styles.textButton}>
        Voltar
      </Text>
    </View>

  )
}

function ButtonValidateNext(info) {
  let nextNull = info && info.data && info.data.next

  if (nextNull) {
    return (
      <View style={styles.button} >
        <Text style={styles.textButton}>
          Ver mais
        </Text>
      </View>
    )
  } else {
    return (
      <View></View>
    )
  }

}

// function atualizandoEndpoint(url, setPersonagens) { 
//   const pageNum = url.replace('https://rickandmortyapi.com/api/character?page=', '')

//   api.get("character?page=" + pageNum )
//       .then((response) => setPersonagens(response.data))
//       .catch((err) => {
//         console.error("ops! ocorreu um erro" + err);
//      });

//   // fetch(url, {
//   //   method: 'GET',
//   //   headers: {
//   //     'Accept': 'application/json'
//   //   }
//   // })
//   // .then(response => response.json())
//   // .then(data => {
//   //   setPersonagens(data)
//   // })
// }
