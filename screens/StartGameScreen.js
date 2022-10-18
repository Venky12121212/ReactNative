import { useState } from 'react';
import { TextInput, Text, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import Card from '../components/ui/Card';
function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }
    const {width, height}  = useWindowDimensions();
    const marginTopDistance = height < 380 ? 30 : 100; 

    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enteredNumber);
        if(isNaN(chooseNumber) || chooseNumber <=0 || chooseNumber >99){
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 to 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        onPickNumber(chooseNumber);
    }
    return (
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View
            style={[styles.rootContainer, { marginTop: marginTopDistance }]}
          >
            <Title>Guess My Number</Title>
            <Card>
              <InstructionText>Enter a Number</InstructionText>
              <TextInput
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={true}
                autoCapitalize="none"
                onChangeText={numberInputHandler}
                value={enteredNumber}
                style={styles.numerInput}
              />
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={resetInputHandler}>
                    Reset
                  </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={confirmInputHandler}>
                    Add
                  </PrimaryButton>
                </View>
              </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
}

// const deviceWidth = Dimensions.get('window').height;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: deviceWidth < 400 ? 30 : 100,
    alignItems: "center",
    color: Colors.common.white,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  numerInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    fontWeight: "bold",
    borderBottomWidth: 2,
    color: Colors.accent500,
    textAlign: "center",
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen