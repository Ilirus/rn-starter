import React, { PureComponent } from 'react';
import Text from '../text/text';
import {
  Platform,
  StyleProp,
  TextStyle,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

const ButtonElement = Platform.select({
  ios: TouchableOpacity,
  android: TouchableNativeFeedback as any,
});

const rippleAndroid = Platform.select({
  android:
    Platform.Version >= 21
      ? TouchableNativeFeedback.Ripple('ThemeAttrAndroid', true)
      : TouchableNativeFeedback.SelectableBackground(),
});

export interface IButtonProps {
  useBackgroundRipple?: boolean;
  onPress: () => void;
  title?: string;
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
  primary?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button = (props: IButtonProps): JSX.Element => (
  <ButtonElement
    onPress={props.onPress}
    disabled={props.disabled}
    background={props.useBackgroundRipple ? rippleAndroid : undefined}
  >
    <View
      style={[
        // props.primary && style.button,
        // props.disabled && style.disabled,
        props.style,
      ]}
    >
      {props.children || (
        <Text
          style={[
            // props.primary && style.text,
            // props.disabled && style.disabledText,
            props.textStyle,
          ]}
        >
          {props.title}
        </Text>
      )}
    </View>
  </ButtonElement>
)

export default Button;
