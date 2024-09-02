import { Image, StyleSheet} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';


export default function Calendar() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FCE38A', dark: '#e7e7b4' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.jpg')}
          style={styles.reactLogo}
        />
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
  reactLogo: {
    height: 40,
    width: 190,
    bottom: 20,
    left: 20,
    position: 'absolute',
  },
});
