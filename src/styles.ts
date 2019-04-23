import { Palette, build, Options } from 'react-native-better-styles'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window')
 
const palette: Palette = {
  grey: '#8a949d',
  white: '#ffffff',
  black: '#000000',
  blue: '#2c5cff',
}
 
build(
  {
    remSize: width > 340 ? 17 : 15,
    palette,
  } as Options
)