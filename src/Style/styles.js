import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  baseText: {
    fontSize: 17,
    fontFamily: "Cochin",
    color: '#9E9E9E',
    paddingTop: 3
  },

  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff',
    // textAlign: 'left',
    // paddingLeft: 15,
    flex: 1,
  },

  imgDetail: {
    width: 250,
    height: 250,
    borderRadius: 20
  },

  imgHome: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  
  containerHome1: {
    borderRadius: 25,
    flex: 1,
    // padding: 20,
    margin: 3,
    backgroundColor: '#3C3E44',
    justifyContent: 'center',
   
  },
  

  containerHome: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: '#24282F',
  },

  containerDetail: {

    flex: 1,
    padding: 20,
    backgroundColor: '#24282F',
    justifyContent: 'center',
  },

  
  containerDetail1: {
    borderRadius: 25,
    flex: 1,
    padding: 20,
    margin: 3,
    backgroundColor: '#3C3E44',
    justifyContent: 'center',
    alignItems: 'center'
  },

  statusAlive: {
    width: 20,
    height: 20,
    margin: 4,
    flex: 1,
    backgroundColor: '#08C414',
    borderRadius: 100,

  },
  statusDead: {
    width: 20,
    height: 20,
    margin: 7,
    flex: 1,
    backgroundColor: '#f00',
    borderRadius: 100

  },
  statusUnknown: {
    width: 20,
    height: 20,
    margin: 7,
    flex: 1,
    backgroundColor: '#8696A8',
    borderRadius: 100

  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'gray',
    borderBottomWidth: 5,
    borderRightWidth: 4,
    padding: 10,
    width: 150,
    flexDirection: 'row',
    margin: 10,   
    },
    textButton: {
      fontSize: 20,
      fontWeight: "bold",
    }
});