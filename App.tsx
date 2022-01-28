import {StyleSheet, Animated, View, SafeAreaView, Button} from 'react-native';
import React, {useRef, useState} from 'react';

const App = () => {
  const solidFill = useRef(new Animated.Value(0)).current;
  const partialFill = useRef(new Animated.Value(0)).current;

  const [partialFillValue, setPartialFillValue] = useState<number>(0);
  const [solidFillValue, setSolidFillValue] = useState<number>(0);

  const partialFillHandler = () => {
    Animated.timing(partialFill, {
      toValue: 50,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    partialFill.addListener(({value}) => {
      setPartialFillValue(value);
    });
  };

  const solidFillHandler = () => {
    Animated.timing(solidFill, {
      toValue: 30,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    solidFill.addListener(({value}) => {
      setSolidFillValue(value);
    });
  };

  const onPressStartAnimation = () => {
    partialFillHandler();
    solidFillHandler();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barContainer}>
        <Animated.View
          style={[styles.solidFill, {height: `${solidFillValue}%`}]}
        />
        <Animated.View
          style={[styles.partialFill, {height: `${partialFillValue}%`}]}
        />
      </View>
      <Button title="start animation" onPress={onPressStartAnimation} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barContainer: {
    backgroundColor: '#FFFAE2CC',
    height: 300,
    width: 150,
    flexDirection: 'column-reverse',
    position: 'relative',
  },
  partialFill: {
    backgroundColor: '#FFE892',
    zIndex: 0,
  },
  solidFill: {
    backgroundColor: '#FCD242',
    zIndex: 1,
  },
});
