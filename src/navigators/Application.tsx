import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { FavouritesList } from '../screens';
import MainNavigator from './Main';

export type ApplicationNavigatorParamList = {
    MainNavigator: undefined;
    FavouritesList: {
        item: any
    };
};

const Tab = createBottomTabNavigator();

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
                <Tab.Navigator 
                    screenOptions={
                        ({ route }) => ({
                        headerShown: false,
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                            } else if (route.name === 'Favourites') {
                                iconName = focused ? 'star' : 'star-outline';
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: '#b60035',
                        tabBarInactiveTintColor: '#b60035',
                        })
                    }
                    >
                    <Tab.Screen name="Home" component={MainNavigator} options={{title: 'Home'}}/>
                    <Tab.Screen name="Favourites" component={FavouritesList} options={{title: 'Favourites'}}/>
                </Tab.Navigator> 
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default ApplicationNavigator;
