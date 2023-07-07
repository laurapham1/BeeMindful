import { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Bee Mindful HomeScreen 🐝</Text>
      <View collapsable="true" style={styles.emotionsContainer}>
        {/* emotion buttons which shows an overlay on click */}
      <Button onPress={() => setModalVisible(!modalVisible)} title="😡" accessibilityLabel='angry' color="white"/>
      <Button onPress={() => setModalVisible(!modalVisible)} title="🙁" accessibilityLabel='sad' color="white"/>
      <Button onPress={() => setModalVisible(!modalVisible)} title="😐" accessibilityLabel='neutral' color="white"/>
      <Button onPress={() => setModalVisible(!modalVisible)} title="😊" accessibilityLabel='content' color="white"/>
      <Button onPress={() => setModalVisible(!modalVisible)} title="😄" accessibilityLabel='joyful' color="white" />
      </View>
        <Button
        title="Go to Laura's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Laura'})
        }
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Emotion clicked</Text>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              title="Close modal"
            />
          </View>
        </View>
      </Modal>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    color: 'white'
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
})
