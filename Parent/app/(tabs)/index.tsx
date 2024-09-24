import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useState, useEffect } from 'react';

export default function Settings() {
  const [attendanceData, setAttendanceData] = useState([]);
  const [defaultersList, setDefaultersList] = useState([]);
  const [teachersQualifications, setTeachersQualifications] = useState([]);

  // Simulating data fetching
  useEffect(() => {
    setAttendanceData([
      { student: 'John Doe', attendance: '85%' },
      { student: 'Jane Smith', attendance: '92%' },
    ]);
    setDefaultersList(['John Doe']);
    setTeachersQualifications([
      { name: 'Mr. Williams', qualification: 'PhD in Mathematics' },
      { name: 'Ms. Johnson', qualification: 'MSc in Physics' },
    ]);
  }, []);

  // Render the content for Attendance, Defaulters, and Qualifications
  const renderContent = () => {
    return (
      <View>
        {/* Attendance Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Detailed Student Attendance</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Student</Text>
              <Text style={styles.tableHeader}>Attendance</Text>
            </View>
            {attendanceData.map((record, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{record.student}</Text>
                <Text style={styles.tableCell}>{record.attendance}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Defaulters Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Defaulters List</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Student</Text>
            </View>
            {defaultersList.length > 0 ? (
              defaultersList.map((student, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={styles.tableCell}>{student}</Text>
                </View>
              ))
            ) : (
              <Text>No defaulters found.</Text>
            )}
          </View>
        </View>

        {/* Qualifications Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Teachers' Qualifications</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Teacher</Text>
              <Text style={styles.tableHeader}>Qualification</Text>
            </View>
            {teachersQualifications.map((teacher, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{teacher.name}</Text>
                <Text style={styles.tableCell}>{teacher.qualification}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FCE38A', dark: '#e7e7b4' }}
      headerImage={
        <View style={styles.headerImagesContainer}>
          <Image source={require('@/assets/images/logo.png')} style={styles.reactLogo} />
          <Image source={require('@/assets/images/profile.png')} style={styles.profileImage} />
        </View>
      }
    >
      {/* Scrollable Content */}
      <ScrollView style={styles.content}>{renderContent()}</ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableCell: {
    fontSize: 14,
  },
  headerImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    borderRadius: 50,
    marginLeft: 130,
  },
});