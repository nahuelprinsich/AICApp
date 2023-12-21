import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from './styles';

const ListItem = ({ item, onPress }) => {

    return (
        <TouchableOpacity style={styles.card}
            onPress={() => onPress()}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: item.image_url,
                    }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text>
                    { item.title }
                </Text>
            </View>
        </TouchableOpacity>
    );
    
};

export default ListItem;