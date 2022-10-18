import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { StatusBar } from "expo-status-bar";
// import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isgameOver, setIsGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  // const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    "open-sans" : require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold" : require('./assets/fonts/OpenSans-Bold.ttf')
  })

  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Keep the splash screen visible while we fetch resources
  //       await SplashScreen.preventAutoHideAsync();
  //       // Pre-load fonts, make any API calls you need to do here
  //       await Font.loadAsync(Entypo.font);
  //       // Artificially delay for two seconds to simulate a slow loading
  //       // experience. Please remove this if you copy and paste the code!
  //       await new Promise(resolve => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     // This tells the splash screen to hide immediately! If we call this after
  //     // `setAppIsReady`, then we may see a blank screen while the app is
  //     // loading its initial state and rendering its first pixels. So instead,
  //     // we hide the splash screen once we know the root view has already
  //     // performed layout.
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady && !fontsLoaded) {
  //   return null;
  // }

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  const PickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const GameOverHandler = (numberOfRounds) =>{
    setIsGameOver(true);
    setGuessRounds(numberOfRounds)
  }

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={PickedNumberHandler}/>;
  if (userNumber) {
    screen = <GameScreen userNumber = {userNumber} onGameOver={GameOverHandler}/>;
  }
  if(isgameOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} numberOfRounds={guessRounds} startNewGameHandler={startNewGameHandler}/>
  }
  return (
    <>
    <StatusBar style="light"/>
      <LinearGradient
        colors={[Colors.primary600, Colors.accent500]}
        style={styles.rootContainer}
        // onLayout={onLayoutRootView}
      >
        <ImageBackground
          source={require("./assets/background.jpg")}
          style={styles.rootContainer}
          resizeMode="cover"
          imageStyle={styles.backgroundStyle}
        >
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundStyle: {
    opacity: 0.15,
  },
});
