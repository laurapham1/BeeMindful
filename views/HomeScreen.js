import { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';
import { highlightColor, primaryColor, secondaryColor } from '../helpers/themes';

const defaultEmotions = [
  {
    name: 'angry',
    icon: '😡',
    isSelected: true  
  },
  {
    name: 'sad',
    icon: '🙁',
    isSelected: false  
  },
  {
    name: 'neutral',
    icon: '😐',
    isSelected: false  
  },
  {
    name: 'content',
    icon: '😊',
    isSelected: false  
  },
  {
    name: 'joyous',
    icon: '😄',
    isSelected: false  
  },
]
export default function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false)
  const [emotions, setEmotions] = useState(defaultEmotions)
  const [thoughts, setThoughts] = useState('')
  const [actions, setActions] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  const handlePressEmotion = (toggledEmotion) => {
    const newEmotions = emotions.map((emotion) => {
      return emotion.name === toggledEmotion.name ? {...emotion, isSelected: !emotion.isSelected} : emotion
    })
    setEmotions(newEmotions)
  }

  const handlePressSave = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <Text style={{...styles.text, fontWeight: '600', marginBottom: '36px'}}>How are you today?</Text>
      <Text style={{...styles.text, fontSize: '20px'}}>My feelings</Text>
      <View collapsable="true" style={styles.emotionsContainer}>
        {emotions.map((emotion) => {
          return (
            <TouchableOpacity onPress={() => handlePressEmotion(emotion)} accessibilityLabel={emotion.name} color="white"><Text style={{outline: emotion.isSelected ? `1px dashed ${highlightColor}` : '', ...styles.emotionContainer}}>{emotion.icon}</Text></TouchableOpacity>
          )
        })}
      </View>
      <Text style={{...styles.text, fontSize: '20px'}}>My thoughts</Text>
      <TextInput editable multiline numberOfLines={6} onChangeText={text => setThoughts(text)} value={thoughts} style={styles.inputArea}/>
      <Text style={{...styles.text, fontSize: '20px'}}>My actions</Text>
      <TextInput editable multiline numberOfLines={6} onChangeText={text => setActions(text)} value={actions} style={styles.inputArea}/>
      <TouchableOpacity
        onPress={handlePressSave}
        accessibilityLabel="Save your daily entry"
        disabled={isSaved}
        style={{borderRadius: '8px', border: '1px solid white', color: 'inherit', padding: '8px'}}
      ><Text style={{...styles.text, fontSize: '16px'}}>Save</Text></TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Daily update saved for 'date'</Text>
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
    padding: '16px'
  },
  text: {
    fontSize: '30px',
    color: 'white',
    fontWeight: '350'
  },
  emotionsContainer: {
    flexDirection: 'row',
    gap: '16px',
  },
  emotionContainer: {
    fontSize: '36px',
    borderRadius: '4px',
    padding: '4px',
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
    width: '75vw',
    maxWidth: '600px'
  }
})
