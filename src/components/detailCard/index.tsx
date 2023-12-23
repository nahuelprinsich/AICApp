import { Text, View } from "react-native";

import styles from './styles';
import PriceChip from "../priceChip";
import { EventData } from "../../services/apis/types";

const DetailCard = ({ event } : { event: EventData }) => {

    const removeHTMLTags = (str: string) => {
        if ((str === null) || (str === '')) {
            return false;
        } else {
            str = str.toString();
            return str.replace(/(<([^>]+)>)/ig, '').replace(/\&nbsp;/g, ' ');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.firstViewContainer}>
                <View style={styles.firstView}>
                    <Text style={styles.text}>
                        <Text style={[styles.bold, styles.text]}>{'Available until: '}</Text>
                        {new Date(event.end_date).toLocaleDateString('en-US')}
                    </Text>
                </View>
                <View style={styles.secondView}>
                    <PriceChip isFree={event.is_free}/>
                </View>
            </View>
            <View>
                <Text style={styles.text}>
                    <Text style={[styles.bold, styles.text]}>Description: </Text>
                    {removeHTMLTags(event.description)}
                </Text>
            </View>
        </View>
    );
    
};

export default DetailCard;