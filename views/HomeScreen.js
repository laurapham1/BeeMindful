import { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, TouchableOpacity } from 'react-native';

export default function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you feeling today?</Text>
      <View collapsable="true" style={styles.emotionsContainer}>
        {/* emotion buttons which shows an overlay on click */}
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} accessibilityLabel='angry' color="white" ><Text style={styles.emotionContainer}>😡</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}  accessibilityLabel='sad' color="white" ><Text style={styles.emotionContainer}>🙁</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}  accessibilityLabel='neutral' color="white" ><Text style={styles.emotionContainer}>😐</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}  accessibilityLabel='content' color="white" ><Text style={styles.emotionContainer}>😊</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} accessibilityLabel='joyful' color="white" ><Text style={styles.emotionContainer}>😄</Text></TouchableOpacity>
      </View>
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
    gap: '16px'
  },
  heading: {
    fontSize: '24px'
  },
  emotionsContainer: {
    flexDirection: 'row',
    gap: '16px'
  },
  emotionContainer: {
    fontSize: '10vw',
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
