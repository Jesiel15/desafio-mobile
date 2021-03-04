import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import styles from './Styles'
import ShowStatus from '../../components/ShowStatus'

export default function Detail(personagem) {
  const { name, image, species, status, gender, origin } = personagem.route.params.data

  return (
    <SafeAreaView style={styles.containerDetail}>
      <View style={styles.containerDetail1}>
        <Image style={styles.imgDetail} source={{ uri: image }} />
        <Text style={styles.titleTextDetail}> {name}</Text>
        <View style={styles.formatTextAlign}>
          <View style={{ flexDirection: 'row' }}>
            <ShowStatus data={status}></ShowStatus>
            <Text style={styles.baseTextDetail}>Status de Vida: {status}</Text>
          </View>
          <Text style={styles.baseTextDetail}>Espécie: {species}</Text>
          <Text style={styles.baseTextDetail}>Gênero: {gender}</Text>
          <Text style={styles.baseTextDetail}>Origem: {origin['name']}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}