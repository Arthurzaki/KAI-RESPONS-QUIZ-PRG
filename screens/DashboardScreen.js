import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";


export default function DashboardScreen({ navigation }) {
    return (
        
        <View style={styles.container}>
        <Image
        source={require('../assets/kai.png')}
        style={styles.image}
        resizeMode="cover"
         />
            <Text style={styles.title}>KAI Response</Text>
            <Text style={styles.subtitle}>SEGERA laporkan kendala perjalanan kereta api dengan cepat dan mudah!</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#003366',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});