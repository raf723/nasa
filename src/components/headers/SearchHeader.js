import { View, StyleSheet, TextInput } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '../../styles/colors';

import CircleButton from '../buttons/CircleButton/CircleButton';

const SearchHeader = props => {
  const { val, onChange, handleSearch } = props;

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
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      backgroundColor: colors.offWhite,
      borderRadius: 8,
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginRight: 8,
    },
  });

  // ** ** ** ** ** RENDER ** ** ** ** ** //
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TextInput
          style={styles.input}
          value={val}
          onChange={onChange}
          placeholder='Try "Apollo 11"'
        />

        <CircleButton
          color={colors.darkGrey}
          icon="search"
          library="Feather"
          size={24}
          onPress={handleSearch}
        />
      </View>
    </View>
  );
};

export default SearchHeader;
