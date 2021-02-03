import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import styles from '../../Style/styles.js'

export default function Detail(personagem) {
  const { id, name, image, species, status, gender, origin } = personagem.route.params.data

  return (
    <SafeAreaView style={styles.containerDetail}>

      <View style={styles.containerDetail1}>
        <Text style={styles.titleText}> {name}</Text>
        <Text style={styles.baseText}>Espécie: {species}</Text>
        <View style={{ flexDirection: 'row' }}>
          <MostraStatus data={status}></MostraStatus>
          <Text style={styles.baseText}>Status de Vida: {status}</Text>
        </View>
        <Text style={styles.baseText}>Genero: {gender}</Text>
        <Text style={styles.baseText}>id: {id}</Text>
        <Text style={styles.baseText}>Origem: {origin['name']}</Text>

        <Image style={styles.imgDetail} source={{ uri: image }} />

      </View>
    </SafeAreaView>
  )
}

function MostraStatus(personagem) {

  if (personagem.data == "Alive") {
    return (
      <View>
        <Text style={styles.statusAlive}></Text>
      </View>
    )
  } else if (personagem.data == "Dead") {
    return (
      <View>
        <Text style={styles.statusDead}></Text>
      </View>
    )
  } else {
    return (
      <View>
        <Text style={styles.statusUnknown}></Text>
      </View>
    )
  }
}