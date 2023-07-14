import { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';
import { primaryColor } from '../helpers/themes';

export default function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedEmotions, setSelectedEmotions] = useState(false)
  const [thoughts, setThoughts] = useState('')
  const [actions, setActions] = useState('')

  const handlePressEmotion = () => {
    // add selected emotion to selected emotion array
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <Text style={{...styles.heading, fontWeight: '600', marginBottom: '36px'}}>How are you today?</Text>
      <Text style={{...styles.heading, fontSize: '20px'}}>My feelings</Text>
      <View collapsable="true" style={styles.emotionsContainer}>
        {/* emotion buttons which shows an overlay on click */}
          <TouchableOpacity onPress={() => handlePressEmotion()} accessibilityLabel='angry' color="white" ><Text style={styles.emotionContainer}>😡</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressEmotion()}  accessibilityLabel='sad' color="white" ><Text style={styles.emotionContainer}>🙁</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressEmotion()}  accessibilityLabel='neutral' color="white" ><Text style={styles.emotionContainer}>😐</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressEmotion()}  accessibilityLabel='content' color="white" ><Text style={styles.emotionContainer}>😊</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handlePressEmotion()} accessibilityLabel='joyful' color="white" ><Text style={styles.emotionContainer}>😄</Text></TouchableOpacity>
      </View>
      <Text style={{...styles.heading, fontSize: '20px'}}>My thoughts</Text>
      <TextInput editable multiline numberOfLines={6} onChangeText={text => setThoughts(text)} value={thoughts} style={styles.inputArea}/>
      <Text style={{...styles.heading, fontSize: '20px'}}>My actions</Text>
      <TextInput editable multiline numberOfLines={6} onChangeText={text => setActions(text)} value={actions} style={styles.inputArea}/>
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
    gap: '24px',
  },
  heading: {
    fontSize: '30px',
    color: 'white',
    fontWeight: '350'
  },
  emotionsContainer: {
    flexDirection: 'row',
    gap: '16px'
  },
  emotionContainer: {
    fontSize: '36px',
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
    backgroundColor: 'white',
    border: '1px solid black',
  },
  inputArea: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '8px',
    fontSize: '16px',
    width: '75vw'
  }
})
