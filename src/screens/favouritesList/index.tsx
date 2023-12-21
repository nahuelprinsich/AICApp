import { Text, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import styles from './styles';
import { MainNavigatorParamList } from "../../navigators/Main";

type Props = {
    navigation: NativeStackNavigationProp<MainNavigatorParamList, 'EventDetail' >;  
};

const FavouritesList: React.FC<Props> = ({ navigation }) => {

    const goToDetail = (item: any) => {
        navigation.navigate('EventDetail', { item })
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text>you haven't added favorites yet</Text>
            </View>
        </View>
    )

};

export default FavouritesList;