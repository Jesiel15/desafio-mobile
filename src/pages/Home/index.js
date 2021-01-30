
import React, { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView, FlatList, Button, TouchableOpacity } from 'react-native'

export default function Home() {


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
        <SafeAreaView>
            <FlatList
                data={personagens}
                keyExtractor={(personagens) => personagens.name}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={MostrarPersonagem}
            />
        </SafeAreaView>
    )
}

function MostrarPersonagem(item) {

    const { name, image } = item.item
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image style={{width: 50, height: 50 }} source={{ uri: image }}/>
            <Text>{name}</Text>
            <Button
              title="Add some friends"
              onPress={() =>
                this.props.navigation.navigate('Detail')
              }
            />
        </View>
     
    )
}


