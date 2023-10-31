import { ActivityIndicator, View } from 'react-native';
export default function Loading() {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
      }}
    >
      <ActivityIndicator size="large" color="orange" />
    </View>
  );
}
