import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EventList, EventDetail } from '../screens';

export type MainNavigatorParamList = {
    EventList: undefined;
    EventDetail: {
        item: any
    };
};

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="EventList" component={EventList} options={{headerShown: false}}/>
            <Stack.Screen 
                name="EventDetail" 
                component={EventDetail} 
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: 'Details',
                    headerTintColor: '#6f6f6f',
                }}
            />
        </Stack.Navigator> 
    );
};

export default MainNavigator;
