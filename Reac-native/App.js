import { SafeAreaView, StyleSheet } from 'react-native';

import Route from './src/navigation/Route';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { useEffect } from 'react';
import * as Font from 'expo-font';
import Nunito_Black from './src/assets/fonts/nuhito/Nunito_Black.ttf';
import Nunito_Medium from './src/assets/fonts/nuhito/Nunito-Medium.ttf';
import loadCustomFont from './src/component/CustomFont';
export default function App() {
  useEffect(() => {
    loadCustomFont(); // Gọi hàm loadFonts để tải phông chữ
  }, []);
  return (
    //Kết nối ứng dụng với redux bằng Provider, truyền vào store
    <Provider store={store}>
      <PaperProvider>
        <Route />
      </PaperProvider>
    </Provider>
  );
}

//redux: Sau đó sử dụng redux trong component
