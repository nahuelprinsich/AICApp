import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { EventList, EventDetail } from '../screens';

export type ApplicationNavigatorParamList = {
    EventList: undefined;
    EventDetail: {
        item: any
    };
};

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        flex: 1,
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <NavigationContainer>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <Stack.Navigator>
                    <Stack.Screen name="EventList" component={EventList} options={{headerShown: false}}/>
                    <Stack.Screen 
                        name="EventDetail" 
                        component={EventDetail} 
                        options={{
                            headerTitleAlign: 'center',
                            headerTitle: 'Details'
                        }}
                    />
                </Stack.Navigator>  
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default ApplicationNavigator;
