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
  return {
    id: Math.random().toString(12).substring(0),
    owner: randomName,
    title: (
      <>
        <strong>{randomName}</strong>
        <span> shared a </span><strong>daily update</strong>
      </>
    ),
    time: `${Math.floor(Math.random() * 10)} min ago`,
    seen: false,
  };
};

const getItemCount = (_data) => 50;

const Item = ({ owner, title, time, seen }) => (
  <View style={styles.item}>
    <Image
      // className="w-6 h-6 rounded-full"
      source={{
        uri: `https://eu.ui-avatars.com/api/?name=${owner}&size=500&background=random`,
      }}
      // alt="profile picture"
      style={{
        width: 25,
        height: 25,
        borderRadius: "50%",
        resizeMode: "contain",
      }}
    />
    <View style={styles.notificationText}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{time}</Text>
    </View>
  </View>
);

export default function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <VirtualizedList
        initialNumToRender={10}
        renderItem={({ item }) => (
          <Item title={item.title} owner={item.owner} time={item.time} />
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
    // backgroundColor: '#f9c2ff',
    padding: 20,
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
  },
  notificationText: {
    display: 'flex',
  },
  title: {
    fontSize: 12,
  },
});
