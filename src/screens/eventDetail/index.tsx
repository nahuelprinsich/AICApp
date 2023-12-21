import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import styles from './styles';
import { DetailCard, FavouritesButton, Header } from "../../components";
import { useFavourites } from "../../hooks";

const EventDetail = ({ route }) => {

    const { item } = route.params;
    const { favourites, addFavourites, deleteFavourite } = useFavourites();

    const isInFavourites = (item) => {
        return favourites.some((favourite) => favourite.id === item.id);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header imageSource={item.image_url} title={item.title}/>
                <FavouritesButton 
                    isAdd={!isInFavourites(item)} 
                    onPress={isInFavourites(item) ? () => deleteFavourite(item) : () => addFavourites({favourites: [...favourites, item]})}
                />
                <DetailCard item={item}/>
            </View>
        </ScrollView>
    )

};

export default EventDetail;