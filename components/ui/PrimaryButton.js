import { View, Text, Pressable, StyleSheet, useWindowDimensions, Dimensions } from "react-native";
import Colors from "../../constants/Colors";


export default function PrimaryButton({ children, onPress }) {
   
    return (
        <Pressable
            onPress={onPress}
            android_ripple={{color: Colors.primary600}}
            style={({pressed})=> pressed ? [styles.buttonContainer, styles.pressed] : styles.buttonContainer }>
            <View >
                <Text
                    style={styles.buttonText}>
                    {children}
                </Text>
            </View>
        </Pressable>
    )
}
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary500,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 2,
        elevation: 2,
        minWidth: width > 300 ? 100 : 'auto'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed:{
        opacity: 0.5
    }
})