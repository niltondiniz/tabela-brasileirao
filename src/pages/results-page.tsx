import { FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';
import ResultEntity from '../entities/result_entity';
import ResultCardComponent from '../components/result-card-component';

export default function ResultsPage() {

    const [results, setResults] = useState<ResultEntity[]>([]);

    useEffect(() => {
        //Acessar a api
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer test_44f629640bfd651884fdfe0e0b8cbf");
        myHeaders.append("Cookie", "PHPSESSID=0719g0tmuceo5e1gaunt8onhev");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch("https://api.api-futebol.com.br/v1/ao-vivo", requestOptions)
            .then(result => result.json())
            .then(result => {

                let resultList: ResultEntity[] = [];

                console.log(result);

                result.map((gameResult) => {
                    resultList.push({
                        id: gameResult.partida_id,
                        leagueName: gameResult.campeonato.nome,
                        homeName: gameResult.time_mandante.nome_popular,
                        homeLogo: gameResult.time_mandante.escudo,
                        visitorName: gameResult.time_visitante.nome_popular,
                        visitorLogo: gameResult.time_visitante.escudo,
                        homePoints: gameResult.placar_mandante,
                        visitorPoints: gameResult.placar_visitante
                    });
                });

                console.log(resultList);
                setResults(resultList);
            })
            .catch(error => console.log('error', error));
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={results}
                renderItem={(result) =>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '700', color: '#fff', marginBottom: 32 }}>{result.item.leagueName}</Text>
                        <ResultCardComponent resultInfo={result.item} />
                    </View>
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(38, 38, 105)',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
