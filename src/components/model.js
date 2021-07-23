import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ModalTester(props) {
  const [isModalVisible, setModalVisible] = useState(false);

  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [projectName, setProjectName] = useState();
  const [description, setDescription] = useState();
  const [priority, setPriority] = useState();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  console.log(title, id, projectName, description, priority);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          borderRadius: 10,
          //   justifyContent: 'flex-end',
          paddingHorizontal: 10,
          paddingVertical: 20,
          alignItems: 'flex-end',
        }}>
        <View style={{width: 150}}>
          <Button title="+ Create Issue" onPress={toggleModal} />
        </View>
      </View>
      <Modal isVisible={isModalVisible}>
        <ScrollView>
          {/* <Modal isVisible={isModalVisible}> */}
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              height: windowHeight,
              padding: 10,
              borderRadius: 10,
            }}>
            {/* <Text>Hello!</Text> */}

            <View>
              <Text style={styles.modelContainerText}>Id</Text>
              <TextInput
                onChangeText={text => setId(text)}
                style={styles.modelTextInput}
                placeholder="Id"
              />
            </View>

            <View>
              <Text style={styles.modelContainerText}>Title</Text>
              <TextInput
                onChangeText={text => setTitle(text)}
                style={styles.modelTextInput}
                placeholder="Title"
              />
            </View>

            <View>
              <Text style={styles.modelContainerText}>Project Name</Text>
              <TextInput
                onChangeText={text => setProjectName(text)}
                style={styles.modelTextInput}
                placeholder="Project Name"
              />
            </View>

            <View>
              <Text style={styles.modelContainerText}>Description</Text>
              <TextInput
                onChangeText={text => setDescription(text)}
                style={styles.modelTextInput}
                placeholder="Description"
              />
            </View>

            <View>
              <Text style={styles.modelContainerText}>priority</Text>
              <TextInput
                onChangeText={text => setPriority(text)}
                style={styles.modelTextInput}
                placeholder="priority"
              />
            </View>

            <View style={{marginTop: 20}}>
              <Button
                title="Submit"
                onPress={() => {
                  props.addIssus({
                    title: title,
                    id: id,
                    projectName: projectName,
                    description: description,
                    priority: priority,
                  });
                  toggleModal();
                }}
              />
            </View>

            <View style={{marginTop: 20}}>
              <Button title="Hide" onPress={toggleModal} />
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modelContainerText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
  },
  modelTextInput: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
});

export default ModalTester;
