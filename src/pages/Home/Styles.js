import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  baseText: {
    fontSize: 19,
    fontFamily: "Cochin",
    color: '#9E9E9E',
    paddingTop: 13,
    paddingLeft: 5,
  },
  titleText: {
    fontSize: 25,
    fontWeight: "bold",
    color: '#fff',
    paddingLeft: 15,
  },
  imgHome: {
    width: '35%',
    height: 120,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  containerHome1: {
    borderRadius: 25,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    margin: 5,
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