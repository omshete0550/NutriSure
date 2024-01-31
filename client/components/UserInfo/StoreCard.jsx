import { View, Text, Image, StyleSheet } from 'react-native';

const stores = [
  { title: "Big Bazaar", image: require("../../assets/bigbazar.jpg") },
  { title: "Walmart", image: require("../../assets/bigbazar.jpg") },
  { title: "Shop99", image: require("../../assets/bigbazar.jpg") }
];

const StoreCard = ({ title, image }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Image source={image} style={styles.image} />
  </View>
);

const StoreList = () => (
  <View style={styles.container}>
    {stores.map((store, index) => (
      <StoreCard key={index} title={store.title} image={store.image} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
              justifyContent: 'space-between',
    width:'100%'
  },
  card: {
    flexDirection: 'column',
    width: 130,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 10,
    margin: 10,
  },
  title: {
    margin: 0,
  },
  image: {
    marginTop: 10,
    width: 70,
    height: 70,
    borderRadius: 4,
  },
});

export default StoreList;
