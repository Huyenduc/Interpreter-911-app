import { Flex, Image, ScrollView, Stack } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import LanguageContainer from '../../containers/LanguageContainer/LanguageContainer';
import TopLanguageContainer from '../../containers/TopLanguageContainer/TopLanguageContainer';
import { styles } from './styles';

const LanguageScreen = () => {
  return (
    <Stack style={styles.container}>
      <Flex direction="row" alignItems="center" justifyContent="center" style={styles.banner}>
        <Image style={styles.image} source={require('../../../assets/logo-resize.png')} />
      </Flex>
      <ScrollView style={styles.languageContainer}>
        <Stack>
          <Text style={styles.title}>Top 5</Text>
          <TopLanguageContainer />
        </Stack>
        <Stack>
          <Text style={styles.title}>Most Common</Text>
          <LanguageContainer />
        </Stack>
      </ScrollView>
    </Stack>
  );
};

export default LanguageScreen;
