import { StyleSheet, Text, View, Button } from 'react-native';

export default function NotificationScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text>This is your notifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emotionsContainer: {
    flexDirection: 'row',
  }
})
