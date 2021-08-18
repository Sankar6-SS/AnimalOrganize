import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ModalComponent from '../../component/ModalComponent';
import TextInputComponent from '../../component/TextInput';
import CustomButton from '../../component/CustomButton';
import {
  setListCats,
  removeCatDetails,
  setUpdateCats,
} from '../../redux/actions';
import CatList from '../CatList';
import styles from '../style';
import {COLORS, CONSTATNS} from '../../Constants';
import {
  CheckMarkIcon,
  CancelIcon,
} from '../../assets/IconComponent/SvgThemeIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomeScreen = () => {
  const allCatList = useSelector(state => state.catReducer);
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [about, setAbout] = useState('');
  const [selectedCatData, setSelectedCatData] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (!selectedCatData) return;
    setName(selectedCatData.name);
    setBreed(selectedCatData.breed);
    setAbout(selectedCatData.about);
  }, [selectedCatData]);

  const resetData = () => {
    setName('');
    setAbout('');
    setBreed('');
  };

  const handleOnSave = () => {
    const catDetails = {
      id: isEdit ? selectedCatData.id : Math.random(),
      name: name,
      breed: breed,
      about: about,
    };

    dispatch(isEdit ? setUpdateCats(catDetails) : setListCats(catDetails));
    setIsEdit(false);
    setOpenModal(false);
    resetData();
  };

  const bodyComponent = () => {
    return (
      <SafeAreaView style={styles.modalBodyStyle}>
        <Text style={styles.modalHeaderTextStyle}>
          {isEdit ? CONSTATNS.UPDATE_DETAILS : CONSTATNS.ADD_NEW}
        </Text>
        <View>
          <TextInputComponent
            style={styles.modalTextInputStyle}
            value={name}
            placeholder={CONSTATNS.PLEASE_ENTER_YOUR_CAT_NAME}
            onChangeText={setName}
          />
          <TextInputComponent
            style={styles.modalTextInputStyle}
            value={breed}
            placeholder={CONSTATNS.PLEASE_ENTER_YOUR_CAT_BREED}
            onChangeText={setBreed}
          />
          <TextInputComponent
            isMultiline={true}
            numberOfLines={10}
            style={[styles.modalTextInputStyle, {height: 100}]}
            value={about}
            placeholder={CONSTATNS.PLEASE_DESCRIPE_ABOUT_THIS_CAT}
            onChangeText={setAbout}
          />
        </View>
        <View style={[styles.bottomViewStyle]}>
          <CustomButton
            renderIconComponent={() => (
              <CheckMarkIcon
                size={50}
                color={!(name && breed) ? COLORS.LIGHT_GRAY : COLORS.SECONDARY}
              />
            )}
            style={styles.customButtonStyle}
            imageStyle={styles.customButtonImageStyle}
            isDisabled={!(name && breed)}
            onPress={() => {
              resetData();
              isEdit ? setIsEdit(false) : setOpenModal(false);
              handleOnSave(name, breed, about);
            }}
          />
          <CustomButton
            renderIconComponent={() => (
              <CancelIcon size={50} color={COLORS.PRIMARY} />
            )}
            style={{
              ...styles.customButtonStyle,
              backgroundColor: COLORS.SECONDARY,
            }}
            imageStyle={[styles.customButtonImageStyle]}
            onPress={() => {
              setOpenModal(false);
              isEdit ? '' : resetData();
            }}
          />
        </View>
      </SafeAreaView>
    );
  };

  const handleOnRemove = selectedIndex =>
    dispatch(removeCatDetails(selectedIndex));

  return (
    <SafeAreaView style={styles.mainContainer}>
      {!openModal1 && openModal && (
        <ModalComponent
          isOpen={openModal}
          bodyComponent={bodyComponent}
          height={height / 2}
          width={width}
          setOpenModal={setOpenModal}
          resetData={resetData}
          isEdit={isEdit}
        />
      )}
      {!openModal1 && (
        <CatList
          list={allCatList}
          closeButton={setOpenModal1}
          removeCatDetail={handleOnRemove}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          setSelectedCatData={setSelectedCatData}
          setOpenModal={setOpenModal}
        />
      )}
      <TouchableOpacity
        style={styles.addButtonStyle}
        onPress={() => {
          resetData();
          setOpenModal(true);
          setIsEdit(false);
        }}>
        <Text style={styles.addButtonTextStyle}>{CONSTATNS.ADD_NEW}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default HomeScreen;
