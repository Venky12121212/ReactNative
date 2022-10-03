import { View, Text, Pressable, StyleSheet } from "react-native";


export default function PrimaryButton({ children }) {
    function pressHandler() {
        console.log('button pressed!')
    }
    return (
        <Pressable
            onPress={pressHandler}
            android_ripple={{color:'#64023c'}}
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

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#72063c',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 2,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed:{
        opacity: 0.5
    }
})