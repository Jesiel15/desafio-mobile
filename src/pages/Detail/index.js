
import React from 'react'
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'

export default function Detail(personagem) {
  const { name, image, species, status, gender, origin} = personagem.route.params.data
  
  console.log('personagem.route.params.data', personagem.route.params.data.origin.name)

  return (
    <SafeAreaView>

      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column',  }}>
        <View>
          <Text style={styles.titleText}>Nome: {name}</Text>
          <Text style={styles.baseText}>Espécie: {species}</Text>
          <Text style={styles.baseText}>Status de Vida: {status}</Text>
          <Text style={styles.baseText}>{origin['name']}</Text>
          <Text style={styles.baseText}>Genero: {gender}</Text>

        </View>
        <Image style={{ width: 250, height: 250 }} source={{ uri: image }} />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 25,
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

// Nome do personagem
// o Imagem
// o Espécie
// o Status de Vida
// o Genero
// o Origem
