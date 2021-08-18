import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import CardComponent from '../component/CardComponent';
import TextInputComponent from '../component/TextInput';
import {SearchIcon} from '../assets/IconComponent/SvgThemeIcons';
import styles from './style';
import {CONSTATNS} from '../Constants';

const CatList = ({
  list = [],
  removeCatDetail,
  setIsEdit,
  setSelectedCatData,
  setOpenModal,
}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [search, setSearch] = useState('');
  const [finalList, setFinalList] = useState([]);
  useEffect(() => {
    setFinalList(list);
  }, [list]);
  const searchName = name => {
    let searchName = name.toLowerCase();
    let converstion = list;
    let filteredConverstion = converstion.filter(item => {
      return item.name.toLowerCase().match(searchName);
    });
    setFinalList(filteredConverstion);
    if (!searchName || searchName === '') {
      setFinalList(list);
    }
  };

  return (
    <SafeAreaView
      style={styles.catListMainContainerStyle}
      keyboardShouldPersistTaps="handled">
      <View style={styles.catListSubContainerStyle}>
        <SearchIcon height={20} width={20} />
        <TextInputComponent
          style={styles.catListTextInputStyle}
          value={search}
          placeholder={CONSTATNS.SEARCH_YOUR_CAT}
          onChangeText={text => {
            setSearch(text);
            searchName(text);
          }}
        />
      </View>

      <FlatList
        data={finalList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{minWidth: '100%'}}
        renderItem={({item, index}) => (
          <CardComponent
            name={item.name}
            setIsEdit={setIsEdit}
            removeCatDetail={removeCatDetail}
            setSelectedCatData={setSelectedCatData}
            item={item}
            index={index}
            expandedIndex={expandedIndex}
            onExpandCollabse={setExpandedIndex}
            setOpenModal={setOpenModal}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default CatList;
