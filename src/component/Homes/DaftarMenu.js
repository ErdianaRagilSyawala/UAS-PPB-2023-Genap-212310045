import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native-web';
import TabsMenu from "./TabsMenu";

const DaftarMenu = () => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "yellow", flex: 1 }}>
                <Image source={require("../../../assets/Background.png")} resizeMode='cover' style={{ width: "100%", height: undefined, aspectRatio: 2.2 }} />
            </View>
            <View style={{ flex: 3 }}>
                <View style={{padding:20}}>
                    <Text style={styles.text}>Daftar Menu</Text>
                    <Text style={styles.text2}>Masukkan Daftar Menu</Text>
                </View>
                <TabsMenu />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "orange",
        textAlign: "left",
        fontSize: 32,
    },
    text2: {
        textAlign: "left",
        fontSize: 16,
    },


});

export default DaftarMenu