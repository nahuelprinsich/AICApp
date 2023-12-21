import { Image, Text, View } from "react-native";

import styles from './styles';

const Header = ({imageSource, title} : {imageSource: string, title: string}) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={imageSource ? { uri: imageSource } : require('../../assets/images/Art_Institute_of_Chicago_logo.png')}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
    
};

export default Header;