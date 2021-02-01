import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native'

import styles from '../../Style/styles.js'

export default function Home({ navigation }) {
  const [personagens, setPersonagens] = useState([])
  // console.log('personagens', personagens)
  // const [info, setInfo] = useState([])
  
  // console.log('info', info.next)
  
  useEffect(() => {
  
      atualizandoEndpoint('https://rickandmortyapi.com/api/character', setPersonagens)
      
      
      
    }, [])
    

  // console.log('personagens.info.next', personagens.info.next)
  // console.log('personagens.next', personagens.info)
  // console.log('data.next', personagensfa)
  return (
    <SafeAreaView style={styles.containerHome}>
         <Button
              onPress={() => {atualizandoEndpoint(personagens.info.next, setPersonagens)}}
      
              title="Next"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
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
  // console.log('personagem.data', personagem.data.name)

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

function atualizandoEndpoint(url, setPersonagens) {

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

// function atualizandoEndpointNext(url, setInfo) {

//   fetch(url, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json'
//     }
//   })
//     .then(response => response.json())
//     .then(data => {
//       setInfo(data.results)
     
//     })
// }

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