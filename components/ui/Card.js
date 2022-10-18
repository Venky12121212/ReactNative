import {View, Text, StyleSheet} from 'react-native'
import Colors from '../../constants/Colors';

function Card({children}){
    return (
        <View style={style.CardContainer}>{children}</View>
    );
}

export default Card;

const style = StyleSheet.create({
  CardContainer: {
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
});
