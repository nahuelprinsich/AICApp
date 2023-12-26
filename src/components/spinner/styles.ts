import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height, 
        opacity: 0.5, 
        backgroundColor: '#f2f2f2' 
    },
    spinnerPosition: {
        position: 'absolute', 
        top: '40%', 
        left: '38%'
    },
    image: {
        borderRadius: 20,
        overflow: "hidden",
        alignSelf: 'center', 
        width: 100, 
        height: 100
    }
});

export default styles;