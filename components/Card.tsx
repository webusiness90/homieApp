import { StyleSheet, View, Text } from "react-native";

type values = {
    value : string;
}

export default function Card(props:values){
    return (
        <View style={styles.container}>
            <Text>{props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: 128,
        width: 300,
        margin: '5%'
    }
});