import { StyleSheet, Text, View, Button } from 'react-native';

export default function SummaryScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text>This is your summary</Text>
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
