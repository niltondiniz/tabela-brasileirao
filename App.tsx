import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import HomePage from "./src/pages/home-page";
import DetailPage from "./src/pages/detail-page";
import ResultsPage from "./src/pages/results-page";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen options={({route}) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor:'rgb(38, 38, 105)',
                        
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center'
                })} name="results" component={ResultsPage} />
                <Stack.Screen options={({route}) => ({
                    title: 'Brasileirão 2023',
                    headerStyle: {
                        backgroundColor: '#87f20d',
                        
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center'
                })} name="home" component={HomePage} />
                <Stack.Screen options={({route}) => ({
                    title: route.params['name'],
                    headerStyle: {
                        backgroundColor: '#87f20d',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                })} name="detail" component={DetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}