import { Text, View } from "react-native";

import styles from './styles';
import PriceChip from "../priceChip";

const DetailCard = ({item}) => {

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
                    <Text>
                        <Text style={styles.bold}>{'Available until: '}</Text>
                        {new Date(item.end_date).toLocaleDateString('en-US')}
                    </Text>
                </View>
                <View style={styles.secondView}>
                    <PriceChip isFree={item.is_free}/>
                </View>
            </View>
            <View>
                <Text>
                    <Text style={styles.bold}>Description: </Text>
                    {removeHTMLTags(item.description)}
                </Text>
            </View>
        </View>
    );
    
};

export default DetailCard;