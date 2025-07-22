import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import GalleryScreen from '../screens/Gallery/GalleryScreen';
import ImageDetailScreen from '../screens/ImageDetail/ImageDetailScreen';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="gallery" component={GalleryScreen} />
      <Stack.Screen name="image-detail" component={ImageDetailScreen} />
    </Stack.Navigator>
  );
}
