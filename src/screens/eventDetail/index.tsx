import { ScrollView, View } from "react-native";

import styles from './styles';
import { DetailCard, Header } from "../../components";

const EventDetail = ({ route }) => {

    const { item } = route.params;

    return (
        <ScrollView>
            <View style={styles.container}>
                <Header imageSource={item.image_url} title={item.title}/>
                <DetailCard item={item}/>
            </View>
        </ScrollView>
    )

};

export default EventDetail;