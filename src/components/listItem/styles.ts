import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: { 
        padding: 10, 
        flexDirection: 'row', 
        alignContent: 'center', 
        alignItems: 'center', 
        margin: 5, 
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 3,
        backgroundColor: '#fff',
        marginHorizontal: 20
    },
    imageContainer: {
        marginHorizontal: 5
    },
    imageStyle: {
        height: 50, 
        width: 50, 
        borderRadius: 10, 
        overflow: "hidden"
    },
    textContainer: {
        marginHorizontal: 5, 
        marginRight: 60
    },
    text: {
        color: '#6f6f6f'
    }
});

export default styles;