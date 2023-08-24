import React from "react";
import {View, Text, Button} from 'react-native';
export default function List({navigation}){
    return(
        <View>
            <Text>
                List Page
            </Text>
            <Button title="Navigate" onPress={()=> navigation.navigate("Description")}/>
        </View>
    )
}