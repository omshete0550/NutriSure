import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Navbar from '../components/UserInfo/NavBarNew';
import NavBarNew from '../components/UserInfo/NavBarNew';

const { height: screenHeight } = Dimensions.get('window');

// Sample array of cards
const cards = [
  { name: 'User 1', postImage: require('../assets/cheese.jpg'), text: 'Card 1' },
  { name: 'User 2', postImage: require('../assets/cheese.jpg'), text: 'cheese per' },
  { name: 'User 3', postImage: require('../assets/cheese.jpg'), text: 'Card 3' },
  { name: 'User 4', postImage: require('../assets/cheese.jpg'), text: 'Card 4' },
  { name: 'User 5', postImage: require('../assets/cheese.jpg'), text: 'Card 5' },
  { name: 'User 6', postImage: require('../assets/cheese.jpg'), text: 'Card 6' },
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
    // Handle posting logic here, e.g., sending postText and selected media to server
    console.log('Posted:', postText);
    // Reset postText after posting
    setPostText('');
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={{ height:500 }}>
        {/* Post input */}
        <View style={styles.postInputContainer}>
          <TextInput
            placeholder="What's on your mind?"
            style={styles.postInput}
            multiline
            value={postText}
            onChangeText={setPostText}
          />
          {/* Add media button */}
          <TouchableOpacity onPress={handlePost} style={styles.postButton}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
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
    paddingTop: 350,
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
