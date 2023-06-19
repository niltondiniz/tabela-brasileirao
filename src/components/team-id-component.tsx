import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

interface TeamIdProps{
    imageUrl: string;
    teamName: string;
}

export default class TeamIdComponent extends Component<TeamIdProps> {

    render() {
        return (
            <View style={styles.team_id}>
                <Image contentFit='fill' style={styles.imageSize} source={{ uri: this.props.imageUrl }} />
                <Text style={styles.team_name}>{this.props.teamName}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    team_id: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageSize: {
        height: 50,
        width: 50
    },
    team_name: {
        fontSize: 12,
        fontWeight: '600',
        opacity: 0.8
    },
});
