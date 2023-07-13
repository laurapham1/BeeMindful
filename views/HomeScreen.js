import { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { primaryColor } from '../helpers/themes';

export default function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>BeeMindful 🐝</Text>
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
            <Text style={styles.modalText}>Emotion saved for today</Text>
            <Text style={styles.modalText}>🤗</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Close</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px'
  },
  heading: {
    fontSize: '24px',
    color: 'white'
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
    display: 'flex',
    gap: '8px',
    opacity: '95%'
  },
  modalText: {
    fontSize: '18px'
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    backgroundColor: 'white !important',
    border: '1px solid black',
  },
})
