import { StyleSheet, TouchableOpacity } from 'react-native';

import Icon from '../../utils/Icon';
import colors from '../../../styles/colors';

const CircleButton = props => {
  const { icon, size, color, library, onPress } = props;

  // ** ** ** ** ** STYLES ** ** ** ** ** //
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      aspectRatio: 1,
      backgroundColor: colors.white,
      borderRadius: '100%',
      height: 40,
      justifyContent: 'center',
    },
  });

  // ** ** ** ** ** RENDER ** ** ** ** ** //
  return (
    <TouchableOpacity
      style={styles.container}
      testID={`${icon}-circle-button`}
      onPress={onPress}>
      <Icon name={icon} size={size} color={color} library={library} />
    </TouchableOpacity>
  );
};

export default CircleButton;
