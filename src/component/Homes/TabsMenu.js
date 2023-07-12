import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const TabsMenu = () => {

    const mytabs = [{ id: 1, name: "Makanan", component:"makanan" }, { id: 2, name: "Minuman", component:"minuman" }];
    const [activeTab, setActiveTab] = useState(0);

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: "orange", }}>
                {mytabs.map((v) => (
                    <TouchableOpacity key={v.id} style={{ ...styles.mytabs, borderBottomColor: (index === activeTab ? "green" : "orange") }} onPress={() => setActiveTab(index)} >
                        <Text>{v.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View>
                <Text>
                    Erdiana tolong refresh browsernya.. setdah dimatiin lagi.. ga muncul pak
                </Text>
            </View>
        </View>
    )
}

export default TabsMenu;

const styles = StyleSheet.create({
    mytabs: {
        borderBottomWidth: 1,
        borderBottomColor: "red",
        padding: 10
    },
    mytabsActive:{
        color:"brown",
        borderBottomColor:"green"
    }
})