import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        padding: 10,
        alignContent: 'center', 
        alignItems: 'center', 
        marginVertical: 10,
        marginHorizontal: 20, 
        borderRadius: 20,
        shadowColor: 'black',
        elevation: 3,
        backgroundColor: '#fff'
    },
    firstViewContainer: {
        flexDirection: 'row', 
        marginBottom: 10
    },
    firstView: {
        flex: 1, 
        flexDirection: 'row'
    },
    bold: {
        fontWeight: 'bold'
    },
    secondView: {
        flex: 1, 
        alignItems: 'flex-end'
    },
    text: {
        color: '#6f6f6f'
    }
});

export default styles;