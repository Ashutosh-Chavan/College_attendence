import { Image, View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FCE38A', dark: '#e7e7b4' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello Hemant Bhatt</ThemedText>
        <HelloWave />
      </ThemedView>

      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to the Class Advisor Page</Text>
        <View style={styles.rowContainer}>
          <View style={[styles.row, styles.firstRow]}>
            <Text style={styles.cell}>SE A</Text>
            <Button title="Go to SE A" onPress={() => alert('Navigate to SE A page')} />
          </View>
          <View style={[styles.row, styles.secondRow]}>
            <Text style={styles.cell}>SE B</Text>
            <Button
              title="Go to SE B"
              onPress={() => alert('Navigate to SE B page')} // Placeholder for navigation action
            />
          </View>
          <View style={[styles.row, styles.firstRow]}>
            <Text style={styles.cell}>SE C</Text>
            <Button
              title="Go to SE C"
              onPress={() => alert('Navigate to SE C page')} // Placeholder for navigation action
            />
          </View>
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
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold', // Make text bold
  },
  rowContainer: {
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    padding: 10,
  },
  firstRow: {
    backgroundColor: '#f9f9f9', // Light gray background for alternate rows
  },
  secondRow: {
    backgroundColor: '#fff', // White background for alternate rows
  },
  cell: {
    fontSize: 18,
    flex: 1,
  },
  reactLogo: {
    height: 40,
    width: 190,
    bottom: 20,
    left: 20,
    position: 'absolute',
  },
});