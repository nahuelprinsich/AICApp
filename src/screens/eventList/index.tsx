import { FlatList, Pressable, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useGetEventsQuery } from '../../services/apis/event';
import styles from './styles';
import { ApplicationNavigatorParamList } from "../../navigators/Application";

type Props = {
    navigation: NativeStackNavigationProp<ApplicationNavigatorParamList, 'EventList' >;  
};

const EventList: React.FC<Props> = ({ navigation }) => {

    const { data } = useGetEventsQuery();

    const goToDetail = () => {
        navigation.navigate('EventDetail')
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => goToDetail()}>
                <Text>
                    Go to Detail
                </Text>
            </Pressable>
            {
                data &&
                <FlatList
                    data={data.data}
                    renderItem={({item}) => <Text>{ item.title }</Text>}
                    keyExtractor={item => item.id}
                />
            }
        </View>
    )

};

export default EventList;