import { useRef } from 'react';
import { View, Animated } from 'react-native';

import styles from './styles';

const Spinner = () => {
    
    const scaleValue = useRef(new Animated.Value(1)).current;

    Animated.loop(
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 1.2,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
        ]),
        { iterations: -1 }
    ).start();

    const animatedStyle = {
        transform: [{ scale: scaleValue }]
    };

    return (
        <View style={styles.container}>
            <View style={styles.spinnerPosition}>
                <Animated.Image 
                    source={require('../../assets/images/Art_Institute_of_Chicago_logo.png')} 
                    style={[styles.image, animatedStyle]}
                />
            </View>
        </View>
    )
}

export default Spinner