
import React from 'react';
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
    TextInput, FlatHeader, Icon, Group
} from 'react-native';

import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from '../../components/header.js';

const screen = Dimensions.get('window');

const App = (props) => {
    return (
        <View>
            <Header headerText={'Danh sách chức năng'} />
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 25, marginRight: 10, marginTop: 20, height:"50%" }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "wheat",
                        width: "45%",
                        height: "45%",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 20,
                        borderRadius: 4,
                        paddingVertical: 12
                    }}
                    onPress={() => {
                        props.navigation.navigate("ListReeferContainer")
                    }}>
                    <Text
                    style={{textAlign: "center"}}
                    >Quản lý cont lạnh</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "wheat",
                        width: "45%",
                        height: "45%",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 4,
                        paddingVertical: 12
                    }}
                    onPress={() => {
                        props.navigation.navigate("ListReeferContainer")
                    }}>
                    <Text
                    style={{textAlign: "center"}}
                    >Quản lý cont sữa chữa
                    </Text>
                </TouchableOpacity>
                
            </View>
        </View>
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
});

export default App;
