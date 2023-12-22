import { Text, View } from "react-native";

import styles from './styles';

const PriceChip = ({isFree}) => {

    return (
        <View style={isFree ? styles.free : styles.paid}>
            <Text style={styles.text}>
                {
                    isFree ? 'Free' : 'Paid'
                }
            </Text>
        </View>
    );
    
};

export default PriceChip;