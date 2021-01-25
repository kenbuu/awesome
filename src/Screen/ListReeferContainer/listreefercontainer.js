
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    FlatHeader,
    Icon,
    Group,
    FlatList,
    ListItem
} from 'react-native';

import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/header.js';

const screen = Dimensions.get('window');
const dummyArray = [
    { id: '1', value: 'A', first:'A1', last: 'A2' },
    { id: '2', value: 'B', first:'A1', last: 'A2' },
    { id: '3', value: 'C', first:'A1', last: 'A2' },
    { id: '4', value: 'D', first:'A1', last: 'A2' },
    { id: '5', value: 'E', first:'A1', last: 'A2' },
    { id: '6', value: 'F', first:'A1', last: 'A2' },
    { id: '7', value: 'G', first:'A1', last: 'A2' },
    { id: '8', value: 'H', first:'A1', last: 'A2' },
    { id: '9', value: 'I', first:'A1', last: 'A2' },
    { id: '10', value: 'J', first:'A1', last: 'A2' },
    // { id: '11', value: 'K' },
    // { id: '12', value: 'L' },
    // { id: '13', value: 'M' },
    // { id: '14', value: 'N' },
    // { id: '15', value: 'O' },
    // { id: '16', value: 'P' },
    // { id: '17', value: 'Q' },
    // { id: '18', value: 'R' },
    // { id: '19', value: 'S' },
    // { id: '20', value: 'T' },
    // { id: '21', value: 'U' },
    // { id: '22', value: 'V' },
    // { id: '23', value: 'W' },
    // { id: '24', value: 'X' },
    // { id: '25', value: 'Y' },
    // { id: '26', value: 'Z' },
];

const App = (props) => {
    const [listItems, setListItems] = useState(dummyArray);

    const ItemView = ({ item }) => {
        return (
            // FlatList Item
            <View>
                <Text
                    style={styles.item}
                    onPress={() => getItem(item)}>
                    {item.value}
                </Text>
            </View>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // FlatList Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8'
                }}
            />
        );
    };

    const getItem = (item) => {
        //Function for click on an item
        alert('Id: ' + item.id + ' Value: ' + item.value);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header headerText={'Danh sách chức năng'} />
            <View style={styles.container}>
                <FlatList
                    data={listItems}
                    //data defined in constructor
                    ItemSeparatorComponent={ItemSeparatorView}
                    //Item Separator View
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    container: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default App;
