import React from 'react';
import { Dialog, Portal } from 'react-native-paper';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, View } from 'react-native';
class AlertMess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { content, button1, button2, visibleDialog } = this.props.payDialog;
    return (
      <Portal>
        <Dialog visible={visibleDialog} onDismiss={this.props.hideDialog} style={styles.container}>
          <Dialog.Content>
            <Text style={styles.contentStyle}>{content}</Text>
          </Dialog.Content>
          {button1 || button2 ? (
            <Dialog.Actions>
              <View style={styles.dialogAction}>
                <TouchableOpacity style={styles.touch}>
                  <Text style={styles.buttontext}>{button1}</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity>
                <Text style={styles.buttontext}>{button2}</Text>
              </TouchableOpacity> */}
              </View>
            </Dialog.Actions>
          ) : null}
          <Dialog.Actions></Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCEDDA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentStyle: {
    color: 'blue',
  },
  dialogAction: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  touch: {
    // backgroundColor: '#e1f0ff',
    backgroundColor: 'orange',
  },
});
export default AlertMess;
