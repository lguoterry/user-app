import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

const AnalyzerScreen = props => {
    return (<View style={styles.screen}>
        <Button title='Data' onPress={()=>props.navigation.navigate('Data')} />
    </View>);
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default AnalyzerScreen;