import { StyleSheet, Text, View, Button, VirtualizedList, Image } from "react-native";

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Person ${index + 1} shared a daily update`,
  seen: false,
});

const getItemCount = (_data) => 50;

const Item = ({ title, seen }) => (
  <View style={styles.item}>
    <Image
      // className="w-6 h-6 rounded-full"
      source={{uri:`https://eu.ui-avatars.com/api/?name=LP&size=500&background=random`}}
      // alt="profile picture"
      style={{
        width: 25,
        height: 25,
        borderRadius: '50%',
        resizeMode: 'contain',
      }}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function NotificationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <VirtualizedList
        initialNumToRender={10}
        renderItem={({ item }) => <Item title={item.title} />}
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '4px',
  },
  title: {
    fontSize: 10,
  },
});
