# ReactNative
All react native basic things available here
React native :-
----------------------

Installation:-

-> npm install -g expo-cli -> expo init AwesomeProject -> cd AwesomeProject -> npm start (or) expo start


****************if u need to check app in android use simulators on android studio******************************

Core components:- https://reactnative.dev/docs/components-and-apis

Styling Components:-
---------------------
-> Still, every app has different requirements,
   hence I also strongly recommend exploring the
   official styling documentation: https://reactnative.dev/docs/style

-> You also might want to explore the official article about "Colors" to learn about different ways of setting
   & using colors in React Native apps: https://reactnative.dev/docs/colors (in this course, we'll primarily use hex code colors).

-> It's also worth exploring the official API reference articles for the different core components you might be using.
   For example, you can learn about all the props 
   that can be set on the <View> component here: https://reactnative.dev/docs/view

-> From this article, you can also get to the supported style properties for this component 
   (via https://reactnative.dev/docs/view#style): https://reactnative.dev/docs/view-style-props


Event handlers:-
---------------------
 React		ReactNavive	
-----------------------------------------	
 onChange	-> onChangeText
 onClick	-> onPress


Android and IOS styling differences:-
------------------------------------------

Components:-

for scrolling purpose:- ScrollView, FlatList(preferable component based on performance)

Pressable Component
(props: For Android:- android_ripple={{color:'#ddd'}})
        for IOS:- style={({pressed}) => pressed && styles.pressedItem})

Shadow apply :-

Android - elevation: 4

IOS - apply css
