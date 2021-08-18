import React from 'react';
import {SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';
import {COLORS} from '../Constants';
import styles from '../Screens/style';

const ModalComponent = ({
  isOpen,
  bodyComponent,
  height,
  setOpenModal,
  resetData,
  isEdit,
}) => {
  return (
    <Modal
      backdropColor={COLORS.SECONDARY_GRAY}
      onBackdropPress={() => {
        setOpenModal(false), isEdit ? '' : resetData();
      }}
      propagateSwipe={true}
      style={{alignSelf: 'center'}}
      isVisible={isOpen}>
      <SafeAreaView
        style={[styles.modalComponentMainComponent, {height: height}]}>
        {bodyComponent && bodyComponent()}
      </SafeAreaView>
    </Modal>
  );
};
export default ModalComponent;
