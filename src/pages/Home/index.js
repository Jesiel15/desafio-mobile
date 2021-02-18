import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native'
import styles from '../../Style/styles.js'
import api from '../../services/api'
import ShowStatus from '../../components/ShowStatus'

export default function Home({ navigation }) {
  const [personagens, setPersonagens] = useState([])
  const [showButtonPrev, setShowButtonPrev] = useState(false)

  useEffect(() => {
    atualizandoEndpoint('', setPersonagens)
  }, [])

  const atualizandoEndpoint = async (url, setPersonagens) => {
    const pageNum = url.replace('https://rickandmortyapi.com/api/character?page=', '')

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

  const MostrarPersonagem = (personagem) => {
    const { name, image, status } = personagem.data
    // console.log('test', status)
    return (
      <View style={styles.containerHome1}>
        <View style={{ flexDirection: 'row', }}>
          <Image style={styles.imgHome} source={{ uri: image }} />
          <View style={styles.containerHome1}>
            <Text style={styles.titleText}>{name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <ShowStatus data={status}></ShowStatus>
              <Text style={styles.baseText}>Status de vida: {status}</Text>
            </View>
          </View>
        </View>

      </View>
    )
  }

  const ButtonValidatePrev = () => {
    return (
      <View style={styles.button} >
        <Text style={styles.textButton}>
          Voltar
      </Text>
      </View>
    )
  }

  const ButtonValidateNext = (info) => {
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
  // console.log('personagens.info'+'\n', personagens.results)
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
