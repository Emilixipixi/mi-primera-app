import { StyleSheet, Text, View, Image, ImageSourcePropType } from "react-native";


interface ProfileCardProps{
    nombre: string;
    cargo: string;
    imagen: ImageSourcePropType;
}

export default function ProfileCard(props: ProfileCardProps) {
    const {nombre,cargo,imagen}=props
    return (
        <View style={styles.card}>
            <Image
                
                style={styles.profileImage}
                source={imagen}
            />

            <Text style={styles.name}>{nombre}</Text>

            <Text style={styles.role}>
                {cargo}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",

        // Sombra para Android
        elevation: 5,

        // Sombra para iOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },

    name: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
    },

    role: {
        fontSize: 16,
        color: "gray",
    },
});