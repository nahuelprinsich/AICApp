import { FlatList, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import styles from './styles';
import { MainNavigatorParamList } from "../../navigators/Main";
import { useFavorites } from "../../hooks";
import { ListItem } from "../../components";
import { EventData } from "../../services/apis/types";

type Props = {
    navigation: NativeStackNavigationProp<MainNavigatorParamList, 'EventDetail' >;  
};

const FavoritesList: React.FC<Props> = ({ navigation }) => {

    const { favorites } = useFavorites();

    const goToDetail = (event: EventData) => {
        navigation.navigate('EventDetail', { event })
    }

    return (
        <View style={styles.container}>
            {
                favorites.length !== 0 ?
                    <View style={styles.listContainer}>
                        <FlatList
                            data={favorites}
                            renderItem={({item}) => <ListItem event={item} onPress={() => goToDetail(item)}/>}
                            keyExtractor={item => item.id}
                            ListHeaderComponent={
                                <View style={styles.titleContainer}>
                                    <Text style={styles.titleText}>Favorites</Text>
                                </View>
                            }
                        />
                    </View>
                :
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>You haven't added favorites yet</Text>
                    </View>
            }
        </View>
    )

};

export default FavoritesList;