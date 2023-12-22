import { Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const CalendarButton = ({onPress} : {onPress: () => void}) => {

    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.container}>
            <Ionicons name={'calendar-outline'} size={30} color={'#C3E2C2'} />
            <Text style={styles.text}>{'Add to calendar'}</Text>
        </TouchableOpacity>
    );
    
};

export default CalendarButton;