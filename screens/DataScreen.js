import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import { Users } from '../assets/processed-data'

const DataScreen = props => {
    return <View style={styles.screen}>
        <FlatList data = {Users} />
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default DataScreen;