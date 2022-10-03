import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <>
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootContainer}>
        <ImageBackground source={require('./assets/background.jpg')}>
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'yellow'
  }
});
