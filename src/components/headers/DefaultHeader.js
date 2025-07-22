import { View, StyleSheet, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '../../styles/colors';

import CircleButton from '../buttons/CircleButton/CircleButton';

const DefaultHeader = props => {
  const { title, iconRight, onPressBack, onPressRight } = props;

  const { goBack } = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = insets?.top ? insets?.top + 12 : 20;

  // ** ** ** ** ** EFFECTS ** ** ** ** ** //

  // ** ** ** ** ** ACTIONS ** ** ** ** ** //

  // ** ** ** ** ** STYLES ** ** ** ** ** //
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 12,
      paddingHorizontal: 20,
      paddingTop: paddingTop,
    },
    title: {
      color: colors.darkGrey,
      fontSize: 18,
      fontWeight: '600',
      maxWidth: '75%',
    },
  });

  // ** ** ** ** ** RENDER ** ** ** ** ** //
  return (
    <View style={styles.container}>
      <CircleButton
        color={colors.darkGrey}
        icon="chevron-left"
        library="Feather"
        size={26}
        onPress={onPressBack || goBack}
      />

      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>

      {iconRight && (
        <CircleButton
          icon={iconRight}
          color={colors.darkGrey}
          size={20}
          library="FontAwesome"
          onPress={onPressRight ? onPressRight : () => {}}
        />
      )}

      {!iconRight && <CircleButton onPress={() => {}} />}
    </View>
  );
};

export default DefaultHeader;
