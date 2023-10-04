import React, {Component} from 'react';
import {Animated, StyleProp, StyleSheet, ViewStyle, View} from 'react-native';

import {
  PanGestureHandler,
  State,
  PanGestureHandlerStateChangeEvent,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

type DraggableBoxProps = {
  minDist?: number;
  boxStyle?: StyleProp<ViewStyle>;
};

class DraggableBox extends Component<DraggableBoxProps> {
  private translateX: Animated.Value;
  private translateY: Animated.Value;
  private lastOffset: {x: number; y: number};
  private onGestureEvent: (event: PanGestureHandlerGestureEvent) => void;
  constructor(props: DraggableBoxProps) {
    super(props);
    this.translateX = new Animated.Value(0);
    this.translateY = new Animated.Value(0);
    this.lastOffset = {x: 0, y: 0};
    this.onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this.translateX,
            translationY: this.translateY,
          },
        },
      ],
      {useNativeDriver: true},
    );
  }
  private onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this.lastOffset.x += event.nativeEvent.translationX;
      this.lastOffset.y += event.nativeEvent.translationY;
      this.translateX.setOffset(this.lastOffset.x);
      this.translateX.setValue(0);
      this.translateY.setOffset(this.lastOffset.y);
      this.translateY.setValue(0);
    }
  };
  render() {
    return (
      <PanGestureHandler
        {...this.props}
        onGestureEvent={this.onGestureEvent}
        onHandlerStateChange={this.onHandlerStateChange}
        minDist={this.props.minDist}>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                {translateX: this.translateX},
                {translateY: this.translateY},
              ],
            },
            this.props.boxStyle,
          ]}
        />
      </PanGestureHandler>
    );
  }
}

export class GestureHandlerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DraggableBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
});
