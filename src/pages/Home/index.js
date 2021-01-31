import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'

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
    <SafeAreaView style={styles.containerHome}>
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

              {/* <TestarStatus data={item}></TestarStatus> */}
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
    <View style={styles.containerHome1}>

    <View style={{ flexDirection: 'row', }}>
      <Image style={styles.imgHome} source={{ uri: image }} />
      <Text style={styles.titleText}>{name}</Text>
    </View>
    </View>

  )
}

// function TestarStatus(personagem) {
//   // console.log('personagem', personagem.data.status)
//   const { status } = personagem.data
//   console.log('status', status)
//   // console.log('status', status)
//   // const {status} = personagem.data

//   var test = { status }
//   if (test = 'Alive') {
//     console.log('test', test)
//     return (

//       <View>
//         <Text style={styles.titleText} >{status}</Text>
//         <Text style={styles.titleText} >alive</Text>
//       </View>
//     )
//   } else if (test = 'Dead') {
//     return (

//       <View>
//         <Text style={styles.titleText} >{status}</Text>
//         <Text style={styles.titleText} >dead</Text>
//       </View>
//     )

//   }else {
//     return (

//       <View>
//         <Text style={styles.titleText} >{status}</Text>
//         <Text style={styles.titleText} >Unknow</Text>
//       </View>
//     )
//   }


  // return (

  //   <View>
  //     <Text style={styles.titleText} >{status}</Text>
  //     <Text style={styles.titleText} >alive</Text>
  //   </View>
  // )

// }