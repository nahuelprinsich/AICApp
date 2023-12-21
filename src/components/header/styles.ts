import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        marginHorizontal: 20,
        marginTop: 20,
        alignSelf: 'center'
    },
    imageStyle: {
        height: 200, 
        width: 200,
        borderRadius: 20, 
        overflow: "hidden",
        alignSelf: 'center'
    },
    titleContainer: {
        padding: 20
    },
    title: {
        fontSize: 25, 
        fontWeight: 'bold'
    }
});

export default styles;