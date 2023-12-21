import { FlatList, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import styles from './styles';
import { MainNavigatorParamList } from "../../navigators/Main";
import { useFavourites } from "../../hooks";
import { ListItem } from "../../components";

type Props = {
    navigation: NativeStackNavigationProp<MainNavigatorParamList, 'EventDetail' >;  
};

const FavouritesList: React.FC<Props> = ({ navigation }) => {

    const { favourites, addFavourites } = useFavourites();

    const goToDetail = (item: any) => {
        navigation.navigate('EventDetail', { item })
    }

    return (
        <View style={styles.container}>
            {
                favourites.length !== 0 ?
                    <View style={styles.listContainer}>
                        <FlatList
                            data={favourites}
                            renderItem={({item}) => <ListItem item={item} onPress={() => goToDetail(item)}/>}
                            keyExtractor={item => item.id}
                            ListHeaderComponent={
                                <View style={styles.titleContainer}>
                                    <Text style={styles.titleText}>Favourites</Text>
                                </View>
                            }
                        />
                    </View>
                :
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>You haven't added favourites yet</Text>
                    </View>
            }
        </View>
    )

};

export default FavouritesList;