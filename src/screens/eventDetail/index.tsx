import { ScrollView, View, NativeModules } from "react-native";

import styles from './styles';
import { CalendarButton, DetailCard, FavoritesButton, Header } from "../../components";
import { useFavorites } from "../../hooks";
import { EventData } from "../../services/apis/types";

const EventDetail = ({ route }) => {

    const { event } = route.params;
    const { favorites, addFavorite, deleteFavorite } = useFavorites();
    const { CalendarModule } = NativeModules;

    const isInFavorites = (event: EventData) => {
        return favorites.some((favorite) => favorite.id === event.id);
    }

    const addToCalendar = () => {
        const startDate = new Date();
        const endDate = new Date(event.end_date);
        const startDateInMilliseconds = startDate.getTime();
        const endDateInMilliseconds = endDate.getTime();
        CalendarModule.createCalendarEvent(event.title, event.location, startDateInMilliseconds, endDateInMilliseconds);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header imageSource={event.image_url} title={event.title}/>
                <View style={styles.buttonsContainer}>
                    <FavoritesButton 
                        isAdd={!isInFavorites(event)} 
                        onPress={isInFavorites(event) ? () => deleteFavorite(event.id) : () => addFavorite(event)}
                    />
                    <CalendarButton onPress={() => addToCalendar()}/>
                </View>
                
                <DetailCard event={event}/>
            </View>
        </ScrollView>
    )

};

export default EventDetail;