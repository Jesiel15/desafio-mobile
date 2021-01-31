
import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'

import styles from '../../Style/styles.js'

export default function Detail(personagem) {
  const { name, image, species, status, gender, origin } = personagem.route.params.data

  return (
    <SafeAreaView>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
        <View>
          <Text style={styles.titleText}>Nome: {name}</Text>
          <Text style={styles.baseText}>Espécie: {species}</Text>
          <Text style={styles.baseText}>Status de Vida: {status}</Text>
          <Text style={styles.baseText}>Genero: {gender}</Text>
          <Text style={styles.baseText}>Origem: {origin['name']}</Text> 
        </View>
        <Image style={{ width: 250, height: 250 }} source={{ uri: image }} />
      </View>

    </SafeAreaView>
  )
}
