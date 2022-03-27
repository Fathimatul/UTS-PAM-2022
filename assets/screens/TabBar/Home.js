import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
// import {Select} from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenIndex: 0,
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.sav}>
        <View style={styles.container}>
          <View style={styles.containerBox}>
            <Text style={styles.kapalzy}>Kapalzy</Text>
          </View>
          <View>
            <View style={styles.pilihan}>
              <Icon name="ship" size={30}></Icon>
              <TouchableOpacity style={styles.buttonPil}>
                <Text>Pilih Pelabuhan Tujuan</Text>
              </TouchableOpacity>
              <Picker
                selectedValue={this.state.PAwal}
                style={styles.pickerStyle}
                // mode={'dialog'}
                onValueChange={(itemValue, itemPosition) =>
                  this.setState({PAwal: itemValue, choosenIndex: itemPosition})
                }>
                <Picker.Item label="Bakauheni" value="Bakauheni" />
                <Picker.Item label="Merak" value="Merak" />
                <Picker.Item label="Kalimas" value="Kalimas" />
                <Picker.Item label="Ketapang" value="Ketapang" />
                <Picker.Item label="Kemal" value="Kemal" />
              </Picker>
            </View>
            <View style={styles.pilihan}>
              <Icon name="ship" size={30}></Icon>
              <TouchableOpacity style={styles.buttonPil}>
                <Text>Pilih Pelabuhan Tujuan</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pilihan}>
              <Icon name="chair" size={43}></Icon>
              <TouchableOpacity style={styles.buttonPil}>
                <Text>Pilih Layanan</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pilihan}>
              <Icon name="calendar" size={43}></Icon>
              <TouchableOpacity style={styles.buttonPil}>
                <Text>Pilih Tanggal Masuk</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pilihan}>
              <View style={{left: 5}}>
                <Icon name="clock" size={27}></Icon>
              </View>
              <View style={{left: 10}}>
                <TouchableOpacity style={styles.buttonPil}>
                  <Text>Pilih Jam Masuk</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttonDown}>
              <Text style={styles.textdown1}>Dewasa</Text>
              <Text style={styles.textdown2}>1 Orang</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.buattiket}>
                <Text style={styles.textdown3}>Buat Tiket</Text>
                <Icon name="search" size={20}></Icon>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  sav: {
    flex: 1,
    backgroundColor: '#d2d2d2d2',
  },

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginVertical: 50,
    marginBottom: 120,
    marginHorizontal: 15,
    borderRadius: 5,
    elevation: 10,
  },

  containerBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPil: {
    width: 230,
    height: 40,
    backgroundColor: '#d2d2d2',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 15,
    marginHorizontal: 12,
  },
  buttonDown: {
    width: 305,
    height: 40,
    backgroundColor: '#d2d2d2',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 15,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  kapalzy: {
    paddingVertical: 10,
    fontSize: 25,
    color: 'blue',
    fontWeight: 'bold',
  },
  pilihan: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    left: 15,
  },
  textdown1: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textdown2: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
  buattiket: {
    width: 305,
    height: 40,
    backgroundColor: '#FFB72B',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 15,
    marginHorizontal: 12,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textdown3: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'right',
  },
  pickerStyle: {
    height: 40,
    width: 230,
  },
});
