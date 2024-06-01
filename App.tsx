/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import DiceOne from './assets/images/One.png';
import DiceTwo from './assets/images/Two.png';
import DiceThree from './assets/images/Three.png';
import DiceFour from './assets/images/Four.png';
import DiceFive from './assets/images/Five.png';
import DiceSix from './assets/images/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): React.JSX.Element => {
  return (
    <View>
      <Image style={styles.imageStyle} source={imageUrl} />
    </View>
  );
};

function App(): React.JSX.Element {
  const [DiceImage, setDiceImage] =
    React.useState<ImageSourcePropType>(DiceOne);

  const onPressed = () => {
    console.log('Button Clicked!');
    //Get a Random Number
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log('Random Number: ' + randomNumber);

    //Conditions
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={DiceImage} />
      <TouchableOpacity style={styles.rollDiceBtnText} onPress={onPressed}>
        <Text>Roll The Dice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF2F2',
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: 8,
  },
});

export default App;
