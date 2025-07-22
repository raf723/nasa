import { View, StyleSheet, ActivityIndicator } from 'react-native';

import colors from '../../styles/colors';

export default function LoadingView() {
  const bgColor = colors.black;
  const indicatorColor = colors.white;

  // ** ** ** ** ** EFFECTS ** ** ** ** ** //

  // ** ** ** ** ** ACTIONS ** ** ** ** ** //

  // ** ** ** ** ** STYLES ** ** ** ** ** //
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      height: 50,
      width: 50,
      alignSelf: 'center',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      backgroundColor: bgColor,
      paddingVertical: 40,
      paddingHorizontal: 40,
      opacity: 0.7,
      top: '50%',
    },
  });

  // ** ** ** ** ** RENDER ** ** ** ** ** //
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={indicatorColor} />
    </View>
  );
}
