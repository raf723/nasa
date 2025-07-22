import { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import axios from 'axios';
import { FlashList } from '@shopify/flash-list';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import colors from '../../styles/colors';
import useForm from '../../hooks/useForm';

import LoadingView from '../../components/utils/LoadingView';
import SearchHeader from '../../components/headers/SearchHeader';
import ThumbnailCard from './ThumbnailCard/ThumbnailCard';

import { NASA_API_URL, NASA_API_KEY } from '@env';

export default function GalleryScreen() {
  const insets = useSafeAreaInsets();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // ** ** ** ** ** FORM ** ** ** ** ** //
  const formHook = useForm({
    page: 1,
    pageSize: 30,
    search: '',
  });
  const { form, alter } = formHook;

  // ** ** ** ** ** EFFECTS ** ** ** ** ** //
  useEffect(() => {
    getData();
  }, []);

  // ** ** ** ** ** ACTIONS ** ** ** ** ** //
  const getData = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${NASA_API_URL}/search`, {
        params: {
          media_type: 'image',
          page_size: form.pageSize,
          page: form.page,
          ...(form.search && {
            q: form.search,
          }),
        },
        headers: {
          Authorization: `Bearer ${NASA_API_KEY}`,
        },
      });

      const { items } = res?.data?.collection || [];
      setData(prev => [...prev, ...items]);

      setTimeout(() => setLoading(false), 500);
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
        Alert.alert(
          'Error',
          'Looks like something went wrong. Please try again later.',
        );
      });
    }
  }, [form.page, form.pageSize, form.search]);

  const onEndReached = useCallback(() => {
    alter({ page: form.page + 1 });
    getData();
  }, [alter, form.page, getData]);

  const onPressSearch = useCallback(() => {
    setData([]);
    getData();
  }, [getData]);

  // ** ** ** ** ** STYLES ** ** ** ** ** //
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: colors.white,
    },
    contentContainer: {
      paddingBottom: insets.bottom + 60,
    },
  });

  // ** ** ** ** ** RENDER ** ** ** ** ** //
  const renderItem = useCallback(props => <ThumbnailCard {...props} />, []);

  const ListEmptyComponent = useMemo(() => {
    return () => !loading && <Text>No results found.</Text>;
  }, [loading]);

  return (
    <View style={styles.container}>
      <SearchHeader
        val={form.search}
        onChange={e => alter({ search: e.nativeEvent.text })}
        handleSearch={onPressSearch}
      />

      <FlashList
        data={data}
        numColumns={3}
        estimatedItemSize={130}
        contentContainerStyle={styles.contentContainer}
        onEndReached={onEndReached}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={(item, index) => {
          const id = item?.data?.[0]?.nasa_id;
          return `${id}-${index}`;
        }}
      />

      {loading && <LoadingView />}
    </View>
  );
}
