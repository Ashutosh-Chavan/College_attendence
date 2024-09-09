import { Image, View, Text, StyleSheet } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';




export default function HomeScreen() {
  const avgColumn = <Text style={styles.tableCell}>New York</Text>;

  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#FCE38A', dark: '#e7e7b4' }}
    headerImage={
      <View style={styles.headerImagesContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
        <Image
          source={require('@/assets/images/profile.png')} // Add your profile image here
          style={styles.profileImage}
        />
      </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello Hemant Bhatt</ThemedText>
        <HelloWave />
      </ThemedView>

      <View style={styles.tableContainer}>
        {/* Table Header */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.headerCell]}>SEMESTER</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>PERCENTAGE</Text>
          {/* <Text style={[styles.tableCell, styles.headerCell]}>AVERAGE</Text> */}
        </View>

        {/* Table Rows */}
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Sem 1</Text>
          <Text style={styles.tableCell}>7.5</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Sem 2</Text>
          <Text style={styles.tableCell}>7.5</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Sem 3</Text>
          <Text style={styles.tableCell}>7.5</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Sem 4</Text>
          <Text style={styles.tableCell}>7.5</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Sem 5</Text>
          <Text style={styles.tableCell}>7.5</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Sem 6</Text>
          <Text style={styles.tableCell}>7.5</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Sem 7</Text>
          <Text style={styles.tableCell}>7.5</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Sem 8</Text>
          <Text style={styles.tableCell}>7.5</Text>
        </View>

        {/* Last Row with Colspan */}
        <View style={styles.tableRow}>
          <Text style={[styles.tableCell, styles.colspanCell]}>
            Final Average: 7.5
          </Text>
        </View>
      </View>
      <View style={styles.Imgcontainer}>
      <View >
        <Text style={styles.ImgText}>Certification of Your Student</Text>
        <Image
          source={require('@/assets/images/Certificate1.jpg')} // Path to your image
          style={styles.image}
        />
        <Image
          source={require('@/assets/images/Certificate2.jpg')} // Path to your image
          style={styles.image}
        />
      </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop:20,
    marginLeft:20
  },
  headerImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  reactLogo: {
    height: 40,
    width: 190,
    marginTop:40,
  },
  profileImage: {
    height: 45,
    width: 45,
    marginTop:40,
    borderRadius: 50, // Make the image circular
    marginLeft: 130, // Add space between logo and profile image
  },
  Imgcontainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFC5'
  },
  ImgText: {
    fontSize: 25,
  },
  image: {
    marginLeft: 60,
    width: 200, // Specify width and height
    height: 200,
    resizeMode: 'contain', // You can use 'cover', 'stretch', 'contain', etc.
  },
  tableContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 12,
    backgroundColor: '#f9f9f9',
    marginBottom: 2,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
  },
  headerCell: {
    fontWeight: 'bold',
    backgroundColor: '#fdcb6e',
    color: '#000',
    fontSize: 18,
  },
  colspanCell: {
    flex: 3, // Flex value should match the number of columns (3 in this case)
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#fdcb6e',
    padding: 12,
    fontSize: 18,
    color: '#2d3436',
  },
});