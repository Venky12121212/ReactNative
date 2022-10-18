import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/Colors";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.common.white,
        textAlign: 'center',
        // borderWidth: 2,
        borderWidth: Platform.select({ios: 2, android:2}),
        borderColor: Colors.common.white,
        padding: 12,
        // maxWidth:'80%',
        width: 300
    }

})