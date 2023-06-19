import { Component } from "react";
import ResultEntity from "../entities/result_entity";
import { View, StyleSheet } from "react-native";
import TeamIdComponent from "./team-id-component";
import ResultInfoComponent from "./result-info-component";

interface ResultCardProps {
    resultInfo: ResultEntity;
}
export default class ResultCardComponent extends Component<ResultCardProps> {

    render() {
        return (
            <View style={styles.card}>
                <TeamIdComponent imageUrl={ this.props.resultInfo.homeLogo} teamName={this.props.resultInfo.homeName} />
                <ResultInfoComponent homePoints={this.props.resultInfo.homePoints} visitorPoints={this.props.resultInfo.visitorPoints} />
                <TeamIdComponent imageUrl={this.props.resultInfo.visitorLogo} teamName={this.props.resultInfo.visitorName} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        aspectRatio: 2.5,
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 17,
        elevation: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 32,
        marginBottom: 32,
        shadowColor: '#000'
    }
});