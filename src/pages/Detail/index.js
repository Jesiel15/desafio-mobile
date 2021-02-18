import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import styles from '../../Style/styles.js'
import ShowStatus from '../../components/ShowStatus'

export default function Detail(personagem) {
  const { name, image, species, status, gender, origin } = personagem.route.params.data
  
  return (
    <SafeAreaView style={styles.containerDetail}>
      <View style={styles.containerDetail1}>
        <Text style={styles.titleText}> {name}</Text>
        <Text style={styles.baseText}>Espécie: {species}</Text>
        <View style={{ flexDirection: 'row' }}>
          <ShowStatus data={status}></ShowStatus>
          <Text style={styles.baseText}>Status de Vida: {status}</Text>
        </View>
        <Text style={styles.baseText}>Genero: {gender}</Text>
        <Text style={styles.baseText}>Origem: {origin['name']}</Text>
        <Image style={styles.imgDetail} source={{ uri: image }} />
      </View>
    </SafeAreaView>
  )
}