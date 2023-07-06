import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bee Mindful App 🐝</Text>
      <View collapsable="true" style={styles.emotionsContainer}>
        {/* emotion buttons which shows an overlay on click */}
      <Button onPress={() => console.log('hi')} title="😡" accessibilityLabel='angry' color="white"/>
      <Button onPress={() => console.log('hi')} title="🙁" accessibilityLabel='sad' color="white"/>
      <Button onPress={() => console.log('hi')} title="😐" accessibilityLabel='neutral' color="white"/>
      <Button onPress={() => console.log('hi')} title="😊" accessibilityLabel='content' color="white"/>
      <Button onPress={() => console.log('hi')} title="😄" accessibilityLabel='joyful' color="white" />
      </View>
      <StatusBar style="auto" />
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
