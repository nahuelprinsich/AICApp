import { useRef } from "react";
import { Image, Text, TouchableOpacity, View, Animated, Easing } from "react-native";

import styles from './styles';

const ListItem = ({ item, onPress }) => {

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
        </Animated.View>
    );
    
};

export default ListItem;