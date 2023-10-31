import { StyleSheet } from 'react-native';
import { Alert } from 'react-native';

export const alertMess = (title, message, buttons) => {
  return Alert.alert(
    title,
    message,
    buttons,
    { cancelable: true },
    {
      containerStyle: styles.containerStyle,
      titleStyle: styles.titleStyle,
      messageStyle: styles.messageStyle,
    },
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FCEDDA',
  },
  titleStyle: {
    backgroundColor: '#EE4E34',
  },
  messageStyle: {},
});
