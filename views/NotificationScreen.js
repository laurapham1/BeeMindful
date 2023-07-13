import {
  StyleSheet,
  Text,
  View,
  Button,
  VirtualizedList,
  Image,
} from "react-native";
import { faker } from "@faker-js/faker";

const getItem = (_data, index) => {
  const randomName = faker.person.fullName();
  const message1 = <span> shared a <strong>daily update</strong></span>
  const message2 = <span> like your <strong>daily update</strong></span>
  const message3 = <span> commented on your <strong>daily update</strong></span>
  const messageArray = [message1,message2, message3]
  const randomMessage = messageArray[Math.floor(Math.random() * messageArray.length)]
  return {
    id: Math.random().toString(12).substring(0),
    owner: randomName,
    title: (
      <span>
        <strong>{randomName}</strong>
        {randomMessage}
      </span>
    ),
    time: `${index * 2} min ago`,
    seen: Math.random() < 0.5,
  };
};

const getItemCount = (_data) => 20;

const Item = ({ owner, title, time, seen }) => (
  <View style={{backgroundColor: seen ? '' : '#FAFBFF', ...styles.item}} onPress={() => handlePressNotification()}>
    <Image
      // className="w-6 h-6 rounded-full"
      source={{
        uri: `https://eu.ui-avatars.com/api/?name=${owner}&size=500&background=random`,
      }}
      // alt="profile picture"
      style={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        resizeMode: "contain",
      }}
    />
    <View style={styles.notificationText}>
      <Text style={styles.title}>{title}</Text>
      <Text style={{color: '#737983', ...styles.title}}>{time}</Text>
    </View>
  </View>
);

export default function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <VirtualizedList
        initialNumToRender={10}
        renderItem={({ item }) => (
          <Item title={item.title} owner={item.owner} time={item.time} seen={item.seen} />
        )}
        keyExtractor={(item) => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 20,
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    cursor: 'pointer',
    borderBottomColor: '#EBECF0',
    borderBottomWidth: 1,
  },
  notificationText: {
    display: 'flex',
    gap: '4px',
    width: '100%'
  },
  title: {
    fontSize: 12,
    // overflow: 'hidden', 
    // textOverflow: 'ellipsis',
    width: '100%'
  },
});
