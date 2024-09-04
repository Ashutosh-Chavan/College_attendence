import { Image, StyleSheet, View} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';


export default function settings() {
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
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
});
