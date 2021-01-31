
import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'

export default function Detail(personagem) {
  const { image, name } = personagem.route.params.data
  console.log('personagem.route.params.data', personagem.route.params.data)
  // const { test } = personagem.route.params
  // console.log('personagem', personagem.route.params.item)

  return (
    <SafeAreaView>

      <View style={{ flexDirection: 'row' }}>
        <Text>{name}</Text>
        <Image style={{ width: 50, height: 50 }} source={{ uri: image }} />

      </View>

    </SafeAreaView>
  )
}
