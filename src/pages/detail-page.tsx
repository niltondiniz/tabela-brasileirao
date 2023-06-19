import { Image } from "expo-image";
import { View, Text, StyleSheet } from "react-native";

export default function DetailPage({ route, navigation }) {
    const {
        id,
        name,
        points,
        position,
        shieldUrl
    } = route.params;
    console.log(name);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Brasileirão 2023 Série B</Text>
            <Image style={styles.image} source={shieldUrl} />
            <Text style={styles.team_name}>{name}</Text>
            <View style={styles.team_data_container}>
                <Text style={styles.team_label}>Posição </Text>
                <Text style={styles.team_data}> {position}º</Text>
                <Text style={styles.team_label}>Pontos</Text>
                <Text style={styles.team_data}> {points} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87f20d',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    image: {
        marginTop: 50,
        width: '30%',
        height: '30%',
        aspectRatio: 1
    },
    team_name: {
        fontSize: 40,
        fontWeight: "700"
    },
    team_label: {
        fontSize: 20,
        fontWeight: "500"
    },
    team_data: {
        fontSize: 20,
        fontWeight: "400",
        marginRight: 16

    },
    team_data_container: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 100
    },
    title: {
        fontSize: 30,
        fontWeight: "500",
        marginVertical: 50
    },
});