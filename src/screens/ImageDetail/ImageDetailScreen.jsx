import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import FastImage from 'react-native-fast-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '../../styles/colors';
import useArray from '../../hooks/useArray';
import { useGlobal } from '../../hooks';
import { getBestFitImage } from './utils';
import { mmkv } from '../../../config/storage';

import DefaultHeader from '../../components/headers/DefaultHeader';
import LoadingView from '../../components/utils/LoadingView';

export default function ImageDetailScreen(props) {
  const { params } = props?.route ?? {};
  const { data, links } = params ?? {};

  const insets = useSafeAreaInsets();
  const { saved, setSaved } = useGlobal();

  const uri = getBestFitImage(links);

  const { title, description, date_created, nasa_id: nasaId } = data?.[0];
  const date = date_created ? new Date(date_created).toDateString() : null;

  const [loading, setLoading] = useState(false);

  const arrHook = useArray(saved);
  const { arr, toggle } = arrHook;

  // ** ** ** ** ** ACTIONS ** ** ** ** ** //
  const onPressSave = useCallback(() => {
    setLoading(true);

    setSaved(arr);

    setTimeout(() => setLoading(false), 500);
  }, [arr, toggle, nasaId]);

  // ** ** ** ** ** STYLES ** ** ** ** ** //
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    contentContainer: {
      paddingBottom: insets.bottom + 100,
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    },
    metadataContainer: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    metadata: {
      fontSize: 16,
      marginBottom: 16,
    },
  });

  // ** ** ** ** ** RENDER ** ** ** ** ** //
  return (
    <View style={styles.container}>
      <DefaultHeader
        title={title}
        iconRight={saved?.includes(nasaId) ? 'heart' : 'heart-o'}
        onPressRight={onPressSave}
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FastImage source={{ uri: uri }} style={styles.image} />

        <View style={styles.metadataContainer}>
          <Text style={styles.metadata}>Title: {title}</Text>
          <Text style={styles.metadata}>Description: {description}</Text>
          <Text style={styles.metadata}>Date taken: {date}</Text>
        </View>
      </ScrollView>

      {loading && <LoadingView />}
    </View>
  );
}
