import {View, Text, StyleSheet} from 'react-native';

export default function Footer(){
    return (
        <View style={styles.footer}>
            <Text>Powered by WeBusiness</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer:{
        position:'absolute',
        bottom:10
    }
});