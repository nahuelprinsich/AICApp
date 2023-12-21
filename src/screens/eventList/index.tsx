import { Pressable, Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import styles from './styles';
import { ApplicationNavigatorParamList } from "../../navigators/Application";

type Props = {
    navigation: NativeStackNavigationProp<ApplicationNavigatorParamList, 'EventList' >;  
};

const EventList: React.FC<Props> = ({ navigation }) => {

    const goToDetail = () => {
        navigation.navigate('EventDetail')
    }

    return (
        <View style={styles.container}>
            <Text>List Screen</Text>
            <Pressable onPress={() => goToDetail()}>
                <Text>I'm pressable!</Text>
            </Pressable>
        </View>
    )

};

export default EventList;