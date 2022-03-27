import React, {Component} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class App extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textStyle2}>Menu</Text>
              <Pressable
                style={[styles.buttonDalam]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Icon name="search" size={25} style={styles.iconStyle}></Icon>
                <Text style={styles.modalText}>Cek Pemesanan</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonDalam]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Icon name="laptop" size={25} style={styles.iconStyle}></Icon>
                <Text style={styles.modalText}>Data Profil</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonDalam]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Icon name="laptop" size={25} style={styles.iconStyle}></Icon>
                <Text style={styles.modalText}>Hubungi Kami</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonDalam]}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Icon name="list" size={25} style={styles.iconStyle}></Icon>
                <Text style={styles.modalText}>Riwayat Order</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}>
          <Text style={styles.textStyle}>Pilih Menu Lainnya</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 300,
    height: 400,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonDalam: {
    borderRadius: 10,
    padding: 10,
    elevation: 1,
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#105263',
    alignContent: 'center',
    paddingHorizontal: 5,
  },
  buttonOpen: {
    backgroundColor: '#105263',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle2: {
    color: 'Black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
  },
  iconStyle: {
    color: '#ffffff',
    paddingHorizontal: 5,
  },
});

export default App;
