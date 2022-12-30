import { LangugeItem } from '@components/LanguageItem/LangugeItem';
import { ILanguageItem } from '@components/LanguageItem/interface';
import { FlatList } from 'native-base';
import React from 'react';
import { data } from './data';

const LanguageContainer = () => {
  const datas = data;
  console.log(datas);

  const onCall = React.useCallback(() => {}, []);

  const onCallVideo = React.useCallback(() => {}, []);

  const renderItem = ({ item }: { item: ILanguageItem }) =>
    item && (
      <LangugeItem
        languageId={item.languageId}
        type={item.type}
        name={item.name}
        onCall={onCall}
        onCallVideo={onCallVideo}
      />
    );

  return <FlatList data={datas} renderItem={renderItem} />;
};

export default LanguageContainer;
