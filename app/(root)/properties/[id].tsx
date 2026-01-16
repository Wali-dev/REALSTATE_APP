import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const Properties = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>Properties: {id}</Text>
        </View>
    )
}

export default Properties