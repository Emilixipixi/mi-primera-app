import { StyleSheet, Text, View, Image } from "react-native";

export default function CompanyHeader() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assests/imagenes/Trabajador.png")}
            />
            <Text style={styles.slogan}>
                Conectando talento, construyendo futuro
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2196F3",
        paddingHorizontal: 20,
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    slogan: {
        marginTop: 10,
        fontWeight: "bold",
        color: "#37474F",
        fontSize: 16,
        textAlign: "center",
    },
});