import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import ProfileCard from "./ProfileCard";

const EMPLEADOS = [
    {
        id: '1', nombre: 'Ana Gomez',
        cargo: 'Diseñadora UX',
        fotoUrl: 'https://cl.qibit.tech/wp-content/uploads/sites/2/2024/08/Habilidades-Desarrollador-BackEnd.png'
    },
    {
        id: '2',
        nombre: 'Carlos Martinez',
        cargo: 'Desarrollador Frontend',
        fotoUrl: 'https://www.xfp.es/images/blog/contenido/desarrollador-front-end-1000x500.webp'
    },
    {
        id: '3',
        nombre: 'Maria Lopez',
        cargo: 'Ingeniera de Software',
        fotoUrl: 'https://institucionbadra.org/wp-content/uploads/2023/05/clase-ingenieria-software-895x439.jpg'
    },
    {
        id: '4',
        nombre: 'Diego Rodriguez',
        cargo: 'Desarrollador Backend',
        fotoUrl: 'https://empresas.blogthinkbig.com/wp-content/uploads/2025/04/Backend-as-a-Service-una-oportunidad-para-las-empresas.jpg?w=800'
    }
];

export default function EmployedList() {
    return (
        <View>
            <Text>Directorio de Empleados</Text>
            <TextInput
                placeholder="Buscar empleado...."
                placeholderTextColor='#999'
            />
            <FlatList
                data={EMPLEADOS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <ProfileCard
                            nombre={item.nombre}
                            cargo={item.cargo}
                            imagen={{ uri: item.fotoUrl }}

                        />
                    </View>
                )
                }
            />
        </View>
    )
}
