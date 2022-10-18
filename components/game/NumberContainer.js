import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const DeviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: DeviceWidth < 400 ? 2 : 2,
        borderRadius: 8,
        margin: 24,
        alignItems: "center",
        justifyContent:'center'
    },
    numberText:{
        fontSize: 36,
        color: 'white',
        fontFamily: 'open-sans-bold'
    }
})