import { Animated, StyleSheet, View } from "react-native";

export default function Ball() {
  const position = new Animated.ValueXY({ x: 0, y: 0 });
  Animated.spring(position, {
    toValue: { x: 200, y: 500 },
    useNativeDriver: false,
  }).start();

  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball}></View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: "blue",
    borderWidth: 30,
  },
});
