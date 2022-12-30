import { Avatar, Button, Flex, HStack, Text } from 'native-base';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ILanguageItem } from './interface';
import { styles } from './styles';

export const LangugeItem = ({ languageId, type, name, onCall, onCallVideo, disable }: ILanguageItem) => (
  <Flex key={languageId} flexDirection="row" style={styles.container}>
    <HStack flex={1} style={styles.title} space={2} key={name} alignItems="center">
      <Avatar size="sm">{type && type.slice(0, 2)}</Avatar>
      <Text style={styles.text}>{name}</Text>
    </HStack>
    <Flex flexDirection="row">
      <Button onPress={onCall}>
        <FontAwesome5 size={20} color={disable ? '#C4C4C4' : '#FF5050'} name={'phone-alt'} />
      </Button>
      <Button onPress={onCallVideo}>
        <FontAwesome5 size={20} color={disable ? '#C4C4C4' : '#FF5050'} name={'video'} />
      </Button>
    </Flex>
  </Flex>
);
