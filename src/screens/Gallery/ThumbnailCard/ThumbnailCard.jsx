import { StyleSheet, TouchableOpacity } from 'react-native';

import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

export default function ThumbnailCard(props) {
  const { item } = props ?? {};
  const { links } = item ?? {};

  const { navigate } = useNavigation();

  const uri = links?.find(it => it?.rel === 'preview')?.href;

  // ** ** ** ** ** ACTIONS ** ** ** ** ** //

  // ** ** ** ** ** STYLES ** ** ** ** ** //
  const styles = StyleSheet.create({
    container: {
      aspectRatio: 1,
      flex: 1,
      margin: 1,
    },
    image: {
      flex: 1,
    },
  });

  // ** ** ** ** ** RENDER ** ** ** ** ** //
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('image-detail', item)}>
      <FastImage source={{ uri: uri }} style={styles.image} />
    </TouchableOpacity>
  );
}
