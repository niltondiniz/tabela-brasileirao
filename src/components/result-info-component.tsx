import { Component } from "react";
import { View, Text } from "react-native";

interface ResultInfoProps{
    homePoints: number;
    visitorPoints: number;
}

export default class ResultInfoComponent extends Component<ResultInfoProps> {

    render() {
        return (
            <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
                <Text style={{ fontSize: 40, fontWeight: '500', opacity: 0.7 }}>{this.props.homePoints}</Text>
                <Text style={{ fontSize: 40, marginHorizontal: 8, fontWeight: '700', opacity: 0.7 }}>:</Text>
                <Text style={{ fontSize: 40, fontWeight: '500', opacity: 0.7 }}>{this.props.visitorPoints}</Text>
            </View>
        );
    }
}