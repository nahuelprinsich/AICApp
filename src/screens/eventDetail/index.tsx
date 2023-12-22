import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import styles from './styles';
import { DetailCard, FavoritesButton, Header } from "../../components";
import { useFavorites } from "../../hooks";

const EventDetail = ({ route }) => {

    const { item } = route.params;
    const { favorites, addFavorites, deleteFavorite } = useFavorites();

    const isInFavorites = (item) => {
        return favorites.some((favorite) => favorite.id === item.id);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header imageSource={item.image_url} title={item.title}/>
                <FavoritesButton 
                    isAdd={!isInFavorites(item)} 
                    onPress={isInFavorites(item) ? () => deleteFavorite(item) : () => addFavorites({favorites: [...favorites, item]})}
                />
                <DetailCard item={item}/>
            </View>
        </ScrollView>
    )

};

export default EventDetail;