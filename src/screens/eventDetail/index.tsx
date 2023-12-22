import { ScrollView, View, NativeModules } from "react-native";

import styles from './styles';
import { CalendarButton, DetailCard, FavoritesButton, Header } from "../../components";
import { useFavorites } from "../../hooks";

const EventDetail = ({ route }) => {

    const { item } = route.params;
    const { favorites, addFavorites, deleteFavorite } = useFavorites();
    const {CalendarModule} = NativeModules;

    const isInFavorites = (item) => {
        return favorites.some((favorite) => favorite.id === item.id);
    }

    const addToCalendar = () => {
        const startDate = new Date();
        const endDate = new Date(item.end_date);
        const startDateInMilliseconds = startDate.getTime();
        const endDateInMilliseconds = endDate.getTime();
        CalendarModule.createCalendarEvent(item.title, item.location, startDateInMilliseconds, endDateInMilliseconds);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header imageSource={item.image_url} title={item.title}/>
                <View style={styles.buttonsContainer}>
                    <FavoritesButton 
                        isAdd={!isInFavorites(item)} 
                        onPress={isInFavorites(item) ? () => deleteFavorite(item) : () => addFavorites({favorites: [...favorites, item]})}
                    />
                    <CalendarButton onPress={() => addToCalendar()}/>
                </View>
                
                <DetailCard item={item}/>
            </View>
        </ScrollView>
    )

};

export default EventDetail;