import { Image, StyleSheet, View, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';

// Define your new components
function TimeTable() {
  return (
    <View style={styles.componentContainer}>
      <Image
        source={require('@/assets/images/timetable.jpg')} 
        style={styles.componentImage}
      />
      <Text style={styles.componentText}>Time Table</Text>
    </View>
  );
}

function AcademicCalendar() {
  return (
    <View style={styles.componentContainer}>
      <Image
        source={require('@/assets/images/TermCalendar.png')} 
        style={styles.componentImage}
      />
      <Text style={styles.componentText}>Term Calendar</Text>
    </View>
  );
}

function Events() {
  return (
    <View style={styles.componentContainer}>
      <Image
        source={require('@/assets/images/Events.jpeg')}
        style={styles.componentImage}
      />
      <Text style={styles.componentText}>Upcoming Events</Text>
    </View>
  );
}

export default function Calendar() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FCE38A', dark: '#e7e7b4' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.container}>
        <TimeTable />
        <AcademicCalendar />
        <Events />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,

  },
  componentContainer: {
    marginVertical: 15,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    alignItems: 'center', // Center align content
  },
  componentImage: {
    width: '100%', // Adjust the width to fit the container
    height: 100, // Adjust height as needed
    borderRadius: 1,
    marginBottom: 25, // Space between image and text
  },
  componentText: {
    fontSize: 18,
    color: '#333', // Darker text color for contrast
    textAlign: 'center', // Center align text
  },
  reactLogo: {
    height: 40,
    width: 190,
    bottom: 20,
    left: 20,
    position: 'absolute',
  },
});
