import { Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const FavoritesButton = ({isAdd, onPress} : {isAdd: boolean, onPress: () => void}) => {

    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.container}>
            <Ionicons name={isAdd ? 'add-circle-outline' : 'close-circle-outline'} size={40} color={isAdd ? '#C3E2C2' : '#DC8686' } />
            <Text>{isAdd ? 'Add to favorites' : 'Delete from favorites'}</Text>
        </TouchableOpacity>
    );
    
};

export default FavoritesButton;