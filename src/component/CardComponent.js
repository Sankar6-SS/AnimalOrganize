import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import CatDefaultImage from '../assets/CatDefault.png';
import {EditIcon, DeleteIcon} from '../assets/IconComponent/SvgThemeIcons';
import styles from '../Screens/style';
import {COLORS} from '../Constants';

const CardComponent = ({
  setIsEdit,
  removeCatDetail,
  setSelectedCatData,
  expandedIndex,
  onExpandCollabse,
  setOpenModal,
  item,
  index,
}) => {
  const [about, setAbout] = useState(item.about);
  const [names, setNames] = useState(item.name);
  const [breed, setBreed] = useState(item.breed);
  const isContentExpanded = expandedIndex === index;

  useEffect(() => {
    setResetData();
  }, [item]);

  const setResetData = () => {
    setNames(item.name);
    setAbout(item.about);
    setBreed(item.breed);
  };

  const renderDetails = () => {
    return (
      <View
        style={[
          styles.cardComponentSubStyle,
          {
            backgroundColor: isContentExpanded
              ? COLORS.PRIMARY
              : COLORS.SECONDARY_LIGHT,
          },
        ]}>
        {isContentExpanded && (
          <>
            <Image
              source={CatDefaultImage}
              style={[
                styles.cardCompontentImageStyle,
                {
                  borderBottomLeftRadius: isContentExpanded ? 0 : 10,
                  borderBottomRightRadius: isContentExpanded ? 0 : 10,
                  height: isContentExpanded ? 150 : 100,
                },
              ]}
            />
          </>
        )}
        <View style={styles.cardComponentButtonStyle}>
          <TouchableOpacity
            style={styles.cardButtonStyle}
            onPress={() => {
              setOpenModal(true);
              setSelectedCatData(item);
              setIsEdit(true);
            }}>
            <EditIcon size={14} color={COLORS.PRIMARY} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardButtonStyle}
            onPress={() => {
              removeCatDetail(index);
            }}>
            <DeleteIcon size={14} color={COLORS.PRIMARY} />
          </TouchableOpacity>
        </View>
        <View style={{padding: 10}}>
          <Text
            numberOfLines={1}
            style={[
              styles.cardTextStyle3,
              {
                color: isContentExpanded ? COLORS.SECONDARY : COLORS.PRIMARY,
              },
            ]}>
            {names}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              styles.cardTextStyle2,
              {color: isContentExpanded ? COLORS.SECONDARY : COLORS.PRIMARY},
            ]}>
            {breed}
          </Text>
          <Text
            numberOfLines={isContentExpanded ? null : 2}
            style={[
              styles.cardTextStyle,
              {color: isContentExpanded ? COLORS.SECONDARY : COLORS.PRIMARY},
            ]}>
            {about}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.cardCompontentStyle}>
      <TouchableOpacity
        style={{width: '100%'}}
        onPress={() => {
          onExpandCollabse(isContentExpanded ? null : index);
        }}>
        {!isContentExpanded && (
          <ImageBackground
            source={CatDefaultImage}
            style={{flex: 1, width: '100%', height: 115, borderRadius: 10}}>
            {renderDetails()}
          </ImageBackground>
        )}
        {isContentExpanded && renderDetails()}
      </TouchableOpacity>
    </View>
  );
};
export default CardComponent;
