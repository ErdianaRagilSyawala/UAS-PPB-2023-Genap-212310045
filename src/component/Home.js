import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/MieAyam.jpeg")} 
       style={{width: 120, height: 120, marginTop: 100, borderRadius: 100, }} />
        <Text style={styles.text}>SELAMAT DATANG</Text>
        <Text style={styles.text2}>OWNER BAKMIE JOKO</Text>
        <Text style={styles.button1}>DAFTAR PRODUK</Text>
        <Text style={styles.button3}>LAPORAN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EE8C33',
  },
  text: {
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 25,
    color: "white",
  },
  text2: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    color: '#E2AFAF'
  },
  button1: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
  },
  button2: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
  },
  button3: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
  }
});

export default Home;
