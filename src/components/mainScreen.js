import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import Modal from './model';

function MainScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const [items, setItems] = useState([]);

  const addIssus = itemObject => {
    setItems([...items, itemObject]);
  };

  // const getRemovehandle = id => {
  //   const filterTodoList = items.filter((list, listIndex) => listIndex !== id);
  //   setItems(filterTodoList);
  // };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({item}) => (
    <View
      style={{
        // borderWidth: 2,
        padding: 15,
        margin: 10,
        borderRadius: 16,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        // backgroundColor: '#fcda7c',
      }}>
      <View style={styles.flatView}>
        <Text style={{fontSize: 20}}>Id : </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.id}</Text>
      </View>
      <View style={styles.flatView}>
        <Text style={{fontSize: 22}}>Title : </Text>
        <Text style={{fontSize: 22, fontWeight: 'bold'}}>{item.title}</Text>
      </View>

      <View style={styles.flatView}>
        <Text style={{fontSize: 18}}>Project Name : </Text>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          {item.projectName}
        </Text>
      </View>

      <View style={styles.flatView}>
        <Text style={{fontSize: 16}}>Description : </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {item.description}
        </Text>
      </View>

      <View style={styles.flatView}>
        <Text style={{fontSize: 16}}>Prority : </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.prority}</Text>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <Modal addIssus={addIssus} />

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatView: {
    flexDirection: 'row',
  },
});

export default MainScreen;
