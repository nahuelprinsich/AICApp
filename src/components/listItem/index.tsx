import { useRef } from "react";
import { Image, Text, TouchableOpacity, View, Animated, Easing } from "react-native";

import styles from './styles';
import { EventData } from "../../services/apis/types";

const ListItem = ({ item, onPress } : { item: EventData, onPress: () => void }) => {

    const translateY = useRef(new Animated.Value(100)).current;

    Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
    }).start();

    const slideInAnimation = {
        transform: [
            {
                translateY: translateY.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, 100],
                }),
            },
        ],
    };

    return (
        <Animated.View style={[slideInAnimation]}>
            <TouchableOpacity 
                style={styles.card}
                onPress={() => onPress()}
            >
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imageStyle}
                        source={item.image_url ? { uri: item.image_url } : require('../../assets/images/Art_Institute_of_Chicago_logo.png')}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        { item.title }
                    </Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
    
};

export default ListItem;