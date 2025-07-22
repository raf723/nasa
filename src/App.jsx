import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { GlobalProvider } from './hooks/useGlobal';

import AppContainer from './containers/AppContainer';

function App() {
  // ** ** ** ** ** RENDER ** ** ** ** ** //
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <GlobalProvider>
            <AppContainer />
          </GlobalProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
