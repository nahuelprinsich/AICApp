import { useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useGetEventsQuery } from '../../services/apis/event';
import styles from './styles';
import { ApplicationNavigatorParamList } from "../../navigators/Application";
import { Header, ListItem } from "../../components";

type Props = {
    navigation: NativeStackNavigationProp<ApplicationNavigatorParamList, 'EventList' >;  
};

const EventList: React.FC<Props> = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false);
    const { data, refetch } = useGetEventsQuery();

    const goToDetail = (item: any) => {
        navigation.navigate('EventDetail', { item })
    }

    return (
        <View style={styles.container}>
            
            <View style={{flex: 1}}>
                {
                    data &&
                    <FlatList
                        data={data.data}
                        renderItem={({item}) => <ListItem item={item} onPress={() => goToDetail(item)}/>}
                        keyExtractor={item => item.id}
                        ListHeaderComponent={<Header title="Art Institute of Chicago"/>}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refetch} />}
                    />
                }
            </View>
        </View>
    )

};

export default EventList;