import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import Navbar from '../components/UserInfo/NavBarNew';
import NavBarNew from '../components/UserInfo/NavBarNew';
import * as ImagePicker from 'expo-image-picker'

const { height: screenHeight } = Dimensions.get('window');

// Sample array of cards
const cards = [
  { name: 'Om', postImage: require('../assets/cheese.jpg'), text: 'It contained fungus and smelled foul.' },
  { name: 'Altaf', postImage: require('../assets/ghee.jpg'), text: 'Best ghee for lactose intelorance' },
  { name: 'Sai', postImage: require('../assets/icecream.jpg'), text: 'Card 3' },
  { name: 'Sarah', postImage: require('../assets/walmart.jpg'), text: 'Card 4' }
];

const Card = ({ card }) => (
  <View style={styles.card}>
    <Image source={card.postImage} style={styles.postImage} />
    <Text style={styles.name}>{card.name}</Text>
    <Text>{card.text}</Text>
  </View>
);

const CardContainer = () => {
  return (
    <View style={styles.cardContainer}>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </View>
  );
};

const CommunityScreen = () => {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    console.log('Posted:', postText);
    setPostText('');
    setImage(null)
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={{ height: 500 }}>
        <Text style={{fontSize: 32, fontWeight: "bold", textAlign: "center", marginBottom: 20}}>Community Forum</Text>
        {/* Post input */}
        <View style={styles.postInputContainer}>
          <TextInput
            placeholder="What's on your mind?"
            style={styles.postInput}
            multiline
            value={postText}
            onChangeText={setPostText}
          />
          <TouchableOpacity onPress={handlePost} style={styles.postButton}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.postInputContainer}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>
        </View>
        <CardContainer />
      </ScrollView>
      <NavBarNew />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,

  },
  cardContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 200,
  },
  card: {
    width: 300,
    backgroundColor: 'rgb(159, 179, 237)',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postImage: {
    width: '100%',
    height: 150,
    marginBottom: 5,
    borderRadius: 10,
  },
  postInputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  postInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  postButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CommunityScreen;
