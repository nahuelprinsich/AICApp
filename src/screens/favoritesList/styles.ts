import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    listContainer: {
        flex: 1,
        marginTop: 10
    },
    textContainer: {
        flex: 1, 
        marginTop: 20, 
        alignContent: 'center', 
        justifyContent: 'center', 
        marginHorizontal: 20
    },
    text: {
        fontSize: 30, 
        fontWeight: 'bold'
    },
    titleContainer: {
        marginTop: 10,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 30, 
        fontWeight: 'bold'
    }
});

export default styles;