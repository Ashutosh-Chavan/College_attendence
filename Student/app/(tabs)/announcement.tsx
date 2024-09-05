import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TextInput, Button, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const announcementsData = [
  { id: '1', title: 'Exam Schedule Released', content: 'The exam schedule for the upcoming semester has been released.' },
  { id: '2', title: 'Holiday Notice', content: 'The college will remain closed on 15th August due to Independence Day.' },
  { id: '3', title: 'Workshop on AI', content: 'A workshop on Artificial Intelligence will be conducted next week.' },
  // Add more announcements here
];

// Announcements tab content
const Announcements = () => (
  <View style={styles.announcementContainer}>
    <FlatList
      data={announcementsData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.announcementItem}>
          <Text style={styles.announcementTitle}>{item.title}</Text>
          <Text style={styles.announcementContent}>{item.content}</Text>
        </View>
      )}
    />
  </View>
);

// Permission tab content
const Permission = () => {
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    if (reason.trim()) {
      Alert.alert('Leave Request Submitted', `Reason: ${reason}`);
      setReason(''); // Clear the text input after submission
    } else {
      Alert.alert('Error', 'Please enter a reason for leave.');
    }
  };

  return (
    <View style={styles.permissionContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your reason for leave"
        value={reason}
        onChangeText={setReason}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default function Announcement() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'announcements', title: 'Announcements' },
    { key: 'permission', title: 'Permission' },
  ]);

  const renderScene = SceneMap({
    announcements: Announcements,
    permission: Permission,
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImagesContainer}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.reactLogo}
          />
          <Image
            source={require('@/assets/images/profile.png')}
            style={styles.profileImage}
          />
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            labelStyle={styles.tabLabel}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    backgroundColor: '#FCE38A',
    alignItems: 'center',
  },
  headerImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Add space between the logo and profile image
    paddingHorizontal: 20,
    width: '100%',
  },
  reactLogo: {
    height: 40,
    width: 190,
    marginTop: 40,
  },
  profileImage: {
    height: 45,
    width: 45,
    marginTop: 40,
    borderRadius:50, // Make the image circular (half of height/width)
  },
  announcementContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F7F7F7',
  },
  announcementItem: {
    marginBottom: 16,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  announcementContent: {
    fontSize: 16,
    color: '#364F6B',
  },
  permissionContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#F7F7F7',
  },
  textInput: {
    height: 120,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  tabBar: {
    backgroundColor: '#FCE38A',
  },
  tabLabel: {
    color: '#364F6B',
    fontWeight: 'bold',
  },
  indicator: {
    backgroundColor: '#364F6B',
  },
});
