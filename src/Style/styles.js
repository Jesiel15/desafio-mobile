import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  baseText: {
    fontSize: 25,
    fontFamily: "Cochin",
    color: '#9E9E9E'
  },

  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#fff',
  },

  imgDetail: {
    width: 250,
    height: 250,
    borderRadius: 20
  },

  imgHome: {
    width: 100,
    height: 100,
    margin: 3,
    borderRadius: 20
  },
  
  containerHome1: {
    borderRadius: 25,
    flex: 1,
    padding: 20,
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
    margin: 7,
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
});