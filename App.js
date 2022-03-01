import { Text, TouchableOpacity, View, StyleSheet, Alert, FlatList } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [colorList, setColorList] = useState([])
  const randomColor = () => {
    const red = Math.ceil(Math.random() * 256)
    const blue = Math.ceil(Math.random() * 256)
    const green = Math.ceil(Math.random() * 256)
    const combination = `rgb(${red},${green},${blue})`
    setColorList([...colorList, combination])
    // return colorList
  }
  console.log(colorList)
  return (
    <View>
      <TouchableOpacity
        onPress={() => { randomColor() }}
        style={styles.buttonParent}>
        <Text style={styles.buttonStyle}>Generate Random Color</Text>
      </TouchableOpacity>



      <View style={{marginBottom:35}}>
        <FlatList
          renderItem={({ item }) => {
            return (
              <View
              style={{
                backgroundColor:item,
                height:80,
                width: '90%',
                marginLeft: '5%',
                borderWidth: 2,
                borderColor: 'gray',
                borderRadius: 5,
                marginTop:10,
                justifyContent:"center"
              }}
              >
                <Text style={styles.textStyle}>{item}</Text>
              </View>

            )
          }}
          data={colorList}></FlatList>
      </View>
    </View>
  )

}
const styles = StyleSheet.create({
  textStyle:{
    textAlign:"center",
    fontSize:25,
    color:'white'
  },
  buttonStyle: {
    textAlign: 'center',
    fontSize: 25,
    

  },
  buttonParent: {
    justifyContent: 'center',
    backgroundColor: 'gold',
    height: 80,
    marginTop: 50,
    width: '90%',
    marginLeft: '5%',
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom:20,
  }
})
export default App