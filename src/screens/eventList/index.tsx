import { useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useGetEventsQuery } from '../../services/apis/event';
import styles from './styles';
import { MainNavigatorParamList } from "../../navigators/Main";
import { Header, ListItem, Spinner } from "../../components";

type Props = {
    navigation: NativeStackNavigationProp<MainNavigatorParamList, 'EventDetail' >;  
};

const EventList: React.FC<Props> = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false);
    const { data, refetch, isLoading } = useGetEventsQuery();

    const goToDetail = (item: any) => {
        navigation.navigate('EventDetail', { item })
    }

    return (
        <>
            {
                isLoading ? <Spinner/> :
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
            }
        </>
    )

};

export default EventList;